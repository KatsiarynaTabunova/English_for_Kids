import Component from '../../component';

import GamesTemplate from '../../../../templates/pages/games/games';
import GameModel from '../../../models/game-model';


class Games extends Component {
    async render() {
        const games = GameModel.getGames();
        const html = await GamesTemplate({games});
        return html;
    }
}

export default Games;