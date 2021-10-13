
expressCheckout = true;
setTimeout(()=> {
  purchaseItem = document.querySelector('#product-checkout-modal > purchase-product-item');
  var product = purchaseItem.shadowRoot.querySelector('div > h2').textContent;
  var happyMonth = product.search('Happy')
  if (happyMonth != -1) {
    title = product.split('(')[0]
    subtitle = '1 mes sin publi'
  } else {
    title = product
  }

  //productMiddle
  var productMiddle="";
  productMiddle += "	<div class=\"asset\">";
  productMiddle += "	  <img src=\"https:\/\/wuolah-web.s3-eu-west-1.amazonaws.com\/assets\/img\/quizz\/wuolah-coin.svg\">";
  productMiddle += "	<\/div>";
  productMiddle += "";
  productMiddle += "	<div style=\"display:flex; flex-flow: column; justify-content: center; align-items: center; width: max-content; margin-left: 16px\">";
  productMiddle += "		<h4 style=\"margin: 0px\">"+title+"<\/h4>";
  if ( happyMonth != -1) {
    productMiddle += "		<h4 style=\"margin: 0px\">+1 Mes sin publi<\/h4>";
  }
  productMiddle += "	<\/div>";
  
  
  document.querySelector('#product-checkout-modal').style.width = "339px"; 
  document.querySelector('#product-checkout-modal').style.height = "auto"; 
  
  //Quitar boton de cerrar modal
  document.querySelector('#product-checkout-modal > button').style.display = "none"
  
  //Obtener purchaseItem encapsulado  
  if (purchaseItem != null && purchaseItem.shadowRoot != null) {
      purchaseItem.style.display = "flex";
      purchaseItem.style.flexFlow = "column";
      purchaseItem.style.justifyContent = "space-between";
      purchaseItem.style.width = "100%" 
      purchaseItem.style.height = "100%" 
  
  
      //Quitar border y margin del container
      container = purchaseItem.shadowRoot.querySelector('div')
      container.style.border = "none"
      container.style.margin = "0";
      container.style.padding = "0"
  
      //Eliminar título h1 y h2
      purchaseItem.shadowRoot.querySelector('h1').style.display = "none"
      purchaseItem.shadowRoot.querySelector('div > h2').style.display = "none"
      
      //modificar productMiddle
      productMiddleElement = purchaseItem.shadowRoot.querySelector('div > div.product-middle')
      productMiddleElement.innerHTML = productMiddle;
      productMiddleElement.style.margin = "0px 16px";
      productMiddleElement.style.justifyContent = "flex-start";
      productMiddleElement.style.margin = "0";
      
      //Guardar precio
      priceHTML = purchaseItem.shadowRoot.querySelector('div > p > strong').textContent
  
      //Modificar boton de pagar
      btn = purchaseItem.shadowRoot.querySelector('.blue')
      btn.innerHTML = 'Pagar '+ priceHTML
      btn.style.height = "44px"
      btn.style.borderRadius = "0px"
      btn.style.marginTop = "20px"
      
      //Eliminar p 
      purchaseItem.shadowRoot.querySelector('div > p').style.display = "none"
      
      actionPaymentsMethodsElement = purchaseItem.shadowRoot.querySelector('div > h6');
  
      if (actionPaymentsMethodsElement != null) {
          actionPaymentsMethodsElement.style.color = "#999999";
          //Modificar texto h6 
          paymentsSpan = purchaseItem.shadowRoot.querySelector('div > h6 > span')
          if (paymentsSpan != null) {
            paymentsSpan.innerHTML = "Método de pago"
            paymentsSpan.style.fontWeight = "500"
            paymentsSpan.style.color = "#999999"
          }
          
          //Modificar estilo del boton 
          paymentsBtn = purchaseItem.shadowRoot.querySelector('div > h6 > button')
          if (paymentsBtn != null) {
            paymentsBtn.innerHTML = "Cambiar"
            paymentsBtn.style.border = "none"
            paymentsBtn.style.fontWeight = "500"
            paymentsBtn.style.color = "#999999"
            paymentsBtn.addEventListener("click", changePayment);
          }
      }
      
      cardContainer = purchaseItem.shadowRoot.querySelector('div > div.cards-container');
      if (cardContainer != null) {
        cardContainer.style.marginBottom = "1rem"

        radioItems = cardContainer.getElementsByClassName('radio-item');

        if (radioItems != null && radioItems.length > 0) {
          
          for (let i = 0; i < radioItems.length; i++) {
            let string = radioItems[i].querySelector('label').textContent.split('-')[0].toUpperCase() + radioItems[i].querySelector('label').textContent.split('-')[2]
            radioItems[i].querySelector('label').textContent = string;
            radioItems[i].querySelector('label').style.fontWeight = "600";
            radioItems[i].querySelector('input').style.display = "none";

            if( i > 0) {
              radioItems[i].style.display = "none"
            }
          }
        }
      }

      addCreditCardItem = purchaseItem.shadowRoot.querySelector('div > add-credit-card-item');

      if (addCreditCardItem != null) {
        changeCreditCardItem()
      } 
  }

  function changePayment() {
    setTimeout(()=> {
      addCreditCardItem = purchaseItem.shadowRoot.querySelector('div > add-credit-card-item').shadowRoot;

      if (addCreditCardItem != null) {
        cardContainer.style.display = "none"
        changeCreditCardItem();

        paymentsBtn = purchaseItem.shadowRoot.querySelector('div > h6 > button')
        paymentsBtn.style.border = "none"
        paymentsBtn.style.fontWeight = "500"
        paymentsBtn.style.color = "#999999"
        paymentsBtn.addEventListener("click", selectCard);
      } 
    }, 500)
  }

  function selectCard() {
    cardContainer.style.display = "block";
    addCreditCardItem.style.display = "none"
    paymentsBtn = purchaseItem.shadowRoot.querySelector('div > h6 > button')
    paymentsBtn.innerHTML = "Cambiar"
    paymentsBtn.style.border = "none"
    paymentsBtn.style.fontWeight = "500"
    paymentsBtn.style.color = "#999999"
    paymentsBtn.addEventListener("click", changePayment);
  }

  function changeCreditCardItem() {
      addCreditCardItem = purchaseItem.shadowRoot.querySelector('div > add-credit-card-item')

      if(addCreditCardItem != null) {
        addCreditCardItem.shadowRoot.querySelector('h4').innerText = "Introduce los datos de tu tarjeta"
        addCreditCardItem.shadowRoot.querySelector('h4').style.position = "absolute";
        addCreditCardItem.shadowRoot.querySelector('h4').style.left = "1rem";
        addCreditCardItem.shadowRoot.querySelector('h4').style.fontSize = "12px";
        addCreditCardItem.shadowRoot.querySelector('h4').style.fontWeight = "normal";
        addCreditCardItem.shadowRoot.querySelector('h4').style.marginTop = "-40px";
        addCreditCardItem.shadowRoot.querySelector('h4').style.color = "#999999";

        addCreditCardItem.shadowRoot.querySelector('div > div').style.display = "none";
        addCreditCardItem.shadowRoot.querySelector('div').style.color = "rgb(246, 247, 251)"
        addCreditCardItem.shadowRoot.querySelector('div').style.backgroundColor = "white"
        addCreditCardItem.shadowRoot.querySelector('div').style.border = "1px solid"
        addCreditCardItem.shadowRoot.querySelector('div').style.padding = "1rem 1rem 0 1rem";
        addCreditCardItem.shadowRoot.querySelector('div').style.marginTop = "30px";
      }
  }
}, 1000)  