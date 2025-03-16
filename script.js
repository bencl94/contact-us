function toggleNavbar() {
    const nav = document.getElementById('nav-menu');
    const ul = nav.children[0];
    nav.classList.toggle('responsive');
    ul.classList.toggle('responsive');

    const hamburger = document.getElementById('hamburger-icon');
    hamburger.classList.toggle('hamburger-active');

}