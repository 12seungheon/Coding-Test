const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const num = input[1].split(" ").map(Number);

let sum = 0;
for (let i = 0; i < K; i++) {
  sum += num[i];
}
let answer = sum;

for (let i = K; i < N; i++) {
  sum += num[i] - num[i - K];
  if (sum > answer) answer = sum;
}

console.log(answer);
