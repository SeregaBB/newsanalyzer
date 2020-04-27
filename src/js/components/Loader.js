export default class Loader {
    constructor(block) {
        this.block = block;

        this.showBlock = this.showBlock.bind(this);
        this.hideBlock = this.hideBlock.bind(this);
    }


    showBlock() {
        this.block.classList.contains('section_visibility-hidden') ? this.block.classList.remove('section_visibility-hidden') : undefined;
    }

    hideBlock() {
        this.block.classList.contains('section_visibility-hidden') ? undefined : this.block.classList.add('section_visibility-hidden');
    }
}