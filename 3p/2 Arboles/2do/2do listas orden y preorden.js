// 2do listas inorden y preorden

inOrder (node = this.root); {
    if (!node) {
        return
    }
    this.inOrder(node.left)
    console.log(node.value)
    this.inOrder(node.right)
    }

// Preorden

preorder(node)
{
    if(node !== null)
    {
    console.log(node.data);
    this.preorder(node.left);
    this.preorder(node.right);
    }
}

// postorden

postorder(node)
    {
	    if(node !== null)
	    {
		this.postorder(node.left);
		this.postorder(node.right);
		console.log(node.data);
	    }
    }

var t = new tree()