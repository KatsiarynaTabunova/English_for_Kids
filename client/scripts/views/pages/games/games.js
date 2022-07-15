import Component from '../../component';

import GamesTemplate from '../../../../templates/pages/games/games';


class Games extends Component {
    async render() {
        const games = [{url: '/images/family/family.jpg', gameName: 'Play "Family"'},
            {url: '/images/home_pats/main1.jpg', gameName: 'Play "Home Pats"'}];
        const html = await GamesTemplate({games});
        return html;
    }
}

export default Games;