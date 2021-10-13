

var strVar="";
strVar += "<main>";
strVar += "        <div class=\"container\">";
strVar += "            <div class=\"left-side\">";
strVar += "                <div class=\"banner\">";
strVar += "                    <img src=\"https:\/\/wuolah-public.s3-eu-west-1.amazonaws.com\/GTM\/wxp-015_resources\/asset.png\" alt=\"\">";
strVar += "                <\/div>";
strVar += "            <\/div>";
strVar += "    ";
strVar += "            <div class=\"right-side\">";
strVar += "                <div class=\"title\">Olvídate de los anuncios<\/div>";
strVar += "                <div class=\"subtitle\">Navega y descarga SIN LÍMITES y SIN ANUNCIOS. Hola exámenes, ¡Voy a por todas!<\/div>";
strVar += "    ";
strVar += "                <hr class=\"solid\">";
strVar += "    ";
strVar += "                <div class=\"product-card\">";
strVar += "                    <div class=\"action-section\">";
strVar += "                        <div class=\"product\">";
strVar += "													<h2 class=\"product-title\">Wuolah PRO<\/h2>";
strVar += "";
strVar += "													<div class=\"product-price\">4,95€\/mes<\/div>";
strVar += "                        <\/div>";
strVar += "";
strVar += "												<div class=\"btn-section\">";
strVar += "													<button id=\"WXP015-btn\" onclick=\"checkout('pro', 'MENSUAL 4.95€\/mes', 'null')\" class=\"action-btn\" style=\"pointer-events: initial; user-select: initial;\">";
strVar += "														<div class=\"wlh-btn-icon\" style=\"pointer-events: initial; user-select: initial;\">";
strVar += "																<img src=\"https:\/\/wuolah-web.s3-eu-west-1.amazonaws.com\/assets\/icon\/pro.gif\" style=\"pointer-events: initial; user-select: initial;\">";
strVar += "														<\/div>";
strVar += "	";
strVar += "														<div class=\"action-btn-text\" style=\"pointer-events: initial; user-select: initial;\">Quiero ser PRO<\/div>";
strVar += "												<\/button>";
strVar += "												<\/div>";
strVar += "                    <\/div>";
strVar += "    ";
strVar += "										<hr class=\"solid\">";
strVar += "										";
strVar += "                    <div class=\"list-section\">";
strVar += "                        <div class=\"list-item\">";
strVar += "													<img src=\"https:\/\/wuolah-public.s3-eu-west-1.amazonaws.com\/GTM\/wxp-015_resources\/check.png\" alt=\"\">";
strVar += "													Elimina todo tipo de publicidad en la web.";
strVar += "												<\/div>";
strVar += "";
strVar += "                        <div class=\"list-item\">";
strVar += "													<img src=\"https:\/\/wuolah-public.s3-eu-west-1.amazonaws.com\/GTM\/wxp-015_resources\/check.png\" alt=\"\">";
strVar += "													Visualiza todos los documentos sin publicidad.";
strVar += "												<\/div>";
strVar += "";
strVar += "                        <div class=\"list-item\">";
strVar += "													<img src=\"https:\/\/wuolah-public.s3-eu-west-1.amazonaws.com\/GTM\/wxp-015_resources\/check.png\" alt=\"\">";
strVar += "													Descarga sin publicidad de forma ilimitada.";
strVar += "												<\/div>";
strVar += "";
strVar += "                        <div class=\"list-item\">";
strVar += "													<img src=\"https:\/\/wuolah-public.s3-eu-west-1.amazonaws.com\/GTM\/wxp-015_resources\/check.png\" alt=\"\">";
strVar += "													En cualquier dispositivo.";
strVar += "												<\/div>	";
strVar += "";
strVar += "                        <div class=\"list-item\">";
strVar += "													<img src=\"https:\/\/wuolah-public.s3-eu-west-1.amazonaws.com\/GTM\/wxp-015_resources\/check.png\" alt=\"\">";
strVar += "													No más vídeos = Más velocidad en tu navegador.";
strVar += "												<\/div>											";
strVar += "                    <\/ul>";
strVar += "                <\/div>";
strVar += "            <\/div>";
strVar += "        <\/div>";
strVar += "    <\/main>";

var head = document.getElementsByTagName('HEAD')[0];  
var link = document.createElement('link'); 

link.rel = 'stylesheet';  
link.type = 'text/css'; 
link.href = 'https://wuolah-public.s3-eu-west-1.amazonaws.com/GTM/wxp-015_resources/wxp-015v1.css';  
head.appendChild(link);  

element = document.querySelector('body > main');
element.innerHTML = strVar;







