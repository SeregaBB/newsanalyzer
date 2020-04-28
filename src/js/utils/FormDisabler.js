export default class FormDisabler {
    constructor(form) {
        this.form = form;
        this.inputs = this.form.querySelectorAll('input');
        this.buttons = this.form.querySelectorAll('button');
    }


    disableForm() {
        if (this.inputs) this.inputs.forEach((input) => { input.disabled = true });
        if (this.buttons) this.buttons.forEach((button) => { button.disabled = true });

    }

    enableForm() {
        if (this.inputs) this.inputs.forEach((input) => { input.disabled = false });
        if (this.buttons) this.buttons.forEach((button) => { button.disabled = false });
    }
}