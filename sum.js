function sum(n){
   // 1+2+3..
   let res=0;
   for(let i=0; i<=n; i++){
    res+=i;
    
   }

   return res;
}

console.log(sum(1));//1
console.log(sum(3));//6
console.log(sum(5));//15

