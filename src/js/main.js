/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
import 'the-new-css-reset/css/reset.css';
import '../styles/style.scss';

// ==================== Переключение аккордиона ====================
const accordions = document.querySelectorAll('.accordion');
accordions.forEach((item) => {
  item.addEventListener('click', (e) => {
    document.querySelectorAll('.accordion').forEach((el) => {
      el.classList.remove('active');
    });
    document.querySelectorAll('.work-accordion__item').forEach((el) => {
      el.classList.remove('active');
    });
    const self = e.currentTarget;
    // console.dir(self.closest('.work-accordion__item'));
    const control = item.querySelector('.accordion__control');
    const content = item.querySelector('.accordion__content');
    if (content.style.maxHeight) {
      document.querySelectorAll('.accordion__content').forEach((e) => {
        e.style.maxHeight = null;
        e.setAttribute('aria-hidden', true);
      });
      document.querySelectorAll('.accordion__control').forEach((el) => {
        el.setAttribute('aria-expanded', false);
      });
    } else {
      document.querySelectorAll('.accordion__content').forEach((e) => {
        e.style.maxHeight = null;
        e.setAttribute('aria-hidden', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = `${content.scrollHeight}px`;
      });
      self.classList.toggle('active');
      self.closest('.work-accordion__item')?.classList.toggle('active');
      document.querySelectorAll('.accordion__control').forEach((el) => {
        el.setAttribute('aria-expanded', false);
        control.setAttribute('aria-expanded', true);
      });
    }
  });
});

// ==================================
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
