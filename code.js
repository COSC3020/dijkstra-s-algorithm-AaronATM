// used code from a medium article and looked at baeldung
// https://patrickkarsh.medium.com/dijkstras-shortest-path-algorithm-in-javascript-1621556a3a15
// https://www.baeldung.com/cs/dijkstra

// not currently working

// data structure to input is weighted adjacency list
function dijkstra (graph, sourceNode, targetNode) 
{
    var distance = new Array(graph.length);
    var visited = new Array(graph.length);
    var routeTo = Array.from(new Array(graph.length), function() { return [];});

    for (var i = 0; i < graph.length; i++)
    {
        visited[i] = false;
        distance[i] = Infinity;
    }

    distance[sourceNode] = 0;

    while (graph.length)
    {
        var adjacentValues = [];
        var currNode = minScoreNode(graph, distance, visited);
        visited[currNode] = true;

        for (var i = 0; i < graph[currNode].length; i++)
        {
            adjacentValues.push(graph[currNode][i][1]);
        }

        for (var j = 0; j < adjacentValues.length; j++)
        {
            if (!visited[adjacentValues[j]])
            {
                var newScore = distance[currNode] + graph[currNode][j][2];

                if (newScore < distance[adjacentValues[j]])
                {
                    distance[adjacentValues[j]] = newScore;
                    routeTo[adjacentValues[j]].push(currNode);
                }
            }
        }

        if (currNode == targetNode)
        {
            return findPath(targetNode, routeTo);
        }

        if (distance[minScoreNode(graph, distance, visited)] == Infinity)
        {
            return "Path not found";
        }
    }
}

function minScoreNode (graph, distance, visited)
{
    result = null;

    for (var i = 0; i < graph.length; i++)
    {
        if (!visited[i] && (result == null || distance[i] < distance[result]))
        {
            result = i;
        }
    }

    return result;
}

function findPath (targetNode, routeTo)
{
    var route = [];
    var currNode = targetNode;
    var i = 0;

    while (currNode != null)
    {
        route.push(currNode);
        currNode = routeTo[currNode][i];
        i++;
    }

    return route;
}

// Temporary test input

var testInput1 = [[[1, 1], [2, 4]], [[0, 1], [2, 2], [3, 5]], [[0, 4], [1, 2], [4, 1]], [[1, 5], [2, 1]]];

var testOutput1 = dijkstra(testInput1, 0, 3);

console.log(testOutput1);
