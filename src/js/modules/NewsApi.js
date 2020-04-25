export default class NewsApi {
    constructor(options) {
        this.options = options;
    }

    getNews(query) {
        return fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${this.options.apiKey}`)
            .then((res) => {
                if (res.ok) return res.json();
            })
    }



}