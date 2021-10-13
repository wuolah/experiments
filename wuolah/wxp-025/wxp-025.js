var strVar="";
strVar += "	<div class=\"bottom-side\">";
strVar += "						<div class=\"options-section\">";
strVar += "							<div class=\"option-item\">";
strVar += "								<div class=\"option-title\">PRO trimestral 19,99€<\/div>";
strVar += "								<div class=\"option-description\">4 Meses sin anuncios<\/div>";
strVar += "								<button id=\"WXP025-quaterly-btn\" onclick=\"checkoutPro(1)\"  class=\"action-btn\" style=\"pointer-events: initial; user-select: initial;\">";
strVar += "									<div class=\"wlh-btn-icon\" style=\"pointer-events: initial; user-select: initial;\">";
strVar += "											<img src=\"https:\/\/wuolah-web.s3-eu-west-1.amazonaws.com\/assets\/icon\/pro.gif\" style=\"pointer-events: initial; user-select: initial;\">";
strVar += "									<\/div>";
strVar += "";
strVar += "									<div class=\"action-btn-text\" style=\"pointer-events: initial; user-select: initial;\">Obtener<\/div>";
strVar += "								<\/button>";
strVar += "							<\/div>";
strVar += "";
strVar += "							<div class=\"option-item\">";
strVar += "								<div class=\"option-title\">PRO anual 49,99€<\/div>";
strVar += "								<div class=\"option-description\">12 Meses sin anuncios<\/div>";
strVar += "								<button id=\"WXP025-anual-btn\" onclick=\"checkoutPro(2)\" class=\"action-btn\" style=\"pointer-events: initial; user-select: initial;\">";
strVar += "									<div class=\"wlh-btn-icon\" style=\"pointer-events: initial; user-select: initial;\">";
strVar += "											<img src=\"https:\/\/wuolah-web.s3-eu-west-1.amazonaws.com\/assets\/icon\/pro.gif\" style=\"pointer-events: initial; user-select: initial;\">";
strVar += "									<\/div>";
strVar += "";
strVar += "									<div class=\"action-btn-text\" style=\"pointer-events: initial; user-select: initial;\">Obtener<\/div>";
strVar += "								<\/button>";
strVar += "							<\/div>";
strVar += "						<\/div>";
strVar += "";
strVar += "						<div class=\"bubble-section\">";
strVar += "							<div class=\"bubble-item\">";
strVar += "								<img src=\"https:\/\/wuolah-public.s3-eu-west-1.amazonaws.com\/GTM\/wxp-015_resources\/adblock.png\" alt=\"\">";
strVar += "";
strVar += "								<div class=\"bubble-item-text\">";
strVar += "									<div class=\"bubble-text-title\">¡Fuera publi!<\/div>";
strVar += "									<div class=\"bubble-text-subtitle\">Concéntrate al máximo<\/div>";
strVar += "								<\/div>";
strVar += "							<\/div>";
strVar += "							";
strVar += "							<div class=\"bubble-item\">";
strVar += "								<img src=\"https:\/\/wuolah-public.s3-eu-west-1.amazonaws.com\/GTM\/wxp-015_resources\/notes.png\" alt=\"\">";
strVar += "";
strVar += "								<div class=\"bubble-item-text\">";
strVar += "									<div class=\"bubble-text-title\">Apuntes ilimitados<\/div>";
strVar += "									<div class=\"bubble-text-subtitle\">Sin publi y sin gastar coins<\/div>";
strVar += "								<\/div>";
strVar += "							<\/div>";
strVar += "";
strVar += "							<div class=\"bubble-item\">";
strVar += "								<img src=\"https:\/\/wuolah-public.s3-eu-west-1.amazonaws.com\/GTM\/wxp-015_resources\/device.png\" alt=\"\">";
strVar += "";
strVar += "								<div class=\"bubble-item-text\">";
strVar += "									<div class=\"bubble-text-title\">En cualquier dispositivo<\/div>";
strVar += "									<div class=\"bubble-text-subtitle\">Tú eliges desde donde estudias<\/div>";
strVar += "								<\/div>";
strVar += "							<\/div>";
strVar += "";
strVar += "							<div class=\"bubble-item\">";
strVar += "								<img src=\"https:\/\/wuolah-public.s3-eu-west-1.amazonaws.com\/GTM\/wxp-015_resources\/cancel.png\" alt=\"\">";
strVar += "";
strVar += "								<div class=\"bubble-item-text\">";
strVar += "									<div class=\"bubble-text-title\">Cancela cuando quieras<\/div>";
strVar += "									<div class=\"bubble-text-subtitle\">No ponemos límites, tú decides.<\/div>";
strVar += "								<\/div>";
strVar += "							<\/div>";
strVar += "						<\/div>";
strVar += "					<\/div> ";



var head = document.getElementsByTagName('HEAD')[0];  
var link = document.createElement('link'); 

link.rel = 'stylesheet';  
link.type = 'text/css'; 
link.href = 'https://wuolah-public.s3-eu-west-1.amazonaws.com/GTM/wxp-025_resources/wxp-025.css';  
head.appendChild(link);  

element = document.querySelector('body > main > div > div.bottom-side');
element.innerHTML = strVar;







