/**
 * Created by oamir on 5/14/2018.
 */
E = {};
E.data = {};
E.curr_data = {};
E.users = {};
E.curr_user_index = 0;
E.widget = {}
E.curr_point = {}

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

function draw_board() {
    var board_data = E.curr_data.filter(function (el) {
        return (el.time_rel_sec == E.curr_point)
    });
    var position1 = board_data[0].board_state
    var array_pos = JSON.parse("[" + position1 + "]");
    array_pos =array_pos[0]
    E.widget = new TictactoeWidget({
        canvasContainerDiv : "#boardDiv",
        nrows : 6,
        ncols :  6,
        // parseInt(board_data[0].board_size)
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
}

function draw_chart() {


    // Plotly.d3.csv("data/moves_hueristic_scores_explore.csv", function (err, rows) {
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
                return (el.board_name == board & el.action == 'click' & el.solved == solved)
            });
        }
        E.users = unpack(E.curr_data,'userid');
        E.users = E.users.unique();
        // E.curr_user_index = 0;
        // alert (board);
        var rows_user = E.curr_data.filter(function (el) {
            return (el.userid == E.users[E.curr_user_index] & el.action == 'click')
        });

        var resets_user = E.curr_data.filter(function (el) {
            return (el.userid == E.users[E.curr_user_index] & el.action == 'reset')
        });
        shapes = []
        for (i=0;i<resets_user.length;i++) {
            shapes.push({'type': 'line',
                // 'x0': unpack([resets_user[0]], 'time_rel_sec'),
                'x0': resets_user[i].time_rel_sec,
                'y0': -110,
                'x1': resets_user[i].time_rel_sec,
                'y1': 110,
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
            'y0': -110,
            'x1': undos_user[i].time_rel_sec,
            'y1': 110,
            'line': {
                'color': 'rgb(255, 153, 0)',
                'width': 4,
                'dash': 'dashdot',
            },})
    }

    var trace1 = {
            type: "scatter",
            mode: "lines+markers",
            x: unpack(rows_user, 'time_rel_sec'),
            y: unpack(rows_user, 'state_score_x'),
            line: {color: '#17BECF'}
        }


        var data = [trace1];

       var layout = {
           title: E.users[E.curr_user_index] + '_'+ E.curr_data[0].solved + '_'+ E.curr_data[0].heuristic,
           // yaxis: {
           //     type: 'log',
           //     autorange: true
           // }
           'shapes':   shapes
       };
        E.curr_point = rows_user[0].time_rel_sec;
        Plotly.newPlot('myDiv', data, layout);

       myPlot.on('plotly_click', function(data){
       var pts = '';
       alert(data.points[0].x);
       for(var i=0; i < data.points.length; i++){
           E.curr_point = data.points[i].x;
           draw_board()

       }
       // alert('Closest point clicked:\n\n'+pts);
   });
        draw_board();
    // })
}

$(document).ready(function(){
    Plotly.d3.csv("data/moves_hueristic_scores_explore.csv", function (err, rows) {
        E.data = rows;
        E.users = unpack(E.data,'userid');
        E.users = E.users.unique();
        // E.curr_user = E.users[0];
        E.curr_data = E.data;
    });

    // draw_chart()
});
