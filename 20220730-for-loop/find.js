let arr = [
  {
    id: 1,
    type: 'A',
    price: 100,
  },
  {
    id: 2,
    type: 'B',
    price: 250,
  },
  {
    id: 3,
    type: 'c',
    price: 150,
  },
  {
    id: 4,
    type: 'c',
    price: 150,
  },
];

//找價錢為150的

let result = arr.find((item) => {
  return item.price == '150';
});

//console.log(result);

// for-loop
function found(ary) {
  let result = [];
  for (let i = 0; i < ary.length; i++) {
    if (ary[i].price == '150') {
      result.push(ary[i]);
      break;
    }
  }
  return result;
}
console.log(found(arr));
