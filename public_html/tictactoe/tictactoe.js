


logger_url = "../logger/logger.py"
experiment = "tictactoe"

E = {}
E.startTime = 0
E.endTime = 0
E.debugMode = false
E.condition = 'solve'
E.timerDone = false
E.solvedCorrect = false;


E.board6_practice = {
    canvasContainerDiv : "#canvas-container-practice",
    nrows : 6,
    ncols : 6,
    cellSize: 46,
    position: [
        [2,0,0,0,0,1],
        [0,0,0,0,0,0],
        [0,0,0,2,0,0],
        [0,0,1,1,0,2],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0]
    ],
    nextPlayer: 1,
    streak:4,
    turns: 2,
    practice: true
}

E.board10_tutorial = {
    canvasContainerDiv : "#canvas-container-practice",
    nrows : 10,
    ncols : 10,
    cellSize: 32,
    position: [
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

    ],
    nextPlayer: 1,
    streak:4,
    turns: 2,
    practice: true
}

E.board10_practice = {
    canvasContainerDiv : "#canvas-container-practice",
    nrows : 10,
    ncols : 10,
    cellSize: 32,
    position: [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,2,0,0,0,0,1,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,2,0,2,0,0,0,0],
        [0,0,1,1,1,0,2,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]

    ],
    nextPlayer: 1,
    streak:4,
    turns: 2,
    practice: true
}

E.board_practice = E.board10_practice;
//
// E.board10_practice = {
//     canvasContainerDiv : "#canvas-container-practice",
//     nrows : 10,
//     ncols : 10,
//     cellSize: 32,
//     position: [
//         [0,1,0,0,0,1,0,0,0,1],
//         [0,0,0,0,0,2,1,0,0,0],
//         [0,0,0,0,2,2,2,2,0,2],
//         [1,2,2,0,1,1,0,0,0,1],
//         [2,0,2,0,0,0,0,2,2,1],
//         [2,1,0,0,2,2,1,0,0,2],
//         [1,0,2,1,2,1,0,0,0,0],
//         [0,0,2,0,1,1,0,0,0,0],
//         [1,0,0,1,1,1,2,2,2,1],
//         [2,0,0,2,0,1,0,0,0,1]
//
//     ],
//     nextPlayer: 1,
//     streak:4,
//     turns: 4
// }


E.board6_1 = {
    canvasContainerDiv : "#canvas-container",
    nrows : 6,
    ncols : 6,
    cellSize: 46,
    position: [
        [0,1,0,2,0,0],
        [0,2,1,1,0,0],
        [1,2,2,2,1,0],
        [2,0,1,1,2,0],
        [1,0,2,2,0,0],
        [0,0,0,0,0,0]
    ],
    nextPlayer: 1,
    streak:4,
    turns: 4,
    winPath: [[[3,5],[1,5],[2,5],[4,5]],  [[1,5],[3,5],[2,5],[4,5]]],
    losePath: [[[0,2],[1,4],[0,5]],  [[1,4],[0,2],[0,5]]],
    winMove: ['f3','F3','3F','3F','f5','F5','5F','5F']
}

E.board6_1_pruned = {
    canvasContainerDiv : "#canvas-container",
    nrows : 6,
    ncols : 6,
    cellSize: 46,
    position: [
        [0,1,2,2,0,0],
        [0,2,1,1,0,0],
        [1,2,2,2,1,0],
        [2,0,1,1,2,1],
        [1,0,2,2,0,0],
        [0,0,0,0,0,0]
    ],
    nextPlayer: 1,
    streak:4,
    turns: 3,
    winPath: [[[1,5],[2,5],[4,5]]],
    losePath: [[[1,4],[0,5]]],
    winMove: ['f5','F5','5F','5F']
}

