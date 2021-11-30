// 1 listas enlazadas

var p = 3,pr = 4;
var v = 25;//new element
var array= new Array();

for(i=0; i<100000; i++){
    array.push((Math.random()*100).toFixed());
}
console.log(array);

insertAt(p,v);
remove(pr);

function insertAt(p,v){
    array.splice(p,0,v);
    console.log(array);
}

function remove(pr){
    array.splice(pr,1);
    console.log(array);
}