// Create Binary Search
class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.val = 5
b.val = 11
c.val = 3
d.val = 4
e.val = 2
f.val = 1

a.right = c;
a.left = b;
b.left = d;
b.right = e;
c.left = f;

x = [1, 4, 2, 3, 0, 5]
y = 7

const usedDict = x.reduce((x, _, i) => ({
    ...x,
    [i]: false
}), 0)

console.log(usedDict)


const depthFirstSearchR = (root) => {
    if (root == null) return [];
    const leftValues = depthFirstSearchR(root.left);
    const rightValues = depthFirstSearchR(root.right);
    return [root.val, ...leftValues, ...rightValues];
};
// console.log("DepthFirstSearchR: ", depthFirstSearchR(a));
