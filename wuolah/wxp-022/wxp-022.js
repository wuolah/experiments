var wxp022Messages = [
  { id: 1, message: '💸💸💸💸💸💸 GANA LANA SUBIENDO APUNTES 💸💸💸💸💸💸', actionMessage: 'SUBIR APUNTES'},
  { id: 2, message: '💸💸💸💸💸💸 TE PAGAMOS 5MXN POR CADA DOCUMENTO QUE SUBAS 💸💸💸💸💸💸', actionMessage: 'SUBIR DOCUMENTOS'},
]


var wxp022Index = Math.floor(Math.random() * wxp022Messages.length); 

showNavAlertMessage(wxp022Messages[wxp022Index].message, wxp022Messages[wxp022Index].actionMessage, {action: "window.location.href = \"" + URLWUOLAH + "/compramos-tus-documentos\""});

alert = document.querySelector('#wlh-nav-alert-message');
actionContent = document.querySelector('#wlh-nav-alert-message > div.nav-alert-message-action-content');


if (alert != null && actionContent != null) {
  gtag('event', 'Show purchased mexico', {
    'event_category': 'Analysis: WXP-022',
    'event_label': 'M'+wxp022Index+'-BG'+ userMe.userId % 2,
    'value': '1'
  });

  if (userMe.userId % 2 == 1) {
    alert.style.backgroundColor = '#039ae8';
    alert.style.color = 'white';
    actionContent.style.backgroundColor = '#FFFFFF';
    actionContent.style.color = '#039ae8';
  } else {
    alert.style.backgroundColor = '#85BB65';
    alert.style.color = 'white';
    actionContent.style.backgroundColor = '#FFFFFF';
    actionContent.style.color = '#85BB65';
  }

  actionContent.onclick = function() { 
    window.location.href = URLWUOLAH + "/compramos-tus-documentos";
    
    gtag('event', 'Click alert purchase MX', {
      'event_category': 'Analysis: WXP-022',
      'event_label': 'M'+wxp022Index+'-BG'+ userMe.userId % 2,
      'value': '1'
    });
   };
  
}



  