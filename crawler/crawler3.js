// 1. 自動取得今日日期 （可能利用 cron 排程工具 系統每日自動執行）
// 2. 從檔案中讀取股票代碼
const axios = require("axios");
const moment = require("moment");

// 開始抓資料
// 2330 台積電
// 2603 長榮
let fsPromise = require("fs/promises");
// let stockNo = fsp(); // TODO: 需要從 stock.txt 的檔案裡讀取股票代碼
let queryDate = moment().format("YYYYMMDD"); //'20220814';

// fsPromise.readfile('stock.txt', 'utf-8')

async function fsp() {
  try {
    let fs = await fsPromise.readFile("stock.txt", "utf-8");
    console.log(fs);
  } catch (e) {
    console.error(e);
  }
}

// axios.get(url, 設定)
(async () => {
try {
    let response = await axios.get(
      `https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=tse_%3C`,
      {
        params: {
          response: "json",
          date: queryDate,
          stockNo: fsp(),
        },
      }
    );
    console.log(response.data);
  } catch (e) {
    console.error(e);
  }
})();

// https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=tse_%3C
