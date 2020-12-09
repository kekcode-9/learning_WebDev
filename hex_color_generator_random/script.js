const hex=["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
const hexcolorbtn=document.getElementById("hexcolorbtn");
const hexspan=document.getElementById("hexcode");
let code="#";
hexcolorbtn.addEventListener("click",function(){changeColor(code,hex)});
function changeColor(code,hex)
{
	for(i=0;i<6;i++)
	{
		let index=Math.floor(Math.random()*1000)%hex.length;
		code=code+hex[index];
	}
	hexspan.innerHTML=code;
	document.body.style.backgroundColor=code;
}