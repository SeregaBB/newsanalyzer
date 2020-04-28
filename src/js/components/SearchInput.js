export default class SearchInput {
    constructor(form) {
        this.form = form
        this.addEventListener = this.addEventListener.bind(this);
    }


    addEventListener(...args) {
        this.form.addEventListener(...args);
    }

}