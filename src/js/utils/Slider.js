import Flickity from 'flickity';

export default class Slider {
    constructor(container) {
        this.container = container;

        this.initSlider = this.initSlider.bind(this);
    }

    initSlider() {
        let flkty = new Flickity(this.container, {
            cellAlign: 'left',
            contain: true,
            groupCells: 1,
            percentPosition: true,
            fade: true
        });
    }
}