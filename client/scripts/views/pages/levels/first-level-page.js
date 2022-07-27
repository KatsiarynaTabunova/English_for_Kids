import Component from '../../component';

import FirstLevelTemplate from '../../../../templates/pages/levels/first-level-template';
import GameModel from '../../../models/game-model';
import {parseCurrentURL} from '../../../helpers/utils';


class FirstLevelPage extends Component {
    async render() {
        const urlParts = parseCurrentURL();
        const game = await GameModel.getGameById(urlParts.id);
        const gameItems = game.gameItems;

        return await FirstLevelTemplate({game, gameItems});
    }

    async afterRender() {
        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('sound')) {
                const audio = new Audio(event.target.dataset.sound);
                audio.play();
            }
        });
    }
}

export default FirstLevelPage;