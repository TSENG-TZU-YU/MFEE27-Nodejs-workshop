const express = require('express');
const router = express.Router();

const pool = require('../utils/db.js');

// 相同路徑可以拿出去
router.get('/', async (req, res, next) => {
  let [data] = await pool.execute('SELECT * FROM stocks');
  //   console.log(data);
  res.json(data);
});

// 列出某個股票代碼的所有報價資料
// GET /stocks/2330
router.get('/:stockId', async (req, res, next) => {
  const stockId = req.params.stockId;

  // 分頁
  // 透過 query string 取得目前要第幾頁的資料
  const page = req.query.page || 1;
  // 如果沒有設定，就預設要第一頁的資料
  const perPage = 4;

  // 取得總筆數
  let [total] = await pool.execute('SELECT COUNT(*) AS total FROM stock_prices WHERE stock_id=?', [stockId]);
  total = total[0].total;
  // console.log(total);

  // 從 total 與 perPage 算出總頁數 (Math.ceil 無條件進位 Math.floor 無條件捨去)
  const lastPage = Math.ceil(total / perPage);

  //計算取得該頁資料須要跳過幾筆
  // 第一頁跳過 0 筆 所以要 page-1
  const offset = perPage * (page - 1);

  // 去資料庫撈資料
  // let [data] = await pool.execute('SELECT * FROM stock_prices WHERE stock_id=?', [stockId]);
  // 根據 perPage 及 offset 從資料庫取得該頁資料
  let [data] = await pool.execute('SELECT * FROM stock_prices WHERE stock_id=? ORDER BY date LIMIT ? OFFSET ?', [stockId, perPage, offset]);
  //  把取得的資料回覆給前端
  res.json({
    pagination: {
      total,
      perPage,
      page,
      lastPage,
    },
    data,
  });
});

module.exports = router;
