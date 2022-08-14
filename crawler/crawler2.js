// await 版本
// 更好的參數設定
// 1. npm i axios
// 2. require 引用
const axios = require("axios");

// 開始抓資料
// 2330 台積電
// 2603 長榮
let stockNo = 2603;
let queryDate = "20220814";

(async () => {
  try {
    // let response = await.axios.get('https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20220813&stockNo=2330&_=1660378514253')
    let response = await axios.get(
      "https://www.twse.com.tw/exchangeReport/STOCK_DAY",
      {
        params: {
          response: "json",
          date: queryDate,
          stockNo: stockNo,
        },
      }
    );
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
})();
