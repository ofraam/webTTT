logger_url = "../logger/logger.py"
bgu_url = "http://hdm.ise.bgu.ac.il/GDMVisualization/GDMVisualizationTestPage.html"
experiment ="vertexcover"

var exper = {} //TODO integraate exper in E
E = {}
E.startTime = 0
E.endTime = 0




$(document).ready(function() {

	initialize_experiment();


	onContinue();
});




function onCheckbox() {
	if($("#consentagree").prop("checked")) {
		$("#btnContinue").removeAttr('disabled');

	} else {
		$("#btnContinue").attr('disabled', 'disabled');
	}
}

function initialize_experiment() {
	$(document).ajaxError(abortAll);

	$("#btnContinue").attr('disabled', 'disabled');
	$('#progress').hide();
	

	

	E.userid = initialize_userid();
	servlog("new_user", E.userid)
}

function run_block(btype, accu) {



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

function finalizeExperiment() {
	
	return;
	var timems = time();
	exper.endTime = timems;
	exper.timelen = exper.endTime - exper.startTime;


	ivhook_duscore();
	ivhook_dbonus();
	
	var jsonlog = JSON.stringify({
		endTime : exper.endTime,
		timelen : exper.timelen
	});

	servlog('debug', 'ExperimentEnd', jsonlog);
	servlog('exper', 'ExperimentEnd', jsonlog);
	var mlog = "exper-end" + ", " + exper.endTime;
	mouselog(mlog);
	mouselog_flush();
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
	var q1='';
	var q2='';
	var q3='';
	var passed = false;

	for (var i = 0;i < document.getElementsByName("quiz1").length; i++)
	{
		if (document.getElementsByName("quiz1")[i].checked)
		 	q1 = document.getElementsByName("quiz1")[i].value;
	}
	for (var i = 0;i < document.getElementsByName("quiz2").length; i++)
	{
		if (document.getElementsByName("quiz2")[i].checked)
		 	q2 = document.getElementsByName("quiz2")[i].value;
	}
	for (var i = 0;i < document.getElementsByName("quiz3").length; i++)
	{
		if (document.getElementsByName("quiz3")[i].checked)
		 	q3 = document.getElementsByName("quiz3")[i].value;
	}
	
	if (q1=='n2' && q2=='y' && q3=='n1')
		passed = true
	
	
	servlog("quiz1", q1);
	servlog("quiz2", q2);
	servlog("quiz3", q3);
	servlog("passedQuiz", passed);
	
	if (passed == false)
	{
		alert("Sorry, you did not pass the quiz. You will now be shown the tutorial again, when you're ready to re-take the quiz click continue.");
		onContinue.curPage = 2;
		onContinue();
	}
}

function submit_solution() {
	var explanation = document.getElementById("explanation").value;
	var solution = document.getElementById("solution").value;
	servlog("explanation", explanation);
	servlog("solution", solution);
}

function onContinue() {

	if( typeof onContinue.curPage == 'undefined')
		onContinue.curPage = 0;
	onContinue.curPage++;

	//blank all pages
	$(".page").hide();

	var lentrial = 10;
	var lenfull = 60;


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
			document.getElementById("quizDiv").scrollTop=0;
			$("#quiz.page").show()
			
			//$("#btnContinue").hide()
			break;

		case 5:
			E.endTime=msTime();
			var timeQuiz = E.endTime-E.startTime
			servlog("timeQuiz", timeQuiz);
			submit_quiz();
			if (onContinue.curPage==5)
			{
				urlForVC = bgu_url+'?workerId='+E.userid
				 // alert(urlForVC)
				 document.getElementById('bguFrame').src = urlForVC
				// alert(document.getElementById['bguFrame'].src)
				E.startTime=msTime();
	
				$("#experiment.page").show()
			}


			// run_block('intro','hi')
			// $("#experiment.page").show()
			// run_block('practice',0);

			//$("#btnContinue").hide()
			break;

			//if(intro_ok()){
				//startMouseLog();
				//get_conditions(show_page_real)
							
			//}
			//else{
			//	$("#practice-bad.page").show()
			//	onContinue.curPage -= 2;
			//}
			
			break;

		case 6:

			// show_page_real();
			E.endTime=msTime();
			var timeSolution = E.endTime-E.startTime
			servlog("timeSolution", timeSolution);
			submit_solution();
			// finalizeExperiment();
			show_page_final()		
			break;


	}
}


//TODO check for screen size
