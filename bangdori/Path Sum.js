/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let answer = false;

  const dfs = (tree, curr) => {
    if (tree.left) dfs(tree.left, curr + tree.left.val);
    if (tree.right) dfs(tree.right, curr + tree.right.val);
    if (!tree.left && !tree.right && curr === targetSum) {
      answer = true;
      return;
    }
  };

  if (root) dfs(root, root.val);
  return answer;
};
