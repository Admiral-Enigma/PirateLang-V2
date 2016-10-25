#!/usr/bin/env node
var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs');
const request = require('request');

var is = {
  version: '1.2.15',
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

var updater = {
  updateServer: 'http://138.68.90.27:443/update',
  update: function(){
    request(this.updateServer, function (err, res, body) {
        if (!err && res.statusCode === 200) {
          var data = JSON.parse(body);
          if(is.getVersion() == data.newversion){
            console.log('You have the newest version of PirateLang :D');
          }else{
            console.log('Update available '+data.newversion+"\nChangelog:\n"+data.newstuff);
            console.log('Run "npm i piratelang -g" to update');
          }
        }else{
          console.log('Got error'+ err);
        }
    });
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

if(argv.u){
  updater.update();
}
