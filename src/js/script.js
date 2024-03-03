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


const progressItems = document.querySelectorAll('.progress__item');
progressItems.forEach((item) => {
    const progressValue = item.querySelector('.progress__item-value');
    const progressSpan = item.querySelector('.progress__item-chart span');

    if (progressValue && progressSpan) {
        // TODO add some checkings(% etc.)
        progressSpan.style.width = progressValue.textContent;
    } else {
        console.log("Something went wrong...")
    }
});
