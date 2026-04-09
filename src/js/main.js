const header = document.querySelector('.header');

function handleScroll() {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');;
    } else {
        header.classList.remove('scrolled');;
    }
}

window.addEventListener('scroll', handleScroll);

handleScroll();
