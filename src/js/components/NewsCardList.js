import { CARDS_TO_LOAD } from '../constants/constants';
export default class NewsCardList {
    constructor(resultContainer, moreButton) {
        this.resultContainer = resultContainer;
        this.moreButton = moreButton;

        this.appendCardsToDom = this.appendCardsToDom.bind(this);
    }


    appendCardsToDom(cards) {
        if (cards.length) {
            for (let i = 0; i < CARDS_TO_LOAD; i++) {
                if (cards[i]) {
                    this.resultContainer.appendChild(cards[i]);
                    cards = cards.slice(1);
                } else {
                    this.moreButton.style.display = 'none';
                }
            }
        }
    }

}