'use strict';
(d => {
    const slider = d.getElementsByClassName('slider')[0];
    const nav = d.getElementsByClassName('navigation')[0];
    let isNavVisible = false;
    slider.addEventListener('click', e => {
        if(isNavVisible) {
            nav.style.display = 'none';
            slider.innerHTML = '<p>▼Menu</p>';
            isNavVisible = false;
        } else {
            nav.style.display = 'block';
            slider.innerHTML = '<p>▲Menu</p>';
            isNavVisible = true;
        }
    }, false);
})(document);
