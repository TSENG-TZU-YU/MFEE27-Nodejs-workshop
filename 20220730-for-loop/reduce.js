let ary = [
  {
    id: 1,
    type: 'A',
    price: 100,
  },
  {
    id: 2,
    type: 'B',
    price: 200,
  },
  {
    id: 3,
    type: 'A',
    price: 150,
  },
];

//加總價錢
let result = ary.reduce((acc, cur) => acc + cur.price, 0);
// console.log(result);

//for-loop
function reduce(ary) {
  let result = 0;
  for (let i = 0; i < ary.length; i++) {
    result += ary[i].price;
  }
  return result;
}
console.log(reduce(ary));
