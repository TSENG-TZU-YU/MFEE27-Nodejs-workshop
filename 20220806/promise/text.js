
function doWork(job, timer) {
    // TODO: 做一個 promise 物件
    // TODO: 需要傳入一個 executor 給這個物件的建構式
    // TODO: 要把非同步工作(setTimeout) 放進這個 executor
    // TODO: 失敗就呼叫 reject
    // TODO: 成功就呼叫 resolve
    return new Promise((resolve, reject)=>{
        setTimeout (){
            let dt =new Date();
            
        }
    })
        
        
  }
  
  let dt = new Date();
  console.log(`開始工作 at ${dt.toISOString()}`);
  // 刷牙(3) => 吃早餐(5) => 寫功課(3)
  
  // TODO: 利用 doWork 做一個刷牙的 promise
  // TODO: 如果 刷牙 promise 最終成功，就印出資訊，然後接著做吃早餐 promise
  // TODO: 如果 吃早餐 promise 最終成功，就印出資訊，然後接著做寫功課 promise
  // TODO: 如果 寫功課 promise 最終成功，就印出資訊
  // TODO: 會用 catch 去接住以上所有 promise 的 reject