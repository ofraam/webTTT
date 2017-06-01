Global_info = {}
Global_info.start = 0
Global_info.end = 0
Global_info.round = 0 //0 = before change; 1 = after change
Global_info.history = []
Global_info.historyIndex = 0
Global_info.pauseTime = 0;
Global_info.typeChanges = "";
Global_info.condition = 0;
Global_info.pageName = "";		
Global_info.count=120;
Global_info.codeExp="";



		function timer()
		{
		  Global_info.count=Global_info.count-1;
		  if (Global_info.count <= 0)
		  {
		     clearInterval(counter);
		     return;
		  }
		
		 document.getElementById("timer").innerHTML=Global_info.count + " seconds"; // watch for spelling
		}


		function shuffleAllAnswers()
		{
			var answers = document.getElementsByTagName('ol');
			
			for(var i = 0; i < answers.length; i++) {
				var ul=answers[i]
				alert(ul)
			    for (var j = ul.children.length; j >= 0; j--)
		    		ul.appendChild(ul.children[Math.random() * j | 0]);
			    
			}
		}
		function shuffleAnswer(elem)
		{
			var ul = document.getElementById(elem);
			for (var i = ul.children.length; i >= 0; i--)
		    ul.appendChild(ul.children[Math.random() * i | 0]);
		}
		
		function pauseExp(){
			var startPause = msTime();
			alert("הניסוי עצר. אנא לחץ על OK כדי לחזור לניסוי")
			Global_info.pauseTime = msTime()-startPause;
		}
		var paramName;
		function getCondition(){
	  // This function is anonymous, is executed immediately and 
	  // the return value is assigned to QueryString!
		  var query_string = {};
		  var query = window.location.search.substring(1);
		  var vars = query.split("&");
		  for (var i=0;i<vars.length;i++) {
		    var pair = vars[i].split("=");
		    	// If first entry with this name
		    if (typeof query_string[pair[0]] === "undefined") {
		      query_string[pair[0]] = pair[1];
		    	// If second entry with this name
		    } else if (typeof query_string[pair[0]] === "string") {
		      var arr = [ query_string[pair[0]], pair[1] ];
		      query_string[pair[0]] = arr;
		    	// If third or later entry with this name
		    } else {
		      query_string[pair[0]].push(pair[1]);
		    }
		    paramName=pair[0]
		  } 
		  Global_info.condition = query_string[paramName];
		   // alert(Global_info.condition)
		    return Global_info.condition;
	} 
		
		
		function setProjectChanges(changesDataset)
		{
			Global_info.changedProject = changesDataset; //what data to use for changes (small or big changes)
		}
		
		function setInterface(changesInterface) //0 = from scratch; 1 = incremental
		{
			Global_info.changesInterface = changesInterface;
		}
		
		function setChangesList(changesList)
		{
			Global_info.changesList = changesList;
		}
		
		function addHistory(ganttJason)
		{
			// alert('adding')
			Global_info.history.push(ganttJason);
			
			// alert(Global_info.history)
			
		}
		
		function undoChange()
		{
			// alert(Global_info.history)
			if (Global_info.history.length<=1)
				return;
			// alert(Global_info.history.length)
			removeGantt = Global_info.history.pop();

			gantt.clearAll();
			gantt.parse(Global_info.history[Global_info.history.length-1]);
			sendRequestPostXML(Global_info.history[Global_info.history.length-1]);
			// alert('undo')
		}
		
		function restartGantt()
		{
			if (Global_info.history.length<=1)
				return;
			while(Global_info.history.length>1)
			{
				Global_info.history.pop();
			}
			gantt.clearAll();
			gantt.parse(Global_info.history[Global_info.history.length-1]);
			sendRequestPostXML(Global_info.history[Global_info.history.length-1]);
		}
