const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const [n, number] = input;
let [length, count] = n.split(' ').map(Number);  // count를 let으로 선언하고 숫자로 변환합니다.

const splited = number.split("");
const stack = [];

for (let i = 0; i < length; i++) {
    const current = splited[i];
    
    // 스택이 채워져 있고, 스택의 Top이 현재 값보다 작고, count 값이 있을 때 반복문을 돈다.
    while (stack.length && stack[stack.length - 1] < current && count) {
        // 위의 조건들이 만족된다면, 스택에서 pop, count - 1을 한다.
        stack.pop();
        count -= 1;
    }
    
    stack.push(current);
}

for (let i = 0; i < count; i++) {
    stack.pop();
}

console.log(stack.join(''));