E.board6_1_10_5 = {
    canvasContainerDiv : "#canvas-container",
    nrows : 10,
    ncols : 10,
    cellSize: 32,
    position: [
        [0,0,0,0,1,0,2,0,0,0],
        [0,0,0,0,2,1,1,1,0,0],
        [0,0,0,1,2,2,2,1,0,0],
        [0,0,0,2,2,1,1,2,1,1],
        [2,0,0,1,0,2,2,0,0,0],
        [1,0,0,0,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0,0,0],
        [2,2,0,0,0,0,1,0,0,0],
        [0,0,0,0,0,0,1,0,0,0],
        [0,0,0,0,0,2,2,2,0,0]
    ],
    nextPlayer: 1,
    streak:5,
    turns: 4,
    winPath: [[[4,9],[1,9],[2,9],[5,9]],  [[1,9],[4,9],[2,9],[5,9]]],
    losePath: [[[0,5],[1,8],[0,9]],  [[1,8],[0,5],[0,9]]],
    winMove: ['j6','J6','6j','6J','j9','J9','9j','9J']
}

E.board6_1_10_5_pruned = {
    canvasContainerDiv : "#canvas-container",
    nrows : 10,
    ncols : 10,
    cellSize: 32,
    position: [
        [0,0,0,0,1,2,2,0,0,0],
        [0,0,0,0,2,1,1,1,0,0],
        [0,0,0,1,2,2,2,1,0,0],
        [0,0,0,2,2,1,1,2,1,1],
        [2,0,0,1,0,2,2,0,0,1],
        [1,0,0,0,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0,0,0],
        [2,2,0,0,0,0,1,0,0,0],
        [0,0,0,0,0,0,1,0,0,0],
        [0,0,0,0,0,2,2,2,0,0]
    ],
    nextPlayer: 1,
    streak:5,
    turns: 3,
    winPath: [[[1,9],[2,9],[5,9]]],
    losePath: [[[1,8],[0,9]]],
    winMove: ['j9','J9','9j','9J']
}

