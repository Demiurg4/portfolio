
import { burger } from "./burger";

burger();

import Typed from 'typed.js';

document.addEventListener('DOMContentLoaded', () => {
  new Typed('#typed', {
    strings: [
      'Адаптивно. Быстро. Надежно.',
      'Дизайн оживает в браузере'
    ],
    typeSpeed: 50,      // скорость печати (символов в минуту)
    backSpeed: 20,     // очень быстрая стирка ≈ 1 секунда на весь текст
    backDelay: 1500,    // пауза после печати перед стиранием (1.5 сек)
    loop: true,         // бесконечный цикл
    backDelay: 1500,    // пауза после печати перед стиранием (1.5 сек)
    startDelay: 300,    // небольшая задержка в самом начале 
    showCursor: true,
    cursorChar: ' |',    // современный курсор (можно заменить на '|' или '_')
    smartBackspace: true,
  });
});