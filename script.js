window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition   
 >= 100) { // Ajusta el valor según tu preferencia
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
