class AVLTree {
  constructor() {
    this.root = null;
  }

  delete(value) {
    if (this.root) {
      this.root = this.findNodeAndDelete(this.root, value);
    } else {
      return "root is null";
    }
  }

  findNodeAndDelete(root, value) {
    if (!root) return root;

    if (root.value < value) {
      root.right = this.findNodeAndDelete(root.right, value);
    } else if (root.value > value) {
      root.left = this.findNodeAndDelete(root.left, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      } else {
        const tempNode = this.findMaxValueFromLeftSubtree(root.left);

        root.value = tempNode.value;
        root.left = this.findNodeAndDelete(root.left, tempNode.value);

        return root;
      }
    }

    root.height = Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
    return this.rebalance(root);
  }
  
  findMaxValueFromLeftSubtree(root) {
    if (!root.right) return root;

    return this.findMaxValueFromLeftSubtree(root.right);
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root) {
      this.root = this.findLeafAndInsert(this.root, newNode);
    } else {
      this.root = newNode;
    }
  }

  findLeafAndInsert(root, node) {
    if (!root) return node;

    if (root.value < node.value) {
      root.right = this.findLeafAndInsert(root.right, node);
    } else {
      root.left = this.findLeafAndInsert(root.left, node);
    }

    // backtracking to update the nodes' height
    root.height = Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
    return this.rebalance(root);

    // if (root.value < node.value) {
    //   if (root.right) {
    //     this.findLeafAndInsert(root.right, node);
    //   } else {
    //     root.right = node;
    //   }
    // } else {
    //   if (root.left) {
    //     this.findLeafAndInsert(root.left, node); 
    //   } else {
    //     root.left = node;
    //   }
    // }
  }
  
  rebalance(root) {

    // backtracking to balance the unbalanced subtree if necessary
    // also return the new subtree root
    const balance = this.getHeight(root.left) - this.getHeight(root.right);
    let newRoot = root;
    if (balance > 1) {
      if (this.getHeight(root.left.left) > this.getHeight(root.left.right)) {
        /* left left case

                root                                    y
                / \                                   /   \
               y   T4      Right Rotate (z)          x     root
              / \          - - - - - - - - ->      /  \    /  \ 
             x   T3                               T1  T2  T3  T4
            / \
          T1   T2

        */
        newRoot = this.rightRotate(root);
      } else {
        /* left right case 

              root                            root                         x
              / \                            /   \                        /  \ 
             y   T4  Left Rotate (y)        x    T4  Right Rotate(z)    y     root
            / \      - - - - - - - - ->    /  \      - - - - - - - ->  / \    / \
          T1   x                          y    T3                    T1  T2 T3  T4
              / \                        / \
            T2   T3                    T1   T2          

        */
        root.left = this.leftRotate(root.left);
        newRoot = this.rightRotate(root);
      }
    } else if (balance < -1) {
      if (this.getHeight(root.right.left) < this.getHeight(root.right.right)) {
        /* right right case

             z                               y
           /  \                            /   \ 
          T1   y     Left Rotate(z)       z      x
              /  \   - - - - - - - ->    / \    / \
             T2   x                     T1  T2 T3  T4
                 / \
               T3  T4

        */
        newRoot = this.leftRotate(root);
      } else {
        /* right left case

             z                            z                            x
            / \                          / \                          /  \ 
          T1   y   Right Rotate (y)    T1   x      Left Rotate(z)   z      y
              / \  - - - - - - - - ->     /  \   - - - - - - - ->  / \    / \
             x   T4                      T2   y                  T1  T2  T3  T4
            / \                              /  \
          T2   T3                           T3   T4
          
        */
        root.right = this.rightRotate(root.right);
        newRoot = this.leftRotate(root);
      }
    }

    return newRoot;
  }

  /*

        y                                x
       / \      Right Rotation          / \
      x   T3    - - - - - - - >        T1  y 
     / \        < - - - - - - -           / \
    T1  T2      Left Rotation            T2  T3

  */

  leftRotate(node) {
    if (node.right) {
      const rightNode = node.right;
      node.right = rightNode.left;
      rightNode.left = node;
      
      node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
      rightNode.height = Math.max(this.getHeight(rightNode.left), this.getHeight(rightNode.right)) + 1;
      
      return rightNode;
    }
  }
  
  rightRotate(node) {
    if (node.left) {
      const leftNode = node.left;
      node.left = leftNode.right;
      leftNode.right = node;

      node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
      leftNode.height = Math.max(this.getHeight(leftNode.left), this.getHeight(leftNode.right)) + 1;

      return leftNode;
    }
  }

  getHeight(node) {
    return node ? node.height : 0;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
    this.height = 1;
  }
} 

const consoleLogTree = (tree) => {
  const q = [tree.root];
  while (q.length) {
    const valuesToLog = [];
    let levelLength = q.length;
    while (levelLength) {
      const node = q.shift();
      valuesToLog.push(node.value);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
      levelLength -= 1;
    }
    console.log(...valuesToLog);
  }
};

const tree = new AVLTree;
tree.insert(5);
tree.insert(4);
tree.insert(3);
tree.insert(2);
tree.insert(1);
tree.insert(0);

tree.delete(4);
tree.delete(3);
tree.delete(5);
//       2
//     1   4
//   0    3  5
// 

console.log(tree);
console.log(consoleLogTree(tree));