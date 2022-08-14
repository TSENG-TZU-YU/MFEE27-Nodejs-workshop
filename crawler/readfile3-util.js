const fs = require('fs');
const util = require('util');

let readfilePromise = util.promisify(fs.readFile);

// let readfilePromise = new Promise((resolve, reject) => {
//   // error-first callback style
//   fs.readFile('test.txt', 'utf-8', (err, data) => {
//     if (err) {
//       return reject(err);
//     }
//     resolve(data);
//   });
// });

readfilePromise('test.txt', 'utf-8')
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.error(e);
  });