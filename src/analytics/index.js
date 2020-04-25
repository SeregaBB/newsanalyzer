import '../pages/analytic.css';
import Analytics from '../js/components/Analytics';
const analytics = new Analytics(localStorage.getItem('result'));



document.querySelector('.analytics__title').textContent = `Вы спросили: "${localStorage.getItem('query')}"`;

document.querySelector('.analytics__week-info > strong').textContent = analytics._getNumWeek();


document.querySelector('.analytics__reference-info > strong').textContent = analytics._getNumTitle(localStorage.getItem('query'));