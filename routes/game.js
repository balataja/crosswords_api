const Router = require('koa-router');
const gameControllers = require('../controllers/game');

const {
  getGame,
  getGames,
  addGame,
  joinGame,
} = gameControllers;

const router = new Router({ prefix: '/game' });

router.get('/get-game/:id', getGame);
router.get('/getgame/:id', getGame);
router.get('/get-games/:id', getGames);
router.get('/getgames/:id', getGames);
router.post('/add-game', addGame);
router.post('/addgame', addGame);
router.post('/join-game', joinGame);
router.post('/joingame', joinGame);

module.exports = router;
