import Component from '../../component';

import GameTemplate from '../../../../templates/pages/games/game';


class Game extends Component {
    async render() {
        const html = await GameTemplate();
        return html;
    }
}

export default Game;