#!/usr/bin/env node
var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs');
var version = '1.2.10';
var interpreter = require('./core.js');

if(argv.f){
  var program = fs.readFileSync(argv.f, 'utf8');
  console.log(program);
  interpreter.run(program);
}
if(argv.v){
  //var packageJson = fs.readFileSync('./package.json', 'utf8');
  //var packageP = JSON.parse(packageJson);
  console.log('PirateLang: '+version);
}
if(argv.h){
  console.log('PirateLang Commands:\n-f   : takes an file as input and will then run that file\n-v   : prints out the version number\n-h   : will bring up this list');
}
