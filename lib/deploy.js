const createJsforceConnection = require('jsforce-connection');

const deploy = function(jsforce) {
  return function(dir) {
      console.log(`Deploying ${dir}`);
      const jsforce = createJsforceConnection();
  }
};


module.exports = deploy;
