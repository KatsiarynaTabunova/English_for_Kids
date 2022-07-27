class GameModel {

    static async getGames() {
        const response = await fetch('http://localhost:3000/api/games');
        return await response.json();
    }

    static async getGameById(id) {
        return (await GameModel.getGames()).find(item => item.id == id);
    }

    static async getRandomGameItems(id, count) {
        const allGameItemsArr = (await GameModel.getGameById(id)).gameItems;
        const randIndexArr = [];

        for (let i = 0; i < count; i++) {
            getRandomInt(randIndexArr);
        }

        function getRandomInt(array) {
            // eslint-disable-next-line no-constant-condition
            while (true) {
                const randomIndex = Math.floor(Math.random() * allGameItemsArr.length);
                if (array.indexOf(randomIndex) === -1) {
                    array.push(randomIndex);
                    return randomIndex;
                }
            }
        }
        return randIndexArr.map(index => allGameItemsArr[index]);
    }
}


export default GameModel;