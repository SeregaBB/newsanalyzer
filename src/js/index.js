import '../pages/index.css';
import FormValidator from './utils/FormValidator';
import { FORM, API_KEY, RESULTS, MORE_BUTTON, LOADER, NO_RESULT, CARDS_TO_LOAD, SEARCH_INPUT, API_ERROR_ELEM } from './constants/constants';
import '../js/modules/NewsApi';
import NewsApi from '../js/modules/NewsApi';
import '../js/components/Search';
import Search from '../js/components/Search';
import NewsCard from '../js/components/NewsCard';
import Loader from '../js/components/Loader';
import SearchInput from './components/SearchInput';
import SectionShower from './utils/SectionShower';
import NewsCardList from './components/NewsCardList';
import FormDisabler from './utils/FormDisabler';
import BaseComponent from './components/BaseComponent';
import ApiError from './utils/ApiError';



const formDisabler = new FormDisabler(FORM);
const formValidator = new FormValidator(FORM);
const api = new NewsApi({ 'apiKey': API_KEY });
const search = new Search(FORM);
const loader = new Loader(LOADER);
const searchInput = new SearchInput(FORM);
const noResultContainer = new SectionShower(NO_RESULT);
const newsCardList = new NewsCardList(RESULTS, MORE_BUTTON)
const hasSavedData = localStorage.getItem('result');
const searchInputBSComponent = new BaseComponent(FORM, { submit: submitHandler });
const moreButtonBSComponent = new BaseComponent(MORE_BUTTON, { click: newsCardList.createDom });
const apiError = new ApiError(API_ERROR_ELEM);


searchInput.addEventListener('submit', submitHandler);
MORE_BUTTON.addEventListener('click', newsCardList.createDom);
if (hasSavedData) {
    let promise = new Promise((resolve) => {
            SEARCH_INPUT.value = localStorage.getItem('query');
            loader.showBlock();
            createCardsDom(JSON.parse(hasSavedData));
            resolve();
        })
        .then(() => {
            loader.hideBlock();
            newsCardList.showContainer();
        })
}








function submitHandler(event) {
    event.preventDefault();
    formDisabler.disableForm();
    newsCardList.clearContainer();

    if (formValidator.validate()) {
        loader.showBlock();
        api.getNews(search.getVal())
            .then((res) => {
                if (res.totalResults > 0) {
                    localStorage.setItem('query', search.getVal());
                    localStorage.setItem('result', JSON.stringify(res.articles));
                    noResultContainer.hideContainer();
                    newsCardList.showContainer();

                    createCardsDom(res.articles);
                    return;
                }
                throw new Error('нет новостей');
            })
            .then(() => {
                formDisabler.enableForm();
                loader.hideBlock();
            })
            .finally(() => {
                loader.hideBlock();
                formDisabler.enableForm();
            })
            .catch((err) => {


                if (err == 'Error: нет новостей') {
                    newsCardList.hideContainer();
                    noResultContainer.showContainer();
                    return;
                }
                newsCardList.hideContainer();
                noResultContainer.showContainer();
                apiError.showError(`Что-то пошло не так (${err})`);


            })
    }
}


function createCardsDom(data) {
    for (const item of data) {
        const card = new NewsCard(item).createCard();
        newsCardList.addCardToStorage(card);
    }
    newsCardList.createDom();
}