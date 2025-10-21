const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [king, stone, n] = input.shift().split(" ");
const N = parseInt(n);
const commands = input.slice(0, N);

const cols = ["A", "B", "C", "D", "E", "F", "G", "H"];
const rows = ["1", "2", "3", "4", "5", "6", "7", "8"];

const move = {
  R: [1, 0],
  L: [-1, 0],
  B: [0, -1],
  T: [0, 1],
  RT: [1, 1],
  LT: [-1, 1],
  RB: [1, -1],
  LB: [-1, -1],
};

let kx = cols.indexOf(king[0]);
let ky = rows.indexOf(king[1]);
let sx = cols.indexOf(stone[0]);
let sy = rows.indexOf(stone[1]);

for (let i = 0; i < N; i++) {
  const cmd = commands[i];
  const [dx, dy] = move[cmd];

  const nkx = kx + dx;
  const nky = ky + dy;

  if (nkx >= 0 && nkx <= 7 && nky >= 0 && nky <= 7) {
    if (nkx === sx && nky === sy) {
      const nsx = sx + dx;
      const nsy = sy + dy;

      if (nsx >= 0 && nsx <= 7 && nsy >= 0 && nsy <= 7) {
        sx = nsx;
        sy = nsy;
        kx = nkx;
        ky = nky;
      }
    } else {
      kx = nkx;
      ky = nky;
    }
  }
}

console.log(cols[kx] + rows[ky]);
console.log(cols[sx] + rows[sy]);
