// 1 正常
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

doRead(`test.txt`, `utf8`)
  .then((data) => {
    console.log(data);
     return doRead(`test1.txt`, `utf8`);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//2 執行會出現undefined + data
// const fs = require("fs");
// function doRead(path, options) {
//   return new Promise((resolve, reject) => {
//     resolve(
//       fs.readFile(path, options, (err, data) => {
//         if (err) {
//           return console.log("發生錯誤", err);
//         }
//         console.log(data);
//       })
//     );
//   });
// }

// let readfile = doRead(`test.txt`, `utf8`);
// readfile
//   .then((data) => {
//     console.log(data);
//     let readfile1 = doRead(`test1.txt`, `utf8`);
//     return readfile1;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