//scales functions

		function show_scale_options(mode){
			
			var hourConf = document.getElementById("filter_hours"),
				dayConf = document.getElementById("filter_days");
				alert(hourConf)
			if(mode == 'day'){
				alert("dayConf"+dayConf)
				hourConf.style.display = "none";
				alert("dayConf"+dayConf)
				dayConf.style.display = "";
				alert("dayConf"+dayConf)
				dayConf.getElementsByTagName("input")[0].checked = true;
				alert("dayConf"+dayConf)
			}else if(mode == "hour"){
				hourConf.style.display = "";
				dayConf.style.display = "none";
				hourConf.getElementsByTagName("input")[0].checked = true;
			}else{
				alert('here')
				hourConf.style.display = "none";
				dayConf.style.display = "none";
			}
		}
		function set_scale_units(mode){
			if(mode && mode.getAttribute){
				mode = mode.getAttribute("value");
			}

			switch (mode){
				case "work_hours":
					gantt.config.subscales = [
						{unit:"hour", step:1, date:"%H"}
					];
					gantt.ignore_time = function(date){
						if(date.getHours() < 9 || date.getHours() > 16){
							return true;
						}else{
							return false;
						}
					};

					break;
				case "full_day":
					gantt.config.subscales = [
						{unit:"hour", step:3, date:"%H"}
					];
					gantt.ignore_time = null;
					break;
				case "work_week":
					gantt.ignore_time = function(date){
						if(date.getDay() == 0 || date.getDay() == 6){
							return true;
						}else{
							return false;
						}
					};

					break;
				default:
					gantt.ignore_time = null;
					break;
			}
			gantt.render();
		}


		function zoom_tasks(node){
			// alert(node.value)			// alert('here')
			// alert(node.value)
			switch(node.value){
				case "week":
					gantt.config.scale_unit = "day"; 
					gantt.config.date_scale = "%d %M"; 

					gantt.config.scale_height = 60;
					gantt.config.min_column_width = 30;
					gantt.config.subscales = [
  						  {unit:"hour", step:1, date:"%H"}
					];
					// show_scale_options("hour");
				break;
				case "trplweek":
					gantt.config.min_column_width = 50;
					gantt.config.scale_unit = "day"; 
					gantt.config.date_scale = "%d %M"; 
					gantt.config.subscales = [ ];
					gantt.config.scale_height = 12;
					// show_scale_options("day");
				break;
				case "month":
					gantt.config.min_column_width = 40;
					gantt.config.scale_unit = "week"; 
					gantt.config.date_scale = "Week #%W"; 
					gantt.config.subscales = [
  						  {unit:"day", step:1, date:"%D"}
					];
					// show_scale_options();
					gantt.config.scale_height = 60;
				break;
				case "year":
				// alert('here')
					// gantt.config.min_column_width = 70;
					// gantt.config.scale_unit = "month"; 
					// gantt.config.date_scale = "%M"; 
					// gantt.config.scale_height = 60;
					// // show_scale_options();
// 
					// gantt.config.subscales = [
  						  // {unit:"week", step:1, date:"#%W"}
					// ];
					
					gantt.config.min_column_width = 50;
					gantt.config.scale_unit = "week"; 
					gantt.config.date_scale = "%W"; 
					gantt.config.scale_height = 12;
					// show_scale_options();

					// gantt.config.subscales = [
  						  // {unit:"week", step:1, date:"#%W"}
					// ];
				break;
			}
			// set_scale_units();
			gantt.render();
		}



//end scales functions

function onContinue() {
	$('#start_date').html('yup')
}

function showGantt() {
	$('#resources').hide()
	$('#tasks').hide()
	$('#gantt').show()
}

function showResources() {
	$('#tasks').hide()
	$('#gantt').hide()
	$('#resources').show()
}

function showTasks() {
	$('#gantt').hide()
	$('#resources').hide()
	$('#tasks').show()
}

function test_func2() {
	alert("test func2")
}

function logUserData()
{
	var gender=document.getElementById("gender").options[document.getElementById("gender").selectedIndex].value;
	var lab=document.getElementById("labParticipation").options[document.getElementById("labParticipation").selectedIndex].value;
	var name=document.getElementById("name").value;
	
	sendRequestPost('gender',gender);
	sendRequestPost('lab',lab);
	sendRequestPost('name',name);
}

