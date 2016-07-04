const fs = require('fs');

const deploy = require('./lib/deploy')();

/** Deploys migrations in lex order from dir **/
const migrate = function(dir) {

  fs.readdir(dir, function(err, files) {
    if(err) {
      console.error(err);
      return;
    } else {
      for(file of files) {
        deploy(file);
      } 
    }
  });
};

module.exports = migrate;
