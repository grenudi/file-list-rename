module.exports = {
  numToStr : function(name){
    return new Promise((ok,notok)=>{
      const reg = /\d+/;
      let cut = reg.exec(name);
      if(cut)
        ok(cut[0].split("").map(x=>String.fromCharCode(parseInt(x,10)+97)).join(""));
      else
        console.error("NO mutch for: "+reg+" in: "+name);
    });
  }
}
