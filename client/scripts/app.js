import '../styles/app';

import {parseCurrentURL} from './helpers/utils.js';

import Header from './views/partials/header.js';
import Footer from './views/partials/footer.js';

import AddAndList from './views/pages/tasks/add-list.js';
import Info from './views/pages/tasks/info.js';
import Edit from './views/pages/tasks/edit.js';

import About from './views/pages/about.js';
import Error404 from './views/pages/error404.js';
import Games from './views/pages/games/games';
import GameFamily from './views/pages/games/game-family';


const Routes = {
    '/': About,
    '/tasks': AddAndList,
    '/task/:id': Info,
    '/task/:id/edit': Edit,
    '/games': Games,
    '/family': GameFamily
};

function router() {
    (async() => {
        const headerContainer = document.getElementsByClassName('header-container')[0],
            contentContainer = document.getElementsByClassName('content-container')[0],
            header = new Header();

        const urlParts = parseCurrentURL(),
            pagePath = `/${urlParts.page || ''}${urlParts.id ? '/:id' : ''}${urlParts.action ? `/${urlParts.action}` : ''}`,
            page = Routes[pagePath] ? new Routes[pagePath]() : new Error404();

        headerContainer.innerHTML = await header.render();

        const pageData = await page.getData();
        contentContainer.innerHTML = await page.render(pageData);
        page.afterRender();
    })();
}

(async() => {
    const footerContainer = document.getElementsByClassName('footer-container')[0],
        footer = new Footer();

    footerContainer.innerHTML = await footer.render();
})();

module.hot ? module.hot.accept(router()) : (window.onload = router);
window.onhashchange = router;