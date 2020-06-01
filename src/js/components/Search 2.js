export default class Search {
    constructor(form) {
        this.form = form;
        this.input = form.elements.query;
    }

    getVal() {
        return this.input.value;
    }
}