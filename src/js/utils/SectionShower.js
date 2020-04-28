export default class SectionShower {
    constructor(container) {
        this.container = container;

        this.clearContainer = this.clearContainer.bind(this);
        this.showContainer = this.showContainer.bind(this);
        this.hideContainer = this.hideContainer.bind(this);
    }

    clearContainer() {
        while (this.container.hasChildNodes()) {
            this.container.removeChild(this.container.childNodes[0]);
        }
    }

    showContainer() {
        this.container.parentNode.classList.contains('section_visibility-hidden') ? this.container.parentNode.classList.remove('section_visibility-hidden') :
            undefined;
    }

    hideContainer() {
        this.container.parentNode.classList.contains('section_visibility-hidden') ? undefined : this.container.parentNode.classList.add('section_visibility-hidden');
    }
}