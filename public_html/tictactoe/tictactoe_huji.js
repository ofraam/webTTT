


logger_url = "../logger/logger.py"
experiment = "tictactoe"

// E = {}
E.startTime = 0
E.endTime = 0
E.debugMode = false
E.condition = ''
E.timerDone = false
E.solvedCorrect = false;
E.difficulty = "easy";
E.validation = false;
E.actionsSolve = 0;
E.actionsValidation = 0;
E.solutionTime = 0;
E.validationTime = 0;
E.numClicksPractice = 0;
E.interval = undefined;



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

E.board6_practice_verify = {
    canvasContainerDiv : "#canvas-container-practice",
    nrows : 6,
    ncols : 6,
    cellSize: 46,
    position: [
        [2,0,0,0,0,1],
        [0,0,0,0,0,0],
        [0,0,0,2,0,0],
        [0,1,1,1,0,2],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0]
    ],
    nextPlayer: 2,
    firstMovrRow: '3',
    firstMovrCol: '1',
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

E.board10_practice_verify = {
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
        [0,1,1,1,1,0,2,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]

    ],
    nextPlayer: 2,
    firstMovrRow: '7',
    firstMovrCol: '1',
    streak:4,
    turns: 2,
    practice: true
}

E.board_practice = E.board10_practice;



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

