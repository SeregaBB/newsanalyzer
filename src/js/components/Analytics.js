import { DAYS } from '../constants/constants';
export default class Analytics {
    constructor(data) {
        this.data = JSON.parse(data);

        this._getDates = this._getDates.bind(this);
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
        let dates = [];
        for (let item in this.data) {
            let date = new Date(this.data[item].publishedAt)
            dates.push(`${date.getDate()}, ${DAYS[date.getDay() === 0 ? 6 : date.getDay() - 1]}`);


        }
        dates = dates.sort((a, b) => { return a - b });

        return dates;
    }

}