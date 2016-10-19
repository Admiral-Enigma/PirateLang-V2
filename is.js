#!/usr/bin/env node
var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs');
var interpreter = require('./core.js');
var packageJson = fs.readFileSync('./package.json', 'utf8');
var packageP = JSON.parse(packageJson);
if(argv.f){
  var program = fs.readFileSync(argv.f, 'utf8');
  console.log(program);
  interpreter.run(program);
}
if(argv.v){
  console.log('PirateLang: '+packageP.version);
}
