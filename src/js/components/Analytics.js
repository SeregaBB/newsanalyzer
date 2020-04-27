import { DAYS } from '../constants/constants';
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
        for (const item in this.data) {
            const date = new Date(this.data[item].publishedAt)
            dates.push(`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`);


        }
        dates = dates.sort((a, b) => { return a - b });

        return dates;
    }

}