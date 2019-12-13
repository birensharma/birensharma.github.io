
var current_fs, next_fs, previous_fs;
var left, opacity, scale;
var animating;
let currentIndex = 0
const TIME = 4
let currentTime = 0
// $('.timertext').text(TIME+'s')


function goNext() {
	if (animating) return false;
	animating = true;

	const fs = document.querySelectorAll('fieldset')

	current_fs = $(fs[currentIndex])
	next_fs = $(fs[currentIndex + 1])

	currentIndex++

	$("#progressbar li").eq(currentIndex).addClass("active");


	next_fs.show();

	current_fs.animate({ opacity: 0 }, {
		step: function (now, mx) {


			scale = 1 - (1 - now) * 0.2;

			left = (now * 50) + "%";

			opacity = 1 - now;
			current_fs.css({ 'transform': 'scale(' + scale + ')' });
			next_fs.css({ 'left': left, 'opacity': opacity });
		},
		duration: 500,
		complete: function () {
			current_fs.hide();
			animating = false;
		},

		easing: 'easeOutQuint'
	});
}
function start() {
	if (currentIndex == 5) return
	setTimeout(() => {
		goNext()
		clearInterval()
		start()
	}, (TIME) * 1000);
}
start()
// function startTimer() {
let timer = setInterval(() => {
	// if (currentIndex == 5) {
	// 	$('.timertext').text('0s')
	// 	clearInterval(timer)
	// }
	currentTime++
	$('.timertext').text(currentTime+'s')
	// if (currentTime == 1) currentTime = TIME + 1
	// startTimer()
}, 1000);
// }
// startTimer()
$(".submit").click(function () {
	return false;
})