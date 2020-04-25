export default class Loader {
    constructor(block) {
        this.block = block;

        this._showBlock = this._showBlock.bind(this);
        this._hideBlock = this._hideBlock.bind(this);
    }


    _showBlock() {
        this.block.classList.contains('section_visibility-hidden') ? this.block.classList.remove('section_visibility-hidden') : undefined;
    }

    _hideBlock() {
        this.block.classList.contains('section_visibility-hidden') ? undefined : this.block.classList.add('section_visibility-hidden');
    }
}