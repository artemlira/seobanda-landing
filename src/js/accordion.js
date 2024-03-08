/* eslint-disable no-shadow */
/* eslint-disable no-console */
// Для подключения аккордиона нужно вставить следующую строку
// <load ="src/components/_accordion.html" title="Аккордион триггер" text="Какой-то текст для аккордеона"/>

// Аккордеон
export default function accordion() {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach((item) => {
    item.addEventListener('click', (e) => {
      document.querySelectorAll('.accordion').forEach((el) => {
        el.classList.remove('active');
      });
      const self = e.currentTarget;
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
        document.querySelectorAll('.accordion__control').forEach((el) => {
          el.setAttribute('aria-expanded', false);
          control.setAttribute('aria-expanded', true);
        });
      }
    });
  });
}
