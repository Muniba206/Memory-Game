//Declaring variables 

const start_btn = document.getElementById('start');
const game_timer = document.getElementById('timer');
let seconds=0;
let minutes=0; 

// adding EventListener to start button

start_btn.addEventListener('click', function() {
	/* Run timer until game ends*/

	timer= setInterval(function() {
		seconds++;
		if(seconds>=60) {
			seconds=0;
			minutes++;
		}if (minutes>=60){
			game_timer.textContent="Game Over";
			clearInterval(timer);
		}
		game_timer.textContent= minutes + ':' + seconds;
	}, 1000);

	document.getElementById('overlay').className = "overlay hidden";
	document.getElementById('start-pop-up').className = "start-pop-up hidden";
});

