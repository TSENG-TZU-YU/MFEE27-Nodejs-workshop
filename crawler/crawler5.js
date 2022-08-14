// 用 axios 去目標 API 抓資料
// await 版本
// 更好的參數設定
// 1. 自動取得今日日期 （可能利用 cron 排程工具 系統每日自動執行）
// 2. 從檔案中讀取股票代碼
// 查到股票代碼的中文名稱
// 存到 db
const axios = require('axios');
const moment = require('moment');
const fs = require('fs/promises');
const mysql = require('mysql2');
require('dotenv').config();

// 開始抓資料
// 2330 台積電
// 2603 長榮
// axios.get(url, 設定)
(async () => {
  // let, const:  block scope {}
  // var: function scope
  // console.log('DB_HOST', process.env.DB_HOST);
  let connection;
  try {
    // access deny: 通常是帳號密碼不對
    // connection 失敗: 通常是 host/port 設錯、或是 mysql 根本沒開好
    connection = mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    // 需要從 stock.txt 的檔案裡讀取股票代碼
    let stockNo = await fs.readFile('stock.txt', 'utf-8'); // 2603

    // 去查詢股票代碼的中文名稱
    // https://www.twse.com.tw/zh/api/codeQuery?query=2330
    let queryNameResponse = await axios.get('https://www.twse.com.tw/zh/api/codeQuery', {
      params: {
        query: stockNo,
      },
    });
    // console.log(queryNameResponse.data);
    let suggestions = queryNameResponse.data.suggestions;
    let suggestion = suggestions[0];
    if (suggestion === '(無符合之代碼或名稱)') {
      console.error(suggestion);
      throw new Error(suggestion);
    }
    let stockName = suggestion.split('\t').pop();
    console.log('stockName', stockName);
    // INSERT INTO stocks (id, name) VALUES ('2330', '台積電')
    // 自己串 sql 字串: 容易出錯、有資訊安全上的風險 sql injection
    // connection.query
    let saveNameResult = connection.execute(`INSERT IGNORE INTO stocks (id, name) VALUES (?, ?)`, [stockNo, stockName]);
    // console.log(saveNameResult);
    let queryDate = moment().format('YYYYMMDD'); //'20220814';
    let response = await axios.get(`https://www.twse.com.tw/exchangeReport/STOCK_DAY`, {
      params: {
        response: 'json',
        date: queryDate,
        stockNo: stockNo,
      },
    });
    // console.log(response.data);
    // batch insert / bulk insert 這個效能通常會比一筆一筆 insert 好一點
    let data = response.data.data.map((d) => {
      d = d.map((value) => {
        // regular expression 的方式
        return value.replace(/,/g, '');
        // value.split(',').join("")
      });

      // split => [0] + 1911 => join
      d[0] = parseInt(d[0].replace(/\//g, ''), 10) + 19110000;
      // 111/08/12 -> 1110812
      d.unshift(stockNo);
      // console.log(d);
      return d;
    });

    // console.log('data', data);
    let savePriceResult = await connection
      .promise()
      .query('INSERT IGNORE INTO stock_prices (stock_id, date, volume, amount, open_price, high_price, low_price, close_price, delta_price, transactions) VALUES ?', [data]);
    console.log(savePriceResult);
  } catch (e) {
    console.error(e);
  } finally {
    if (connection) {
      // 關掉連線
      connection.end();
    }
  }
})();
