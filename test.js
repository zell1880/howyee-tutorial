// Return the nth triangular number
function triangular( n ) {
  // 1, 2 ,3 ,4 pattern
  let sum = 0;
  for(let i = n; i > 0 ;i--){
    sum += i
  }
  return sum;
}
triangular(7)