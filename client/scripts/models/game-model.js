import FamilyGame from './family-game';
import HomePetsGame from './home_pets-game';

class GameModel {
    static getGames() {
        return [{url: '/images/family/family.jpg', gameName: 'Play "Family"'},
            {url: '/images/home_pats/home_pats.jpg', gameName: 'Play "Home Pats"'}];
    }

    static getMyGames() {
        return [new FamilyGame(), new HomePetsGame()];
    }

    static getGameById(id) {
        return GameModel.getMyGames().find(item => item.id == id);
    }
}

export default GameModel;