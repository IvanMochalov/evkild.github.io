// scroll
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const blockID = anchor.getAttribute('href').substr(1)

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}
// slider - hero
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
    prevSlideMessage: 'Следующий слайд',
    nextSlideMessage: 'Предыдущий слайд',
  },
  speed: 1000,
});
// tabs - steps
let tabsBtn = document.querySelectorAll('.steps__btn');
let tabsText = document.querySelectorAll('.content__only-text');
let tabsImage = document.querySelectorAll('.content__image');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('steps__btn--active')});
    e.currentTarget.classList.add('steps__btn--active');

    tabsText.forEach(function(element){ element.classList.remove('content__only-text--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('content__only-text--active');

    tabsImage.forEach(function(element){ element.classList.remove('content__image--active')});
    document.querySelector(`[data-image="${path}"]`).classList.add('content__image--active');
  });
});
// search
let searchBtn = document.querySelector('.header__btn');
let searchBox = document.querySelector('.header__search-box');
let cancelBtn = document.querySelector('.header__cancel-btn');
let searchTxt = document.querySelector('.header__search-txt')

searchBtn.addEventListener('click', function() {
  searchBox.classList.add('header__search-box--active');
  searchBtn.classList.add('header__btn--active');
  cancelBtn.classList.add('header__cancel-btn--active');
  searchTxt.classList.add('header__search-txt--active');

});

cancelBtn.addEventListener('click', function() {
  searchBox.classList.remove('header__search-box--active');
  searchBtn.classList.remove('header__btn--active');
  cancelBtn.classList.remove('header__cancel-btn--active');
  searchTxt.classList.remove('header__search-txt--active');
})
// burger
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', function() {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');
  if (burger.classList.contains('burger--active')) {
    document.querySelector('.simplebar-content-wrapper').style.overflow = 'hidden';
  } else {
    document.querySelector('.simplebar-content-wrapper').style.overflow = 'auto';
  }
});

menuLinks.forEach(function(element) {
  element.addEventListener('click', function() {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
    document.querySelector('.simplebar-content-wrapper').style.overflow = 'auto';
    searchBtn.classList.remove('header__btn--active');
    searchBox.classList.remove('header__search-box--active');
  });
});
// accordion
new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active',
});


