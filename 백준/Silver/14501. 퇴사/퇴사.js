const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const lines = input.slice(1, 1 + N);

const T = lines.map((s) => Number(s.split(" ")[0]));
const P = lines.map((s) => Number(s.split(" ")[1]));

let ans = 0;

function dfs(day, sum) {
  if (day >= N) {
    if (sum > ans) ans = sum;
    return;
  }

  dfs(day + 1, sum);

  const end = day + T[day];
  if (end <= N) {
    dfs(end, sum + P[day]);
  }
}

dfs(0, 0);
console.log(ans);
