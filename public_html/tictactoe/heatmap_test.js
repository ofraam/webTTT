var data = [
    {
        z: [[1, 20, 30], [20, 1, 60], [30, 60, 1]],
        type: 'heatmap'
    }
];


$(document).ready(function() {

    Plotly.newPlot('myDiv', data);
});