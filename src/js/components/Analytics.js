export default class Analytics {
    constructor(data) {
        this.data = JSON.parse(data);
    }

    _getNumWeek() {
        return this.data.length
    }

    _getNumTitle(query) {
        let num = 0;
        for (let item in this.data) {
            if (this.data[item].title.indexOf(query) > -1) num += 1;
        }
        return num;
    }

    _getDates() {

    }

}