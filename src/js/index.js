import '../pages/index.css';
import FormValidator from './utils/FormValidator';
import { form, api_key, results } from './constants/constants';
import '../js/modules/NewsApi';
import NewsApi from '../js/modules/NewsApi';
import '../js/components/Search';
import Search from '../js/components/Search';
import NewsCard from '../js/components/NewsCard';

const formValidator = new FormValidator(form);
const api = new NewsApi({ 'apiKey': api_key });
const search = new Search(form);
let cardsArray = [];








formValidator.addEventListener('submit', (event) => {
    event.preventDefault();
    if (formValidator.validate()) {
        api.getNews(search.getVal())
            .then((res) => {
                localStorage.setItem('result', JSON.stringify(res.articles));
                createCardsDom(res.articles);
            });
    }
});



function createCardsDom(data) {
    for (let item in data) {
        console.log(data[item]);
        let card = new NewsCard(data[item]).createCard();
        cardsArray.push(card);
    }
    appendCardsToDom();
}

function appendCardsToDom() {
    if (cardsArray.length) {
        for (let i = 0; i < 3; i++) {
            if (cardsArray[i]) {
                results.appendChild(cardsArray[i]);
                cardsArray = cardsArray.slice(1);
            }
        }
    }

}


document.querySelector('.result__more').addEventListener('click', () => {
    appendCardsToDom();
});