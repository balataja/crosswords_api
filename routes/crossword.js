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
router.get('/get_crossword/:id', getCrossword);
router.get('/get_crosswords', getCrosswords);
router.get('/get_random_crossword', getRandomCrossword);
router.get('/get_random_sunday_crossword', getRandomSundayCrossword);
router.get('/test', test);

module.exports = router;
