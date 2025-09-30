const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
const ropes = input.map(Number).sort((a, b) => b - a);

let max = 0;
for (let i = 0; i < N; i++) {
  const weight = ropes[i] * (i + 1);
  if (weight > max) max = weight;
}

console.log(max);
