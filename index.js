const fs = require('fs');
const path = require('path');

const deploy = require('jsforce-deploy')();

/** Deploys migrations in lex order from dir **/
const migrate = function(dir) {

  fs.readdir(dir, function(err, files) {
    if(err) {
      console.error(err);
    } else {
      for(file of files) {
        deploy(`${dir}${path.sep}${file}`);
      } 
    }
  });
};

module.exports = migrate;
