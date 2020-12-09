const colorbtn= document.getElementById("colorbtn");
const colors=["AliceBllue","Azure","AntiqueWhite","CornSilk","FloralWhite","GhostWhite"];
colorbtn.addEventListener("click",changeColor);
let previndex=colors.length+1;
function changeColor()
{
	let index= Math.floor(Math.random()*1000)%colors.length;
	if(index==previndex) //if random choice again picks the same number
		index++; //go to the next index
	console.log(index);
	document.body.style.backgroundColor=colors[index];
}