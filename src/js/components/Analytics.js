import { DAYS, DAY_CORRECTOR, SUNDAY } from '../constants/constants';
export default class Analytics {
    constructor(data) {
        this.data = JSON.parse(data);

        this.getDates = this.getDates.bind(this);
    }

    getNumWeek() {
        return this.data.length
    }

    getNumTitle(query) {
        let num = 0;
        for (let item in this.data) {
            if (this.data[item].title.indexOf(query) > -1) num += 1;
        }
        return num;
    }

    getDates() {

        let dates = [];
        let datesAndDays = {};
        for (const item in this.data) {
            const date = new Date(this.data[item].publishedAt)
            datesAndDays[date.getDate()] = DAYS[date.getDay() - DAY_CORRECTOR < 0 ? SUNDAY : date.getDay() - DAY_CORRECTOR];
            dates.push(date.getDate());

        }
        dates = dates.sort((a, b) => { return a - b });
        datesAndDays.sortedDays = dates;
        return datesAndDays;
    }

}