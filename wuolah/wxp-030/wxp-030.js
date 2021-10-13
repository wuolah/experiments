var strVar="";
strVar += "<a id=\"wxp-030-text\" href=\"\/shop/pro?utm_source=wuolah&utm_medium=intralink&utm_campaign=promo-pro-s26\" class=\"nav-anchor wxp-030-text animated flash\">¡¡OFERTAS DE PRO PARA LOS EXÁMENES!!<\/a>";
strVar += "<a id=\"wxp-030-btn\" href=\"\/shop/pro?utm_source=wuolah&utm_medium=intralink&utm_campaign=promo-pro-s26\" class=\"nav-anchor wxp-030-btn animated flash\">DESCUBRIR<\/a>";

var head = document.getElementsByTagName('HEAD')[0];  
var link = document.createElement('link'); 

link.rel = 'stylesheet';  
link.type = 'text/css'; 
link.href = 'https://wuolah-public.s3-eu-west-1.amazonaws.com/GTM/wxp-030_resources/wxp-030.css';  
head.appendChild(link);  

element = document.querySelector('body > nav > div.nav-anchor-container');

if (element != null) {
    element.innerHTML = strVar;

    gtag('event', 'Visit', {
        'event_category': 'Analysis: PROMOPROS26',
        'event_label': userMe.userId,
        'value': '1'
      });


    var text = document.querySelector('#wxp-030-text'); 
    var btn = document.querySelector('#wxp-030-btn'); 


    text.onclick = function() { 
        window.location.href = URLWUOLAH + "/shop/pro?utm_source=wuolah&utm_medium=intralink&utm_campaign=promo-pro-26";
        
        gtag('event', 'Unlock', {
          'event_category': 'Analysis: PROMOPROS26',
          'event_label': userMe.userId,
          'value': '1'
        });
       };

    btn.onclick = function() { 
        window.location.href = URLWUOLAH + "/shop/pro?utm_source=wuolah&utm_medium=intralink&utm_campaign=promo-pro-26";
        
        gtag('event', 'Unlock', {
          'event_category': 'Analysis: PROMOPROS26',
          'event_label': userMe.userId,
          'value': '1'
        });
       };
}







