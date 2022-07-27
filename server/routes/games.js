const express = require('express'),
    router = express.Router(),
    config = require('config'),
    fs = require('file-system');

router.get('/api/games', (req, res) => {
    const gamesData = getGamesFromDB();

    res.send(gamesData);
});

function getGamesFromDB() {
    return fs.readFileSync(config.get('database.games'), 'utf8');
}

module.exports = router;