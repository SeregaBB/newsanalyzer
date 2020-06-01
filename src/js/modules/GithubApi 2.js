export default class GithubApi {
    constructor(options) {
        this.options = options;
        this.getCommits = this.getCommits.bind(this);
    }

    getCommits() {
        return fetch('https://api.github.com/repos/SeregaBB/newsanalyzer/commits')
            .then(res => {
                if (res.ok) return res.json();
                return Promise.reject();
            })

    }
}