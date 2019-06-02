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