import 'the-new-css-reset/css/reset.css';
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
