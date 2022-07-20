import '../styles/app';
import {parseCurrentURL} from './helpers/utils.js';
import Header from './views/partials/header.js';
import MainPage from './views/pages/main-page.js';
import Error404Page from './views/pages/error404-page.js';
import GamesPage from './views/pages/games/games-page';
import FirstLevelPage from './views/pages/levels/first-level-page';
import SecondLevelPage from './views/pages/levels/second-level-page';

const Routes = {
    '/': MainPage,
    '/games': GamesPage,
    '/first-level/:id': FirstLevelPage,
    '/second-level/:id': SecondLevelPage
};

function router() {
    (async() => {
        const headerContainer = document.getElementsByClassName('header-container')[0],
            contentContainer = document.getElementsByClassName('content-container')[0],
            header = new Header();

        const urlParts = parseCurrentURL(),
            pagePath = `/${urlParts.page || ''}${urlParts.id ? '/:id' : ''}${urlParts.action ? `/${urlParts.action}` : ''}`,
            page = Routes[pagePath] ? new Routes[pagePath]() : new Error404Page();

        headerContainer.innerHTML = await header.render();

        const pageData = await page.getData();
        contentContainer.innerHTML = await page.render(pageData);
        page.afterRender();
    })();
}

module.hot ? module.hot.accept(router()) : (window.onload = router);
window.onhashchange = router;