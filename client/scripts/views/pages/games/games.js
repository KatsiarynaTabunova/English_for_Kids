import Component from '../../component';

import GamesTemplate from '../../../../templates/pages/games/games';


class Games extends Component {
    async render() {
        const games = [{url: '/images/family/family.jpg', gameName: 'Play "Family"'},
            {url: '/images/family/grandad.jpg', gameName: 'Play "Home Pats"'},
            {url: '/images/family/son.jpg', gameName: 'Play "Fruits"'}];
        const html = await GamesTemplate({games});
        return html;
    }
}

export default Games;