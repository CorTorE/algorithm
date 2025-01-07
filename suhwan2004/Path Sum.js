/*
18:30 ~ 18:49
Time : O(N)
Space : O(N)
ALGO : dfs
DS : tree
Constraints : 
- 트리 노드들의 갯수는 0개에서 5000개 사이
- -1000 <= Node.val <= 1000
- -1000 <= targetSum <= 1000
Edge Case : root가 없을 시에 바로 false
*/

var hasPathSum = function(root, targetSum) {
    if(!root) return false
    return dfs(root, 0, targetSum)
};

const dfs = (node, sum, targetSum) => {
    let curSum = sum + node.val
    if(!node.left && !node.right) return targetSum === curSum

    const leftRes = node.left ? dfs(node.left, curSum, targetSum) : false
    const rightRes = node.right ? dfs(node.right, curSum, targetSum) : false

    return leftRes || rightRes
}