const FORM = document.forms.search;


const API_KEY = '5aa78ed037b94a66bfd0a91d5bc55d5b';
const MONTH = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const RESULTS = document.querySelector('.result__cards');
const MORE_BUTTON = document.querySelector('.result__more');
const LOADER = document.querySelector('.loading');
export { FORM, API_KEY, MONTH, RESULTS, MORE_BUTTON, LOADER };