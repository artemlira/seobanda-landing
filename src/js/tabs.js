export default function tabs(
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass,
  display = 'flex',
) {
  const header = document.querySelector(headerSelector);
  const tab = document.querySelectorAll(tabSelector);
  const content = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    content.forEach((item) => {
      // eslint-disable-next-line no-param-reassign
      item.style.display = 'none';
    });
    tab.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0) {
    content[i].style.display = display;
    tab[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();
  header.addEventListener('click', (e) => {
    const { target } = e;
    if (
      target.classList.contains(tabSelector.replace(/\./, '')) ||
      target.parentNode.classList.contains(tabSelector.replace(/\./, ''))
    ) {
      tab.forEach((item, i) => {
        if (target === item || target.parentNode === item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

// Первый аргумент - класс всего нашего хедера табов
// Второй аргумент - класс конктретного элемента, при клике на который будет переключатся таб
// Третий аргумент - класс того блока, который будет переключаться
// Четвертый аргумент - класс активности, который будет добаляться для таба, который сейчас активен
