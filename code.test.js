// test code and cases mostly written by Jacob Johnson

const fs = require('fs');
const JSVerify = require('jsverify');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testset = [
    { graph:  [ [ 0, 4, 0, 0, 0, 0, 0, 8, 0 ],
                [ 4, 0, 8, 0, 0, 0, 0, 11, 0 ],
                [ 0, 8, 0, 7, 0, 4, 0, 0, 2 ],
                [ 0, 0, 7, 0, 9, 14, 0, 0, 0],
                [ 0, 0, 0, 9, 0, 10, 0, 0, 0 ],
                [ 0, 0, 4, 14, 10, 0, 2, 0, 0],
                [ 0, 0, 0, 0, 0, 2, 0, 1, 6 ],
                [ 8, 11, 0, 0, 0, 0, 1, 0, 7 ],
                [ 0, 0, 2, 0, 0, 0, 6, 7, 0 ] ], source: 0, expected: [ 0, 4, 12, 19, 21, 11, 9,  8, 14 ] },
    { graph:  [[0, 1, 4, 0, ],
                [1, 0, 2, 5, ],
                [4, 2, 0, 1, ],
                [0, 5, 1, 0]] , source: 0, expected: [ 0, 1, 3, 4 ] },
    { graph:   [[0, 1, 1, 0, 0, 0, 0, 3, 0, 0],
                [1, 0, 0, 2, 0, 0, 4, 0, 0, 0],
                [1, 0, 0, 0, 5, 0, 0, 2, 3, 0], 
                [0, 2, 0, 0, 0, 3, 3, 0, 0, 3], 
                [0, 0, 5, 0, 0, 4, 0, 0, 2, 0], 
                [0, 0, 0, 3, 4, 0, 0, 0, 0, 4], 
                [0, 4, 0, 3, 0, 0, 0, 0, 0, 0], 
                [3, 0, 2, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 3, 0, 2, 0, 0, 0, 0, 0],
                [0, 0, 0, 3, 0, 4, 0, 0, 0, 0]], source: 0, expected: [ 0, 1, 1, 3, 6, 6, 5, 3, 4, 6 ] },

]

testset.forEach(({ graph, source, expected }, index) => {
    let testWorks = (JSON.stringify(dijkstra(graph, source)) === JSON.stringify(expected));
    console.log("\ntest:",index++, testWorks ? "Success" : "Failed");
    if(!testWorks){ throw console.log("Failed with values:", graph,"\nExpected Result:",expected, "\nGot Result:", JSON.stringify(dijkstra(graph, source)));}
});