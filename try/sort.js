let number = [30, 20, 1, 5];

number.sort(function (a, b) {
  return a - b;
});

// console.log(number);

let items = [
  { name: "Edward", age: 21 },
  { name: "Sharpe", age: 37 },
  { name: "And", age: 45 },
  { name: "The", age: 21 },
  { name: "Magnetic", age: 45 },
  { name: "Zeros", age: 37 },
];

//先拆陣列
// let arrAge = items.map((item) => item.age);
// let ageItem = [...(new Set(arrAge))];
let itemAge= items.sort(function(a,b){
  return b.age-a.age;
})
//  console.log(itemAge);

let result=itemAge.filter(function(item){
  return item.age=items.age;
})
console.log(result)



//  let resultMap = ageItem.map(function(age){
//     let result = items.filter(function(item){
//       return item.age===age;
//     })
//     return result;
//  }) 

  // console.log(resultMap);

// let resultMap = arrAge.map(function (age) {
//   let result = items.filter(function (item) {
//     return item.age === age;
//   });
//   return result;
// });


// items.sort(function (a, b) {
//   return b.age - a.age;
// });
