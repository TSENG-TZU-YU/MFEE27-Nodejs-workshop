//方法1
function sum(n) {
  // 1+2+3..
  let res = 0;
  for (let i = 0; i <= n; i++) {
    res += i;
  }

  return res;
}

//方法2
function sum2(n) {
  return (n + 1 + n) / 2;
}

//方法3
//遞迴 recursive  遞迴只應天上有，凡人應當用迴圈

function sum3(n) {}

console.log(sum(1)); //1
console.log(sum(3)); //6
console.log(sum(5)); //15

//小賴
// let result = 0;
// prettier => 幫你排版
// ESLint => 語法檢查

// leetcode

// 時間複雜度
// 不是絕對時間，比較像是「步驟數」

// A. for-loop
function sum1(n) {
  // 1 + 2 + 3 +..... + n
  let result = 0;
  for (let i = 1; i <= n; i++) {
    // 這行的執行次數會跟輸入成「正比」
    // 時間複雜度 O(n)
    result += i;
  }
  return result;
}

// B. 公式解
function sum2(n) {
  // 不管 n 多少，這行都只跑 1 次
  // 時間複雜度 O(1) -> 常數
  return ((n + 1) * n) / 2;
}

console.log(sum1(1), sum2(1)); // 1
console.log(sum1(3), sum2(3)); // 6
console.log(sum1(10), sum2(10)); // 55

console.time('SUM1');
for (let i = 1; i <= 100000; i++) {
  sum1(100000);
}
console.timeEnd('SUM1');

console.time('SUM2');
for (let i = 1; i <= 100000; i++) {
  sum2(100000);
}
console.timeEnd('SUM2');

function test(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 如果這裡有一行計算
      // O(n^2)
    }
  }
}

// 遞迴 recursive
// 遞迴只應天上有，凡人應當用迴圈
// 資料結構 & 演算法
function sum3(n) {
  if (n === 1) {
    return n;
  }
  return sum3(n - 1) + n;
}

// 寫法 4: reduce
