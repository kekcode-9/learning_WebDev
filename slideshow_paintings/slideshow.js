btns = document.getElementsByClassName("btn");
image = document.getElementById("image");
start = btns[0];
stop = btns[1];
count = 1;
images = {
	"img1": "paintings/london_bridge_by_night.jpeg", 
	"img2": "paintings/moonlight_after_rain.jpg",
	"img3": "paintings/Scarborough_Lights.jpg",
	"img4": "paintings/Canny_Glasgow.jpg",
	"img5": "paintings/Eve_of_St_Agnes.jpg",
	"img6": "paintings/hushed_frank_holl.jpg",
	"img7": "paintings/Awake_Groa_Awake_Mother.jpg",
	"img8": "paintings/Fishermen_at_Sea.jpg"
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
		if(count==8){
			count = 1;
		}
		startSlideShow(count);
	}, 3000);
	stop.addEventListener("click", function(){
		start.style.display = "inline";
		stop.style.display = "none";
		clearInterval(delay);
	})
}
function startSlideShow(count){
	img = images["img"+count];
	console.log(img);
	image.src = img;
	image.style.height = "80%";
}