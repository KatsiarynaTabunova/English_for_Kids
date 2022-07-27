import FamilyGame from './family-game';
import HomePetsGame from './home_pets-game';
import NumbersGame from './numbers-game';

class GameModel {
//     static async getGames() {
//         const response = await fetch('http://localhost:3000/api/games');
// console.log(await response.json());
//         return await response.json();
//     }
    static getGames() {
        // console.log(JSON.stringify([new FamilyGame(), new HomePetsGame(), new NumbersGame()]));
        return [new FamilyGame(), new HomePetsGame(), new NumbersGame()];
    }

    static getGameById(id) {
        return GameModel.getGames().find(item => item.id == id);
    }


    // static async getTask(id) {
    //     const response = await fetch(`http://localhost:3000/api/task/${id}`);
    //
    //     return await response.json();
    // }
}


export default GameModel;