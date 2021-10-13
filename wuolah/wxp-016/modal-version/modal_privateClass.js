(function() {
  var strVar="";
  strVar += "<div class=\"container\">";
  strVar += "  <div class=\"panel panel-primary\">";
  strVar += "    <div class=\"panel-heading\" style=\"border-color: rgb(0, 85, 255) !important; background: rgb(0, 85, 255) !important;\">Reservar clases particulares online a través de WUOLAH.<\/div>";
  strVar += "      <div class=\"panel-body\">";
  strVar += "         <div class=\"row\">";
  strVar += "            <div class=\"col-md-6\">";
  strVar += "               <div class=\"form-group\">";
  strVar += "                  <label class=\"control-label\">Asignatura<\/label>";
  strVar += "                  <input type=\"text\" class=\"form-control\" name=\"fname\" id=\"fname\">";
  strVar += "               <\/div>";
  strVar += "            <\/div>";
  strVar += "            <div class='col-md-6'>";
  strVar += "                <div class=\"form-group\">";
  strVar += "                   <label class=\"control-label\">Selecciona Fecha y hora<\/label>";
  strVar += "                   <div class='input-group date' id='datetimepicker1'>";
  strVar += "                      <input type='text' class=\"form-control\" \/>";
  strVar += "                      <span class=\"input-group-addon\">";
  strVar += "                      <span class=\"glyphicon glyphicon-calendar\"><\/span>";
  strVar += "                      <\/span>";
  strVar += "                   <\/div>";
  strVar += "                <\/div>";
  strVar += "             <\/div>";
  strVar += "         <\/div>";
  strVar += "         <div class=\"row\">";
  strVar += "            <div class=\"col-md-6\">";
  strVar += "               <div class=\"form-group\">";
  strVar += "                  <label class=\"control-label\"><strong>Precio: 10€ \/ hora<\/strong><\/label>";
  strVar += "               <\/div>";
  strVar += "            <\/div>";
  strVar += "        <\/div>";
  strVar += "        <input id=\"privateClassBtn\" type=\"submit\" style=\"border-color: rgb(0, 85, 255) !important; background: rgb(0, 85, 255) !important;\" onclick=\"classEvent()\" class=\"btn btn-primary\" value=\"Solicitar\">";
  strVar += "      <\/div>";
  strVar += "   <\/div>";
  strVar += "<\/div>";


  var head = document.getElementsByTagName('HEAD')[0];  
  var link = document.createElement('link'); 

  // Include styles.css
  link.rel = 'stylesheet';  
  link.type = 'text/css'; 
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/css/bootstrap-datetimepicker.min.css';  
  head.appendChild(link);  

  link.href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
  head.appendChild(link);  

  //Include scripts 
  var script = document.createElement('script')
  script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" 
  head.appendChild(script);  

  script.src = "https://cdn.jsdelivr.net/momentjs/2.14.1/moment.min.js"
  head.appendChild(script);  

  script.src = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"
  head.appendChild(script);  

  script.src = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/js/bootstrap-datetimepicker.min.js"
  head.appendChild(script);  



  var modalOptions = {
    title: 'Solicitar clases particulares a través de WUOLAH',
    subtitle: 'Da y recibe un feedback sobre la clase.',
    headerColor: '#05f;',
    bodyHTML: strVar,
    extraClass: 'onBoardingPopup',
    footer: false
  };

  var head = document.getElementsByTagName('HEAD')[0];  
  var link = document.createElement('link'); 

  link.rel = 'stylesheet';  
  link.type = 'text/css'; 
  link.href = 'https://wuolah-public.s3-eu-west-1.amazonaws.com/GTM/onBoarding/onBoardingPopup.css';  
  head.appendChild(link);  
  
  link.href = 'https://wuolah-public.s3-eu-west-1.amazonaws.com/GTM/onBoarding/onBoardingPopup.css';  
  head.appendChild(link);  



  standardPopup(modalOptions);
})();

