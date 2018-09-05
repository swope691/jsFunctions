// Square the given number x
function square1(x) {
  let name = x;
  x = Math.pow(x,2);
  return x;// TODO: complete the function code
}

// Square the given number x
const square2 = x => Math.pow(x,2);// TODO: complete the function code

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25

const min = (x, y) =>{
  if (x>y)
    return y;
  if (x<y)
    return x
  if (x=y)
    return x;
}
console.log(min(4.5, 5)); //Must Show 4.5
console.log(min(19, 9)); //Must Show 9
console.log(min(1, 1)); //Must Show 1
