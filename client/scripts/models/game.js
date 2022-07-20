class Game {
    constructor(id, gameName, url) {
        this.id = id;
        this.gameName = gameName;
        this.url = url;
    }

    getGameItems() {
        return [];
    }
    getRandomGameItems() {
        const allGameItemsArr = this.getGameItems();
        const randIndexArr = [];

        for (let i = 0; i < 6; i++) {
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

export default Game;