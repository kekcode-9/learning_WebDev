let prevBtn = document.getElementsByClassName('prevBtn')[0];
let nextBtn = document.getElementsByClassName('nextBtn')[0];
let container = document.querySelector('.images');

let count=0;

prevBtn.addEventListener('click', function(){slide(1);}, false);
nextBtn.addEventListener('click', function(){slide(0);}, false);

function slide(direction)
{
	if(direction==0)
	{
		count++; //move to next slide
		if(count===5)
			count=0;
	}
	else
	{
		count--; //move to previous slide
		if(count===-1)
			count=4;
	}
	let img= 'url(images/img'+count+'.jpg)';
	container.style.backgroundImage = img;
}