import Component from '../../component';
import ThirdLevelTemplate from '../../../../templates/pages/levels/third-level-template';

import GameModel from '../../../models/game-model';
import {parseCurrentURL} from '../../../helpers/utils';

class ThirdLevelPage extends Component {
    async render() {
        const urlParts = parseCurrentURL();
        const game = GameModel.getGameById(urlParts.id);
        const gameItems = game.getGameItems();

        const html = await ThirdLevelTemplate({game, gameItems});

        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('third-level__sound')) {
                const audio = new Audio(event.target.dataset.sound);
                audio.play();
            }
        });
        // afterRender() {
        //     // const mainContainer = document.getElementsByClassName('third-level__container')[0];
        //     const fieldsBlock = document.getElementsByClassName('third-level__field-list')[0];
        //
        //     fieldsBlock.innerHTML = {gameItems};
        // }
        return html;
    }
}

export default ThirdLevelPage;