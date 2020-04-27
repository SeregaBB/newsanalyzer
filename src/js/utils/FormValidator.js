export default class FormValidator {
    constructor(form) {
        this.form = form;
        this.inputs = Array.from(this.form.querySelectorAll('input[type="text"]'));
        this.button = this.form.querySelector('button');

        this.addEventListener = this.addEventListener.bind(this);
        this.validate = this.validate.bind(this);
        this._highlightError = this._highlightError.bind(this);
        this._resetError = this._resetError.bind(this);
    }

    addEventListener(...args) {
        this.form.addEventListener(...args);
    }

    validate() {


        let isValid = this.inputs.every(
            (item) => {

                item.checkValidity() ? this.form.querySelector('.error-text').textContent = '' : this.form.querySelector('.error-text').textContent = item.validationMessage;
                return item.checkValidity();


            });

        if (isValid) {
            this._resetError();
            return true;
        } else {
            this._highlightError();
            return false
        }


    }

    _highlightError() {
        this.form.classList.contains('error') ?
            undefined : this.form.classList.add('error');

    }

    _resetError() {
        this.form.classList.contains('error') ?
            this.form.classList.remove('error') : undefined;
    }

}