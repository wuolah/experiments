var userId = parseInt(getCookie(userId))
var x = document.getElementsByClassName("join-chat-item")[0];
var button = x.getElementsByTagName("button")[0];

if (typeof x !== 'undefined' && x) {
	button.id = 'btn-wxp-008'
	button.style.color = '#ffffff';
	button.style.borderColor = '#00bb2d';
	button.style.background = '#00bb2d';
	button.style.backgroundColor = '#00bb2d';

	var y = document.getElementsByClassName("join-information")[0];
	bottomLine = y.getElementsByClassName("bottom-line")[0];
	bottomLine.textContent = "Estás Online · Más de 70 personas conectadas";
	bottomLine.style.color = '#00bb2d';
}




