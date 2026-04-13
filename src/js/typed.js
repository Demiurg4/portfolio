export const typed = () => {
    document.addEventListener('DOMContentLoaded', () => {
    new Typed('#typed', {
        strings: [
            'Адаптивно. Быстро. Надежно.',
            'Дизайн оживает в браузере'
        ],
        typeSpeed: 55,      // скорость печати (символов в минуту)
        backSpeed: 120,     // очень быстрая стирка ≈ 1 секунда на весь текст
        backDelay: 1500,    // пауза после печати перед стиранием (1.5 сек)
        startDelay: 300,    // небольшая задержка в самом начале
        loop: true,         // бесконечный цикл
        showCursor: true,
        cursorChar: '▋',    // современный курсор (можно заменить на '|' или '_')
        smartBackspace: true
    });
});
}