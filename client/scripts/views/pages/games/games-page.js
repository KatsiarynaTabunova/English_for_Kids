import Component from '../../component';

import GamesTemplate from '../../../../templates/pages/games/games';
import GameModel from '../../../models/game-model';


class GamesPage extends Component {
    async render() {
        const games = GameModel.getMyGames();
        const html = await GamesTemplate({games});
        return html;
    }
}

export default GamesPage;