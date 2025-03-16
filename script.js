function toggleNavbar() {
    const nav = document.getElementById('nav-menu');
    const hamburger = document.getElementById('hamburger-icon');
    hamburger.classList.toggle('hamburger-active')

    if (nav.style.display == 'none') {
        nav.style.display = 'block';
    } else {
        nav.style.display == 'none'
    }

}