E.board6_1_verify = {
    canvasContainerDiv : "#canvas-container",
    nrows : 6,
    ncols : 6,
    cellSize: 46,
    position: [
        [0,1,0,2,0,0],
        [0,2,1,1,0,0],
        [1,2,2,2,1,0],
        [2,0,1,1,2,1],
        [1,0,2,2,0,0],
        [0,0,0,0,0,0]
    ],
    nextPlayer: 2,
    streak:4,
    turns: 4,
    firstMovrRow: '3',
    firstMovrCol: '5',
    winPath: [[[1,5],[2,5],[4,5]]],
    losePath: [[[0,2],[1,4],[0,5]]],
    winMove: ['f3','F3','3F','3F'],
    nextMove: ['f5','F5','5F','5F'],
    firstMove: 'f3'
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

E.board6_1_10_5_verify = {
    canvasContainerDiv : "#canvas-container",
    nrows : 10,
    ncols : 10,
    cellSize: 32,
    position: [
        [0,0,0,0,1,0,2,0,0,0],
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
    nextPlayer: 2,
    streak:5,
    turns: 4,
    firstMovrRow: '4',
    firstMovrCol: '9',
    winPath: [[[1,9],[2,9],[5,9]]],
    losePath: [[[0,5],[1,8],[0,9]]],
    winMove: ['j6','J6','6j','6J'],
    nextMove: ['j9','J9','9j','9J']
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

E.board6_2_b_verify = {
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
    turns: 5,
    firstMovrRow: '0',
    firstMovrCol: '3',
    winPath: [[[0,2],[2,2],[2,3],[2,0]]],
    losePath: [[[3,0],[0,5],[3,2],[2,4]]],
    winMove: ['d6','D6','6d','6D'],
    nextMove: ['c6','C6','6c','6C']
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

E.board10_2_b_5_verify = {
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
        [0,0,1,0,2,0,0,0,0,0],
        [0,0,1,0,0,0,0,0,0,0],
        [0,0,2,0,0,2,2,0,0,0],
        [0,0,0,0,1,0,0,0,0,0]
    ],
    nextPlayer: 2,
    streak:5,
    turns: 5,
    firstMovrRow: '2',
    firstMovrCol: '4',
    winPath: [[[2,3],[4,3],[4,4],[4,5]]],
    losePath: [[[6,0],[2,7],[5,3],[4,0]]],
    winMove: ['e8','E8','8e','8E'],
    nextMove: ['d8','D8','8d','8D']
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
    // winPath: [[[5,2],[3,2],[4,2],[6,2]], [[3,2],[5,2],[4,2],[6,2]]],
    // losePath: [[[4,1],[3,5],[1,2]], [[3,5],[4,1],[1,2]]],
    winPath: [[[4,2],[5,3],[6,4],[8,6]], [[3,2],[5,2],[4,2],[6,2]]],
    losePath: [[[5,2],[4,3],[3,1]], [[3,5],[4,1],[1,2]]],
    winMove: ['c7','c6','C7','C6','7c', '6c','7C','6C']
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

E.board10_1_verify = {
    canvasContainerDiv : "#canvas-container",
    nrows : 10,
    ncols : 10,
    cellSize: 32,
    position: [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,1,0,0,2,0,0,0,0],
        [0,0,1,1,1,0,0,0,0,0],
        [0,0,0,0,2,2,2,1,2,0],
        [0,0,0,0,0,1,2,2,0,0],
        [0,0,0,1,0,2,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,0,2,0,0,0]
    ],
    nextPlayer: 2,
    streak:5,
    turns: 4,
    firstMovrRow: '3',
    firstMovrCol: '2',
    winPath: [[[5,2],[4,2],[6,2]]],
    losePath: [[[3,5],[4,1],[1,2]]],
    winMove: ['c7','C7','7c','7C']
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

	// $("#btnContinue").attr('disabled', 'disabled');
	$('#progress').hide();



	E.userid = getUrlVars()['userid']

    var debug = getUrlVars()['debug']
    if (debug == '1') {
        E.debugMode = true
    }

    var tposition = getUrlVars()['board']
    // alert(tposition)
    E.configuration = E.board6_1;
    if (tposition == undefined)
    {
        alert("no board specified!")
    }

    if (tposition=='rand') {
        var confs = ['1f', '1p', '2f', '2p', '4f', '4p', '5f', '5p'];
        // var confs = ['1f', '1p', '1v', '2f', '2p', '2v', '3f', '3p', '3v', '4f', '4p', '4v', '5f', '5p', '5v'];
        // var confs = ['1f', '1p', '2f', '2p', '3f', '3p', '4f', '4p', '5f', '5p'];
        // var confs = ['1v'];
        tposition = confs[Math.floor(Math.random()*confs.length)];
        // alert(tposition)
    }
        // var position = ternaryToPosition(tposition, 6, 6)
    switch(tposition) {


        case '1f':
            E.configuration = E.board6_1;
            E.condition = "full";
            E.difficulty = "easy";
            E.size = 6;
            E.board_practice = E.board6_practice;
            break;
        case '1p':
            E.configuration = E.board6_1_pruned;
            E.condition = "pruned";
            E.difficulty = "easy";
            E.size = 6;
            E.board_practice = E.board6_practice;
            break;
        case '1v':
            E.configuration = E.board6_1_verify;
            E.condition = "verify";
            E.difficulty = "easy";
            E.size = 6;
            E.board_practice = E.board6_practice_verify;
            break;

        case '2f':
            E.configuration = E.board6_1_10_5;
            E.condition = "full";
            E.difficulty = "easy";
            E.board_practice = E.board10_practice;
            E.size = 10;
            break;
        case '2p':
            E.configuration = E.board6_1_10_5_pruned;
            E.condition = "pruned";
            E.difficulty = "easy";
            E.board_practice = E.board10_practice;
            E.size = 10;
            break;
        case '2v':
            E.configuration = E.board6_1_10_5_verify;
            E.condition = "verify";
            E.difficulty = "easy";
            E.size = 10;
            E.board_practice = E.board10_practice_verify;
            break;
        case '3f':
            E.configuration = E.board6_2_b;
            E.condition = "full";
            E.difficulty = "hard";
            E.size = 6;
            E.board_practice = E.board6_practice;
            break;
        case '3p':
            E.configuration = E.board6_2_b_pruned;
            E.condition = "pruned";
            E.difficulty = "hard";
            E.board_practice = E.board6_practice;
            E.size = 6;
            break;
        case '3v':
            E.configuration = E.board6_2_b_verify;
            E.condition = "verify";
            E.difficulty = "hard";
            E.board_practice = E.board6_practice_verify;
            E.size = 6;
            break;
        case '4f':
            E.configuration = E.board10_2_b_5;
            E.condition = "full";
            E.difficulty = "hard";
            E.board_practice = E.board10_practice;
            E.size = 10;
            break;
        case '4p':
            E.configuration = E.board10_2_b_5_pruned;
            E.condition = "pruned";
            E.difficulty = "hard";
            E.board_practice = E.board10_practice;
            E.size = 10;
            break;
        case '4v':
            E.configuration = E.board10_2_b_5_verify;
            E.condition = "verify";
            E.difficulty = "hard";
            E.board_practice = E.board10_practice_verify;
            E.size = 10;
            break;
        case '5f':
            E.configuration = E.board10_1;
            E.condition = "full";
            E.difficulty = "medium";
            E.board_practice = E.board10_practice;
            E.size = 10;
            break;
        case '5p':
            E.configuration = E.board10_1_pruned;
            E.condition = "pruned";
            E.difficulty = "medium";
            E.board_practice = E.board10_practice;
            E.size = 10;
            break;
        case '5v':
            E.configuration = E.board10_1_verify;
            E.condition = "verify";
            E.difficulty = "medium";
            E.board_practice = E.board10_practice_verify;
            E.size = 10;
            break;
    }



	// alert(E.position)
    servlog("new_user", E.userid)
    servlog("experimentalCondition", E.size+"_"+E.condition+"_"+E.difficulty);
    servlog("boardSize", E.size);
    servlog("difficulty", E.difficulty);
    servlog("condition",E.condition);

  	servlog("start_position",E.configuration);
}


function onCheckbox() {
	if($("#consentagree").prop("checked")) {
		$("#btnContinue").removeAttr('disabled');

	} else {
		$("#btnContinue").attr('disabled', 'disabled');
	}
}


function run_block() {

    // servlog('condition',E.condition)
    servlog('board', E.configuration);

    E.widget.reset();
	 
	 E.widget = new TictactoeWidget(E.configuration)
	 E.widget.run()


}

function init_practice() {
    // var cond = getUrlVars()['cond']
    // if (cond=='v') {
    //     E.condition='verify'
    // }

    E.widget = new TictactoeWidget(E.board_practice)
    E.widget.run()
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
    var subject_id=document.getElementById("subject_id").value;
	servlog("gender", gender);
	servlog("education", education);
	servlog("age", age);
    servlog("subject_id", subject_id);
}

function submit_quiz() {

	
	var q1 = $("#q1").val()
	var q2 = $("#q2").val()
	var q3 = $("#q3").val()
	var q4 = $("#q4").val()	
	var q5 = $("#q5").val()
    var q6 = $("#q6").val()
    var q6v = $("#q6v").val()

	
	servlog("quiz1", q1);
	servlog("quiz2", q2);
	servlog("quiz3", q3);
	servlog("quiz4", q4);
	servlog("quiz5", q5);
    servlog("quiz6", q6);
    servlog("quiz6v", q6v)
	
	var passed = false;
	if( q1 == '2' && q2 == '2' && q3 =='3' && q4 == 'c1' && q5=='b4'){
        if(E.condition=="verify") {
                if (q6v=="yes") {
                    passed = true;
                }
            }
        else if( q6=='b3')
        {
            passed = true;
        }
	}
	

	servlog("passedQuiz", passed);
	
	if (passed == false & E.debugMode == false)
	{
		alert("Sorry, you did not pass the quiz. You will now be shown the tutorial again, when you're ready to re-take the quiz click continue.");
		onContinue.curPage = 2;
		onContinue();
	}
}

function submit_strategy() {
    var exp = $("#exp").val();
    servlog("strategy", exp);
}
function submit_solution() {

	var move = $("#bestmove").val();
	E.move = move;
    var conf = $('input[name=confidence]:checked', '#experiment').val()
    var ver = $("#verification").val()
    var nextmove = $("#nextmove").val()
    servlog("next_move", nextmove);
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

    if (E.condition=="full" | E.condition=="pruned") {
        // alert(move)
        if (E.configuration.winMove.indexOf(move) > -1)
        {
            E.solvedCorrect = true;
        }
        // else { //TODO: move from submit solution to screen
        //     alert("Sorry, your solution is incorrect. The correct solution was "+E.configuration.winMove[0] +". In the next screen you will" +
        //         "receive a verification code to paste in your HIT submission.")
        // }
    }
    else {
        if (ver=="yes") {
            if (E.configuration.nextMove.indexOf(nextmove) > -1 ) {
                E.solvedCorrect = true;
            }
        }

        // else  //TODO: move from submit solution to screen
        // {
        //     alert("Sorry, your solution is incorrect. The move for X was indeed a winning move. In the next screen you will" +
        //         "receive a verification code to paste in your HIT submission.")
        // }
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
		onContinue.curPage = 1;
	onContinue.curPage++;

	//blank all pages
	$(".page").hide();

    // E.size = getUrlVars()['size']

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
            if (E.size == 6) {
                $(".10by10").hide();
            }
            else {
                $(".6by6").hide();
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



			$("#quiz.page").show();
            // $(".10by10").show();
            // $(".6by6").show();
            if (E.size == 6) {
                $(".10by10").hide();
                $(".10by10_solve").hide();
                $(".10by10_verify").hide();
                if (E.condition=="verify") {
                    $(".practice_solve").hide();
                    $(".6by6_solve").hide();

                }
                else {
                    $(".practice_verify").hide();
                    $(".6by6_verify").hide();

                }

                // E.board_practice = E.board6_practice
            }
            else {
                $(".6by6").hide();
                $(".6by6_solve").hide();
                $(".6by6_verify").hide();
                if (E.condition=="verify") {
                    $(".practice_solve").hide();
                    $(".10by10_solve").hide();

                }
                else {
                    $(".practice_verify").hide();
                    $(".10by10_verify").hide();
                }
            }

            if (E.condition=="full" | E.condition=="pruned") {
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
            if (E.numClicksPractice==0) {
                alert("please practice using the board (in the last question) before you submit your answer.")
                onContinue.curPage=3;
                onContinue()
            }
            else {
                submit_quiz();
            }
			if (onContinue.curPage==5)
			{

				E.startTime=msTime();
				run_block();
				// if (E.configuration.nextPlayer == 1) {
                $('.player').text('X');
                $('.moves').text(E.configuration.turns);
				// }
				// else {
                 //    $('.player').text('O');
				// }
                $('.turns').text(parseInt(E.configuration.turns));
                $('.streak').text(parseInt(E.configuration.streak));
				$("#experiment.page").show()
                $('#playGameInstructions').hide();
				$('#play').hide();
                $("#explanation").hide()
				$('#timerFinal').hide()
                if (E.condition=="full" | E.condition=="pruned") {
				    $("#verify").hide()
                    $("#generalInstructionsVerify").hide()
                    $("#answerVerification").hide()

                }
                else {
                    $("#generalInstructions").hide()
                    $("#solve").hide()
                    $("#answerSolution").hide()
                    $('.firstMove').text(E.configuration.winMove[0]);
                }


                $(window).scrollTop(0,0);
                // Update the count down every 1 second
                var timerStart = new Date().getTime();
                var diff = 10;

                var countDownDate =  new Date(timerStart + diff*60000);
                E.interval = setInterval(function() {

                    // Get today's date and time
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
                        clearInterval(E.interval);
                        alert('Time is up! You will be advanced to next stage of the experiment.')
                        E.timerDone = true
                        onContinue()
                    }
                }, 1000);


            }

			break;

        case 6:
            E.timerDone = true;
            clearInterval(E.interval)
            E.endTime=msTime();
            var timeSolution = E.endTime-E.startTime;
            E.solutionTime = timeSolution;
            servlog("timeSolution", timeSolution);
            submit_solution();
            $("#explain.page").show();
            $("#explanation").show();
            E.startTime = msTime();
            break;

		case 7:
            E.timerDone = false;
			E.endTime=msTime();
			var timeStrategy = E.endTime-E.startTime;
			servlog("timeStrategy", timeStrategy);
            submit_strategy();
			// submit_solution();

            if (E.solvedCorrect == false) { //if did not solve correct, no point in having them play the game
                if (E.condition=="full" | E.condition=="pruned") {
                    alert("Sorry, your solution is incorrect. The correct solution was " + E.configuration.winMove[0] + ". In the next screen you will" +
                        " receive a verification code to paste in your HIT submission.");
                }
                else {
                    alert("Sorry, your solution is incorrect. The move for X was indeed a winning move. In the next screen you will" +
                            " receive a verification code to paste in your HIT submission.");
                }
                onContinue();
                return;
            }

            $("#experiment.page").show();
            $("#timer").hide();
            $("#verify").hide();
            $("#generalInstructionsVerify").hide();
            $("#answerVerification").hide();
            $("#generalInstructions").hide();
            $("#solve").hide();
            $("#answerSolution").hide();
            $('#playGameInstructions').show();;
            $("#timerFinal").show();
            $("#play").show();
            $("#moves").show();
            $('#confidenceQuestion').hide();
            $("#explanation").hide();


            var moves = E.widget.generateMoveList();
            var moveListText = '';
            for (i = 0;i<moves.length;i++) {
                moveListText = moveListText + moves[i] + '<br>'
            }
            if (moves.length == 0)
            {
                moveListText = 'You did not try any moves on the board since the last time you clicked the reset button.'
            }
            $('#moves').html(moveListText);
            if (E.condition=='verify')
            {
                $('#verifyNote').html('<br>Note that the computer already played the first move for the O player and it is now your turn.<br>');
            }

            E.widget.reset();
            E.widget.simulate();

            $('#undo').hide();


            E.startTime = msTime();

            var diff = 3

            var timerStart = new Date().getTime();

            $("#timerFinal").show();


            var countDownDate =  new Date(timerStart + diff*60000);

            E.interval = setInterval(function() {

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
                    clearInterval(E.interval);
                    alert('Time is up! You will be advanced to the end of the experiment.')
                    E.timerDone = true
                    onContinue()
                }
            }, 1000);



			// suggest_solution();
            E.startTime = msTime();
			break;
			
		case 8:
            clearInterval(E.interval);
            E.timerDone = true;
			E.endTime = msTime();
            E.validationTime = E.endTime-E.startTime;
            // submit_solution();
            servlog("validationTime", E.validationTime);
            servlog("validatedCorrect", E.validation);
            servlog("solvedCorrect", E.solvedCorrect);
            servlog("numActionsSolve", E.actionsSolve);
            servlog("numActionsValidate", E.actionsValidation);
			// var timeVote = E.endTime - E.startTime
			// servlog("timeVote", timeVote)

            //store final summative info

            servlogFinal();
            show_page_final();

	}
}


//TODO check for screen size
