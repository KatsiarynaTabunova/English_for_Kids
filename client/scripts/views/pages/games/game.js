import Component from '../../component';

import GameTemplate from '../../../../templates/pages/games/game';
import GameModel from '../../../models/game-model';
import {parseCurrentURL} from '../../../helpers/utils';


class Game extends Component {
    async render() {
        const urlParts = parseCurrentURL();

        const gameItems = GameModel.getGameById(urlParts.id).getGameItems();

        const html = await GameTemplate({gameItems});

        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('sound')) {
                const audio = new Audio(event.target.dataset.sound);
                audio.play();
            }
        });
        return html;
    }
}

export default Game;