
(function() {
  var bodyHtml="";
  bodyHtml += "<div class=\"content\">";
  bodyHtml += "			<h5>Impartir clases en WUOLAH<\/h5>";
  bodyHtml += "			";
  bodyHtml += "			<div class=\"section\">";
  bodyHtml += "				<h7>¿A que precio te gustaría impartir tus clases?<\/h7>";
  bodyHtml += "          <div class=\"section-row\">";
  bodyHtml += "              <div class=\"row-item\">";
  bodyHtml += "                  <input class=\"with-gap\" name=\"group1\" type=\"radio\" value=15 \/>";
  bodyHtml += "                  <span>15€ \/ hora<\/span>";
  bodyHtml += "              <\/div>";
  bodyHtml += "";
  bodyHtml += "              <div class=\"row-item\">";
  bodyHtml += "                  <input class=\"with-gap\" name=\"group1\" type=\"radio\" value=10 checked\/>";
  bodyHtml += "                  <span>10€ \/ hora<\/span>";
  bodyHtml += "              <\/div>";
  bodyHtml += "";
  bodyHtml += "              <div class=\"row-item\">";
  bodyHtml += "                  <input class=\"with-gap\" name=\"group1\" type=\"radio\" value=5 \/>";
  bodyHtml += "                  <span>5€ \/ hora<\/span>";
  bodyHtml += "              <\/div>";
  bodyHtml += "        <\/div>";
  bodyHtml += "    ";
  bodyHtml += "        <div class=\"section-row\">";
  bodyHtml += "            <button onclick=\"publishClass()\" class=\"wlh-btn wlh-btn-medium\">";
  bodyHtml += "                <div class=\"wlh-btn-text\">Enviar<\/div>";
  bodyHtml += "            <\/button>";
  bodyHtml += "        <\/div>";
  bodyHtml += "      <\/div>";
  bodyHtml += "    <\/div>";
  

  var modalOptions = {
    title: 'Clases particulares',
    subtitle: 'Subtitle',
    headerColor: '#05f;',
    bodyHTML: bodyHtml,
    extraClass: 'onBoardingPopup',
    footer: false,
    modalId: 'Teachers'
  };

  var head = document.getElementsByTagName('HEAD')[0];  
  var link = document.createElement('link'); 

  link.rel = 'stylesheet';  
  link.type = 'text/css'; 
  link.href = 'https://wuolah-public.s3-eu-west-1.amazonaws.com/GTM/onBoarding/teachers_modal/teachersPopup.css';  
  head.appendChild(link);  

  var userId = getCookie('userId')

  gtag('event', 'Show modal private class', {
    'event_category': 'Analysis: WXP-020',
    'event_label':'U'+userId,
    'value': 1
  });
  setCookie("privateClassShown", "1", 1);

  standardPopup(modalOptions);
})();

function publishClass() {
	var price = $('input[name="group1"]:checked').val();
  var userId = getCookie('userId')

  $('#popupModalTeachers').modal('close')
	console.log( price )

  gtag('event', 'Precio de la clase', {
    'event_category': 'Analysis: WXP-020',
    'event_label': 'P'+price+'-'+'U'+userId,
    'value': 1
  });

	var bodyHtml = '';
	bodyHtml += '<h5>Gracias por participar</h5>';
	bodyHtml += '<h7>Pronto recibirás más información en tu correo.</h7>';
  bodyHtml += " <div class=\"section-row\">";
  bodyHtml += "			<button onclick=\"$(\'#popupModalUnderstand\').modal(\'close\')\" class=\"wlh-btn header-redeem-button\">";
  bodyHtml += "				<div class=\"wlh-btn-text\">Entendido<\/div>";
  bodyHtml += "			<\/button>";
  bodyHtml += "	<\/div>";

	var modalOptions = {
		title: '',
		subtitle: 'Subtitle',
		headerColor: '#05f;',
		bodyHTML: bodyHtml,
		extraClass: 'onBoardingPopup',
		footer: false,
    modalId: 'Understand'
	};

	standardPopup(modalOptions);
}
