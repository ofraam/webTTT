

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

	if (typeof(init.firstMovrRow)!=undefined) {
		var firstMoveRow = 	init.firstMovrRow;
        var firstMoveCol = 	init.firstMovrCol;
	}

	var undoList = []
	
	
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
		
		if(position[cell.row][cell.col] != 0){
			conlog("nope")
			errorSound.play();

			return;
		}
		
		//moveSound.play();
		
		position[cell.row][cell.col] = nextPlayer;
		positionPlayer = 'row:' + cell.row +'_' + 'col:' + cell.col + '_' + nextPlayer
        servlog('click', position)
        servlog('clickPos', positionPlayer)

        flipNextPlayer()

        moveCounter = moveCounter + 1
		lastMoveCol = cell.col
		lastMoveRow = cell.row
        undoList.push([cell.row, cell.col])

		drawSymbols();
        drawMoves();

		//$('canvas').drawLayers()	



		
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
		
		
		$("#canvas").removeLayerGroup("symbols")
        $("#canvas").removeLayerGroup("moves")

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

		
		$("#canvas").drawLayers()	
		
	}

	drawMoves = function () {
		counter = 1;
		for (i=0;i<undoList.length;i++) {
			pos = undoList[i];
			row = pos[0];
			col = pos[1];
            drawMoveLabel(counter,(col+1.15)*cellSize,(row+1.15)*cellSize);
			// drawMoveLabel(counter,row,col);
			counter++;
		}
	}
	
	onReset = function(){
		position = startPosition.dcopy();
		nextPlayer = init.nextPlayer
		undoList = []
		moveCounter = 0
        lastMoveCol = -1
        lastMoveRow = -1
        $("#canvas").removeLayerGroup('moves')
		drawSymbols()
        drawMoves()
	
		servlog('reset', position)
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
        servlog('undoPos', positionPlayer)
		servlog('undo', position)
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
		
		//create canvas
		canvas = $('<canvas id="canvas">')
		
		canvas.attr("height", canvasHeight)
		canvas.attr("width", canvasWidth)
		
		$(canvasContainerDiv).empty()
		$(canvasContainerDiv).append(canvas)
		
		drawGrid()
		drawLabels()
		drawSymbols()

		
		$("#reset").click(onReset)
		$("#undo").click(onUndo)
		
		
		
		$("#canvas").bind("contextmenu", function(e) {
    			return false;
				})

	 	servlog('start', position)
		
	}	
	
	this.reset = function(){
		onReset();
	}
	
}
