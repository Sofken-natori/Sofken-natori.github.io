'use strict';
(d => {
    const slider = d.getElementsByClassName('slider')[0];
    const nav = d.getElementsByClassName('navigation')[0];
    let isNavVisible = false;
    slider.addEventListener('click', e => {
        if(isNavVisible) {
            nav.style.display = 'none';
            isNavVisible = false;
        } else {
            nav.style.display = 'block';
            isNavVisible = true;
        }
    }, false);
})(document);
