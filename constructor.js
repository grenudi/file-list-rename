const fs = require("fs");
const {join} = require("path");

const constructor = function (path){
  this.path = join(__dirname,path);
  this.list = [];
  fs.readdirSync(this.path).forEach(file => this.list.push(file));
  this.run = function (pattern,ending) {
    //reform - function to reform file name using specified pattern returns reformed name
    this.list.forEach(name=>{
      pattern(name).then(newname=>fs.rename(this.path+"/"+name , this.path+"/"+ newname + "_" + ending));
    });
    console.log("DONE");
  }
}

module.exports = constructor;