function getCheckedRadio(radio_group_name) {
    radio_group = document.getElementsByName(radio_group_name)
	for (var i = 0; i < radio_group.length; i++) {
        var button = radio_group[i];
        if (button.checked) {
			return button.value;
        }
    }
    return "noAnswer";
}

function submitFamiliar()
{
	// return true;//remove this
	var radio_group = "familir_before";
	answer = getCheckedRadio(radio_group);
	if (answer=="noAnswer")
	{
		 onContinue.curPage = onContinue.curPage-1;
		// onNext(true);

		// return;

		 return false;		
	}
	else{
		sendRequestPost("familiar_before",answer);
		 return true;		
	}
}

function submit_familiar2()
{
	// return true; //remove this
	var radio_group = "familir_after";
	answer = getCheckedRadio(radio_group);
	if (answer=="noAnswer")
	{
		 onContinue.curPage = onContinue.curPage-1;
		// onNext(true);

		// return;

		 return false;		
	}
	else{
		sendRequestPost("familir_after",answer);
		 return true;		
	}
}

function submitFinal()
{
	var technical  = document.getElementById("technical").value;
	// if(Global_info.condition==2 | Global_info.condition==4)
	// {

		var radio_group = "incremental_sub_2";
		answer2 = getCheckedRadio(radio_group);
		var radio_group = "incremental_sub_3";
		answer3 = getCheckedRadio(radio_group);	
		
		if (answer2=="noAnswer" |answer3=="noAnswer")
		{
			 onContinue.curPage = onContinue.curPage-1;
			 return false;		
		}
		else{
			
			sendRequestPost("diffHelped",answer3);
			sendRequestPost("diffInterfered",answer2);
		
		}			
		
	sendRequestPost("technical",technical);
	return true;

}


function logAnswer(question,num)
{
	// alert("question"+question)

	//return true //remove this
	var sol_id = question.replace("q", "sol");
	var sol_id = sol_id.replace(".page","");
	var sol_id = sol_id.replace("#","");
	// alert
	var answer = ""
	
	var qnum = sol_id.charAt(5);
	switch(qnum) {
		

		case "1":
			answer  = document.getElementById(sol_id).value;
			// alert(answer)
			 Global_info.codeExp = answer;
			break;
			
		case "2":
			answer = getCheckedRadio(sol_id);
			break;
			
		case "3":

			if (document.getElementById(sol_id+"a").value=="" & document.getElementById(sol_id+"b").value=="" & document.getElementById(sol_id+"c").value=="" & document.getElementById(sol_id+"d").value=="" & document.getElementById(sol_id+"e").value=="" & document.getElementById(sol_id+"f").value=="")
			{
				answer = ""
			}
			else
			{
				answer  = "1:"+document.getElementById(sol_id+"a").value;
				answer  = answer+" 2:"+document.getElementById(sol_id+"b").value;
				answer  = answer+" 3:"+document.getElementById(sol_id+"c").value;
				answer  = answer+" 4:"+document.getElementById(sol_id+"d").value;
				answer  = answer+" 5:"+document.getElementById(sol_id+"e").value;
				answer  = answer+" 6:"+document.getElementById(sol_id+"f").value;	
			}

			break;
		
		case "4":
			answer  = document.getElementById(sol_id).value;
			break;
			
		case "5":
			if (document.getElementById(sol_id+"a").value=="" & document.getElementById(sol_id+"b").value=="" & document.getElementById(sol_id+"c").value=="" & document.getElementById(sol_id+"d").value=="" & document.getElementById(sol_id+"e").value=="" & document.getElementById(sol_id+"f").value=="")
			{
				answer = ""
			}
			else
			{
				answer  = "1:"+document.getElementById(sol_id+"a").value;
				answer  = answer+" 2:"+document.getElementById(sol_id+"b").value;
				answer  = answer+" 3:"+document.getElementById(sol_id+"c").value;
				answer  = answer+" 4:"+document.getElementById(sol_id+"d").value;
				answer  = answer+" 5:"+document.getElementById(sol_id+"e").value;
				answer  = answer+" 6:"+document.getElementById(sol_id+"f").value;	
			}

			break;
			
		case "6":
			answer  = document.getElementById(sol_id).value;
			break;
			
		case "7":
			answer = getCheckedRadio(sol_id);
			break;	
			
		case "8":
			answer  = document.getElementById(sol_id).value;
			Global_info.codeExp = answer;
			break;													
	}


	if (answer=="" || answer=="noAnswer")
	{
		// alert("אנא בחר באחת התשובות");
		 onContinue.curPage = onContinue.curPage-1;
		// onNext(true);

		// return;

		 return false;

	}
	else
	{	
		// alert("sending request")

		sol=sol_id;
		// alert(answer)
		sendRequestPost(sol,answer);
		 return true;

	}
}

