/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
  if (connections.length < n - 1) return -1;

  const visited = new Array(n).fill(false);
  const graph = makeGraph(n, connections);
  let answer = 0;

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    dfs(i, graph, visited);
    answer += 1;
  }

  return answer - 1;
};

function makeGraph(n, connections) {
  const graph = Array.from({ length: n }, () => []);

  for (const connection of connections) {
    const [src, dest] = connection;

    graph[src].push(dest);
    graph[dest].push(src);
  }

  return graph;
}

function dfs(computer, graph, visited) {
  if (visited[computer]) return;
  visited[computer] = true;

  for (const next of graph[computer]) {
    if (visited[next]) continue;
    dfs(next, graph, visited);
  }
}
