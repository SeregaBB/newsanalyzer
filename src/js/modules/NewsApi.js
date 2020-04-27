export default class NewsApi {
    constructor(options) {
        this.options = options;
        this.getDate = this.getDate.bind(this);
    }

    getNews(query) {
        return fetch(`https://newsapi.org/v2/everything?q=${query}&${this.getDate()}&apiKey=${this.options.apiKey}`)
            .then((res) => {
                if (res.ok) return res.json();
                return Promise.reject();
            });
    }

    getDate() {
        const weekAgo = 8;
        const monthCorrector = 1;
        const date = new Date();
        const oldDate = new Date();
        oldDate.setDate(oldDate.getDate() - weekAgo);


        const year = date.getFullYear();
        const month = date.getMonth() + monthCorrector > 10 ? date.getMonth() + monthCorrector : `0${date.getMonth()+monthCorrector}`;
        const day = date.getDate() > 10 ? date.getDate() : `0${date.getDate() }`;

        const oldYear = oldDate.getFullYear();
        const oldMonth = oldDate.getMonth() + monthCorrector > 10 ? oldDate.getMonth() + monthCorrector : `0${oldDate.getMonth()+monthCorrector}`;
        const oldDay = oldDate.getDate() > 10 ? oldDate.getDate() : `0${oldDate.getDate() }`;



        const currentDate = `${year}-${month}-${day}`;
        const fromDate = `${oldYear}-${oldMonth}-${oldDay}`;

        return `from=${fromDate}&to=${currentDate}`;
    }



}