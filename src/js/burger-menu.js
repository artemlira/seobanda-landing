// Мобильное меню бургер
export default function burgerMenu() {
  const body = document.querySelector('body');
  const burger = body.querySelector('.burger');
  const menu = body.querySelector('.header__menu');
  const items = body.querySelectorAll('.header__menu_item');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    body.classList.toggle('locked');
    menu.classList.toggle('active');
  });

  items.forEach((item) => {
    item.addEventListener('click', () => {
      menu.classList.remove('active');
      burger.classList.remove('active');
      body.classList.remove('locked');
    });
  });

  // брекпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active');
      burger.classList.remove('active');
      body.classList.remove('locked');
    }
  });
}
