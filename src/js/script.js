const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    menuClose = document.querySelector('.menu__close');

function toggleMenuActive (triggerObject) {
    if (!triggerObject) {
        console.log(`ERROR: triggerObject is ${triggerObject}`);
        return;
    };

    triggerObject.addEventListener('click', () => menu.classList.toggle('active'));
}

toggleMenuActive(hamburger);
toggleMenuActive(menu);
