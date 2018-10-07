// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

// You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

const kthSmallest = (root, k) => {
    // recursive
    // count starts to increment when left most leaf is found
    // O(1) space (not considering stack space)
    // O(number of nodes) time (the whole tree will be traversed)

    // let kth;
    // let count = 0;

    // const _traverse = (node) => {
    //     if (node.left) {
    //         _traverse(node.left);
    //     }

    //     count += 1;
    //     if (count === k) kth = node;

    //     if (node.right) _traverse(node.right);
    // };

    // _traverse(root);

    // return kth.val;

    // iterative (in-order traversal)
    // sorta DFS, will only traverse the nodes prior to finding
    // the kth smallest node
    // O(1) space
    // O(k) time
    let cur = root;
    let stack = [];

    while (cur || stack.length) {
        if (cur) {
            stack.push(cur);
            cur = cur.left;
        } else {
            k -= 1;
            const prevNode = stack.pop();
            if (!k) return prevNode.value;
            cur = prevNode.right;
        }
    }

};