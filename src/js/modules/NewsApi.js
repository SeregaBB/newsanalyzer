export default class NewsApi {
    constructor(options) {
        this.options = options;
        this.getDate = this.getDate.bind(this);
    }

    getNews(query) {
        return fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${this.options.apiKey}`)
            .then((res) => {
                if (res.ok) return res.json();
                Promise.reject();
            })
            .catch(() => {
                return Promise.reject();
            })
    }

    getDate() {
        const weekAgo = 7;
        const date = new Date();
        const oldDate = new Date();
        oldDate.setDate(oldDate.getDate() - weekAgo);

        console.log(date, oldDate);
        const year = date.getFullYear();
        const month = date.getMonth() > 10 ? date.getMonth() : `0${date.getMonth()}`;
        const day = date.getDate() > 10 ? date.getDate() : `0${date.getDate() }`;

        const oldYear = oldDate.getFullYear();
        const oldMonth = oldDate.getMonth() > 10 ? oldDate.getMonth() : `0${oldDate.getMonth()}`;
        const oldDay = oldDate.getDate() > 10 ? oldDate.getDate() : `0${oldDate.getDate() }`;



        const currentDate = `${year}-${month}-${day}`;
        const fromDate = `${oldYear}-${oldMonth}-${oldDay}`;

        return `from=${fromDate}&to=${currentDate}`;
    }



}