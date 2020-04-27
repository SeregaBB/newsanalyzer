const FORM = document.forms.search;


const API_KEY = '5aa78ed037b94a66bfd0a91d5bc55d5b';
const MONTH = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const RESULTS = document.querySelector('.result__cards');
const MORE_BUTTON = document.querySelector('.result__more');
const LOADER = document.querySelector('.loading');
const NO_RESULT = document.querySelector('.no-result__title');
const CHART = document.querySelector('.chart');
const GH_CARDS_CONTAINER = document.querySelector('.history__cards');
const DAYS = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const DAY_CORRECTOR = 1;
const SUNDAY = 6;
const CARDS_TO_LOAD = 3;
const END_OF_WEEK = 7;
const SEARCH_INPUT = document.querySelector('.search__input');
const API_ERROR_ELEM = document.querySelector('.api-error');
const NEWS_CARD_TEMPLATE = `<img src="" alt="Картинка новости" class="card__image">
        <div class="card__bottom">
            <span class="card__date"></span>
            <h2 class="card__title"></h2>
            <p class="card__description"></p>
            <a href="" class="card__link" target="_blank"></a>
        </div>`;


const GH_CARD_TEMPLATE = `<time class="history__date"></time>
        <div class="history__card-header">
            <img src="" alt="Аватар" class="history__avatar">
            <div class="history__author">
                <p class="history__author-name"></p>
                <a href="" class="history__author-mail"></a>
            </div>
        </div>
        <p class="history__text">
        </p>
    </div>`;




export { FORM, API_KEY, MONTH, RESULTS, MORE_BUTTON, LOADER, NO_RESULT, GH_CARDS_CONTAINER, CHART, DAYS, CARDS_TO_LOAD, SEARCH_INPUT, NEWS_CARD_TEMPLATE, GH_CARD_TEMPLATE, API_ERROR_ELEM, DAY_CORRECTOR, SUNDAY, END_OF_WEEK };