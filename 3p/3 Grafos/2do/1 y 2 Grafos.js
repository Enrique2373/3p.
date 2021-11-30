// 2do Grafos

function print(){
    console.log()
 }
 
 function Graph(value) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices ; ++i) {
       this.adj[i] = [];
       this.adj[i].push("");
    }
 
    this.addEdge = addEdge;
    this.showGraph = showGraph;
 
 }
 
 function addEdge(v,e) {
    this.adj[v].push(e);
    this.adj[e].push(v);
    this.edges++;
 
 }
 
 function showGraph() {
    for (var i = 0; i< this.vertices; ++i) {
        console.log((i + " -> "));
       for (var j = 0;j< this.vertices; ++j) {
          if (this.adj[i][j] != undefined)
            console.log((this.adj[i][j] + ' '));
       }
       print();
    }
 }
 
 g = new Graph(5);
 g.addEdge(0,1);
 g.addEdge(0,2);
 g.addEdge(1,3);
 g.addEdge(2,4);
 g.showGraph();

 // 2 Grafos

 let f={}

//nodes
let alice={la:{}}
let cinthia={lc:{}}
let bob={lb:{}}

//in2ds
f.alice=alice
f.cinthia=cinthia
f.bob=bob

//links
let la={cinthia,bob}
let lc={bob}
let lb={cinthia}

//in2ds
f.alice.la=la
f.cinthia.lc=lc
f.bob.lb=lb