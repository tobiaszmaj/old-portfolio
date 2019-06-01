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
if ('ontouchstart' in window) {
    var click = 'touchstart';
} else {
    var click = 'click';
}

$('div.burger').on(click, function () {

    if (!$(this).hasClass('open')) {
        openMenu();
    } else {
        closeMenu();
    }

});


$('div.menu ul li a').on(click, function (e) {
    e.preventDefault();
    closeMenu();
});


function openMenu() {

    $('div.circle').addClass('expand');

    $('div.burger').addClass('open');
    $('div.x, div.y, div.z').addClass('collapse');
    $('.menu li').addClass('animate');

    setTimeout(function () {
        $('div.y').hide();
        $('div.x').addClass('rotate30');
        $('div.z').addClass('rotate150');
    }, 70);
    setTimeout(function () {
        $('div.x').addClass('rotate45');
        $('div.z').addClass('rotate135');
    }, 120);



}

function closeMenu() {

    $('div.burger').removeClass('open');
    $('div.x').removeClass('rotate45').addClass('rotate30');
    $('div.z').removeClass('rotate135').addClass('rotate150');
    $('div.circle').removeClass('expand');
    $('.menu li').removeClass('animate');

    setTimeout(function () {
        $('div.x').removeClass('rotate30');
        $('div.z').removeClass('rotate150');
    }, 50);
    setTimeout(function () {
        $('div.y').show();
        $('div.x, div.y, div.z').removeClass('collapse');
    }, 70);

}