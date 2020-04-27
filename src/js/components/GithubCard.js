import { MONTH, GH_CARD_TEMPLATE } from '../constants/constants';
export default class GithubCard {
    constructor(cardData) {
        this.cardData = cardData;
    }

    createCard() {
        const date = new Date(this.cardData.commit.author.date);
        const cardDate = `${date.getDate()} ${MONTH[date.getMonth()]},${date.getFullYear()}`;
        const img = this.cardData.author.avatar_url;
        const authorName = this.cardData.commit.author.name;
        const mailLink = `mailto:${this.cardData.commit.author.email}`;
        const mailText = this.cardData.commit.author.email;
        const historyText = this.cardData.commit.message;

        let div = document.createElement('div');
        div.className = 'history__card';
        div.insertAdjacentHTML('beforeend', GH_CARD_TEMPLATE);

        div.querySelector('.history__date').textContent = cardDate;
        div.querySelector('.history__avatar').src = img;
        div.querySelector('.history__author-name').textContent = authorName;
        const mail = div.querySelector('.history__author-mail');
        mail.href = mailLink;
        mail.textContent = mailText;
        div.querySelector('.history__text').textContent = historyText;
        return div;
    }
}