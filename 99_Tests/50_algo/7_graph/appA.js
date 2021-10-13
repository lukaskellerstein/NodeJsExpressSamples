function main() {

    // Implement Graph 
    // with Vertexes ['A', 'B', 'C', 'D', 'E', 'F']
    // and Edges
    // A -> B
    // A -> D
    // A -> E
    // B -> C
    // D -> E
    // E -> F
    // E -> C
    // C -> F

    // start 
    // end

    // -------------------------------------
    // implement here


    // -------------------------------------
    // TEST data
    var g = new MyGraph();
    var vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

    // adding vertices 
    for (var i = 0; i < vertices.length; i++) {
        g.addVertex(vertices[i]);
    }

    // adding edges 
    g.addEdge('A', 'B');
    g.addEdge('A', 'D');
    g.addEdge('A', 'E');
    g.addEdge('B', 'C');
    g.addEdge('D', 'E');
    g.addEdge('E', 'F');
    g.addEdge('E', 'C');
    g.addEdge('C', 'F');

    g.printGraph();
};
main();