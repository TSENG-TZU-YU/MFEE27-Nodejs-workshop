const fs = require("fs");

let path = require(`path`)

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



