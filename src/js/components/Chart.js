export default class Chart {
    constructor(chart) {
        this.chart = chart;
        this.dateContainer = this.chart.querySelector('.chart__date-container');
        this.setDates = this.setDates.bind(this);
        this.setChartColumn = this.setChartColumn.bind(this);
    }

    setDates(dates) {
        let set = new Set(dates);

        let i = 0;
        set.forEach((item) => {

            this.dateContainer.querySelectorAll('.chart__date')[i].textContent = `${item}`;
            i += 1;
        });

    }

    setChartColumn(data) {
        let set = new Set(data);
        let i = 0;

        set.forEach(item => {
            let num = 0;


            data.forEach((dataItem) => {
                if (dataItem === item) num += 1;
            });

            this.chart.querySelectorAll('.chart__column')[i].style.width = `${num}%`;
            this.chart.querySelectorAll('.chart__column')[i].textContent = num;
            i += 1;
        });

    }
}