var wxp026Messages = [
        { id: 1, message: 'Quita toda la publicidad hasta AGOSTO por 19,99€', actionMessage: 'QUITAR PUBLICIDAD'},
        { id: 2, message: 'Si necesitas esos apuntes buenos buenos sin publi.. QUITALA HASTA AGOSTO! 19,99€', actionMessage: 'PERFECTO, COMPRAR'},
        { id: 3, message: 'YA QUE NO ESTAS SALIENDO DE FIESTA..GASTA ESOS 20 EUROS EN TU FUTURO..QUITA LA PUBLI HASTA AGOSTO', actionMessage: 'TENGO 19,99€'},
        { id: 4, message: '¿UN POCO CANSADO DE LA PUBLICIDAD? OLVIDATE HASTA EL VERANO POR 19,99€', actionMessage: 'VENGA, LO COMPRO'},
        { id: 5, message: 'DESCARGA Y NAVEGA SIN PUBLICIDAD HASTA EL FINAL DE LOS EXÁMENES. POR MENOS DE 20€', actionMessage: 'COMPRAR'},
        { id: 6, message: 'FUERA LA PUBLI, FUERA LA PUBLI, FUERA LA PUBLI, HASTA QUE TERMINES LOS EXÁMENES!', actionMessage: 'OBTENER por 19,99€'},
        { id: 7, message: 'DESCARGA SIN PUBLICIDAD HASTA VERANO, NI UN SOLO ANUNCIO MAS EN WUOLAH', actionMessage: 'LO QUIERO'},
        { id: 8, message: '¿COMO QUITAR LOS ANUNCIOS DE LOS APUNTES? FACIL, POR 19,99€ FUERA PUBLICIDAD HASTA VERANO', actionMessage: 'LO NECESITO'},
        { id: 9, message: 'PROMOCION DE EXÁMENES. DESCARGA Y QUITA LA PUBLICIDAD HASTA VERANO POR 19,99€', actionMessage: 'VER OFERTA'},
        { id: 10, message: 'PIDELE 19,99€ A TU COMPI DE CLASE Y APROVECHA ESTA OFERTA PARA QUITAR LOS ANUNCIOS HASTA VERANO.', actionMessage:  'DALE'}
    ]

var wxp026Index = Math.floor(Math.random() * 10) + 1; 

showNavAlertMessage(wxp026Messages[wxp026Index].message, wxp026Messages[wxp026Index].actionMessage, {action: 'checkoutPro(1, \"&utm_source=wuolah&utm_medium=promo20&utm_campaign=alert-message-v' + wxp026Index + '\")'});

alert = document.querySelector('#wlh-nav-alert-message');
actionContent = document.querySelector('#wlh-nav-alert-message > div.nav-alert-message-action-content');

if (userMe.userId % 2) {
   alert.style.backgroundColor = '#FFFF99';
   alert.style.color = '#000';
   actionContent.style.backgroundColor = '#f1efef';
} else {
    alert.style.backgroundColor = '#ff6e00d9';
    actionContent.style.backgroundColor = '#FFFFFF';
    alert.style.color = '#000';
}


gtag('event', 'Show alert message', {
    'event_category': 'Analysis: WXP-026',
    'event_label': 'M'+wxp026Index+'-BG'+ userMe.userId % 2,
    'value': '1'
  });

  