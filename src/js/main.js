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

window.addEventListener('resize', () => {
  if (window.innerWidth < 860) {
    // eslint-disable-next-line no-new
    new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      spaceBetween: 80,
      speed: 1000,
      slidesPerView: 1,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      autoplay: {
        delay: 1800,
      },
    });
  }
});
