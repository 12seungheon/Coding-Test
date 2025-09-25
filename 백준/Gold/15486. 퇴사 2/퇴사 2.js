const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 입력 처리
const N = parseInt(input[0]);
const consultations = input.slice(1).map(line => line.split(' ').map(Number));

// DP 테이블: i번째 날까지의 최대 수익을 저장
const dp = Array(N + 1).fill(0);

// 뒤에서부터 상담을 진행하며 DP 테이블을 업데이트
for (let i = N - 1; i >= 0; i--) {
    const [time, pay] = consultations[i];
    
    // 해당 날에 상담을 할 수 있으면
    if (i + time <= N) {
        dp[i] = Math.max(dp[i + 1], dp[i + time] + pay);
    } else {
        // 상담을 할 수 없으면 그냥 이전 값 유지
        dp[i] = dp[i + 1];
    }
}

console.log(dp[0]);
