var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'q-a'
    },
    port: process.env.PORT || 80,
    db: 'mongodb://localhost/quizdb'
  },

  test: {
    root: rootPath,
    app: {
      name: 'q-a'
    },
    port: process.env.PORT || 80,
    db: 'mongodb://localhost/quizdb'
  },

  production: {
    root: rootPath,
    app: {
      name: 'q-a'
    },
    port: process.env.PORT || 80,
    db: 'mongodb://localhost/quizdb'
  }
};

module.exports = config[env];
