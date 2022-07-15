import Component from '../../component';

import GameTemplate from '../../../../templates/pages/games/game';
import GameModel from '../../../models/game-model';


class Game extends Component {
    async render() {
        const gameItems = GameModel.getGameItems();

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