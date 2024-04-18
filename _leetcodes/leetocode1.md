---
layout: code
number: 113
title: Path Sum II
level: medium
comments: true
---

# 113 - Path Sum II

```python
class Tree:
	def __init__(self, val):
		self.val = val
		self.left, self.right = None, None

def solution(root, targetSum):
	res = []
	
	def dfs(root, s, sub):
		sub.append(root.val)
		s += root.val
		
		if root.left is None and root.right is None and s == targetSum:
			res.append(sub[:])
		if root.left:
			dfs(root.left, s, sub)
		if root.right:
			dfs(root.right, s, sub)

		sub.pop()
		s -= root.val
	dfs(root, 0, [])
	return res

tree = Tree(4)
tree.left = Tree(5)
tree.right = Tree(6)

print(solution(tree, 9)) # [[4, 5]]
```

Here we need to find the chain of nodes in the binary tree which will make targetSum in the sum.

The important note is that the chain must be from **root-to-leaf only.** We can’t take the incomplete chain. For that purpose, we have our base case condition:

1. If root.left is None ← NO LEFT CHILD and root.right is None ← NO RIGHT CHILD and s == targetSum ← the sum of nodes equals to our target value.
   These are success condition, hence we add this subarray (copy) to our results array.
2. We add root.val to our sub every time we enter the function. We also add root.val to the s variable to increase it and make it closer to the target (We can also implement subtract and compare with zero in the success base criteria)
3. If there is existing node on the left, we recursively call the left node, with root.left, updated s variable (increased), and updated subarray (append).
4. If root.left check is failed, meaning that root.left is None, then it goes and check root.right, and so the same as with root.left, but root value is root.right
5. If both root.left and root.right checks are failed, then our root is a leaf, and we pop the last element from the sub array and subtract the current value of root out of “s”.