var strVar="";
strVar += "";
strVar += "<div class=\"container\">";
strVar += "    <a href=\"\/\" style=\"margin-top: 8px;align-self: center;\">";
strVar += "    	<span class=\"material-icons\">arrow_back<\/span>";
strVar += "    <\/a>";
strVar += "";
strVar += "     <p>";
strVar += "       <a href=\"https:\/\/www.wuolah.com\/\" class=\"logo\">";
strVar += "         <img src=\"\/\/d1s6z24hqd2168.cloudfront.net\/wuolah\/static\/logo-white.png\" alt=\"Wuolah Logo\">";
strVar += "       <\/a> ";
strVar += "       ";
strVar += "       <img src=\"\/\/d1s6z24hqd2168.cloudfront.net\/wuolah\/static\/coin-1.svg\" class=\"coin-1\" alt=\"Wuolah Coin\"> ";
strVar += "       <span class=\"m-hide\">Descubre todo lo que puedes hacer con las nuevas Wuolah Coins<\/span> ";
strVar += "       <span class=\"d-hide\">Descubre las nuevas Wuolah Coins<\/span>";
strVar += "     <\/p>";
strVar += "";
strVar += "     <a id=\"cta-button\" class=\"btn\" onclick=\"forceOnboardings('ob_shop')\">";
strVar += "       <span>Más info<\/span>";
strVar += "     <\/a>";
strVar += "<\/div>";



imgPremium = document.querySelector('body > main > section.benefits > div > ul > li:nth-child(2) > img');
imgPremium.src = 'https://wuolah-public.s3-eu-west-1.amazonaws.com/GTM/wxp-027_resources/withoutads.PNG'

imgFree = document.querySelector('body > main > section.benefits > div > ul > li:nth-child(1) > img');
imgFree.src = 'https://wuolah-public.s3-eu-west-1.amazonaws.com/GTM/wxp-027_resources/withads.PNG'



document.querySelector('body > div.cta').innerHTML = strVar

