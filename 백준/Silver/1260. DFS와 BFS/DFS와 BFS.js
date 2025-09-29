const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, V] = input[0].split(" ").map(Number);
const edges = input.slice(1).map((line) => line.split(" ").map(Number));

const graph = Array.from({ length: N + 1 }, () => []);

for (const [u, v] of edges) {
  graph[u].push(v);
  graph[v].push(u);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

const visitedDFS = Array(N + 1).fill(false);
const dfsResult = [];

function dfs(node) {
  visitedDFS[node] = true;
  dfsResult.push(node);

  for (const next of graph[node]) {
    if (!visitedDFS[next]) dfs(next);
  }
}

const visitedBFS = Array(N + 1).fill(false);
const bfsResult = [];

function bfs(start) {
  const queue = [start];
  visitedBFS[start] = true;

  while (queue.length) {
    const node = queue.shift();
    bfsResult.push(node);

    for (const next of graph[node]) {
      if (!visitedBFS[next]) {
        visitedBFS[next] = true;
        queue.push(next);
      }
    }
  }
}

dfs(V);
bfs(V);

console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));
