const Crossword = require('../models/crossword');

/**
 * getUsers  - Returns JSON for all users
 * @returns {Array} - Array of users
 */
exports.getCrosswords = async (ctx, next) => {
  try {
    console.log('trying to get crosswords..')
    const crosswords = await Crossword.find({});
    console.log('just after crossword.find()');
    console.log(crosswords);
    ctx.status = 200;
    ctx.body = Object.assign(crosswords);
    await next();
  } catch (err) {
    console.log('get-crosswords errored out..')
    console.log(err);
    ctx.throw(500, err);
  }
};

/**
 * getUser  - Returns JSON for specified user
 * @returns {Object}  - Single user object
 */
exports.getCrossword = async (ctx, next) => {
  try {
    //console.log('trying to get crossword..' + ctx.params.id)
    const crossword = await Crossword.findById(ctx.params.id);
    ctx.status = 200;
    ctx.body = Object.assign(crossword);
    await next();
  } catch (err) {
    ctx.throw(500, err);
  }
};

/**
 * getUser  - Returns JSON for specified user
 * @returns {Object}  - Single user object
 */
exports.getRandomCrossword = async (ctx, next) => {
  try {
    //console.log('trying to get crossword..' + ctx.params.id)
    const crossword = await Crossword.aggregate([{ $sample: { size: 1 } }]);
    ctx.status = 200;
    ctx.body = Object.assign(crossword);
    await next();
  } catch (err) {
    ctx.throw(500, err);
  }
};

exports.test = async (ctx, next) => {
  ctx.status = 200;
  await next();
}