// ==================== phone mask ====================
// Ссылка на плагин: https://imask.js.org/
// Подключение через npm: https://www.npmjs.com/package/imask
// Подключение через CDN: <script src="https://unpkg.com/imask"></script>

const maskElement = document.querySelector('.phone__input');
const maskOptions = { mask: '+{38}(000)000-00-00' };
// eslint-disable-next-line no-undef
IMask(maskElement, maskOptions);
