


logger_url = "../logger/logger.py"
experiment = "tictactoe"

E = {}
E.startTime = 0
E.endTime = 0
E.debugMode = true


E.board6_1 = {
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
    turns: 3
}

E.board10_1 = {
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
	// alert(E.position)
  	//servlog("start_position",E.position)
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
            case '2':
                E.configuration = E.board6_2;
                break;
            case '3':
                E.configuration = E.board6_2_b;
                break;
            case '4':
                E.configuration = E.board10_1;
                break;
            case '5':
                E.configuration = E.board10_2;
                break;
        }
    }

	 // var init = {
	 // 	canvasContainerDiv : "#canvas-container",
	 // 	nrows : 6,
	 // 	ncols : 6,
	 // 	cellSize: 46,
	 // 	position: E.position,
	 // 	nextPlayer: 2
	 // }
	 
	 E.widget = new TictactoeWidget(E.configuration)
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

	
	servlog("quiz1", q1);
	servlog("quiz2", q2);
	servlog("quiz3", q3);
	servlog("quiz4", q4);
	servlog("quiz5", q5);
	
	var passed = false;
	if( q1 == '2' && q2 == '2' && q3 =='3' && q4 == 'c1' && q5=='b4'){
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
	var solution = $("#solution").val();
	servlog("best_move", move);
	servlog("solution", solution);
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
			$("#btnContinue").html('Continue to quiz')

			break;

		case 4:
			E.endTime=msTime()
			var timeInstructions = E.endTime-E.startTime
			servlog("timeInstructions", timeInstructions);
			
			$("#btnContinue").html('Continue')
			E.startTime=msTime();

			$("#quiz.page").show()

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
                $(window).scrollTop(0,0);

            }

			break;

		case 6:

			// show_page_real();
			E.endTime=msTime();
			var timeSolution = E.endTime-E.startTime
			servlog("timeSolution", timeSolution);
			submit_solution();
			
			E.startTime = msTime();
			suggest_solution();
				
			break;
			
		case 7:
			log_vote();
			
			E.endTime = msTime()
			var timeVote = E.endTime - E.startTime
			servlog("timeVote", timeVote)
			show_page_final()	

	}
}


//TODO check for screen size
