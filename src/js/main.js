/* eslint-disable consistent-return */
/* eslint-disable func-names */
import 'the-new-css-reset/css/reset.css';
import Swiper from 'swiper';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
import '../styles/style.scss';
// import burgerMenu from './burger-menu';
// import tabs from "./tabs"; //Переключение табов
// import './swiper'; // для подключения swiper
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
const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
  let swiper;

  // eslint-disable-next-line no-param-reassign
  breakpoint = window.matchMedia(breakpoint);

  // eslint-disable-next-line func-names
  const enableSwiper = function (className, settings) {
    swiper = new Swiper(className, settings);

    if (callback) {
      callback(swiper);
    }
  };

  const checker = function () {
    if (breakpoint.matches) {
      return enableSwiper(swiperClass, swiperSettings);
    }
    if (swiper !== undefined) swiper.destroy(true, true);
  };

  breakpoint.addEventListener('change', checker);
  checker();
};

resizableSwiper('(max-width: 1200px)', '.slider', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1,
  freeMode: true,
  speed: 1000,
  autoplay: {
    delay: 1500,
  },
  // breakpoints: {
  //   1200: {
  //     spaceBetween: 20,
  //   },
  // },
});
