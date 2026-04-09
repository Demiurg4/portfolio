export const burger = () => {
    const burgerIcon = document.getElementById('burger');
    const nav = document.getElementById('nav');

    burgerIcon.addEventListener('click', function () {
        nav.classList.toggle('nav-active');
        burgerIcon.classList.toggle('burger-active');
        document.body.classList.toggle('no-scroll');
    })
}