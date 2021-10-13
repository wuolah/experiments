var strVar="";
strVar += "	<div class=\"content\">";
strVar += "		<div class=\"section\">";
strVar += "";
strVar += "			<div class=\"section-title\">Publicar clases particulares<\/div>";
strVar += "			<div class=\"inner-info\">";
strVar += "        <span>Gana dinero convirtiendote en un profesor particular de WUOLAH y publica cuando estas disponible para dar clases online.";
strVar += "        			Para reservar una clase particular de otro usuario visita su perfil y consulta su disponibilidad.<\/span>";
strVar += "    	<\/div>";
strVar += "";
strVar += "			<div class=\"section-row\">";
strVar += "				<div>";
strVar += "					<label for=\"\">Asignatura<\/label>";
strVar += "					<input type=\"text\" name=\"subject\" id=\"subject\" placeholder=\"Nombre de la asignatura\" \/>";
strVar += "				<\/div>";
strVar += "			<\/div>";
strVar += "";
strVar += "			<div class=\"section-row\">";
strVar += "					<div>";
strVar += "					  <label for=\"bday\">Fecha:<\/label>";
strVar += "					  <input type=\"date\" id=\"bday\" name=\"date\" required pattern=\"[0-9]{4}-[0-9]{2}-[0-9]{2}\">";
strVar += "					  <span class=\"validity\"><\/span>";
strVar += "					<\/div>";
strVar += "";
strVar += "					<div>";
strVar += "						<label for=\"appt\">hora:<\/label>";
strVar += "						<input type=\"time\" id=\"appt\" name=\"time\" min=\"09:00\" max=\"22:00\" required>";
strVar += "					<\/div>";
strVar += "			<\/div>";
strVar += "";
strVar += "			<div class=\"section-row\">";
strVar += "					<div>";
strVar += "						<label>";
strVar += "							<input class=\"with-gap\" name=\"group1\" type=\"radio\" value=15 \/>";
strVar += "							<span>15€ \/ hora<\/span>";
strVar += "						<\/label>";
strVar += "					<\/div>";
strVar += "					<div>";
strVar += "						<label>";
strVar += "							<input class=\"with-gap\" name=\"group1\" type=\"radio\" value=10 checked\/>";
strVar += "							<span>10€ \/ hora<\/span>";
strVar += "						<\/label>";
strVar += "					<\/div>";
strVar += "					<div>";
strVar += "						<label>";
strVar += "							<input class=\"with-gap\" name=\"group1\" type=\"radio\" value=5 \/>";
strVar += "							<span>5€ \/ hora<\/span>";
strVar += "						<\/label>";
strVar += "					<\/div>";
strVar += "			<\/div>";
strVar += "";
strVar += "			<div class=\"section-row\">";
strVar += "				<button onclick=\"publishClass()\" class=\"wlh-btn wlh-btn-color wlh-btn-medium\">";
strVar += "					<div class=\"wlh-btn-text\">Publicar<\/div>";
strVar += "				<\/button>";
strVar += "			<\/div>";
strVar += "		<\/div>";
strVar += "	<\/div>";


var head = document.getElementsByTagName('HEAD')[0];  
var link1 = document.createElement('link'); 

// Include styles.css
link1.rel = 'stylesheet';  
link1.type = 'text/css'; 
link1.href = 'https://wuolah-public.s3-eu-west-1.amazonaws.com/GTM/wxp-016_resources/css/main.css';  
head.appendChild(link1);  



var navBox="";
navBox += "<div id=\"wxp-016-nav-box\" onclick=\"showCalendar()\" class=\"nav-item\">";
navBox += "    <div class=\"icon\">";
navBox += "				<img src=\"https:\/\/wuolah-web.s3-eu-west-1.amazonaws.com\/assets\/img\/nav\/icon-bag.svg\"><\/img>";
navBox += "        <img src=\"https:\/\/www.wuolah.com\/static\/media\/assets\/profile\/save_money_active.png\"><\/img>";
navBox += "    <\/div>";
navBox += "    <div class=\"text\">Clases particulares<\/div>";
navBox += "<\/div>";


nav = document.querySelector('body > main > div > div.main-container-profile > div.navigation > div:nth-child(2)')
nav.innerHTML = nav.innerHTML + navBox;

var btn="";
btn += "<button onclick=\"showCalendar()\" class=\"wlh-btn header-redeem-button\"><div class=\"wlh-btn-text\">Clases particulares<\/div><\/button>";

header =  document.querySelector('body > header > div > div.header-right-side');
header.innerHTML = btn + header.innerHTML;

var element;
var rollBackHTML;

function showCalendar() {
	div = document.createElement("div")
	div.id = "privateClassSection"
	div.classList.add('section-container');

	main = document.querySelector('body > main > div > div.main-container-profile > div.main-body')
	if (typeof main && main !== null) {
		main.appendChild(div);
		element = document.getElementsByClassName('section-container active')[0];
		rollBackHTML = element;
		if (typeof element && element !== null) {
			element.innerHTML = strVar;
		} 
	}
}

function publishClass() {
	var price = $('input[name="group1"]:checked').val();
	var subject = $('input[name="subject"]').val();
	var date = $('input[name="date"]').val();
	var time = $('input[name="time"]').val();

	element = rollBackHTML;

	console.log(subject, price, date, time)
	// standardPopup(popupOptions)

	var bodyHtml = '';
	bodyHtml += '<h5>Gracias por publicar tu disponibilidad</h5>';
	bodyHtml += '<h7>Pronto recibirás más información en tu correo.</h7>';
	bodyHtml += '<button onclick="$(\'#popupModal\').modal(\'close\')" class="wlh-btn header-redeem-button" id="onBoarding-uned-button" style="opacity: 1;><div class="wlh-btn-text" style="opacity: 1;">¡Entendido!</div></button>';

	var modalOptions = {
		title: '',
		subtitle: 'Subtitle',
		headerColor: '#05f;',
		bodyHTML: bodyHtml,
		extraClass: 'onBoardingPopup',
		footer: false
	};

	var head = document.getElementsByTagName('HEAD')[0];  
	var link = document.createElement('link'); 

	link.rel = 'stylesheet';  
	link.type = 'text/css'; 
	link.href = 'https://wuolah-public.s3-eu-west-1.amazonaws.com/GTM/onBoarding/onBoardingPopup.css';  
	head.appendChild(link);  

	standardPopup(modalOptions);
}