function logAnswerOld(question,num)
{
	// alert("question"+question)
	var radio_group = question.replace("q", "sol");
	var radio_group = radio_group.replace(".page","");
	var radio_group = radio_group.replace("#","");
	// alert
	radio_group = radio_group; //+"_"+Global_info.round; //+Global_info.typeChanges;
	answer = getCheckedRadio(radio_group);
	// alert(answer)
	if (answer=="noAnswer")
	{
		// alert("אנא בחר באחת התשובות");
		 onContinue.curPage = onContinue.curPage-1;
		// onNext(true);
		// return;
		 return false;
	}
	else
	{	
		// alert("sending request")
		sol=radio_group;
		sendRequestPost(sol,answer);
		 return true;
	}
}

function logAnswersSet1_basic()
{
	var sol1_1=document.getElementById("sol1_1").value;
	var sol1_2=document.getElementById("sol1_2").value;
	var sol1_3=document.getElementById("sol1_3").value;
	var sol1_4=document.getElementById("sol1_4").value;
	sendRequestPost('sol1_1',sol1_1);
	sendRequestPost('sol1_2',sol1_2);
	sendRequestPost('sol1_3',sol1_3);
	sendRequestPost('sol1_4',sol1_4);
}

function logAnswersSet1_change()
{
	var sol1_5=document.getElementById("sol1_5").value;
	sendRequestPost('sol1_5',sol1_5);
}

function logAnswersSet2_basic()
{
	var sol1_1=document.getElementById("sol1_1").value;
	var sol1_2=document.getElementById("sol1_2").value;
	var sol1_3=document.getElementById("sol1_3").value;
	var sol1_4=document.getElementById("sol1_4").value;
	sendRequestPost('sol2_1',sol1_1);
	sendRequestPost('sol2_2',sol1_2);
	sendRequestPost('sol2_3',sol1_3);
	sendRequestPost('sol2_4',sol1_4);
}

function logAnswersSet2_change()
{
	var sol1_5=document.getElementById("sol1_5").value;
	sendRequestPost('sol2_5',sol1_5);
}

function submit_demographis()
{
	var gender=document.getElementById("gender").options[document.getElementById("gender").selectedIndex].value;
	var age = document.getElementById("age").value;
	var participantId = document.getElementById("participantId").value;

	if (gender=='' | age=='' | participantId=='' )
	{
		 onContinue.curPage = onContinue.curPage-1;
		 return false;

	}
	else
	{	
		sendRequestPost('gender',gender);
		sendRequestPost('age',age);
		sendRequestPost('participantId',participantId);
		
		 return true;

	}
}

function enableSubmit()
{
	// alert('here')
  $(next_button).removeAttr("disabled");
	document.getElementById("timer").innerHTML = ""
}

