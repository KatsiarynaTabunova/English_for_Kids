import Component from '../../component';

import FirstLevelTemplate from '../../../../templates/pages/levels/first-level';

import RandomImagesTemplate from '../../../../templates/pages/levels/random-images';
import GameModel from '../../../models/game-model';

class FirstLevel extends Component {
    async render() {
        return await FirstLevelTemplate();
    }

    afterRender() {
        const blockImages = document.getElementsByClassName('container-level1__images')[0];
        const gameItems = GameModel.getRandomGameItems();
        blockImages.innerHTML = RandomImagesTemplate({gameItems});
    }
}

export default FirstLevel;