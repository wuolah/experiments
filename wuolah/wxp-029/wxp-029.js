var wxp029Messages = [
        { id: 1, message: '📸 1 FOTO DE TU FACULTAD = WUOLAH COINS GRATIS. PARTICIPA AQUÍ 📸', actionMessage: 'Quiero participar'},
        { id: 2, message: '🎁 PARTICIPA EN NUESTRO CONCURSO DE FOTOGRAFÍA Y LLÉVATE UN PREMIO SEGURO 🎁', actionMessage: 'Quiero participar'},
        { id: 2, message: '🤩 WUOLAH COINS GRATIS POR ENVIARNOS UNA FOTO DE TU UNI 🤩', actionMessage: 'Quiero participar'},
    ]

var wxp029Index = Math.floor(Math.random() * wxp029Messages.length); 

showNavAlertMessage(wxp029Messages[wxp029Index].message, wxp029Messages[wxp029Index].actionMessage, {action: "window.location.href = \"" + URLWUOLAH + "/soy-fotografo?utm_source=wuolah&utm_medium=twitter&utm_campaign=soy-fotografo-alert-BG"+(userMe.userId % 3)+"\""});

alert = document.querySelector('#wlh-nav-alert-message');
actionContent = document.querySelector('#wlh-nav-alert-message > div.nav-alert-message-action-content');


if (alert != null && actionContent != null) {
  gtag('event', 'Show alert soy fotografo', {
    'event_category': 'Analysis: WXP-029',
    'event_label': 'M'+wxp029Index+'-BG'+ userMe.userId % 3,
    'value': '1'
  });

  if (userMe.userId % 3 == 1) {
     alert.style.backgroundColor = '#00acee';
     alert.style.color = 'white';
     actionContent.style.backgroundColor = '#FFFFFF';
     actionContent.style.border = "1px solid ##00acee"
     actionContent.style.color = "#00acee"
  } else if (userMe.userId % 3 == 2){
    alert.style.backgroundColor = '#ff6e00d9';
    alert.style.color = 'white';
    actionContent.style.backgroundColor = '#FFFFFF';
    actionContent.style.color = '#ff6e00d9';
  }

  actionContent.onclick = function() { 
    window.location.href = URLWUOLAH + "/soy-fotografo?utm_source=wuolah&utm_medium=twitter&utm_campaign=soy-fotografo-alert";
    
    gtag('event', 'Click alert soy fotografo', {
      'event_category': 'Analysis: WXP-029',
      'event_label': 'M'+wxp029Index+'-BG'+ userMe.userId % 3,
      'value': '1'
    });
   };
  
}



  