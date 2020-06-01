import { CARDS_TO_LOAD } from '../constants/constants';
export default class NewsCardList {
    constructor(container, moreButton) {
        this.container = container;
        this.moreButton = moreButton;
        this.cards = [];

        this.addCardToStorage = this.addCardToStorage.bind(this);
        this.createDom = this.createDom.bind(this);
        this.addEventListener = this.addEventListener.bind(this);
    }


    addCardToStorage(card) {
        let cardsArr = [];
        cardsArr.push(card);
        this.cards = cardsArr.concat(this.cards);
    }


    createDom() {
        let cardsArr = this.cards;
        if (cardsArr.length) {
            for (let i = 0; i < CARDS_TO_LOAD; i++) {
                if (cardsArr[i]) {
                    this.container.appendChild(cardsArr[i]);
                    cardsArr = cardsArr.slice(1);
                    this.cards = cardsArr;
                } else {
                    this.moreButton.style.display = 'none';
                }
            }
        }
    }


    clearContainer() {
        while (this.container.hasChildNodes()) {
            this.container.removeChild(this.container.childNodes[0]);
        }
    }

    showContainer() {
        this.container.parentNode.classList.contains('section_visibility-hidden') ? this.container.parentNode.classList.remove('section_visibility-hidden') :
            undefined;
    }

    hideContainer() {
        this.container.parentNode.classList.contains('section_visibility-hidden') ? undefined : this.container.parentNode.classList.add('section_visibility-hidden');
    }


    addEventListener(...args) {
        this.moreButton.addEventListener(...args);
    }
}