export default class Chart {
    constructor(chart) {
        this.chart = chart;
        this.dateContainer = this.chart.querySelector('.chart__date-container');
        this.chartDates = this.dateContainer.querySelectorAll('.chart__date');
        this.chartColumns = this.chart.querySelectorAll('.chart__column');

        this.setDates = this.setDates.bind(this);
        this.setChartColumn = this.setChartColumn.bind(this);
    }

    setDates(dates) {
        const set = new Set(dates);
        console.log(set, dates);
        let i = 0;
        set.forEach((item) => {
            if (i === 7) return;
            this.chartDates[i].textContent = `${item}`;
            i += 1;
        });

    }

    setChartColumn(data) {
        const set = new Set(data);
        let i = 0;

        set.forEach(item => {
            if (i === 7) return;
            let num = 0;


            data.forEach((dataItem) => {
                if (dataItem === item) num += 1;
            });

            this.chartColumns[i].style.width = `${num}%`;
            this.chartColumns[i].textContent = num;
            i += 1;
        });

    }
}