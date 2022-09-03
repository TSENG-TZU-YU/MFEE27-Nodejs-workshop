const express = require('express');
const pool = require('../utils/db');
const router = express.Router();

// 可以針對這個 router 使用某些中間件
// router.use(express.json());

// for hash password
const bcrypt = require('bcrypt');

// /api/1.0/auth/register
router.post('/api/0.0/auth/register', async (req, res, next) => {
  // 確認資料有沒有收到
  console.log('register', req.body);
  // TODO: 驗證來自前端的資料
  // TODO: 檢查 email 有沒有重複
  // 方法1: 交給 DB: 把 email 欄位設定成 unique
  // 方法2: 我們自己去檢查 -> 去資料撈撈看這個 email 有沒有存在

  // 抓到email
  let [members] = await pool.execute(`SELECT * FROM members WHERE email=?`, [req.body.email]);
  console.log('members', members);
  // 判斷是否註冊過
  // member 長度-> 0 表示 沒註冊過
  if (members.length === 0) {
    // 密碼雜湊
    let hashPassword = await bcrypt.hash(req.body.password, 10);
    // 存到資料庫
    let result = await pool.execute('INSERT INTO members (email, password, name) VALUES (?, ?, ?);', [req.body.email, hashPassword, req.body.name]);
    console.log('insert new member', result);
    // 回覆前端
    res.json({ message: 'ok' });
  }
  //     TODO: 如果有，回覆 400 跟錯誤訊息
  else {
    // members 的長度 > 0 -> 有資料 -> 這個 email 註冊過
    return res.status(400).json({ message: '這個 email 已經註冊過' });
  }

  // TODO: 密碼要雜湊 hash
  // TODO: 資料存到資料庫
  // TODO: 回覆前端
  // res.json({}); // 沒寫會顯示(待處理)
});

module.exports = router;

// 針對這一個有用
// router.post('/api/0.0/auth/register',express.json(), (req, res, next)
