export default class SectionShower {
    constructor(container) {
        this.container = container;

        this._clearContainer = this._clearContainer.bind(this);
        this._showContainer = this._showContainer.bind(this);
        this._hideContainer = this._hideContainer.bind(this);
    }

    _clearContainer() {
        while (this.container.hasChildNodes()) {
            this.container.removeChild(this.container.childNodes[0]);
        }
    }

    _showContainer() {
        this.container.parentNode.classList.contains('section_visibility-hidden') ? this.container.parentNode.classList.remove('section_visibility-hidden') :
            undefined;
    }

    _hideContainer() {
        this.container.parentNode.classList.contains('section_visibility-hidden') ? undefined : this.container.parentNode.classList.add('section_visibility-hidden');
    }
}