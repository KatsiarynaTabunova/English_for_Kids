import Component from '../../component';

import GameFamilyTemplate from '../../../../templates/pages/games/game-family';


class GameFamily extends Component {
    async render() {
        const html = await GameFamilyTemplate();
        return html;
    }
}

export default GameFamily;