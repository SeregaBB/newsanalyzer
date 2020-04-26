import '../pages/index.css';
import FormValidator from './utils/FormValidator';
import { FORM, API_KEY, RESULTS, MORE_BUTTON, LOADER, NO_RESULT } from './constants/constants';
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

    localStorage.setItem('query', search.getVal());

    resultContainer._clearContainer();


    if (formValidator.validate()) {
        loader._showBlock();
        api.getNews(search.getVal())
            .then((res) => {
                if (res.totalResults) {

                    localStorage.setItem('result', JSON.stringify(res.articles));
                    noResultContainer._hideContainer();
                    resultContainer._showContainer();

                    createCardsDom(res.articles);
                    return;
                }
                throw new Error('нет новостей');
            })
            .then(() => {
                loader._hideBlock();
            })
            .finally(() => {
                loader._hideBlock();
            })
            .catch((err) => {
                resultContainer._hideContainer();
                noResultContainer._showContainer();
            })
    }
})








function createCardsDom(data) {
    for (let item in data) {
        let card = new NewsCard(data[item]).createCard();
        cardsArray.push(card);
    }
    appendCardsToDom();
}

function appendCardsToDom() {
    if (cardsArray.length) {
        for (let i = 0; i < 3; i++) {
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