const showMenu = () => document.querySelector('.menu').style.visibility ='visible';
const hideMenu = () => document.querySelector('.menu').style.visibility = 'hidden';

document.querySelector('.header__show-menu').addEventListener('click', showMenu);
document.querySelector('.menu__close-menu').addEventListener('click', hideMenu);
