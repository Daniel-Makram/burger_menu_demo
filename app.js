const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav--container');
const body = document.querySelector('body');
const main = document.querySelector('.main__content--container');
const banner = document.querySelector('.header--img');
const title = document.querySelector('#title');
const list_item = document.querySelector('.header__nav__menu--liste');


function burger__menutoggle() {
    
    menu.classList.toggle('menu--open');
    body.classList.toggle('body--open');
    main.classList.toggle('hidden');
    banner.classList.toggle('hidden');
    title.classList.toggle('hidden');
    // console.log('i am working');
};

burger.addEventListener('click', function () {
    burger__menutoggle();
});
list_item.addEventListener('click', function () {
    burger__menutoggle();
});
