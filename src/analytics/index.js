import '../pages/analytic.css';
import Analytics from '../js/components/Analytics';
import Chart from '../js/components/Chart';
import { CHART } from '../js/constants/constants';
const analytics = new Analytics(localStorage.getItem('result'));
const chart = new Chart(CHART);

document.querySelector('.analytics__title').textContent = `Вы спросили: "${localStorage.getItem('query')}"`;

document.querySelector('.analytics__week-info > strong').textContent = analytics.getNumWeek();


document.querySelector('.analytics__reference-info > strong').textContent = analytics.getNumTitle(localStorage.getItem('query'));

chart.setDates(analytics.getDates());

chart.setChartColumn(analytics.getDates());