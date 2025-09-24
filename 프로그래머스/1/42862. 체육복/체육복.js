function solution(n, lost, reserve) {
  lost = lost.sort((a, b) => a - b);
  reserve = reserve.sort((a, b) => a - b);

  const gyo = lost.filter(x => reserve.indexOf(x) !== -1);
  lost = lost.filter(x => gyo.indexOf(x) === -1);
  reserve = reserve.filter(x => gyo.indexOf(x) === -1);

  for (let i = 0; i < reserve.length; i++) {
    const a = reserve[i];
    const left = lost.indexOf(a - 1);
    const right = lost.indexOf(a + 1);

    if (left !== -1) {
      lost.splice(left, 1);
    } else if (right !== -1) {
      lost.splice(right, 1);
    }
  }

  return n - lost.length;
}
