// used code from a medium article and looked at baeldung
// https://patrickkarsh.medium.com/dijkstras-shortest-path-algorithm-in-javascript-1621556a3a15
// https://www.baeldung.com/cs/dijkstra


// works but not entirely sure if it is finding the right path based on Dijkstra's, or just this implementation

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
            adjacentValues.push(graph[currNode][i][0]);
        }

        for (var j = 0; j < adjacentValues.length; j++)
        {
            var nextNode = adjacentValues[j];
            if (!visited[nextNode])
            {
                var newScore = distance[currNode] + edgeCost(currNode, nextNode, graph);

                if (newScore < distance[nextNode])
                {
                    distance[nextNode] = newScore;
                    routeTo[nextNode].push(currNode);
                }
            }
        }

        if (currNode == targetNode)
        {
            var result = findPath(targetNode, routeTo);
            result.unshift(sourceNode);
            return result;
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
        route.unshift(currNode);
        currNode = routeTo[currNode][i];
        i++;
    }

    return route;
}

function edgeCost(currNode, nextNode, graph)
{
    var index = 0;

    for (var i = 0; i < graph[currNode].length; i++)
    {
        if (graph[i][1] == nextNode)
        {
            index = i;
            break;
        }
    }

    var result = graph[currNode][index][1];
    return result;
}

// Temporary test input

var testInput1 = [[[1, 1], [2, 4]], [[0, 1], [2, 2], [3, 5]], [[0, 4], [1, 2], [3, 1]], [[1, 5], [2, 1]]];

var testOutput1 = dijkstra(testInput1, 0, 3);

console.log(testOutput1);
