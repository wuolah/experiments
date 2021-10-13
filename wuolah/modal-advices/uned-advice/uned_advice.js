
(function() {
    var bodyHtml = '';
    bodyHtml += '<h4>Actualización</h4>';
    bodyHtml += '<img src="https://wuolah-public.s3-eu-west-1.amazonaws.com/GTM/onBoarding/uned.png" class="image" />';
    bodyHtml += '<div class="text">Desde hoy la UNED estará distribuida por centros, así será más cómodo acceder a cada tipo de estudio. Con este cambio evitaremos que haya demasiados comentarios generalistas para toda la UNED, y encontraréis los que os puedan interesar para cada estudio y asignatura.';
    bodyHtml +=  'Pronto habilitaremos un foro donde podréis publicar todas vuestras preguntas, consultas y noticias sobre toda la UNED.';
    bodyHtml +=  '¡Muchas gracias por seguir confiando en nosotros!</div>';
    bodyHtml += '<button onclick="$(\'#popupModal\').modal(\'close\')" class="wlh-btn wlh-btn-color btn-sign-up" id="onBoarding-uned-button" style="opacity: 1; border-color: #024437; background-color: #024437;"><div class="wlh-btn-text" style="opacity: 1;">¡Entendido!</div></button>';
  

  var modalOptions = {
    title: 'Estudiantes de UNED',
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
  setCookie("UnedAdviceCenter", "1", 1);
})();
