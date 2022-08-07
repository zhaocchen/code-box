/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
 var reachableNodes = function(n, edges, restricted) {
    let graph = Array.from({ length: n }, v => []);
    for (let [u, v] of edges) {
        graph[u].push(v); // u -> v
        graph[v].push(u); // v -> u
    }
    let visited = new Set(restricted);
    let ans = 0;
    function dfs (u, s = 0) {
        visited.add(u);
        ans++;
        for (let v of graph[u]) {
            if (v == s || visited.has(v)) continue;
            dfs(v, s);
        }
    }
    dfs(0, -1);
    return ans;
};

console.log(reachableNodes(7, [[0,1],[1,2],[3,1],[4,0],[0,5],[5,6]], [4,5]));
console.log(reachableNodes(7, [[0,1],[0,2],[0,5],[0,4],[3,2],[6,5]], [4,2,1]));
console.log(reachableNodes(10, [[4,1],[1,3],[1,5],[0,5],[3,6],[8,4],[5,7],[6,9],[3,2]], [2, 7]));
console.log(reachableNodes(7, [[0,3],[2,0],[4,2],[4,1],[0,6],[5,1]], [6,3,4,2,5]));