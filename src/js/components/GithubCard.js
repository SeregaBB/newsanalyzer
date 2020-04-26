import { MONTH } from '../constants/constants';
export default class GithubCard {
    constructor(cardData) {
        this.cardData = cardData;
    }

    createCard() {
        const date = new Date(this.cardData.commit.author.date);

        const cardTemplate = `<time class="history__date">${date.getDate()} ${MONTH[date.getMonth()]},${date.getFullYear()}</time>
        <div class="history__card-header">
            <img src="${this.cardData.author.avatar_url}" alt="Аватар" class="history__avatar">
            <div class="history__author">
                <p class="history__author-name">${this.cardData.commit.author.name}</p>
                <a href="mailto:${this.cardData.commit.author.email}" class="history__author-mail">${this.cardData.commit.author.email}</a>
            </div>
        </div>
        <p class="history__text">
        ${this.cardData.commit.message}
        </p>
    </div>`
        let div = document.createElement('div');
        div.className = 'history__card';
        div.insertAdjacentHTML('beforeend', cardTemplate);
        return div;
    }
}