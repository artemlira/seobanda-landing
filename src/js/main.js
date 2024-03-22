import 'the-new-css-reset/css/reset.css';
// eslint-disable-next-line import/no-unresolved
import '@splidejs/splide/css';
// eslint-disable-next-line import/no-extraneous-dependencies
import Splide from '@splidejs/splide';
import '../styles/style.scss';
// import burgerMenu from './burger-menu';
// import tabs from "./tabs"; //Переключение табов
import accordion from './accordion'; // для подключения accordion
// import select from "./select"; //для подключения селекта
// import "./phonemask"; //для подключения phonemask

// burgerMenu(); // для бургер меню

// ==================== Переключение табов ====================
// tabs(".tabs__header", ".tabs__header-item", ".tabs__content-item", "active");

// ==================== Переключение аккордиона ====================
accordion();

// ==================== Переключение селекта ====================
// select(); // для селекта

const titleTrigger = document.querySelectorAll('.services__content__item');
titleTrigger.forEach((element) => {
  element.addEventListener('mousemove', () => {
    titleTrigger.forEach((e) => e.classList.remove('active'));

    element.classList.add('active');
  });
});

// ==================================
const slide = new Splide('.splide', {
  type: 'loop',
  perPage: 1,
  autoplay: true,
  padding: 10,
  mediaQuery: 'min',
  pagination: false,
  arrows: false,
  breakpoints: {
    641: {
      destroy: true,
    },
  },
});

const bar = slide.root.querySelector('.my-carousel-progress-bar');
// eslint-disable-next-line func-names
slide.on('mounted move', function () {
  const end = slide.Components.Controller.getEnd() + 1;
  const rate = Math.min((slide.index + 1) / end, 1);
  bar.style.width = `${String(100 * rate)}%`;
});

slide.mount();
