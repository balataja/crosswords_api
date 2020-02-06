module.exports = () => {
  // Default to dev presets
  const dbConfig = {
    //url: 'mongodb://localhost:27017/crosswordsDb',
    url: 'mongodb://heroku_t380f0c8:osuscholar91@ds045897.mlab.com:45897/heroku_t380f0c8',
    opts: {
      useMongoClient: true,
      autoReconnect: true,
      keepAlive: 300000,
    },
  };

  switch (process.env.NODE_ENV) {
    case 'production':
      Object.assign(dbConfig, {url: 'mongodb://heroku_t380f0c8:osuscholar91@ds045897.mlab.com:45897/heroku_t380f0c8'})
      //Object.assign(dbConfig, { url: process.env.MONGODB_URI || 'mongodb://localhost:27017/crosswordDb' });
      break;
    case 'stage':
      break;
    case 'test':
      Object.assign(dbConfig, { url: 'mongodb://localhost:27017/crosswordDb' });
      break;
    case 'dev':
    default:
      break;
  }

  return dbConfig;
};