E.board6_1_10 = {
    canvasContainerDiv : "#canvas-container",
    nrows : 10,
    ncols : 10,
    cellSize: 32,
    position: [
        [0,0,0,0,0,1,0,2,0,0],
        [0,0,0,1,0,2,1,1,0,0],
        [0,2,0,2,1,2,2,2,1,0],
        [0,0,2,1,2,0,1,1,2,0],
        [0,0,0,1,0,0,2,2,0,0],
        [0,2,1,0,0,0,0,0,0,0],
        [0,2,2,0,0,0,0,0,0,0],
        [0,1,2,0,0,0,0,0,0,0],
        [2,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ],
    nextPlayer: 1,
    streak:4,
    turns: 4
}

E.board6_1_O = {
    canvasContainerDiv : "#canvas-container",
    nrows : 6,
    ncols : 6,
    cellSize: 46,
    position: [
        [0,2,0,1,0,0],
        [0,1,2,2,0,0],
        [2,1,1,1,2,0],
        [1,0,2,2,1,0],
        [2,0,1,1,0,0],
        [0,0,0,0,0,0]
    ],
    nextPlayer: 2,
	streak:4,
	turns: 4
}

E.board6_2 = {
    canvasContainerDiv : "#canvas-container",
    nrows : 6,
    ncols : 6,
    cellSize: 46,
    position: [
        [0,2,0,0,1,0],
        [0,2,0,2,0,0],
        [0,1,0,0,0,0],
        [0,1,0,0,0,0],
        [0,1,0,0,0,0],
        [0,2,0,0,2,0]
    ],
    nextPlayer: 1,
    streak:4,
    turns: 4
}

E.board6_2_b = {
    canvasContainerDiv : "#canvas-container",
    nrows : 6,
    ncols : 6,
    cellSize: 46,
    position: [
        [0,2,0,0,1,0],
        [0,2,1,2,0,0],
        [0,1,0,0,0,0],
        [0,1,0,2,0,0],
        [0,1,0,0,0,0],
        [0,2,0,0,2,0]
    ],
    nextPlayer: 1,
    streak:4,
    turns: 5,
    winPath: [[[0,3],[0,2],[2,2],[2,3],[2,0]]],
    losePath: [[[3,0],[0,5],[3,2],[2,4]]],
    winMove: ['d6','D6','6d','6D']
}

E.board6_2_b_pruned = {
    canvasContainerDiv : "#canvas-container",
    nrows : 6,
    ncols : 6,
    cellSize: 46,
    position: [
        [0,2,0,1,1,0],
        [0,2,1,2,0,0],
        [0,1,0,0,0,0],
        [2,1,0,2,0,0],
        [0,1,0,0,0,0],
        [0,2,0,0,2,0]
    ],
    nextPlayer: 1,
    streak:4,
    turns: 4,
    winPath: [[[0,2],[2,2],[2,3],[2,0]]],
    losePath: [[[0,5],[3,2],[2,4]]],
    winMove: ['c6','C6','6c','6C']
}


E.board10_2_b = {
    canvasContainerDiv : "#canvas-container",
    nrows : 10,
    ncols : 10,
    cellSize: 32,
    position: [
        [0,2,0,0,1,0,0,0,0,0],
        [0,2,1,2,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0],
        [0,1,0,2,0,0,0,2,1,0],
        [0,1,0,0,0,0,0,0,2,1],
        [0,2,0,0,2,0,0,0,2,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,2,0],
        [0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,1,0,0,2]
    ],
    nextPlayer: 1,
    streak:4,
    turns: 5,
    winPath: [[[0,3],[0,2],[2,2],[2,3],[2,0]]],
    losePath: [[[3,0],[0,5],[3,2],[2,4]]],
    winMove: 'd6'
}

E.board10_2_b_5 = {
    canvasContainerDiv : "#canvas-container",
    nrows : 10,
    ncols : 10,
    cellSize: 32,
    position: [
        [0,0,0,2,0,0,0,0,0,0],
        [0,0,0,1,0,2,0,0,0,0],
        [0,2,2,0,0,1,1,0,2,0],
        [0,0,2,1,2,0,0,0,0,0],
        [0,1,1,0,0,0,0,0,0,0],
        [0,1,1,0,2,0,0,0,0,0],
        [0,0,1,0,2,0,0,0,0,0],
        [0,0,1,0,0,0,0,0,0,0],
        [0,0,2,0,0,2,2,0,0,0],
        [0,0,0,0,1,0,0,0,0,0]
    ],
    nextPlayer: 1,
    streak:5,
    turns: 5,
    winPath: [[[2,4],[2,3],[4,3],[4,4],[4,5]]],
    losePath: [[[6,0],[2,7],[5,3],[4,0]]],
    winMove: ['e8','E8','8e','8E']
}

E.board10_2_b_5_pruned = {
    canvasContainerDiv : "#canvas-container",
    nrows : 10,
    ncols : 10,
    cellSize: 32,
    position: [
        [0,0,0,2,0,0,0,0,0,0],
        [0,0,0,1,0,2,0,0,0,0],
        [0,2,2,0,1,1,1,0,2,0],
        [0,0,2,1,2,0,0,0,0,0],
        [0,1,1,0,0,0,0,0,0,0],
        [0,1,1,0,2,0,0,0,0,0],
        [2,0,1,0,2,0,0,0,0,0],
        [0,0,1,0,0,0,0,0,0,0],
        [0,0,2,0,0,2,2,0,0,0],
        [0,0,0,0,1,0,0,0,0,0]
    ],
    nextPlayer: 1,
    streak:5,
    turns: 4,
    winPath: [[[2,3],[4,3],[4,4],[4,5]]],
    losePath: [[[2,7],[5,3],[4,0]]],
    winMove: ['d8','D8','8d','8D']
}

E.board6_2_c = {
    canvasContainerDiv : "#canvas-container",
    nrows : 6,
    ncols : 6,
    cellSize: 46,
    position: [
        [0,2,0,1,1,0],
        [0,2,1,2,0,0],
        [0,1,0,0,0,0],
        [2,1,0,2,0,0],
        [0,1,0,0,0,0],
        [0,2,0,0,2,0]
    ],
    nextPlayer: 1,
    streak:4,
    turns: 4
}

E.board6_2_d = {
    canvasContainerDiv : "#canvas-container",
    nrows : 6,
    ncols : 6,
    cellSize: 46,
    position: [
        [0,2,0,1,1,0],
        [0,2,1,2,0,0],
        [0,1,0,0,0,0],
        [0,1,0,2,0,0],
        [0,1,0,0,0,0],
        [0,2,0,0,2,0]
    ],
    nextPlayer: 2,
    streak:4,
    turns: 4,
    firstMovrRow: '0',
    firstMovrCol: '3',
    firstMove: 'd6'
}

E.board10_1 = {
    canvasContainerDiv : "#canvas-container",
    nrows : 10,
    ncols : 10,
    cellSize: 32,
    position: [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,1,0,0,2,0,0,0,0],
        [0,0,0,1,1,0,0,0,0,0],
        [0,0,0,0,2,2,2,1,2,0],
        [0,0,0,0,0,1,2,2,0,0],
        [0,0,0,1,0,2,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,0,2,0,0,0]
    ],
    nextPlayer: 1,
    streak:5,
    turns: 4,
    winPath: [[[5,2],[3,2],[4,2],[6,2]], [[3,2],[5,2],[4,2],[6,2]]],
    losePath: [[[4,1],[3,5],[1,2]], [[3,5],[4,1],[1,2]]],
    winMove: ['c7','c5','C7','C5','7c', '5c','7C','5C']
}

