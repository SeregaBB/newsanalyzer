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



const formValidator = new FormValidator(FORM);
const api = new NewsApi({ 'apiKey': API_KEY });
const search = new Search(FORM);
const loader = new Loader(LOADER);
const searchInput = new SearchInput(FORM);
const resultContainer = new SectionShower(RESULTS);
const noResultContainer = new SectionShower(NO_RESULT);
let cardsArray = [];





searchInput.addEventListener('submit', (event) => {
    event.preventDefault();

    resultContainer.clearContainer();

    if (formValidator.validate()) {
        loader.showBlock();
        api.getNews(search.getVal())
            .then((res) => {
                if (res.totalResults) {
                    localStorage.setItem('query', search.getVal());
                    localStorage.setItem('result', JSON.stringify(res.articles));
                    //noResultContainer.hideContainer();
                    resultContainer.showContainer();

                    createCardsDom(res.articles);
                    return;
                }
                throw new Error('нет новостей');
            })
            .then(() => {
                loader.hideBlock();
            })
            .finally(() => {
                loader.hideBlock();
            })
            .catch((err) => {

                //напоминалка. сюда впилить проверку что за ошибка, если просто ничо не найдено - показать no-result, 
                //если что-то с апи или интернетом, показать ошибку (кастомную)

                resultContainer.hideContainer();
                noResultContainer.showContainer();
            })
    }
})








function createCardsDom(data) {
    for (const item in data) {
        const card = new NewsCard(data[item]).createCard();
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