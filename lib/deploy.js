const createJsforceConnection = require('jsforce-connection');
const archiver = require('archiver');

const fs = require('fs');
const path = require('path');


const deploy = function(jsforce) {
  return function(dir, outDir='.') {
      const archive = archiver('zip');
      const file = path.parse(dir);
      const outFile = path.join(outDir, file.base + '.zip');
      const output = fs.createWriteStream(outFile);

      output.on('close', function() {
         console.log(`${archive.pointer()} bytes written to ${outFile}`);
      });

      archive.on('error', function(err){
         console.error(err);
      });

      archive.pipe(output);

      return createJsforceConnection().then((conn) => {
          console.log(`Deploying ${dir}`);
          archive.directory(dir, 'metadata');
          archive.finalize();
      });
  }
};


module.exports = deploy;
