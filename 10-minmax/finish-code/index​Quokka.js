function add(a, b) {
  return a + b;
}

add(4, 9);
console.log(add(3, 6));

const nums = [11, 23, 3, 12]; /*? $.slice(0,2) */
console.log(nums.pop());

const sum = nums.reduce((acc, cur) => acc + cur);
sum;

const over = nums.filter((num) => num > 20); //?
