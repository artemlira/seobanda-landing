/* eslint-disable no-new */

// папку Swiper нужно перенести в папку public

// для подключения слайдера нужно ссылку с стилями вставить в верх в index.html
//  <link rel="stylesheet" href="/swiper/cdn.jsdelivr.net_npm_swiper@8_swiper-bundle.min.css" />

// подключение скриптов нужно вставить внизу index.html документа перед подключением основного скрипта
//   <script src="/swiper/cdn.jsdelivr.net_npm_swiper@8_swiper-bundle.min.js"></script>

// подключение файла
// <load ="src/components/_swiper.html" class="mySwiper" />

// ==================== Swiper slider ====================

// eslint-disable-next-line no-undef
new Swiper('.mySwiper', {
  // Optional parameters
  direction: 'horizontal', // ориентация прокрутки
  loop: true, // бесконечность
  spaceBetween: 80, // расстояние между слайдами
  speed: 1000, // скорость прокрутки
  slidesPerView: 3,

  // Если нужна пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Если нужны стрелки управления
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Если нужен scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  // Автозапуск
  autoplay: {
    delay: 1800,
  },
});
