import { MONTH } from '../constants/constants';
import defaultImage from '../../images/noimage.png';
export default class NewsCard {
    constructor(cardData) {
        this.cardData = cardData;
        this.createCard = this.createCard.bind(this);
    }


    createCard() {
        const date = new Date(this.cardData.publishedAt);

        const cardTemplate = `<img src="${this.cardData.urlToImage ? this.cardData.urlToImage : defaultImage}" alt="Картинка новости" class="card__image">
        <div class="card__bottom">
            <span class="card__date">${date.getDate()} ${MONTH[date.getMonth()]}, ${date.getFullYear()}</span>
            <h2 class="card__title">${this.cardData.title}</h2>
            <p class="card__description">${this.cardData.description}</p>
            <a href="${this.cardData.url}" class="card__link" target="_blank">${this.cardData.source.name}</a>
        </div>`
        let div = document.createElement('div');
        div.className = 'card';
        div.insertAdjacentHTML('beforeend', cardTemplate);
        return div;
    }
}