E.board10_1_pruned = {
    canvasContainerDiv : "#canvas-container",
    nrows : 10,
    ncols : 10,
    cellSize: 32,
    position: [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,1,0,0,2,0,0,0,0],
        [0,0,1,1,1,2,0,0,0,0],
        [0,0,0,0,2,2,2,1,2,0],
        [0,0,0,0,0,1,2,2,0,0],
        [0,0,0,1,0,2,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,0,2,0,0,0]
    ],
    nextPlayer: 1,
    streak:5,
    turns: 3,
    winPath: [[[5,2],[4,2],[6,2]]],
    losePath: [[[4,1],[1,2]]],
    winMove: ['c5','C5','5c','5C']
}

E.board10_1_O = {
    canvasContainerDiv : "#canvas-container",
    nrows : 10,
    ncols : 10,
    cellSize: 32,
    position: [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,2,0,0,1,0,0,0,0],
        [0,0,0,2,2,0,0,0,0,0],
        [0,0,0,0,1,1,1,2,1,0],
        [0,0,0,0,0,2,1,1,0,0],
        [0,0,0,2,0,1,0,0,0,0],
        [0,0,0,0,2,2,0,0,0,0],
        [0,0,0,0,0,2,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,0]
    ],
    nextPlayer: 2,
    streak:5,
    turns: 5
}

E.board10_1_five_steps = {
    canvasContainerDiv : "#canvas-container",
    nrows : 10,
    ncols : 10,
    cellSize: 32,
    position: [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,2,0,0,0,0,0,0,0,0],
        [0,0,2,2,0,0,0,0,0,0],
        [0,0,0,1,1,1,2,1,0,0],
        [0,0,0,0,2,1,1,0,0,0],
        [0,0,2,0,1,0,0,0,0,0],
        [0,0,0,2,2,0,0,0,0,0],
        [0,0,0,0,2,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0]
    ],
    nextPlayer: 2,
    streak:5,
    turns: 5
}

E.board10_1_original = {
    canvasContainerDiv : "#canvas-container",
    nrows : 10,
    ncols : 10,
    cellSize: 32,
    position: [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,2,0,0,1,0,0,0,0],
        [0,0,0,2,2,0,0,0,0,0],
        [0,0,0,0,1,1,1,2,1,0],
        [0,0,0,0,0,2,1,1,0,0],
        [0,0,0,2,0,1,0,0,0,0],
        [0,0,0,0,2,2,0,0,0,0],
        [0,0,0,0,0,2,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,0]
    ],
    nextPlayer: 2,
    streak:4,
    turns: 4
}

