import FamilyGame from './family-game';
import HomePetsGame from './home_pets-game';
import NumbersGame from './numbers-game';

class GameModel {
    static getGames() {
        return [{url: '/images/family/family.jpg', gameName: 'Play "Family"'},
            {url: '/images/home_pats/home_pats.jpg', gameName: 'Play "Home Pats"'},
            {url: '/images/numbers/all_numbers.jpg', gameName: 'Play "Numbers"'}];
    }

    static getMyGames() {
        return [new FamilyGame(), new HomePetsGame(), new NumbersGame()];
    }

    static getGameById(id) {
        return GameModel.getMyGames().find(item => item.id == id);
    }
}

export default GameModel;