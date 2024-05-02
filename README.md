[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/2Wy-Iis-)
# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the distance to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest distance
    - mark $v$ with distanceance distance
    - for each edge $(v,w)$
        - distance($w$) = min $\left(\textrm{distance}(w), \textrm{distance}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

Runtime: $\Theta (V^2)$ where V is the number of vertices in the graph.

Reasoning:
For every vertice that we travel to, we iterate over every single adjacent vertice to update the distances, thus the runtime is $\Theta (V^2)$.