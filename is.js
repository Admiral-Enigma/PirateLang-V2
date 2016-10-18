var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs');
var interpre = require('./core.js');
console.dir(argv);
function readProgram(input) {
  var d = '';
  fs.readFile(input,function (err , data) {
    if(err) throw err;
    d = data;
    console.log(data);
  });
  return d;
}

interpre.run('do(print("Hej"))');
