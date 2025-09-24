function solution(numbers, target) {
  let count = 0;
  const stack = [[0, 0]]; 

  while (stack.length) {
    const [index, sum] = stack.pop();

    if (index === numbers.length) {
      if (sum === target) count++;
    } else {
      stack.push([index + 1, sum + numbers[index]]);
      stack.push([index + 1, sum - numbers[index]]);
    }
  }

  return count;
}
