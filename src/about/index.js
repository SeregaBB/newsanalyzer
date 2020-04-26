import '../pages/about.css';
import GithubApi from '../js/modules/GithubApi';
import GithubCard from '../js/components/GithubCard';
import Slider from '../js/utils/Slider';
import { GH_CARDS_CONTAINER } from '../js/constants/constants';


const api = new GithubApi();




api.getCommits()
    .then(res => {
        for (let commit in res) {
            GH_CARDS_CONTAINER.appendChild(new GithubCard(res[commit]).createCard());

        }
    })
    .then(() => {
        new Slider(GH_CARDS_CONTAINER).initSlider();
    })
    .catch(err => console.log(err));