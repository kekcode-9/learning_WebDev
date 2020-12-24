btns = document.getElementsByClassName("btn");
image = document.getElementById("image");
start = btns[0];
stop = btns[1];
count = 1;
images = {
	"img1": "images/image1.jpg", 
	"img2": "images/image2.jpg",
	"img3": "images/image3.jpg",
	"img4": "images/image4.jpg",
	"img5": "images/image5.jpg",
	"img6": "images/image6.jpg",
	"img7": "images/image7.jpg",
	"img8": "images/image8.jpg",
	"img9": "images/image9.jpg",
	"img10": "images/image10.jpg",
}
start.addEventListener("click", function(){
	start.style.display = "none";
	stop.style.display = "inline";
	func();
	startSlideShow(count);
})
function func(){
	delay = setInterval(function(){
		count = count + 1;
		if(count==11){
			count = 1;
		}
		startSlideShow(count);
	}, 5000);
	stop.addEventListener("click", function(){
		start.style.display = "inline";
		stop.style.display = "none";
		clearInterval(delay);
	})
}
function startSlideShow(count){
	document.getElementById('image').style.width = '1000px';
	document.getElementById('image').style.height = '1000px';
	img = images["img"+count];
	console.log(img);
	image.src = img;
	image.style.height = "80%";
}