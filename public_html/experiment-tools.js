
function initialize_userid(){
	var vars = getUrlVars();
	var userid = vars["u"];

	
	if(typeof userid == "undefined"){
		var rn = 0x10 + Math.floor(Math.random()*0xf0);
		var rnhex = rn.toString(16); 
		
		var tm = time();
		tm = Math.floor(tm/1000); //convert to seconds

		tm = 0x10000 + tm % 0xf0000; //representable in 5 letters in hex
		var tmhex = tm.toString(16);
	
		var cs = (rn + tm)%6;
		cs += 0xa;
		var cshex = cs.toString(16);
		
		userid = rnhex + cshex + tmhex; 
	}
		
	
 	conlog("userid: " + userid)
	return userid; 
}

function abortAll(event, request, settings, error){
	abortAll_msg("Error communicating with the server! \n" + error); 
}

function abortAll_msg(errmsg){
	conlog("A")
	$(".page").hide();
	$("body").text(errmsg); 
 
}

function abort_compat(){
	$(".page").hide();
	$("body").text("Error communicating with the server!"); 
}

 function conlog(data){
	if(typeof console!="undefined")
		console.log(data); 
}


function get_timestr(){
	var ctime = new Date(); 
	var timestr = "";
        
	timestr += ctime.getFullYear() + "/";
	timestr += (ctime.getMonth()+1) + "/";
	timestr += ctime.getDate() + " "
	timestr += ctime.getHours() + ":"
	timestr += ctime.getMinutes() + ":"
	timestr += ctime.getSeconds()
	
	return timestr; 	
}

function servlog_old(key, value){
	//global experiment
	//global logger_url
	// alert('servlog')
	var timestr = get_timestr();
	var time = msTime();
	var jsonValue = JSON.stringify(value);
	conlog(key +":" +jsonValue)
	var messageObject = {reqType: "logEvent", experiment: experiment, time:time, key: key, value:jsonValue, userid: E.userid };
	conlog('servlog: ' + JSON.stringify(messageObject).length + ' bytes');

	function onSuccess(data){
		conlog('posted to server')
		
	}
	// alert('before post')
	$.post( logger_url, messageObject,onSuccess);
	// alert('after post')
}

function servlog(key, value){
	var timestr = get_timestr();
	var time = msTime();
	var jsonValue = JSON.stringify(value);
	var jsonBoardSize = parseInt(E.size);
	// jsonValue = encodeURIComponent(jsonValue);
	conlog(key +":" +jsonValue)
	var messageObject = {reqType: "logEvent", experiment: experiment, time:time, key: key, value:jsonValue, expCondition:E.condition, boardSize:jsonBoardSize, board:E.difficulty, userid:E.userid };
	// alert(messageObject)
	conlog('servlog: ' + JSON.stringify(messageObject).length + ' bytes');


	function onSuccess(data){
		conlog('posted to server')

	}
	// alert('before post')
	$.post( logger_url, messageObject,onSuccess);
	// alert('after post')
}

function servlogFinal(){
	// alert("in servlog final")
	var timestr = get_timestr();
	var time = msTime();
	// var jsonValue = JSON.stringify(value);
	var jsonBoardSize = parseInt(E.size);
	var numActionsSolve = parseInt(E.actionsSolve);
	var numActionsValidation = parseInt(E.actionsValidation);
	// conlog(key +":" +jsonValue)
	var messageObject = {reqType: "logEventFinal", experiment: experiment, time:time, expCondition:E.condition,
		boardSize:jsonBoardSize, board:E.difficulty, userid:E.userid, solvedCorrect:E.solvedCorrect,
		validatedCorrect:E.validation, numActionsSolve:numActionsSolve, numActionsValidate:numActionsValidation,
		timeSolution:E.solutionTime,timeValidate:E.validationTime
	};
	// alert(messageObject)
	conlog('servlog: ' + JSON.stringify(messageObject).length + ' bytes');

	function onSuccess(data){
		// alert("in servlog final - posted")
		conlog('posted to server')

	}
	// alert('before post')
	$.post( logger_url, messageObject,onSuccess);
	// alert('after post')
}





 
 
 function fconlog(data){
	conlog(JSON.stringify(data));
}
 
 
 

 
 
 function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}

 function submit_demographics(){
 	return;
 	demographics = {};
 	
 	demographics.age = $("#age").val();
 	demographics.gender = $("#gender").val();
 	
 	/*
 	if(demographics.gender == "male"){
 		$(".worker").css("background-image", 'url("../mavatar.png")')
 	}
 	else if (demographics.gender == "female"){
 		$(".worker").css("background-image", 'url("../favatar.png")') 		
 	}
 	*/

 	
 	demographics.pointdevice = $("#pointdevice").val(); 	
  	demographics.disabilities = $("#disabilities").val(); 
  	
  	servlog('exper','Demographics',JSON.stringify(demographics));
 }
 
 function parse_server_response(message)
{
/*	var msg_obj = JSON.parse(message);
	if (msg_obj.status != "AOK"){
		abortAll_msg("Server replied with error status: " + msg_obj.status);
	}
	
	var data_obj = JSON.parse(msg_obj.data);
	return data_obj;
*/
	return message
}
 
 
 function get_conditions(success_callback) {


	function onreply(message) {
		var cond = extract_data(message);
		E.cond = cond;
		fconlog(E.cond);
		servlog('exper', 'Conditions', JSON.stringify(E.cond));
		$("#btnContinue").show();
		success_callback();

	}

	var messageObject = {
		ctime : get_timestr(),
		logtype : "request",
		type : "state",
		userid : E.userid, 
		dir: result_dir 
	};

	$.post(logger_url, messageObject, onreply);

}

function calc_pctile(scorecalc, zscore){
	
	for(var i=0; i<99; i++){
		if(zscore < scorecalc.percentiles[i]){
			break;
		}
	}
	
	return i; 
}

function calc_score(scorecalc, seltime, err, stdev) {
	var ztime = (scorecalc.ztime_mean - seltime) / scorecalc.ztime_stdev;
	var zerr = (scorecalc.zerr_mean - err) / scorecalc.zerr_stdev;
	var zstd = (scorecalc.zstd_mean - stdev) / scorecalc.zstd_stdev;

	var score = (ztime + zerr + zstd) / 3;
	return score;
} 
 
function getRadioValue(name){
	var val= $('input[name="' + name + '"]:checked').val()
	if(val === undefined){
		val = 'blank'
	}
	
	return val;
} 
