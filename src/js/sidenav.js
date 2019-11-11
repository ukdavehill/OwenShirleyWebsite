// =====================START-HAMBURGER================
// ADD EVENT LISTENER FOR HAMBURGER MENU
(function () {
    const hamburger = document.querySelector('.hamburger');
    const bars = hamburger.querySelector('.fa-bars');
    const cross = hamburger.querySelector('.fa-times');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const ul = hamburger.querySelector('ul');

    bars.addEventListener('click', function () {
        // console.log('hamburger clicked');

        hamburgerMenu.classList.remove('hide-menu');
        cross.classList.remove('inactive');
        bars.classList.add('inactive');
    }
    );

    cross.addEventListener('click', function () {
        console.log('cross clicked');
        hamburgerMenu.classList.add('hide-menu');
        cross.classList.add('inactive');
        bars.classList.remove('inactive');
    })

    // =====================END-HAMBURGER================

    // =============START-BACKGROUND-COLORCHANGER========
    // const menuColor = '#292257';
    // const colors = ['#ff0000', '#00ff00', '#0000ff', menuColor];
    // const colorsLength = colors.length;
    // let counter = 0;

    // var speaker = document.getElementById('click-color');

    // // RESEARCH EVENT LISTENERS AND PROPOGATION
    // speaker.addEventListener('click', function (e) {
    //     var newColor = colors[counter % colorsLength];
    //     speaker.style.backgroundColor = newColor;
    //     counter++;
    //     e.stopPropagation();
    // });

    // =============START-BACKGROUND-COLORCHANGER========
}())