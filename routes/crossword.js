const Router = require('koa-router');
const crosswordControllers = require('../controllers/crossword');

const {
  getCrossword,
  getCrosswords,
  getRandomCrossword,
  getRandomSundayCrossword,
  test
} = crosswordControllers;

const router = new Router({ prefix: '/crossword' });

router.get('/get-crossword/:id', getCrossword);
router.get('/get-crosswords', getCrosswords);
router.get('/get-random-crossword', getRandomCrossword);
router.get('/get-random-sunday-crossword', getRandomSundayCrossword);
router.get('/test', test);

module.exports = router;
