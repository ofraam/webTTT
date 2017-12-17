/**
 * Created by oamir on 12/17/2017.
 */

LITW.stats = [
    {board: "1f", correct: 30, time: 8.5, actions: 30, depth: 3, paths: 10, entropy: 1.5, heatmap: "images/heat1f"},
    {board: "1p", correct: 30, time: 8.5, actions: 30, depth: 3, paths: 10, entropy: 1.5, heatmap: "images/heat1p"}
];
LITW.boardStats = LITW.stats[0];

LITW.numClicksMatrix10 = [{z: [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]

], x: ['a','b','c','d','e','f','g','h','i','j'],y: [1,2,3,4,5,6,7,8,9,10], type: 'heatmap'
}];

LITW.numClicksMatrix6 = [{z: [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
], x: ['a','b','c','d','e','f'],y: [1,2,3,4,5,6],type: 'heatmap'}];