E.board10_2 = {
    canvasContainerDiv : "#canvas-container",
    nrows : 10,
    ncols : 10,
    cellSize: 32,
    position: [
        [0,0,0,2,0,1,0,0,0,0],
        [0,0,0,0,0,2,0,0,0,0],
        [0,0,2,0,0,2,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0],
        [0,0,2,0,0,1,1,1,2,0],
        [2,1,0,0,2,1,2,0,0,0],
        [1,0,0,0,0,1,2,2,0,0],
        [0,0,0,0,0,2,0,0,0,0],
        [0,0,0,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ],
    nextPlayer: 1,
    streak:4,
    turns: 4
}

E.board10_2_O = {
    canvasContainerDiv : "#canvas-container",
    nrows : 10,
    ncols : 10,
    cellSize: 32,
    position: [
        [0,0,0,1,0,2,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,1,0,0,1,0,0,0,0],
        [0,0,0,0,2,2,0,0,0,0],
        [0,0,1,0,0,2,2,2,1,0],
        [1,2,0,0,1,2,1,0,0,0],
        [2,0,0,0,0,2,1,1,0,0],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,2,2,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ],
    nextPlayer: 2,
    streak:4,
    turns: 4
}

E.configuration = {
    canvasContainerDiv : "#canvas-container",
    nrows : 6,
    ncols : 6,
    cellSize: 46,
    position: [
        [0,2,0,1,0,0],
        [0,1,2,2,0,0],
        [2,1,1,1,2,0],
        [1,0,2,2,1,0],
        [2,0,1,1,0,0],
        [0,0,0,0,0,0]
    ],
    nextPlayer: 2,
    streak:4,
    turns: 4
}





$(document).ready(function() {

	initialize_experiment();


	onContinue();
});

function initialize_experiment() {
	$(document).ajaxError(abortAll);

	$("#btnContinue").attr('disabled', 'disabled');
	$('#progress').hide();
	

	

	E.userid = initialize_userid();
	servlog("new_user", E.userid)
  	E.position = getPosition();
    var debug = getUrlVars()['debug']
    if (debug == '1') {
        E.debugMode = true
    }
	// alert(E.position)
  	servlog("start_position",E.position)
}


function onCheckbox() {
	if($("#consentagree").prop("checked")) {
		$("#btnContinue").removeAttr('disabled');

	} else {
		$("#btnContinue").attr('disabled', 'disabled');
	}
}


function run_block() {
    var tposition = getUrlVars()['board']
    // alert(tposition)
    E.configuration = E.board6_1;
    if(tposition != undefined){
        // var position = ternaryToPosition(tposition, 6, 6)
        switch(tposition) {
            case '1':
                E.configuration = E.board6_1;
                break;
            case '1_p':
                E.configuration = E.board6_1_pruned;
                break;
            case '1em':
                E.configuration = E.board6_1_10;
                break;
            case '1em5':
                E.configuration = E.board6_1_10_5;
                break;
            case '1em5_p':
                E.configuration = E.board6_1_10_5_pruned;
                break;
            case '2':
                E.configuration = E.board6_2;
                break;
            case '3':
                E.configuration = E.board6_2_b;
            case '3_p':
                E.configuration = E.board6_2_b_pruned;
                break;
            case '3p':
                E.configuration = E.board6_2_c;
                break;
            case '3s':
                E.configuration = E.board6_2_d;
                break;
            case '3em':
                E.configuration = E.board10_2_b;
                break;
            case '3em5':
                E.configuration = E.board10_2_b_5;
                break;
            case '3em5_p':
                E.configuration = E.board10_2_b_5_pruned;
                break;
            case '4':
                E.configuration = E.board10_1;
                break;
            case '4_p':
                E.configuration = E.board10_1_pruned;
                break;
            case '5':
                E.configuration = E.board10_2;
                break;
        }
    }

    servlog('condition',E.condition)
    servlog('board', tposition)




	 // var init = {
	 // 	canvasContainerDiv : "#canvas-container",
	 // 	nrows : 6,
	 // 	ncols : 6,
	 // 	cellSize: 46,
	 // 	position: E.position,
	 // 	nextPlayer: 2
	 // }

    E.widget.reset();
	 
	 E.widget = new TictactoeWidget(E.configuration)
	 E.widget.run()


}

function init_practice() {
    var cond = getUrlVars()['cond']
    if (cond=='v') {
        E.condition='verify'
    }

    E.widget = new TictactoeWidget(E.board_practice)
    E.widget.run()
}


 function getPosition()
 {
  	var tposition = getUrlVars()['board']
	// alert(tposition)
     var position = E.board6_1;
 	if(tposition != undefined){
 		// var position = ternaryToPosition(tposition, 6, 6)
        switch(tposition) {
			case '1':
				position = E.board6_1;
				break;
            case '2':
                position = E.board6_2;
                break;
            case '3':
                position = E.board6_2_b;
                break;
            case '4':
                position = E.board10_1;
                break;
            case '5':
                position = E.board10_2;
                break;
        }
 	}
 	else{
	 	 position = [
	 		[0,2,0,1,0,0],
	 		[0,1,2,2,0,0],
	 		[2,1,1,1,2,0],
	 		[1,0,2,2,1,0],
	 		[2,0,1,1,0,0],
	 		[0,0,0,0,0,0]		
	 	]  		
 	}
 	// alert(position)
 	return position	
 }
 
 
 function ternaryToPosition(tern, nrows, ncols){

	var position = []
	for(r=0; r<nrows; r++){
		position.push([])
		for(c=0; c<ncols; c++){
			ch = tern[r*ncols + c]
			position[r][c] = parseInt(ch)
		}
	}
	
	return position;	
 }


function startLog() {
	return;
	var timems = time();
	exper['startTime'] = timems;

	exper['browser'] = BrowserDetect.browser;
	exper['version'] = BrowserDetect.version;
	exper['OS'] = BrowserDetect.OS;
	servlog('exper', 'ExperimentStart', JSON.stringify(exper));

	exper['agent'] = navigator.userAgent;
	exper['JQbrowser'] = $.browser;
	servlog('debug', 'ExperimentStart', JSON.stringify(exper));

	var mlog = "exper-begin" + "," + timems;
	mouselog(mlog);
}

function showCode() {

	$(".code").text(E.userid);

}



function show_page_real()
{
	$("#real.page").show()		
}

function show_page_final(){
			$("#final.page").show()	

	$("#btnContinue").hide()
	showCode();	
}

function submit_demographics() {
	var gender=document.getElementById("gender").options[document.getElementById("gender").selectedIndex].value;
	var education=document.getElementById("education").options[document.getElementById("education").selectedIndex].value;
	var age=document.getElementById("age").value;

	servlog("gender", gender);
	servlog("education", education);
	servlog("age", age);
}

function submit_quiz() {

	
	var q1 = $("#q1").val()
	var q2 = $("#q2").val()
	var q3 = $("#q3").val()
	var q4 = $("#q4").val()	
	var q5 = $("#q5").val()
    var q6 = $("#q6").val()

	
	servlog("quiz1", q1);
	servlog("quiz2", q2);
	servlog("quiz3", q3);
	servlog("quiz4", q4);
	servlog("quiz5", q5);
    servlog("quiz6", q6);
	
	var passed = false;
	if( q1 == '2' && q2 == '2' && q3 =='3' && q4 == 'c1' && q5=='b4' && q6=='b3'){
		var passed = true;
	}
	

	servlog("passedQuiz", passed);
	
	if (passed == false & E.debugMode == false)
	{
		alert("Sorry, you did not pass the quiz. You will now be shown the tutorial again, when you're ready to re-take the quiz click continue.");
		onContinue.curPage = 2;
		onContinue();
	}
}

function submit_solution() {

	var move = $("#bestmove").val();
	E.move = move;
    var conf = $('input[name=confidence]:checked', '#experiment').val()
    var ver = $("#verification").val()
    // if(typeof conf != 'undefined')
	// {
        // var solution = $("#solution").val();
        servlog("best_move", move);
    if (conf!=undefined)
    {
        servlog("confidence", conf);
    }
        servlog("verification_answer", ver);
	// }

    if (E.condition == "solve") {
        // alert(move)
        if (E.configuration.winMove.indexOf(move) > -1)
        {
            E.solvedCorrect = true;
        }
        else {
            alert("Sorry, your solution is incorrect. The correct solution was "+E.configuration.winMove[0] +". In the next screen you will" +
                "receive a verification code to paste in your HIT submission.")
        }
    }
    else {
        if (ver=="yes") {
            E.solvedCorrect = true;
        }
        else
        {
            alert("Sorry, your solution is incorrect. The move for X was indeed a winning move. In the next screen you will" +
                "receive a verification code to paste in your HIT submission.")
        }
    }
    servlog("correct",E.solvedCorrect);


}

function suggest_solution(){
	
	
	$("#group.page").show()
	
	$("#widget-container").prependTo($("#suggest"))
	
	E.widget.reset();
	$("#own").html(E.move)
}

function log_vote(){
	
	voteOwn = $("#cbown").prop('checked')
	voteA = $("#cba").prop('checked')
	voteB = $("#cbb").prop('checked')
	
	explanationVote = $("#explanationVote").val()

	servlog("vote.own", voteOwn)
	servlog("vote.A", voteA)
	servlog("vote.B", voteB)
	servlog("explanationVote", explanationVote )
	
}

function onContinue() {

	if( typeof onContinue.curPage == 'undefined')
		onContinue.curPage = 0;
	onContinue.curPage++;

	//blank all pages
	$(".page").hide();

    E.size = getUrlVars()['size']

	//run_block()
	//$("#experiment.page").show()
	//return


	switch(onContinue.curPage) {

		case 1:
			$("#consent.page").show()
			break;

		case 2:
			startLog();

			$("#demographics.page").show()

			break;

		case 3:
			submit_demographics();
			E.startTime=msTime();
			$("#instructions.page").show()
            if (E.size == '6') {
                $(".10by10").hide();
                E.board_practice = E.board6_practice
            }
            else {
                $(".6by6").hide();
                E.board_practice = E.board10_practice
            }


			$("#btnContinue").html('Continue to quiz')
            $(window).scrollTop(0,0);
			break;

		case 4:
			E.endTime=msTime()
			var timeInstructions = E.endTime-E.startTime
			// alert('should call servlog')
			servlog("timeInstructions", timeInstructions);
			
			$("#btnContinue").html('Continue')
			E.startTime=msTime();
            init_practice();

			$("#quiz.page").show()
            if (E.condition=="solve") {
			    $('#exampleVerify').hide()
            }
            else {
                $('#exampleSolve').hide()
            }
            $(window).scrollTop(0,0);
			
			
			//$("#btnContinue").hide()
			break;

		case 5:
			E.endTime=msTime();
			var timeQuiz = E.endTime-E.startTime
			servlog("timeQuiz", timeQuiz);
			submit_quiz();
			if (onContinue.curPage==5)
			{

				E.startTime=msTime();
				run_block();
				if (E.configuration.nextPlayer == 1) {
                    $('.player').text('X');
				}
				else {
                    $('.player').text('O');
				}
                $('.turns').text(parseInt(E.configuration.turns));
                $('.streak').text(parseInt(E.configuration.streak));
				$("#experiment.page").show()
                $('#playGameInstructions').hide();
				$('#play').hide();
				$('#timerFinal').hide()
                if (E.condition=='solve') {
				    $("#verify").hide()
                    $("#generalInstructionsVerify").hide()
                    $("#answerVerification").hide()

                }
                else {
                    $("#generalInstructions").hide()
                    $("#solve").hide()
                    $("#answerSolution").hide()
                }


                $(window).scrollTop(0,0);
                // Update the count down every 1 second
                var timerStart = new Date().getTime();
                var diff = 10

                var countDownDate =  new Date(timerStart + diff*60000);
                var x = setInterval(function() {

                    // Get todays date and time
                    var now = new Date().getTime();

                    // Find the distance between now an the count down date
                    var distance = countDownDate - now;

                    // Time calculations for days, hours, minutes and seconds
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    var totalSeconds = minutes*60+seconds
                    // Display the result in the element with id="demo"
                    document.getElementById("timer").innerHTML = "Time left: " + minutes + "m " + seconds + "s ";
                    // If the count down is finished, write some text
                    if (totalSeconds <= 60 & totalSeconds>59 & E.timerDone == false & E.debugMode==false) {
                        $("#timer").addClass("timeUp")
                        alert('You have one minute left. Make sure to submit your solution in the next minute.')
                    }
                    // If the count down is finished, write some text
                    if (distance < 0 & E.timerDone == false  & E.debugMode==false) {
                        clearInterval(x);
                        alert('Time is up! You will be advanced to next stage of the experiment.')
                        E.timerDone = true
                        onContinue()
                    }
                }, 1000);


            }

			break;

		case 6:

			// show_page_real();

			E.endTime=msTime();
			var timeSolution = E.endTime-E.startTime
			servlog("timeSolution", timeSolution);
			submit_solution();

            if (E.solvedCorrect == false) { //if did not solve correct, no point in having them play the game
                onContinue();
                return;
            }

            $("#experiment.page").show()
            $("#timer").hide()
            $("#verify").hide()
            $("#generalInstructionsVerify").hide()
            $("#answerVerification").hide()
            $("#generalInstructions").hide()
            $("#solve").hide()
            $("#answerSolution").hide()
            $('#playGameInstructions').show();
            $("#timerFinal").show()
            $("#play").show()
            $("#moves").show()
            $('#confidenceQuestion').hide()

            var moves = E.widget.generateMoveList()
            var moveListText = ''
            for (i = 0;i<moves.length;i++) {
                moveListText = moveListText + moves[i] + '<br>'
            }
            $('#moves').html(moveListText)

            E.widget.reset();
            E.widget.simulate();

            $('#undo').hide();


            E.startTime = msTime();

            var diff = 3

            var timerStart = new Date().getTime();

            $("#timerFinal");
            E.timerDone = false;

            var countDownDate =  new Date(timerStart + diff*60000);
            var x = setInterval(function() {

                // Get todays date and time
                var now = new Date().getTime();

                // Find the distance between now an the count down date
                var distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                var totalSeconds = minutes*60+seconds
                // Display the result in the element with id="demo"
                document.getElementById("timerFinal").innerHTML = "Time left: " + minutes + "m " + seconds + "s ";
                // If the count down is finished, write some text
                if (totalSeconds <= 60 & totalSeconds>59 & E.timerDone == false & E.debugMode==false) {
                    $("#timerFinal").addClass("timeUp")
                    alert('You have one minute left. Make sure to submit your solution in the next minute.')
                }
                // If the count down is finished, write some text
                if (distance < 0 & E.timerDone == false  & E.debugMode==false) {
                    clearInterval(x);
                    alert('Time is up! You will be advanced to the end of the experiment.')
                    E.timerDone = true
                    onContinue()
                }
            }, 1000);



			// suggest_solution();

			break;
			
		case 7:
			// log_vote();
            E.timerDone = true
			E.endTime = msTime()
            var timeGame = E.endTime-E.startTime
            // submit_solution();
            servlog("timeGame", timeGame);
			// var timeVote = E.endTime - E.startTime
			// servlog("timeVote", timeVote)
			show_page_final()	

	}
}


//TODO check for screen size
