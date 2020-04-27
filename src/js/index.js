import '../pages/index.css';
import FormValidator from './utils/FormValidator';
import { FORM, API_KEY, RESULTS, MORE_BUTTON, LOADER, NO_RESULT, CARDS_TO_LOAD } from './constants/constants';
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


const formDisabler = new FormDisabler(FORM);
const formValidator = new FormValidator(FORM);
const api = new NewsApi({ 'apiKey': API_KEY });
const search = new Search(FORM);
const loader = new Loader(LOADER);
const searchInput = new SearchInput(FORM);
const resultContainer = new SectionShower(RESULTS);
const noResultContainer = new SectionShower(NO_RESULT);
const newsCardList = new NewsCardList(RESULTS, MORE_BUTTON)
const hasSavedData = localStorage.getItem('result');
let cardsArray = [];



if (hasSavedData) {
    let promise = new Promise((resolve) => {

            loader.showBlock();
            createCardsDom(JSON.parse(hasSavedData));
            resolve();
        })
        .then(() => {
            loader.hideBlock();
            resultContainer.showContainer();
        })
}



searchInput.addEventListener('submit', submitHandler);





function submitHandler(event) {
    event.preventDefault();
    formDisabler.disableForm();
    resultContainer.clearContainer();

    if (formValidator.validate()) {
        loader.showBlock();
        api.getNews(search.getVal())
            .then((res) => {
                if (res.totalResults) {
                    localStorage.setItem('query', search.getVal());
                    localStorage.setItem('result', JSON.stringify(res.articles));
                    noResultContainer.hideContainer();
                    resultContainer.showContainer();

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
            })
            .catch((err) => {


                if (err == 'Error: нет новостей') {
                    resultContainer.hideContainer();
                    noResultContainer.showContainer();
                    return;
                }
                console.log(err);

            })
    }
}


function createCardsDom(data) {
    for (const item of data) {
        const card = new NewsCard(item).createCard();
        cardsArray.push(card);
    }
    appendCardsToDom();
}

function appendCardsToDom() {
    if (cardsArray.length) {
        for (let i = 0; i < CARDS_TO_LOAD; i++) {
            if (cardsArray[i]) {
                RESULTS.appendChild(cardsArray[i]);
                cardsArray = cardsArray.slice(1);

            } else {
                MORE_BUTTON.style.display = 'none';
            }
        }
    }

}


MORE_BUTTON.addEventListener('click', () => {
    appendCardsToDom();
});