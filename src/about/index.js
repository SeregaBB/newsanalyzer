import '../pages/about.css';
import GithubApi from '../js/modules/GithubApi';
import GithubCard from '../js/components/GithubCard';
import Slider from '../js/utils/Slider';
import { GH_CARDS_CONTAINER, API_ERROR_ELEM } from '../js/constants/constants';
import ApiError from '../js/utils/ApiError';

const api = new GithubApi();
const apiError = new ApiError(API_ERROR_ELEM);



api.getCommits()
    .then(res => {
        for (let commit in res) {
            GH_CARDS_CONTAINER.appendChild(new GithubCard(res[commit]).createCard());

        }
    })
    .then(() => {
        new Slider(GH_CARDS_CONTAINER).initSlider();
    })
    .catch(err => apiError.showError(`Невозможно загрузить коммиты: ${err}`));