function onNext(same)
{
	  // alert("on next")
	 // alert(onContinue.curPage)
	if( typeof onContinue.curPage == 'undefined')
		onContinue.curPage = 0;
	
	
	onContinue.curPage++;
	document.getElementById("timer").innerHTML;

	//blank all pages
	$(".page").hide();

	Global_info.pauseTime = 0;
	//run_block()
	//$("#experiment.page").show()
	//return


	switch(onContinue.curPage) {
		

		case 1:
			$("#user_data.page").show()
			
			//just playing with css
			Global_info.start = msTime()
			break;

		case 2:
			// startLog();			
			
				if (submit_demographis()==false)
				{
					// alert('case 4 false')

					alert('please provide the requested information')
					$("#user_data.page").show()
				}

			// }

			// if (onContinue.curPage==4)
			// {
				else
				{
					// alert('case 4 true')

					Global_info.end=msTime()
					var timeDemographics =Global_info.end-Global_info.start-Global_info.pauseTime;
					sendRequestPost('timeDemographics',timeDemographics)
					$("#initial_instructions.page").show()
					Global_info.start = msTime()
				}
			
			

			
			// servlog("timeInstructions", timeInstructions);
			
			break;
			
		case 3:
			// startLog();
			
			Global_info.end=msTime()
			var timeInitialInstructions =Global_info.end-Global_info.start-Global_info.pauseTime;
			sendRequestPost('timeInitialInstructions',timeInitialInstructions)
			$("#tutorial.page").show()
			Global_info.start = msTime()
			
			// servlog("timeInstructions", timeInstructions);
			
			break;
			
			
		case 4:
			// startLog();
			
			Global_info.end=msTime()
			var timeTutorial =Global_info.end-Global_info.start-Global_info.pauseTime;
			sendRequestPost('timeTutorial',timeTutorial)
			Global_info.start = msTime()
			$("#familiar1.page").show()
				
			break;
		
		case 5:
			if(submitFamiliar()==false)
			{
				alert('please answer the question')
				$("#familiar1.page").show()
			}
			else
			{
				Global_info.start = msTime()
				if(Global_info.round==1)
				{	
					Global_info.pageName  = "#q1_1_"+Global_info.round+"_"+Global_info.typeChanges+".page";
					$(Global_info.pageName).show()
					if (Global_info.round==1 & Global_info.changesInterface==1)
					{
						
						$("#noteModified1.page").show();
					}
				}
				else
				{
					onContinue.curPage=5;
					onNext(false);
				}
					
			}

			break;

		case 6:

				if (Global_info.round==1 && logAnswer(Global_info.pageName,0)==false)
				{
					// alert('case 4 false')					alert('please answer the question')
					Global_info.pageName  = "#q1_1_"+Global_info.round+"_"+Global_info.typeChanges+".page";
					$(Global_info.pageName ).show()					
				}

			// }			// if (onContinue.curPage==4)
			// {				else
				{
					// alert('case 4 true')					Global_info.end=msTime()
					var time_q1_1 =Global_info.end-Global_info.start-Global_info.pauseTime;
					// var key = 'time_q1_1_'+Global_info.round
					// alert(key)
					if (Global_info.round ==1)
						sendRequestPost('time_q1_1_'+Global_info.round,time_q1_1)
					
					Global_info.start = msTime()
					Global_info.pageName = "#q1_2_"+Global_info.round+"_"+Global_info.typeChanges+".page";
					$(Global_info.pageName).show()
				if (Global_info.round==1 & Global_info.changesInterface==1)
				{
					$("#noteModified2.page").show();
				}
				}
			// }

			
			
			//$("#btnContinue").hide()
			break;		
		case 7:
				if (logAnswer(Global_info.pageName,0)==false)
				{
					alert('please answer the question')
					Global_info.pageName = "#q1_2_"+Global_info.round+"_"+Global_info.typeChanges+".page";
					$(Global_info.pageName).show()
				}
			// if (same==false){			else
			{
				Global_info.end=msTime()
				var time_q1_2 =Global_info.end-Global_info.start-Global_info.pauseTime;
				sendRequestPost('time_q1_2_'+Global_info.round,time_q1_2)
				Global_info.start = msTime()
			
						Global_info.pageName = "#q1_3_"+Global_info.round+"_"+Global_info.typeChanges+".page";
					$(Global_info.pageName).show()
				if (Global_info.round==1 & Global_info.changesInterface==1)
				{
					$("#noteModified3.page").show();
				}				
			}
			// }
			//$("#btnContinue").hide()
			break;
			
		case 8:
			if (logAnswer(Global_info.pageName,0)==false)
			{
				alert('please answer the question')
				Global_info.pageName = "#q1_3_"+Global_info.round+"_"+Global_info.typeChanges+".page";
					$(Global_info.pageName).show()
			}		
			else
			{
				Global_info.end=msTime()
				var time_q1_3 =Global_info.end-Global_info.start-Global_info.pauseTime;
				sendRequestPost('time_q1_3_'+Global_info.round,time_q1_3)
				Global_info.start = msTime()
			
				Global_info.pageName = "#q1_4_"+Global_info.round+"_"+Global_info.typeChanges+".page";
					$(Global_info.pageName).show()
				if (Global_info.round==1 & Global_info.changesInterface==1)
				{
					$("#noteModified4.page").show();
				}					
			}
			//$("#btnContinue").hide()
			break;		case 9:
			if (logAnswer(Global_info.pageName,0)==false)
			{
				alert('please answer the question')
				Global_info.pageName = "#q1_4_"+Global_info.round+"_"+Global_info.typeChanges+".page";
					$(Global_info.pageName).show()
			}			
			else
			{
				Global_info.end=msTime()
				var time_q1_4 =Global_info.end-Global_info.start-Global_info.pauseTime;
				sendRequestPost('time_q1_4_'+Global_info.round,time_q1_4)
				Global_info.start = msTime()
			
				Global_info.pageName = "#q1_5_"+Global_info.round+"_"+Global_info.typeChanges+".page";
					$(Global_info.pageName).show()
				if (Global_info.round==1 & Global_info.changesInterface==1)
				{
					$("#noteModified5.page").show();
				}				
			}
			//$("#btnContinue").hide()
			break;		case 10:
			if (logAnswer(Global_info.pageName,0)==false)
			{
				alert('please answer the question')
				Global_info.pageName = "#q1_5_"+Global_info.round+"_"+Global_info.typeChanges+".page";
					$(Global_info.pageName).show()			}
			else
			{		
				Global_info.end=msTime()
				var time_q1_5 =Global_info.end-Global_info.start-Global_info.pauseTime;
				sendRequestPost('time_q1_5_'+Global_info.round,time_q1_5)
				Global_info.start = msTime()
			
					Global_info.pageName = "#q1_6_"+Global_info.round+"_"+Global_info.typeChanges+".page";
					$(Global_info.pageName).show()
				if (Global_info.round==1 & Global_info.changesInterface==1)
				{
					$("#noteModified6.page").show();
				}					
			}
			//$("#btnContinue").hide()
			break;

		case 11:
			
			
			if (logAnswer(Global_info.pageName)==false)
			{
				alert('please answer the question')
					Global_info.pageName = "#q1_6_"+Global_info.round+"_"+Global_info.typeChanges+".page";
					$(Global_info.pageName).show()
			}
			else
			{
				Global_info.end=msTime()
				var time_q1_6 =Global_info.end-Global_info.start-Global_info.pauseTime;
				sendRequestPost('time_q1_6_'+Global_info.round,time_q1_6)
				Global_info.start = msTime()
			
					Global_info.pageName = "#q1_7_"+Global_info.round+"_"+Global_info.typeChanges+".page";
					$(Global_info.pageName).show()
				if (Global_info.round==1 & Global_info.changesInterface==1)
				{
					$("#noteModified7.page").show();
				}				
			}
			//$("#btnContinue").hide()
			break;
			
		case 12:
			
			
			if (logAnswer(Global_info.pageName)==false)
			{
				alert('please answer the question')
					Global_info.pageName = "#q1_7_"+Global_info.round+"_"+Global_info.typeChanges+".page";
					$(Global_info.pageName).show()
			}
			else
			{
				if (Global_info.round==1)
				{
					//alert("round 1")
					Global_info.end=msTime()
					var time_q1_7 =Global_info.end-Global_info.start-Global_info.pauseTime;
					sendRequestPost('time_q1_7_'+Global_info.round,time_q1_7)
					Global_info.start = msTime()
				
						Global_info.pageName = "#q1_8_"+Global_info.round+"_"+Global_info.typeChanges+".page";
						//document.getElementById("sol1_8_0_").value = Global_info.codeExp;
						
						//if (Global_info.round==1)
						//{
							document.getElementById("sol1_8_1_small").value = Global_info.codeExp;
							document.getElementById("sol1_8_1_big").value = Global_info.codeExp;
						//}
	
						$(Global_info.pageName).show()
					if (Global_info.round==1 & Global_info.changesInterface==1)
					{
						$("#noteModified8.page").show();
					}
				}
				else
				{
					//alert("round0")
					Global_info.end=msTime()
					var time_q1_7 =Global_info.end-Global_info.start-Global_info.pauseTime;
					sendRequestPost('time_q1_7_'+Global_info.round,time_q1_7)
					onContinue.curPage=13; //changed from 12
					onNext(false);
				}	
								
			}
			//$("#btnContinue").hide()
			break;			
			
		case 13:
			
			
			if (Global_info.round==1 && logAnswer(Global_info.pageName)==false)
			{
				alert('please answer the question')
					Global_info.pageName = "#q1_8_"+Global_info.round+"_"+Global_info.typeChanges+".page";
					$(Global_info.pageName).show()
			}
			else
			{
				Global_info.end=msTime()
				var time_q1_8 =Global_info.end-Global_info.start-Global_info.pauseTime;
				if (Global_info.round==1)
					sendRequestPost('time_q1_8_'+Global_info.round,time_q1_8)
				Global_info.start = msTime()
			
				if (Global_info.round==0)
				{
					//alert("round0")
					onContinue.curPage=13;
					onNext(false)
					
				}
				else
				{
					//alert("round1")
	
					if(Global_info.condition==2 | Global_info.condition==4)
						$("#incremental_q").show();
					else
						$("#div_q").show();
					
					
					$("#final_screen").show()
					onContinue.curPage=16;
					// $("#next_button").hide();

				}
			}
			//$("#btnContinue").hide()
			break;	
			
	
		
		case 14:
				Global_info.start = msTime()                 
				Global_info.round = 1;


				
				if (Global_info.condition==1 | Global_info.condition==2)
					Global_info.typeChanges = "small";
				else
				{
					Global_info.typeChanges = "big";
				}

				$('#code_div').empty();
				$('#code_div').load(Global_info.changedProject);
			 					

			 	//clear all selections:

			 	$('input[name=sol1_6]').attr('checked',false);


			 	
			 	if(Global_info.changesInterface==1) //incremental
			 	{
					$("#change_instructions_incremental.page").show()
					//$(Global_info.changesList).show()
					
				}
				else //from scratch
				{
					$("#change_instructions_from_scratch.page").show()

				}
				$(next_button).attr("disabled", true);
				setTimeout(function() { enableSubmit() }, 120000);
				var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
				timer()
			
			//$("#btnContinue").hide()
			break;
			
					case 15:
			Global_info.end=msTime()
			var timeInstructionsChanges =Global_info.end-Global_info.start-Global_info.pauseTime;
			sendRequestPost('timeInstructionsChanges',timeInstructionsChanges)
			Global_info.start = msTime()
			$("#familiar2.page").show()
			
			break;

			
		case 16:
			if(submit_familiar2()==false)
			{
				alert('Please answer the question')
				$("#familiar2.page").show()
			}	

		else
		{			
			Global_info.round=1; //after project changes
			onContinue.curPage=4;
			Global_info.start = msTime()
			onNext(true);
		}
			
			break;		
			
		case 17:
			if(submitFinal()==false)
			{
				alert("please answer the questions")
				if(Global_info.condition==2 | Global_info.condition==4)
						$("#incremental_q").show();
				else
						$("#div_q").show();						
					
					$("#final_screen").show()
					// $("#next_button").hide();
			}
			else{
				alert("You have completed the exercise. You can now close the window.")
				$("#next_button").hide();
			}

		
	}
	
	window.scrollTo(0,0);
	// if (Global_info.round==1 & Global_info.changesInterface==1)
	// {
		// $(Global_info.changesList).show()
	// }
}
