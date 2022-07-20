import Component from '../../component';

import GameTemplate from '../../../../templates/pages/games/game';
import GameModel from '../../../models/game-model';
import {parseCurrentURL} from '../../../helpers/utils';


class FirstLevelPage extends Component {
    async render() {
        const urlParts = parseCurrentURL();
        const game = GameModel.getGameById(urlParts.id);
        const gameItems = game.getGameItems();


        const html = await GameTemplate({game, gameItems});

        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('sound')) {
                const audio = new Audio(event.target.dataset.sound);
                audio.play();
            }
        });
        return html;
    }
}

export default FirstLevelPage;