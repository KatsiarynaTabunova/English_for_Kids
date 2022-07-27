import Component from '../../component';

import GamesTemplate from '../../../../templates/pages/games/games-template';
import GameModel from '../../../models/game-model';


class GamesPage extends Component {
    async render() {
        const games = GameModel.getGames();
        return await GamesTemplate({games});
    }
}

export default GamesPage;