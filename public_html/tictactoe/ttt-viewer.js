/**
 * Created by oamir on 5/14/2018.
 */
E = {};
E.data = {};
E.curr_data = {};
E.curr_user_clicks = {};
E.users = {};
E.curr_user_index = 0;
E.widget = {};
E.curr_point = {};
E.curr_point_index = {};
E.myPlot = {};
E.myPlot_times = {};

function unpack(rows, key) {
    return rows.map(function (row) {
        return row[key];
    });
}



function next_user() {
    if (E.curr_user_index < E.users.length-1) {
        E.curr_user_index = E.curr_user_index+1;
        // alert(E.curr_user_index)
        draw_chart();
    }
    else {
        alert("no more users")
    }
}

function prev_user() {
    if (E.curr_user_index > 0) {
        E.curr_user_index = E.curr_user_index-1;
        // alert(E.curr_user_index)
        draw_chart();
    }
}

Array.prototype.contains = function(v) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === v) return true;
    }
    return false;
};

Array.prototype.unique = function() {
    var arr = [];
    for(var i = 0; i < this.length; i++) {
        if(!arr.includes(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
}

function next_move(){

    if (E.curr_point_index<E.curr_user_clicks.length-1) {
        E.curr_point_index += 1;
        E.curr_point = E.curr_user_clicks[E.curr_point_index].time_rel_sec;
        draw_board();
    }
    else {alert("last move")}
}

function prev_move(){
    if (E.curr_point_index>0) {
        E.curr_point_index -= 1;
        E.curr_point = E.curr_user_clicks[E.curr_point_index].time_rel_sec;
        draw_board();
    }
    else {alert("first move")}
}

function draw_board() {
    var board_data = E.curr_data.filter(function (el) {
        return (el.time_rel_sec == E.curr_point)
    });
    var position1 = board_data[0].board_state;
    var array_pos = JSON.parse("[" + position1 + "]");
    array_pos =array_pos[0];
    var move = board_data[0].position.split('_');
    var player = parseInt(board_data[0].player);
    array_pos[parseInt(move[0])][parseInt(move[1])] = player;

    E.widget = new TictactoeWidget({
        canvasContainerDiv : "#boardDiv",
        nrows : parseInt(board_data[0].board_size),
        ncols :  parseInt(board_data[0].board_size),
        firstMovrRow: move[0],
        firstMovrCol: move[1],
        // )
        cellSize: 32,
        position: array_pos,
        nextPlayer: 1,
        streak:5,
        turns: 3,
        winPath: [[[1,9],[2,9],[5,9]]],
        losePath: [[[1,8],[0,9]]],
        winMove: ['j9','J9','9j','9J']
    })
    E.widget.run()
    var count = E.myPlot.data[0].x.length;
    colors = []
    colors_times = []
    sizes = []
    ind = 0
    for (i=0;i<count;i++) {
        if (parseInt(E.curr_user_clicks[i].player) == 2)
        {
            colors.push('#000000');
            colors_times.push('#000000');
        }
        else
        {
            colors.push('#17BECF');
            colors_times.push('#cc6699');
        }
        sizes.push(6);
        if (E.myPlot.data[0].x[i] == E.curr_point) {
            ind = i;
            E.curr_point_index = i;
        }
    }
    colors[ind] = '#C54C82';
    sizes[ind] = 16;
    var update = {'marker':{color: colors, size:sizes}};
    var update_times = {'marker':{color: colors_times, size:sizes}};
    Plotly.restyle('myDiv',update,[0]);
    Plotly.restyle('myDiv',update_times,[1]);
}

function draw_chart() {


    //     user_index == user_index || 0;
    //     alert('draw chart')
    //     alert(E.curr_user_index)
        var board = document.getElementById("board").options[document.getElementById("board").selectedIndex].value;
        var solved = document.getElementById("solved").options[document.getElementById("solved").selectedIndex].value;
        E.curr_data = E.data.filter(function (el) {
            return (el.board_name == board)
        });

        if (solved!='all') {
            E.curr_data = E.data.filter(function (el) {
                return (el.board_name == board &  el.solved == solved)
            });
        }
        E.users = unpack(E.curr_data,'userid');
        E.users = E.users.unique();
        // E.curr_user_index = 0;
        // alert (board);
        E.curr_user_clicks = E.curr_data.filter(function (el) {
            return (el.userid == E.users[E.curr_user_index] & el.action == 'click')
        });

        var action_times = unpack(E.curr_user_clicks,'time_from_action');
        max_time = parseInt(action_times[0])
        for (i=0;i<action_times.length;i++){
            action_times[i] = parseInt(action_times[i])
            if (action_times[i]>max_time)
            {
                max_time=action_times[i]
            }
        }

        var resets_user = E.curr_data.filter(function (el) {
            return (el.userid == E.users[E.curr_user_index] & el.action == 'reset')
        });
        shapes = []
        for (i=0;i<resets_user.length;i++) {
            shapes.push({'type': 'line',
                // 'x0': unpack([resets_user[0]], 'time_rel_sec'),
                'x0': resets_user[i].time_rel_sec,
                'y0': 0,
                'x1': resets_user[i].time_rel_sec,
                'y1': max_time,
                'yref': 'y2',
                'line': {
                    'color': 'rgb(50, 171, 96)',
                    'width': 4,
                    'dash': 'dashdot',
                },})
        }

    for (i=0;i<resets_user.length;i++) {
        shapes.push({'type': 'line',
            // 'x0': unpack([resets_user[0]], 'time_rel_sec'),
            'x0': resets_user[i].time_rel_sec,
            'y0': -110,
            'x1': resets_user[i].time_rel_sec,
            'y1': 110,
            'yref': 'y',
            'line': {
                'color': 'rgb(50, 171, 96)',
                'width': 4,
                'dash': 'dashdot',
            },})
    }

        var undos_user = E.curr_data.filter(function (el) {
            return (el.userid == E.users[E.curr_user_index] & el.action == 'undo')
        });

    for (i=0;i<undos_user.length;i++) {
        shapes.push({'type': 'line',
            // 'x0': unpack([resets_user[0]], 'time_rel_sec'),
            'x0': undos_user[i].time_rel_sec,
            'y0': 0,
            'x1': undos_user[i].time_rel_sec,
            'y1': max_time,
            'yref': 'y2',
            'line': {
                'color': 'rgb(255, 153, 0)',
                'width': 4,
                'dash': 'dashdot',
            },})
    }

    for (i=0;i<undos_user.length;i++) {
        shapes.push({'type': 'line',
            // 'x0': unpack([resets_user[0]], 'time_rel_sec'),
            'x0': undos_user[i].time_rel_sec,
            'y0': -110,
            'x1': undos_user[i].time_rel_sec,
            'y1': 110,
            'yref': 'y',
            'line': {
                'color': 'rgb(255, 153, 0)',
                'width': 4,
                'dash': 'dashdot',
            },})
    }


    var trace1 = {
            type: "scatter",
            mode: "lines+markers",
            x: unpack(E.curr_user_clicks, 'time_rel_sec'),
            y: unpack(E.curr_user_clicks, 'score_heuristic_x'),
            line: {color: '#17BECF'},
        name:'score heuristic x',
        };

    var trace2 = {
        type: "scatter",
        mode: "lines+markers",
        x: unpack(E.curr_user_clicks, 'time_rel_sec'),
        y: unpack(E.curr_user_clicks, 'time_from_action'),
        line: {color: '#cc6699'},
        yaxis: 'y2',
        name:'delta time',
    };


        var data = [trace1, trace2];
        // var data_times = [trace2];

       var layout = {
           title: E.users[E.curr_user_index] + '_'+ E.curr_user_clicks[0].solved + '_'+ E.curr_user_clicks[0].heuristic,
           // yaxis: {
           //     type: 'log',
           //     autorange: true
           // }
           'shapes':   shapes,
           yaxis: {domain: [0, 0.65]},
           yaxis2:{domain: [0.75, 1]}
};
        E.curr_point = E.curr_user_clicks[0].time_rel_sec;
        E.curr_point_index = 0;

        E.myPlot = document.getElementById('myDiv');
        // E.myPlot_times = document.getElementById('myDivTimes');

        Plotly.newPlot('myDiv', data, layout);

        // Plotly.newPlot('myDivTimes', data_times, layout);

       E.myPlot.on('plotly_click', function(data){
       var pts = '';
       // alert(data.points[0].x);
       for(var i=0; i < data.points.length; i++){
           E.curr_point = data.points[i].x;
           // alert(data.points[i].pointNumber)
           draw_board(E.myPlot)

       }
       // alert('Closest point clicked:\n\n'+pts);
   });
        draw_board();
    // })
}

$(document).ready(function(){
    Plotly.d3.csv("moves_hueristic_scores_explore_200518.csv", function (err, rows) {
        E.data = rows;
        E.users = unpack(E.data,'userid');
        E.users = E.users.unique();
        // E.curr_user = E.users[0];
        E.curr_data = E.data;
    });

    // draw_chart()
});
