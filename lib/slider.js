'use strict';
(d => {
    const navButton = d.getElementsByClassName('nav-button')[0];
    const nav = d.getElementsByClassName('navigation')[0];
    let isNavVisible = false;
    const navRationalButton = d.getElementsByClassName('nav-rational-button')[0];
    const navRational = d.getElementsByClassName('navigation-rational')[0];
    let isNavRationalVisible = true;
    navButton.addEventListener('click', () => {
        if(isNavVisible) {
            nav.style.display = 'none';
            navButton.innerHTML = '<p>▼Menu</p>';
            isNavVisible = false;
        } else {
            nav.style.display = 'block';
            navButton.innerHTML = '<p>▲Menu</p>';
            isNavVisible = true;
        }
    }, false);
    navRationalButton.addEventListener('click', () => {
        if(isNavRationalVisible) {
            navRational.style.display = 'none';
            isNavRationalVisible = false;
        } else {
            navRational.style.display = 'block';
            isNavRationalVisible = true;
        }
    }, false);
})(document);
