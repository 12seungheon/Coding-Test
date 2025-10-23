const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let cur = arr[0];
let max = arr[0];

for (let i = 1; i < N; i++) {
  if (cur + arr[i] < arr[i]) {
    cur = arr[i];
  } else {
    cur = cur + arr[i];
  }

  if (cur > max) {
    max = cur;
  }
}

console.log(max);
