export default class ApiError {
    constructor(elem) {
        this.elem = elem;

        this.showError = this.showError.bind(this);
        this.hideError = this.hideError.bind(this);
    }

    showError(text) {
        this.elem.textContent = text;
        this.elem.classList.add('api-error_is-showed');
        setTimeout(() => {
            this.hideError();
        }, 5000)
    }

    hideError() {
        this.elem.classList.remove('api-error_is-showed');
    }
}