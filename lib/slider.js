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
            slideUp(nav, 500);
            navButton.innerHTML = '<p>▼Menu</p>';
            isNavVisible = false;
        } else {
            slideDown(nav, 500);
            navButton.innerHTML = '<p>▲Menu</p>';
            isNavVisible = true;
        }
    }, false);
    navRationalButton.addEventListener('click', () => {
        if(isNavRationalVisible) {
            slideUp(navRational, 500);
            isNavRationalVisible = false;
        } else {
            slideDown(navRational, 500);
            isNavRationalVisible = true;
        }
    }, false);

    function slideDown(element, duration) {
        element.style.removeProperty('display');
        let display = window.getComputedStyle(element).display;
        if(display === 'none') display = 'block';
        element.style.display = display;
        let height = element.offsetHeight;
        element.style.overflow = 'hidden';
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
        element.style.marginTop = 0;
        element.style.marginBottom = 0;
        element.offsetHeight;
        element.style.transitionProperty = 'height, margin, padding';
        element.style.transitionDuration = `${duration}ms`;
        element.style.transitionTimingFunction = 'ease';
        element.style.height = `${height}px`;
        element.style.removeProperty('padding-top');
        element.style.removeProperty('padding-bottom');
        element.style.removeProperty('margin-top');
        element.style.removeProperty('margin-bottom');
        setTimeout(() => {
            element.style.removeProperty('height');
            element.style.removeProperty('overflow');
            element.style.removeProperty('transition-duration');
            element.style.removeProperty('transition-property');
            element.style.removeProperty('transition-timing-function');
        }, duration);
    }

    function slideUp(element, duration) {
        element.style.height = `${element.offsetHeight}px`;
        element.offsetHeight;
        element.style.transitionProperty = 'height, margin, padding';
        element.style.transitionDuration = `${duration}ms`;
        element.style.transitionTimingFunction = 'ease';
        element.style.overflow = 'hidden';
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
        element.style.marginTop = 0;
        element.style.marginBottom = 0;
        setTimeout(() => {
            element.style.display = 'none';
            element.style.removeProperty('height');
            element.style.removeProperty('padding-top');
            element.style.removeProperty('padding-bottom');
            element.style.removeProperty('margin-top');
            element.style.removeProperty('margin-bottom');
            element.style.removeProperty('overflow');
            element.style.removeProperty('transition-duration');
            element.style.removeProperty('transition-property');
            element.style.removeProperty('transition-timing-function');
        }, duration);
    }
})(document);
