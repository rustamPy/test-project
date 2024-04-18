---
layout: code
number: 22
title: Generate Parentheses
level: medium
---

# 22 - Generate Parentheses

The task is to return the parentheses combination based on the most available pairs (input).

For example, if input is 3, we can produce maximum 3 pairs of open and close parentheses.\

‘((()))’. We need to return all possible correct combinations.

1. ((()))
2. (()())
3. (())()
4. ()(())
5. ()()()

All 5 parentheses combinations are correct.

To solve this task we can use backtracking algorithm (by using DFS).

Let’s start from base cases, like when we can open and close brackets.

1. If our input is 3 we can **open brackets** maximum 3 times. We can state as condition in python if `open_parentheses_count < n: stack.append(’(’)` This ensures that we only add an open parenthesis when the count of open parentheses is below the specified limit. For instance, with an input of 3, we prevent creating a sequence like '((((.’
2. If there are no open brackets, we cannot use ‘close brackets’. We can only close as many brackets as there are open brackets. Hence, we can use this condition `close_parentheses_count < open_parentheses_count: stack.append(’)’)`. This ensures that we can add close brackets if and only if the number of closed parentheses is less than the open parentheses.

1. So we start with empty array, where we will save our combinations `res = []`.
2. We need to use mortal data type as list to add and remove current combinations during the algorithm, `s = []`
3. We need to use backtracking function which will check depth first and go back to parent, when base case is met (recursion). `def dfs`


    a. Recursion have return condition, in our case we return only when the **count of open, count of close and given input are equal (which means the combination is met).
    `if open == close == n: res.append(’’.join(s))`**
    
    b. Recursion need to call itself, in our case we return itself in two cases with different parameters. As we mentioned above we have two main conditions, which defines the bracket to use.
    
    b.1 - Using open bracket - we can use open bracket when the count of open is less than input (n).
    if open_p is less than n, we add `open bracket (` to stack and return the function itself, with incremented `open_p`
    
    ```python
    def dfs(open_p, close_p):
    	**if open == close == n: res.append(’’.join(s))**
    	if open_p < n:
    		sub.append('(')
    		func(open_p + 1, close_p)
    		sub.pop()
    ```
    
    In case we exit the function we remove the parentheses from the stack by `sub.pop()`
    
    b.2 - Using close bracket - we can use close bracket when the count of close is less than open brackets.
    
    ```python
    if close_p < open_p
    	sub.append(')')
    	func(open_p, close_p + 1)
    	sub.pop()
    ```

4. We need to call this backtracking function with initial values


    [Drawing.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/b63d882b-232e-423c-ad56-7a8b5c8302b9/c340b87c-6ba9-4c36-baab-a9b782849af1/Drawing.pdf)


```python
dfs(0, 0)
```

1. Return `res`

Full code:

```python
from typing import List

def solution(n: int) -> List[str]:
    res = []  # result array
    s = []  # combination array

    def dfs(open_p: int, close_p: int):
        # base case
        if open_p == close_p == n:
            res.append(''.join(s))
            return
        # condition A
        if open_p < n:
            s.append('(')
            dfs(open_p + 1, close_p)
            s.pop()
        # condition B
        if close_p < open_p:
            s.append(')')
            dfs(open_p, close_p + 1)
            s.pop()

    # call recursion function with initial arguments
    dfs(0, 0)

    # return result array
    return res

print(solution(3))
```