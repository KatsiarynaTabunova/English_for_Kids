const express = require('express'),
    router = express.Router(),
    config = require('config'),
    fs = require('file-system');

router.get('/api/games', (req, res) => {
    const gamesData = getGamesFromDB();

    res.send(gamesData);
});

router.get('/api/game/:id', (req, res) => {
    const gamesData = getGamesFromDB(),
        id = +req.params.id,
        game = JSON.parse(gamesData).find(game => game.id === id);

    game ? res.send(game) : res.status(404).send({error: `Game with given ID=${id} was not found`});
})

function getGamesFromDB() {
    return fs.readFileSync(config.get('database.games'), 'utf8');
}

module.exports = router;