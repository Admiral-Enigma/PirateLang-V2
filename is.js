#!/usr/bin/env node
var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs');
//var interpreter = require('./core.js');

var is = {
  version: '1.2.13',
  getVersion: function () {
    return this.version;
  },
  interpreter: require('./core.js'),
  help: 'PirateLang Commands:\n-f   : takes an file as input and will then run that file\n-v   : prints out the version number\n-h   : will bring up this list',
  getHelp: function(){
    return this.help;
  },
  run: function(path){
    var program = fs.readFileSync(path, 'utf8');
    console.log(program);
    this.interpreter.run(program);
  }
}
if(argv.f){
  is.run(argv.f);
}
if(argv.v){
  console.log(is.getVersion());
}
if(argv.h){
  console.log(is.getHelp());
}
