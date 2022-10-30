'use strict';
(() => {
    const components_root = 'https://sofken-natori.github.io/components';
    ['header', 'navigation', 'footer'].forEach(name => {
        fetch(`${components_root}/${name}.html`).then(res => {
            if(!res.ok) throw new Error();
            return res.text();
        }).then(body => {
            document.querySelector(`#${name}`).innerHTML = body;
        }).catch(err => throw new Error(err));
    });
})();
