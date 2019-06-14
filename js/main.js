// Preloader
const curry = f => (...args) =>
    args.length >= f.length ?
    f(...args) :
    curry(f.bind(f, ...args));

const compose = (f, g) => x => f(g(x));
const composeN = (...fns) => (...args) =>
    fns.reverse().
reduce((x, f) => f.apply(f, [].concat(x)), args);

let preloaderEl = document.querySelector('.preloader');

setTimeout(function () {
    preloaderEl.classList.add('preloader-hiding');

    preloaderEl.addEventListener('transitionend', function () {
        this.classList.add('preloader-hidden');
        this.classList.remove('preloader-hiding');
    });
}, 4000);

// Mobile Menu
let burger = document.getElementById('burger'),
    nav = document.getElementById('mobile-nav'),
    slowmo = document.getElementById('slowmo');

burger.addEventListener('click', function (e) {
    this.classList.toggle('is-open');
    nav.classList.toggle('is-open');
});

slowmo.addEventListener('click', function (e) {
    this.classList.toggle('is-slowmo');
});

/* Onload demo - dirty timeout */
let clickEvent = new Event('click');

window.addEventListener('load', function (e) {
    slowmo.dispatchEvent(clickEvent);
    burger.dispatchEvent(clickEvent);

    setTimeout(function () {
        burger.dispatchEvent(clickEvent);

        setTimeout(function () {
            slowmo.dispatchEvent(clickEvent);
        }, 3500);
    }, 5500);
});