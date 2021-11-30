// 2 list4stu.js

let r=new Node(0)//root
let p=new Node(1)//previous
r.next=p//link
for (let i=2;i<10;i++){
    let n = new Node(i)//next
    p.next = n//link
    p=n
}

traverse(r)

// 2 linked.js

function Linked(a) {
    this.head = a
    this.tail = a
    this.size = 1

    this.getHead = getHead
    this.prepend = prepend
    this.append = append
    this.traverse = traverse
    //this.contains = contains
}

function getHead(){return this.head}

function prepend(a){
    a.next = this.head
    this.head=a
    this.size++
}

function append(n){
    n.next = null
    this.tail.next=n
    this.tail=n
    this.size++
}

function traverse(){
    let c=this.head
    while(c){
	//	    console.log(c.key)
	console.log(c.data)
	c=c.next
    }
    console.log('\n')
}

function contains(v){}

// list4.js

let r=new Node(0)//root
let p=new Node(1)//previous
r.next=p//link
for (let i=2;i<10;i++){
    let n = new Node(i)//next
    p.next = n//link
    p=n
}

traverse(r)

// traverse.js

const traverse=(n)=>{//es6
    let c=n//iterator 
    while(c){//exists
        console.log(c.data)
	c=c.next
    }
}

// 