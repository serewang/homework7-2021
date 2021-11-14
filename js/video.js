var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	
	
	video = document.getElementById("player1");
	var buttonPlay = document.getElementById("play");
	var volumeText = document.getElementById('volume');
	var volControl = document.getElementById('slider');
	
	var setVol = function() {
		video.volume = this.value / 100;
		volumeText.textContent = this.value + "%";
		console.log("Changed volume to " + this.value)
	};
	
    buttonPlay.addEventListener("click", function() {
        video.play();
		console.log("Play")
		volumeText.textContent = slider.value + "%";
    });
	var buttonPause = document.getElementById("pause");
    buttonPause.addEventListener("click", function() {
        video.pause();
		console.log("Pause")
		
    });
	var buttonSlow = document.getElementById("slower");
	buttonSlow.addEventListener("click", function() {
		video.playbackRate -= .05;
		console.log(video.playbackRate)
	})
	var buttonFast = document.getElementById("faster");
	buttonFast.addEventListener("click", function() {
		video.playbackRate += .05;
		console.log(video.playbackRate)
	})
	
	var buttonSkip = document.getElementById("skip");
	buttonSkip.addEventListener("click", function() {
		video.addEventListener('ended', function(){
			video.currentTime = 0;
			console.log("Restarting")
			console.log("New location " + video.currentTime)
			video.play();
		  });
		console.log("Original location " +video.currentTime)
		video.currentTime=video.currentTime + 15;
		console.log("New location " + video.currentTime)
		
	})

	

	volControl.addEventListener('change', setVol);
	volControl.addEventListener('input', setVol);

	var buttonMute = document.getElementById("mute");
	buttonMute.addEventListener("click", function() {
		if (video.muted === false) {
			video.muted = true;
			document.getElementById("mute").textContent = "Unmute"
			slider.value = 0;
			volumeText.textContent = "0%"
			console.log("Muted")
			}
			else {
			video.muted = false;
			document.getElementById("mute").textContent = "Mute"
			slider.value = video.volume * 100;
			volumeText.textContent = video.volume * 100 + "%"
			console.log("Unmuted")
			}
	});
	
	var buttonStyled = document.getElementById("vintage");
    buttonStyled.addEventListener("click", function() {
        video.classList.add("oldSchool");	
		console.log("Applied old school class")
    });

	var buttonUnstyled = document.getElementById("orig");
    buttonUnstyled.addEventListener("click", function() {
        video.classList.remove("oldSchool");	
		console.log("Removed old school class")
    });
});




