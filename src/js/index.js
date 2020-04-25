import '../pages/index.css';
import FormValidator from './utils/FormValidator';
import { FORM, API_KEY, RESULTS, MORE_BUTTON, LOADER } from './constants/constants';
import '../js/modules/NewsApi';
import NewsApi from '../js/modules/NewsApi';
import '../js/components/Search';
import Search from '../js/components/Search';
import NewsCard from '../js/components/NewsCard';
import Loader from '../js/components/Loader';



const formValidator = new FormValidator(FORM);
const api = new NewsApi({ 'apiKey': API_KEY });
const search = new Search(FORM);
const loader = new Loader(LOADER);
let cardsArray = [];








formValidator.addEventListener('submit', (event) => {
    localStorage.setItem('query', search.getVal());
    event.preventDefault();
    while (RESULTS.hasChildNodes()) {
        RESULTS.removeChild(RESULTS.childNodes[0]);
    }

    if (formValidator.validate()) {
        loader._showBlock();
        api.getNews(search.getVal())
            .then((res) => {
                localStorage.setItem('result', JSON.stringify(res.articles));
                document.querySelector('.result').classList.remove('result_display-none');
                loader._hideBlock();
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
    //window.location.href = `${window.location.origin}#result`;
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