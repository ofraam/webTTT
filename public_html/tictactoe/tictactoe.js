


logger_url = "../logger/logger.py"
experiment = "tictactoe"

E = {}
E.startTime = 0
E.endTime = 0
E.debugMode = true
E.condition = 'solve'
E.timerDone = false

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
    turns: 5
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
        [2,1,0,2,0,0],
        [0,1,0,0,0,0],
        [0,2,0,0,2,0]
    ],
    nextPlayer: 1,
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
            case '3p':
                E.configuration = E.board6_2_c;
                break;
            case '3s':
                E.configuration = E.board6_2_d;
                break;

            case '4':
                E.configuration = E.board10_1;
                break;
            case '5':
                E.configuration = E.board10_2;
                break;
        }
    }
    var cond = getUrlVars()['cond']
    if (cond=='v') {
        E.condition='verify'
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
    var conf = $('input[name=confidence]:checked', '#experiment').val()
    var ver = $("#verification").val()
    // if(typeof conf != 'undefined')
	// {
        // var solution = $("#solution").val();
        servlog("best_move", move);
        servlog("confidence", conf);
        servlog("verification_answer", ver);
	// }
	// else {
     //    alert("Please answer what your level of confidence in the solution is")
     //    onContinue.curPage = 2;
     //    onContinue();
	// }


	// servlog("solution", solution);
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
            $(window).scrollTop(0,0);
			break;

		case 4:
			E.endTime=msTime()
			var timeInstructions = E.endTime-E.startTime
			// alert('should call servlog')
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
                var diff = 2
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
                    if (totalSeconds <= 60 & totalSeconds>59 & E.timerDone == false) {
                        $("#timer").addClass("timeUp")
                        alert('You have one minute left. Make sure to submit your solution in the next minute.')
                    }
                    // If the count down is finished, write some text
                    if (distance < 0 & done == false) {
                        clearInterval(x);
                        alert('Time is up! You will be advanced to the end of the experiment')
                        E.timerDone = true
                        onContinue()
                    }
                }, 1000);


            }

			break;

		// case 6:
        //
		// 	// show_page_real();
		// 	E.endTime=msTime();
		// 	var timeSolution = E.endTime-E.startTime
		// 	servlog("timeSolution", timeSolution);
		// 	submit_solution();
		//
		// 	E.startTime = msTime();
		// 	suggest_solution();
		//
		// 	break;
			
		case 6:
			// log_vote();
            E.timerDone = true
			E.endTime = msTime()
            var timeSolution = E.endTime-E.startTime
            submit_solution();
            servlog("timeSolution", timeSolution);
			// var timeVote = E.endTime - E.startTime
			// servlog("timeVote", timeVote)
			show_page_final()	

	}
}


//TODO check for screen size
