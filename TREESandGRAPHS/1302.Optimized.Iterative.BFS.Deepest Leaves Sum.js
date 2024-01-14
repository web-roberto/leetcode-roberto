class Solution {
  public int deepestLeavesSum(TreeNode root) {
    ArrayDeque<TreeNode>  nextLevel = new ArrayDeque(),
                          currLevel = new ArrayDeque();
    nextLevel.offer(root);

    while (!nextLevel.isEmpty()) {
      // prepare for the next level
      currLevel = nextLevel.clone();
      nextLevel.clear();

      for (TreeNode node: currLevel) {
        // add child nodes of the current level
        // in the queue for the next level
        if (node.left != null) {
          nextLevel.offer(node.left);
        }
        if (node.right != null) {
          nextLevel.offer(node.right);
        }
      }
    }
    int deepestSum = 0;
    for (TreeNode node: currLevel) {
      deepestSum += node.val;
    }
    return deepestSum;
  }
}