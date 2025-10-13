let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, K] = input[0].split(" ").map((num) => Number(num));

let arr = [];

for (let i = 1; i < input.length; ++i) {
    arr.push(input[i].split(" ").map((num) => Number(num)));
}

let dp = Array.from({ length: N + 1 }, () => {
    return Array(K + 1).fill(0);
});

for (let row = 1; row <= N; ++row) {
    for (let col = 1; col <= K; ++col) {
        let [weight, value] = arr[row - 1];

        if (col >= weight) {
            dp[row][col] = Math.max(dp[row - 1][col], dp[row - 1][col - weight] + value);
        } else {
            dp[row][col] = dp[row - 1][col];
        }
    }
}
console.log(dp[N][K]);