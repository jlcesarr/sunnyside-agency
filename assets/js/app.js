const mobileMenu = {
    toggleButton: document.querySelector('#bx'),
    menu: document.querySelector('.dropdown-menu'),
    menuItems: document.querySelectorAll('.dropdown-menu-list > .dropdown-item')
}

// TOGGLE MOBILE MENU

let isMobileMenuOpen = false;
mobileMenu.toggleButton.addEventListener('click', () => {
    isMobileMenuOpen = !isMobileMenuOpen;

    console.log(1)


    mobileMenu.menu.classList.toggle('is-active', isMobileMenuOpen);
})


// TOGGLE MENU ITEM

const removeAllActiveLinks = () => mobileMenu.menuItems.forEach((item) => item.classList.remove('is-active'));
mobileMenu.menu.addEventListener('click', (event) => {
    const { target: element } = event;


    if (element.classList.contains('dropdown-link')) {
        removeAllActiveLinks();
        element.parentElement.classList.add('is-active')
    }
})