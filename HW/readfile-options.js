// fs.readFile(fileName [,options], callback)
// options: options 可能是一個物件或字串，包含"編碼"及"flag"。這裡預設的編碼是 utf8 , flag是 “r"。

const fsPromise = require("fs").promises;

//const fsPromise = require("fs")
// let fsPromise = fs.promises;

//1
(async ()=>{
  try{
    let filehandle= await fsPromise.readFile('test.txt','utf8')
    console.log(filehandle);
  }catch(e){
    console.log('error', e)
  }
})();

//2 
/*async  function readfile(path, encoding){
  try{
    let filehandle=
    await fsPromise.open(path,'r+')
    let data=
    await filehandle.readFile(encoding);
    console.log(data);
  }catch(e){
    console.log('error', e)
  }
}

readfile('test.txt','utf8');
readfile('test1.txt','utf8');*/
