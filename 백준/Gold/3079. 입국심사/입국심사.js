const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const TIMES = input.map(Number);

TIMES.sort((a, b) => a - b);

TIMES.sort((a, b) => a - b);
let min = BigInt(1);
let max = BigInt(TIMES[TIMES.length - 1] * M);
let answer = max;
while (min <= max) {
  let cnt = BigInt(0);
  let mid = BigInt((max + min) / BigInt(2));
  TIMES.forEach((time) => {
    cnt += BigInt(mid / BigInt(time));
  });
  if (cnt >= M) {
    answer = answer < mid ? answer : mid;
    max = mid - BigInt(1);
  } else {
    min = mid + BigInt(1);
  }
}
console.log(String(answer));
