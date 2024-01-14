https://github.com/datastructures-js/graph
sudo yarn add @datastructures-js/graph

const { Graph, DirectedGraph } = require('@datastructures-js/graph');
import { Graph, DirectedGraph } from '@datastructures-js/graph';

const directedGraph = new DirectedGraph();
const graph = new Graph();

addVertex -> Agrega un vértice al gráfico.
hasVertex -> Comprueba si el gráfico tiene un vértice por su clave.
getVertexValue -> Devuelve el valor asociado a una clave de vértice.
getVerticesCount -> Obtiene el número de vértices del gráfico.
addEdge -> Agrega un borde ponderado entre dos vértices existentes. El peso predeterminado es 1 si no está definido. El borde único es una dirección desde el origen hasta el destino en un gráfico dirigido y una conexión bidireccional en un gráfico.
hasEdge -> Comprueba si el gráfico tiene un borde entre dos vértices existentes. En el gráfico dirigido, devuelve verdadero solo si hay una dirección desde el origen hasta el destino.
getEdgesCount -> Obtiene el número de aristas en el gráfico.
getWeight -> Obtiene el peso de la arista entre dos vértices. Si no hay un borde directo entre los dos vértices, devuelve Infinity. También devuelve 0 si la clave de origen es igual a la clave de destino.
getConnectedVertices ->  Devuelve una lista de claves de vértices conectados a un vértice dado.
getConnectedEdges -> Devuelve un objeto de claves de edges (y sus pesos) conectados a un vértice dado .
removeVertex -> Elimina un vértice con todas sus edges del gráfico.
removeEdge -> Elimina un edge entre dos vértices existentes.
removeEdges -> Elimina todas las aristas conectadas a un vértice y devuelve el número de aristas eliminadas.
traverseDfs -> Recorre el gráfico desde un vértice inicial mediante la búsqueda recursiva en profundidad. también acepta un tercer parámetro opcional como devolución de llamada para abortar el recorrido cuando devuelve verdadero.
traverseBfs -> Recorre el gráfico desde un vértice inicial utilizando la búsqueda en anchura con una cola. también acepta un tercer parámetro opcional como devolución de llamada para abortar el recorrido cuando devuelve verdadero.
clear -> Borra todos los vértices y aristas del gráfico.

