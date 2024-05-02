// used code from geeks for geeks
// https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/

// data structure to input is weighted adjacency matrix
function dijkstra (graph, sourceNode)
{
    var distance = new Array(graph.length);
    var visited = new Array(graph.length);
      
    for(var i = 0; i < graph.length; i++)
    {
        distance[i] = Infinity;
        visited[i] = false;
    }
     
    distance[sourceNode] = 0;

    for(var j = 0; j < graph.length - 1; j++)
    {
        var currNode = findMin(distance, visited);  
        visited[currNode] = true;
          
        for(var i = 0; i < graph.length; i++)
        {
            if (!visited[i] && graph[currNode][i] != 0 && 
                   distance[currNode] != Infinity &&
                   distance[currNode] + graph[currNode][i] < distance[i])
            {
                distance[i] = distance[currNode] + graph[currNode][i];
            }
        }
    }
     
    return distance;
}

function findMin(distance, visited)
{
    var min = Infinity;
    var min_index = -1;
     
    for(var i = 0; i < distance.length; i++)
    {
        if (visited[i] == false && distance[i] <= min) 
        {
            min = distance[i];
            min_index = i;
        }
    }

    return min_index;
}