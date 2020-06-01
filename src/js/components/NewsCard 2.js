import { MONTH, NEWS_CARD_TEMPLATE } from '../constants/constants';
import defaultImage from '../../images/noimage.png';
export default class NewsCard {
    constructor(cardData) {
        this.cardData = cardData;
        this.createCard = this.createCard.bind(this);
    }


    createCard() {
        const date = new Date(this.cardData.publishedAt);
        const imgSrc = this.cardData.urlToImage ? this.cardData.urlToImage : defaultImage;
        const cardDate = `${date.getDate()} ${MONTH[date.getMonth()]}, ${date.getFullYear()}`;
        const title = this.cardData.title;
        const description = this.cardData.description;
        const linkHref = this.cardData.url;
        const linkText = this.cardData.source.name;

        let div = document.createElement('div');
        div.className = 'card';
        div.insertAdjacentHTML('beforeend', NEWS_CARD_TEMPLATE);

        div.querySelector('.card__image').src = imgSrc;
        div.querySelector('.card__date').textContent = cardDate;
        div.querySelector('.card__title').textContent = title;
        div.querySelector('.card__description').textContent = description;
        const link = div.querySelector('.card__link');
        link.href = linkHref;
        link.textContent = linkText;
        return div;
    }
}