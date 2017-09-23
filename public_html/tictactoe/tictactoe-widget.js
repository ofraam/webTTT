

function TictactoeWidget(init){
	
	var canvasContainerDiv = init.canvasContainerDiv
	
	var nrows = init.nrows
	var ncols = init.ncols
	
	var cellSize = init.cellSize
	
	var startPosition = init.position;
	var position = startPosition.dcopy();
	var nextPlayer = init.nextPlayer

	var moveCounter = 0
	var lastMoveRow = -1
	var lastMoveCol = -1

	var practice = false

	var canvas = '#canvas'


    if (typeof(init.practice)!=undefined) {
        practice = init.practice;
        canvas = '#canvas-practice'
    }

	if (typeof(init.firstMovrRow)!=undefined) {
		var firstMoveRow = 	init.firstMovrRow;
        var firstMoveCol = 	init.firstMovrCol;
	}

	var winPath = init.winPath;
    var losePath = init.losePath;

    var indexWinPath = -1
	var turnInWin = 0
	var turnInLose = 0

	var undoList = []

	var sim = false;

	
	var canvasHeight = (nrows+2)*cellSize;
	var canvasWidth = (ncols+2)*cellSize;

	var gridStyleReg = "#666"
    var gridStyleSpecial = "#000"
	var gridWidthReg = 1
	var specialCellGridWitdh = 5
	var cellFillStyleMutable = "#ffe"
	var cellFillStyleImmutable ="#ffc"
	var xStrokeStyle = "#911"
	var xStrokeWidth = 3
	var oStrokeStyle = "#119"
	var oStrokeWidth = 3	
	
	var errorSound = new Audio("../error.wav")
	var moveSound = new Audio("../move.wav")
	
	
	
	
	
	removeSymbolAt = function(row,col){
		$('canvas').removeLayer('s' + row + col)		
	}
	
	flipNextPlayer = function(){
		nextPlayer = 1 + (nextPlayer)%2		
	}
	
	onCellClick = function(cell){

		if (sim == true) {
			onCellClickSim(cell);
			return;
		}
		
		if(position[cell.row][cell.col] != 0){
			conlog("nope")
			errorSound.play();

			return;
		}
		
		//moveSound.play();
		
		position[cell.row][cell.col] = nextPlayer;
		positionPlayer = 'row:' + cell.row +'_' + 'col:' + cell.col + '_' + nextPlayer

		var clickKey = 'click'
		var clickPosKey = 'clickPos'

		if (practice == true) {
            clickKey = clickKey.concat('_practice');
            clickPosKey = clickPosKey.concat('_practice');
		}

		servlog(clickKey, position)
        servlog(clickPosKey, positionPlayer)

        flipNextPlayer()

        moveCounter = moveCounter + 1
		lastMoveCol = cell.col
		lastMoveRow = cell.row
        undoList.push([cell.row, cell.col])

		drawSymbols();
        drawMoves();

		//$('canvas').drawLayers()	

	}

    onCellClickSim = function(cell){

        if(position[cell.row][cell.col] != 0){
			if (cell.col!=firstMoveCol | cell.row != firstMoveRow) {
				conlog("nope")
				errorSound.play();

				return;
			}

        }

        //moveSound.play();

        position[cell.row][cell.col] = nextPlayer;
        var positionPlayer = 'row:' + cell.row +'_' + 'col:' + cell.col + '_' + nextPlayer

        var clickKey = 'click_sim'
        var clickPosKey = 'clickPos_sim'

		//check if move is on the one of the winning paths
		for (pathIndex=0;pathIndex<winPath.length;pathIndex++) {
			var path = winPath[pathIndex];
        	var currMoveOnPath = path[turnInWin]
			if (cell.row == currMoveOnPath[0] && cell.col == currMoveOnPath[1]) { //valid move on winning path
				indexWinPath = pathIndex
                servlog('simCorrectMove', indexWinPath+"_"+turnInWin)
				turnInWin++
				break;
			}
		}


        servlog(clickKey, position)
        servlog(clickPosKey, positionPlayer)


        flipNextPlayer()


        moveCounter = moveCounter + 1
        lastMoveCol = cell.col
        lastMoveRow = cell.row
        undoList.push([cell.row, cell.col])

        drawSymbols();
        drawMoves();

		// sleepGame(4000)

        //play other player move
        var currMoveOnLosingPath = chooseValidMove();

		if (indexWinPath > -1) {
			var pathLoser = losePath[indexWinPath];
			var suggestedMove = pathLoser[turnInLose];
			if (position[suggestedMove[0]][suggestedMove[1]]==0) {
                currMoveOnLosingPath = pathLoser[turnInLose];
			}
            turnInLose++;
		}

        position[currMoveOnLosingPath[0]][currMoveOnLosingPath[1]] = nextPlayer;
        positionPlayer = 'row:' + currMoveOnLosingPath[0] +'_' + 'col:' + currMoveOnLosingPath[1] + '_' + nextPlayer;

        servlog(clickKey, position)
        servlog(clickPosKey, positionPlayer)

        moveCounter = moveCounter + 1
        lastMoveCol = currMoveOnLosingPath[1]
        lastMoveRow = currMoveOnLosingPath[0]
        undoList.push([currMoveOnLosingPath[0], currMoveOnLosingPath[1]])

        flipNextPlayer()
        drawSymbols();
        drawMoves();

        //$('canvas').drawLayers()

    }

    playOtherResponse = function () {

    }

    sleepGame = function (miliseconds) {
        var currentTime = new Date().getTime();

        while (currentTime + miliseconds >= new Date().getTime()) {
        }
    }

    chooseValidMove = function () {
        for(r=0; r<nrows; r++) {
            for (c = 0; c < ncols; c++) {
				if (position[r][c]==0) {
					return [r,c];
				}
            }
        }
        return undefined;
    }

	drawGrid = function(){
		
		
		for(r=0; r<nrows; r++){
			for(c=0; c<ncols; c++){
				

				if(startPosition[r][c] != 0){
					cellFillStyle = cellFillStyleImmutable
				}
				else{
					cellFillStyle = cellFillStyleMutable
				}

				var gridWidth = gridWidthReg
				var gridStyle = gridStyleReg
				if (r == firstMoveRow & c == firstMoveCol)
				{
					gridWidth = specialCellGridWitdh
					gridStyle = gridStyleSpecial
				}

				$('canvas').drawRect({
					layer: true, 
					name: "" + r + c,
					row: r,
					col: c,
					group: "cells",
					fillStyle: cellFillStyle,
					strokeStyle: gridStyle,
					strokeWidth: gridWidth,
					
					x: cellSize*(c + 1.5), y:cellSize*(r + 1.5), 
					width: cellSize, height: cellSize, 
					
					click: onCellClick,
					mouseover: function(layer){},
					mouseout: function(layer){}
					
					 
				})


				
			}
		}
	}
	
	drawText = function(text, x, y){
		$("canvas").drawText({
		  layer: "true",
		  group: 'labels',	
		  fillStyle: "#242",

		  x: x, y: y,
		  font: "10pt Verdana, sans-serif",
		  text: text
		});		
	}

    drawMoveLabel = function(text, x, y){
        $("canvas").drawText({
            layer: "true",
            group: 'moves',
            fillStyle: "#242",

            x: x, y: y,
            font: "10pt Verdana, sans-serif",
            text: text
        });
    }

    this.generateMoveList = function() {
		var moveList = []
		var moveLabel = ''
		var currPlayer = init.nextPlayer
    	for (i=0;i<undoList.length;i++) {
			var move = undoList[i]
			var rowNum = nrows-move[0]
            moveLabel = String.fromCharCode("a".charCodeAt(0) + move[1]) + rowNum.toString()


			if (currPlayer == 1) {
				moveLabel = "X: "+moveLabel
			}
			else {
                moveLabel = "O: "+moveLabel
			}
            moveList.push(moveLabel)
            currPlayer = 1 + (currPlayer)%2
		}
		return moveList
	}
	
	drawLabels = function(){
		
		
		for( r=0; r<nrows; r++){
			
			drawText(nrows-r, 0.5*cellSize, (r+1.5)*cellSize)
			drawText(nrows-r, (ncols+1.5)*cellSize, (r+1.5)*cellSize)				
		}

		for( c=0; c<ncols; c++){
			
			var ch = String.fromCharCode("a".charCodeAt(0) + c);
			
			drawText(ch, (c+1.5)*cellSize,  0.5*cellSize)
			drawText(ch, (c+1.5)*cellSize, (nrows+1.5)*cellSize)				
		}
				

								
	}	
		
	drawX = function(row,col,move){

        // drawMoveLabel(move,(col+1.15)*cellSize,(row+1.15)*cellSize)


		$('canvas').drawLine({
			layer: true,
			group: 'symbols',
			name: "s" + row + col,
			strokeStyle: xStrokeStyle,
			strokeWidth: xStrokeWidth,
			
			x1: (col + 1.35)*cellSize, y1: (row + 1.35)*cellSize,
			x2: (col + 1.65)*cellSize, y2: (row + 1.65)*cellSize,
			
						
			})	
			

		$('canvas').drawLine({
			layer: true,
			group: 'symbols',
			name: "s" + row + col,			
			strokeStyle: xStrokeStyle,
			strokeWidth: xStrokeWidth,

			x1: (col + 1.65)*cellSize, y1: (row + 1.35)*cellSize,
			x2: (col + 1.35)*cellSize, y2: (row + 1.65)*cellSize
						
			})


			
	}
	
	drawO = function(row,col,move){

        // drawMoveLabel(move,(col+1.15)*cellSize,(row+1.15)*cellSize)

		$('canvas').drawArc({
			layer: true,
			group: 'symbols',
			name: "s" + row + col,	
			strokeStyle: oStrokeStyle,
			strokeWidth: oStrokeWidth,

			x: (col + 1.5)*cellSize, y: (row + 1.5)*cellSize,	
			radius: 0.15*cellSize
			
						
			})			
		
	}

	

		
	drawSymbols = function(){
		
		
		$(canvas).removeLayerGroup("symbols")
        $(canvas).removeLayerGroup("moves")

		for(r=0; r<nrows; r++){
			for(c=0; c<ncols; c++){
                labelMove = ''
				// if (c==lastMoveCol & r==lastMoveRow) {
				// 	labelMove = moveCounter
				// }
				if(position[r][c] == 1){

					drawX(r,c,labelMove)
				}
				else if(position[r][c] == 2){
					drawO(r,c,labelMove)
				}

			}
		
		}

		
		$(canvas).drawLayers()
		
	}

	drawMoves = function () {
		var counter = 1;
		if (firstMoveCol!=undefined & firstMoveRow!=undefined)
		{
			// alert('here')
			drawMoveLabel(counter,(parseInt(firstMoveCol)+1.15)*cellSize,(parseInt(firstMoveRow)+1.15)*cellSize);
			// alert(firstMoveCol)
			// alert(firstMoveRow)
			// alert('here1')
			counter++;
		}
		var currPlayer = init.nextPlayer
		for (i=0;i<undoList.length;i++) {
			pos = undoList[i];
			row = pos[0];
			col = pos[1];
			if (currPlayer ==  1) {
                drawMoveLabel(counter,(col+1.15)*cellSize,(row+1.15)*cellSize);
                counter++;
			}

            currPlayer = 1 + (currPlayer)%2
			// drawMoveLabel(counter,row,col);

		}
	}
	
	onReset = function(){

		position = startPosition.dcopy();
		nextPlayer = init.nextPlayer
		undoList = []
		moveCounter = 0
        lastMoveCol = -1
        lastMoveRow = -1

		indexWinPath = -1
		turnInLose = 0
		turnInWin = 0
		if (sim) {
			if (firstMoveCol!=undefined & firstMoveRow!=undefined)
			{
				simInit();

			}
		}

		// var sim = false; //TODO: check this does not cause unexpected problems

        $(canvas).removeLayerGroup('moves')
		drawSymbols()
        drawMoves()

        var reset = 'reset'

        if (practice == true) {
            reset = reset.concat('_practice');
        }

		servlog(reset, position)
	}

	this.simulate = function () {
		sim = true;
		if (firstMoveCol!=undefined & firstMoveRow!=undefined)
		{
			simInit();

		}
    }

	simInit = function () {
		//make first move for the other player if we're in verification mode
		var r = losePath[0][0][0];
		var c = losePath[0][0][1]
		startPosition[r][c] = nextPlayer;
		position[r][c] = nextPlayer;
		undoList.push([r, c]);
		turnInLose++;
		flipNextPlayer();
		drawSymbols();
		drawMoves();
	}

	onUndo = function(){
		
		last = undoList.pop();
		if (moveCounter>0) {
            moveCounter = moveCounter - 1;
            lastMoveCol = -1
			lastMoveRow = -1
		}

		if(last === undefined){
			return
		}
		
		row = last[0]
		col = last[1]
		position[row][col] = 0;
		drawSymbols();
		drawMoves();

        positionPlayer = 'row:' + row +'_' + 'col:' + col + '_' + nextPlayer;

		flipNextPlayer();

        var undo = 'undo'
        var undoPos = 'undoPos'

        if (practice == true) {
            undo = undo.concat('_practice');
            undoPos = undoPos.concat('_practice');
        }

        servlog(undoPos, positionPlayer)
		servlog(undo, position)
	}
	
	positionString = function(){
		
		var str = ""
		for(r=0; r<nrows; r++){
			for(c=0; c<ncols; c++){
				sym = position[r][c];
				
				str = str + sym
			}
		}
		
		return str
	}
	
	this.getPosition= function(){
		return positionString();
	}
	
	
	this.run = function(){
				
		
		console.log("run")

        // $('#canvas').clearCanvas()
        // $('#canvas').empty()

		//create canvas
		canvas = $('<canvas id="canvas">')

		canvas.attr("height", canvasHeight)
		canvas.attr("width", canvasWidth)
		
		$(canvasContainerDiv).empty()
		$(canvasContainerDiv).append(canvas)
		
		drawGrid()
		drawLabels()
		drawSymbols()
		drawMoves()

		undoList = []
		moveCounter = 0
		lastMoveCol = -1
		lastMoveRow = -1

		if (practice) {
            $("#reset-practice").click(onReset)
            $("#undo-practice").click(onUndo)
		}
		else {
            $("#reset").click(onReset)
            $("#undo").click(onUndo)
		}

		
		
		
		$(canvas).bind("contextmenu", function(e) {
    			return false;
				})


	 	servlog('start', position)
		
	}	
	
	this.reset = function(){
		onReset();
	}
	
}
