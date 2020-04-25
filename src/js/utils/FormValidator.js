export default class FormValidator {
    constructor(form) {
        this.form = form;
        this.inputs = Array.from(this.form.querySelectorAll('input[type="text"]'));
        this.button = this.form.querySelector('button');

        this.addEventListener = this.addEventListener.bind(this);
        this.validate = this.validate.bind(this);
        this.highlightError = this.highlightError.bind(this);
        this.resetError = this.resetError.bind(this);
    }

    addEventListener(...args) {
        this.form.addEventListener(...args);
        console.log('set event listeners')
    }

    validate() {
        console.log('validate');

        let isValid = this.inputs.every(
            (item) => {

                item.checkValidity() ? this.form.querySelector('.error-text').textContent = '' : this.form.querySelector('.error-text').textContent = item.validationMessage;
                return item.checkValidity();


            });

        if (isValid) {
            this.resetError();
            return true;
        } else {
            this.highlightError();
            return false
        }


    }

    highlightError() {
        this.form.classList.contains('error') ?
            undefined : this.form.classList.add('error');

    }

    resetError() {
        this.form.classList.contains('error') ?
            this.form.classList.remove('error') : undefined;
    }

}