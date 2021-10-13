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

    // -------------------------------------
    // implement here
    class MyGraph {

        constructor() {
            this.vertices = {};
        }

        addVertex(vertex) {
            if (!(vertex in this.vertices)) {
                this.vertices[vertex] = []
            }
        }

        addEdge(fromVertex, toVertex) {
            if (fromVertex in this.vertices) {
                this.vertices[fromVertex].push(toVertex);
            }

            if (toVertex in this.vertices) {
                this.vertices[toVertex].push(fromVertex);
            }
        }

        printGraph() {
            for (let vertex in this.vertices) {
                let result = `vertex: ${vertex} = `;
                let edges = this.vertices[vertex];

                for (let edge of edges) {
                    result += `${edge},`;
                }

                console.log(result);
            }
        }
    }

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