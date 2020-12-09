var clock = document.getElementsByClassName("container")[0];
function setTimerVal(clock){
	d = new Date();
	h = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();
	period = "AM";
	if(h<10){
		h = "0" + h;
	}
	if(m<10){
		m = "0" + m;
	}
	if(s<10){
		s = "0" + s;
	}
	if(h>12)
	{
		h = h - 12;
		period = "PM";
	}
	var time = h + ":" + m + ":" + s + " " + period;
	clock.innerText = time;
	clock.innerContent = time;
	setTimeout(function(){
		setTimerVal(clock)
	}, 1000);
}
window.addEventListener('load', setTimerVal(clock));