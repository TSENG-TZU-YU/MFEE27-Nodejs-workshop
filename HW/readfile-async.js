const fs = require("fs");
function doRead(path, options) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, options, (err, data) => {
      if (err) {
        return reject("發生錯誤", err);
      }
      resolve(data);
    });
  });
}

async function test() {
  try {
    let result=await doRead(`test.txt`, `utf8`);
    console.log(result)
    let result1=await doRead(`test1.txt`, `utf8`);
    console.log(result1)
    await doRead(`test2.txt`, `utf8`);
  } catch (err) {
    console.error(err);
  }
}
test();

