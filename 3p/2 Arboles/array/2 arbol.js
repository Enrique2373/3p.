// 2 arbol

let root={
    d:0,
    l:null,
    r:null
   }
  
   let n1={
    d:1,
    l:null,
    r:null
   }

   let n2={
    d:2,
    l:null,
    r:null
   }
  
   root.l=n1
   root.r=n2
  
   function traverse(n){
     if (n!==null){
      traverse(n.l)
      traverse(n.r)
      console.log(n.d)
     }
   }