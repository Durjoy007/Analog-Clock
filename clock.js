// ============== I am a javascript file =========== //


const hourDiv = document.getElementById('hour');
const minDiv = document.getElementById('min');
const secDiv = document.getElementById('sec');

setInterval(updateClock, 1000);

function updateClock(){

	let date = new Date();

	let hour = date.getHours() / 12;
	let min = date.getMinutes() / 60;
	let sec = date.getSeconds() / 60;

	hourDiv.style.transform = "rotate(" + (hour * 360) + "deg)";
	minDiv.style.transform = "rotate(" + (min * 360) + "deg)";
	secDiv.style.transform = "rotate(" + (sec * 360) + "deg)";
}

updateClock();