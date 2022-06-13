// graphs.
//This is a interconnected nodes.
/*Básicamente un grafo es una serie de nodos interconectados unos con otros donde los dirigidos ya tienen una ruta específica de cuál nodo se conecta con cuál y los no dirigidos son prácticamente de doble sentido.
.
También existen los grafos ponderados que básicamente te dicen cuál camino es más “eficiente” para llegar a tu destino.
.
Velo como un mapa, estás en uno nodo y ese nodo conoce a otros varios nodos a los que puedes ir, y después de ese nodo puedes ir a otro nodo más que es posible que conozca a uno de los nodos donde ya has estado ^^
*/
// Edge List

const  graph = [
    [0,2],
    [2,3],
    [2,1],
    [1,3]
];

// Adjacent List

const graph = [[2],[2,3],[0,1,3],[1,2]]

// Hast table

const graph = {
    0: [2],
    1: [2,3],
    2: [0,1,3],
    3: [1,2]
}
// Adjancent Matrix

const graph = 
[
    [0,0,1,0],
    [0,0,1,1],
    [1,1,0,1],
    [0,1,1,0]
]

const graph_obj = 
{
    0:[0,0,1,0],
    1:[0,0,1,1],
    2:[1,1,0,1],
    3:[0,1,1,0]
}


class graph {
    constructor()
    {
        this.adjacentList = {};
        this.nodes = 0;
    }
    addVertex(node)
    {
        this.adjacentList[node] = [];
        this.nodes++;
    }
    addEdge(node1, node2){
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
}
const myGraph = new Graph();