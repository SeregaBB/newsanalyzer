export default class BaseComponent {
    constructor(element, handlers) {
        this.element = element;
        this.handlers = handlers ? handlers : {};
        this._setHandlers = this._setHandlers.bind(this);
        this.initSetHandlers = this.initSetHandlers.bind(this);
    }

    _setHandlers() {
        for (const event in this.handlers) {
            this.element.addEventListener(event, this.handlers[event]);
        }
    }

    initSetHandlers() {
        this._setHandlers();
    }


}