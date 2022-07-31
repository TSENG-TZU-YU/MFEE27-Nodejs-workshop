let ary = [
  {
    id: 1,
    type: "A",
    price: 100,
  },
  {
    id: 2,
    type: "B",
    price: 200,
  },
  {
    id: 3,
    type: "A",
    price: 150,
  },
];

//1
let newAry1 = ary.map((item) => {
  if (item.type === "A") {
    return `0` ;
  } else {
    return item.price;
  }
});

console.log(newAry1);

//2
let newAry2 = ary.map((item) => {
  let result = [];
  result=[item.price*2];
  return result;
});

console.log(newAry2)

//for-loop 1
function map1(ary) {
  let result = []
  for (let i = 0; i < ary.length; i++) {
    if (ary[i].type === "A") {
      result.push("0")
    } else{
      result.push (ary[i].price)
    }
  }
  return result
}
console.log(map1(ary))


//for-loop 2
function map2(ary) {
  let result = []
  for (let i = 0; i < ary.length; i++) {
    if (ary[i]) {
      result.push([ary[i].price*2])
    } 
  }
  return result
}
console.log(map2(ary))

