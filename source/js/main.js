var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var pageHeader = document.querySelector('.page-header');
var mainNavWr = document.querySelector('.main-nav__wrapper');
var body = document.querySelector('body');

body.classList.remove('body--nojs');
navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed');
pageHeader.classList.remove('page-header--scroll');

function checkScroll() {
  var minScroll = 0;
  if(window.matchMedia('(min-width: 1440px)').matches){
  	minScroll = 750;
  } else {
    if(window.matchMedia('(max-width: 768px)').matches){
    	minScroll = 480;
    }
  }
  if (window.scrollY > minScroll) {
    if (!pageHeader.classList.contains('page-header--scroll')) {
      pageHeader.classList.add('page-header--scroll');
    }
  } else {
    if (!navMain.classList.contains('main-nav--opened')) {
      pageHeader.classList.remove('page-header--scroll');
    }
  }
}

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    pageHeader.classList.add('page-header--scroll');
  } else {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
    if (window.scrollY == 0) {
      pageHeader.classList.remove('page-header--scroll');
    }
  }
});

window.addEventListener('scroll', function(e) {
  checkScroll();
});

window.onresize = function() {
  if(window.matchMedia('(min-width: 1440px)').matches){
  	navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
    // pageHeader.classList.remove('page-header--scroll');
  }
  checkScroll();
};
