// Mostra a seta quando o usuário rolar para baixo
window.onscroll = function () {
    let scrollToTopButton = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
}
