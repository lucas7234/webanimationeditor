var infinite=document.querySelector("#infinite").checked;
var timselect="linear";
var alternatebool
var keyframe = new Array();
var framearray = [];
var codearray = [];

function aninamedefault(){
	var button=document.querySelector("#namebutton")
	var input = document.querySelector("#aniname");
	if (button.innerText == "Default"){
		input.value = "Animation";
		button.innerText = "Customize";
		input.disabled=true;
	}
	else {
		button.innerText = "Default";
		input.disabled=false;
		input.select()
	}
}

function anidurdefault(){
	var button=document.querySelector("#durbutton")
	var input = document.querySelector("#anidur");
	if (button.innerText == "Default"){
		input.value = "1";
		button.innerText = "Customize";
		input.disabled=true;
		console.log(button.innerText)
	}
	else {
		button.innerText = "Default";
		input.disabled=false;
		input.select()
	}
}

function anirepdefault(){
	var button=document.querySelector("#repbutton")
	var input = document.querySelector("#anirep");
	var checklabel=document.querySelector("#checklabel")
	var check=document.querySelector("#infinite")
	if (button.innerText == "Default"){
		input.value = "1";
		button.innerText = "Customize";
		input.disabled=true;
		console.log(button.innerText)
		check.disabled=true
		check.checked=false
	}
	else if (infinite == false){
		button.innerText = "Default";
		input.disabled=false;
		input.select()
		check.disabled=false
	}
	else if (infinite == true){
		input.disabled=true
		check.disabled=false
	}
}

function repinfinite(){
	var infcheck = document.querySelector("#infinite");
	var input = document.querySelector("#anirep");
	var check=document.querySelector("#infinite")
	var button=document.querySelector("#repbutton")
	infinite = infcheck.checked;
	if (infinite){
		input.disabled=true
		input.value="infinite"
		check.disabled=false
		button.style.display="none"
	}
	else
	{
		check.disabled=false
		input.value=""
		input.disabled=false;
		button.style.display="inline"
	}
}

function selectvalue(e) {
  // 선택된 데이터 가져오기
	const handlevalue = e.value;
	console.log(handlevalue)
	timselect = handlevalue;
	var bezierinput = document.querySelector("#bezier")
	if (timselect=="cubic-bezier"){
		bezierinput.style.display="inline"
	}
	else{
		bezierinput.style.display="none"
	}
}

function anialt(){
	var alternate=document.querySelector("#anialt");
	if (alternate.checked){
		alternatebool=true;
	}
	else{
		alternatebool=false;
	}
}

function checktime(){
	var duration = document.querySelector("#anidur");
	var endtime = document.querySelector("#endtime");
	var warningtext = document.querySelector("#warning");
	if (endtime.value > 100){
		warningtext.style.display="inline";
		endtime.style.borderColor="red";
	}
	else{
		warningtext.style.display="none";
		endtime.style.borderColor="blue";
	}
}

function savekeyframe(){
	var percantage=document.querySelector("#endtime");
	var css = document.querySelector("#css");
	framearray.push(percantage.value)
	codearray.push(css.value)
	console.log(css.value)
	
}

function sourcecode(){
	var selector=document.querySelector("#anisel").value;
	var aniname=document.querySelector("#aniname").value;
	var duration=document.querySelector("#anidur").value;
	var repeat=document.querySelector("#anirep").value;
	var timing=timselect;
	var alternate=document.querySelector("#anialt").checked;
	if (alternate){
		alternate = "alternate"
	}
	else{
		alternate = "normal"
	}
	var css=document.querySelector("#css").value
	var bezier1=document.querySelector("#bezier1").value
	var bezier2=document.querySelector("#bezier2").value
	var bezier3=document.querySelector("#bezier3").value
	var bezier4=document.querySelector("#bezier4").value
	if (timing=="cubic-bezier"){
		timing = `cubic-bezier(${bezier1}, ${bezier2}, ${bezier3}, ${bezier4})`
	}
	var textarearesult=document.querySelector("#result");
	textarearesult.innerText = `${selector}{animation-name:${aniname}; animation-duration:${duration}s; animation-iteration-count:${duration}; animation-timing-function:${timing}; animation-direction:${alternate};}
	
	@keyframes ${aniname}{
		${css}
	}
	
	`
}

function copy(){
	var textarearesult=document.querySelector("#result");
	textarearesult.select();
	document.execCommand('copy')
	alert("복사 완료")
}
