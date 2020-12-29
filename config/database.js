module.exports = () => {
  // Default to dev presets
  const dbConfig = {
    //url: 'mongodb://localhost:27017/crosswordsDb',
    url: 'mongodb://jamesUsr:test1234@ds045897.mlab.com:45897/heroku_t380f0c8',
    opts: {
      useMongoClient: true,
      autoReconnect: true,
      keepAlive: 300000,
    },
  };

  switch (process.env.NODE_ENV) {
    case 'production':
      //Object.assign(dbConfig, {url: 'mongodb://jamesUsr:test1234@ds045897.mlab.com:45897/heroku_t380f0c8'})
      Object.assign(dbConfig, {url: 'mongodb+srv://jamesUsr:test1234@cluster-t380f0c8.hwlnz.mongodb.net/heroku_t380f0c8?retryWrites=true&w=majority'})
      //mongodb+srv://<username>:<password>@cluster-t380f0c8.hwlnz.mongodb.net/heroku_t380f0c8?retryWrites=true&w=majority
      //mongodb://<username>:<password>@cluster-t380f0c8-shard-00-00.hwlnz.mongodb.net:27017,cluster-t380f0c8-shard-00-01.hwlnz.mongodb.net:27017,cluster-t380f0c8-shard-00-02.hwlnz.mongodb.net:27017/heroku_t380f0c8?ssl=true&replicaSet=atlas-55brtd-shard-0&authSource=admin&retryWrites=true&w=majority
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
