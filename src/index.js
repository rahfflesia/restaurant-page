import './styles.css';
import { createMenu } from './scripts/menu';
import { createHomePage } from './scripts/home';
import { createAbout } from './scripts/about';

document.addEventListener('DOMContentLoaded', createHomePage);

const menuButton = document.querySelector('.menu');
const homeButton = document.querySelector('.home');
const aboutButton = document.querySelector('.about');

menuButton.addEventListener('click', createMenu);
homeButton.addEventListener('click', createHomePage);
aboutButton.addEventListener('click', createAbout);



