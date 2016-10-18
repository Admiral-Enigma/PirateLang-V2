var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs');
var interpreter = require('./core.js');
var program = fs.readFileSync(argv.f, 'utf8');
console.log(program);

interpreter.run(program);
