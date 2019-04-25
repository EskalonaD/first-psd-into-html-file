const showMenu = () => document.querySelector('.menu').style.visibility ='visible';
document.querySelector('.header__show-menu').addEventListener('click', showMenu);

const hideMenu = () => document.querySelector('.menu').style.visibility = 'hidden';
document.querySelector('.menu__close-menu').addEventListener('click', hideMenu);
