(function changeModal() {
  /**
   * Functions to include styles: 
   * 
   * URLresources to .css
   * 
   * insertCustomCSS(URLresource)  -> Load CSS styles on head
   * insertCustomComponentCSS(component, URLresource)  -> Load CSS styles on specific component
   * 
   * Component example:
   * element = document.querySelector('purchase-item-component')
   */

  // CSS'S URL RESOURCES
  productModalResource = 'https://wuolah-public.s3-eu-west-1.amazonaws.com/GTM/wxp-028_resources/wxp-028.css'
  purchaseItemResource = 'https://wuolah-public.s3-eu-west-1.amazonaws.com/GTM/wxp-028_resources/wxp-028-purchaseItem.css'
  addCreditCardItemResource = 'https://wuolah-public.s3-eu-west-1.amazonaws.com/GTM/wxp-028_resources/wxp-028-addCardItem.css'

  // SELECTOR FOR COMPONENTS
  purchaseItem = document.querySelector('#product-checkout-modal > purchase-product-item')

  // INSERT STYLES
  insertCustomCSS(productModalResource)
  insertCustomComponentCSS(purchaseItem, purchaseItemResource)

  
  // INIT WXP-028
  expressCheckout = true;
  loading()
  setTimeout(()=> {
    if (purchaseItem != null && purchaseItem.shadowRoot != null) {
      // Modify title by HappyMonth
      var product = purchaseItem.shadowRoot.querySelector('div > h2').textContent;
      var happyMonth = product.search('Happy')
      var title = product.split('(')[0]
      
      if (happyMonth != -1) {
        title = product.split('(')[0]
        subtitle = '1 mes sin publi'
      } else {
        title = product
      }
      
      //CUSTOM HTML TO WXP-028
      var productMiddle="";
      productMiddle += "	<div class=\"asset\">";
      productMiddle += "	  <img src=\"https:\/\/wuolah-web.s3-eu-west-1.amazonaws.com\/assets\/img\/quizz\/wuolah-coin.svg\">";
      productMiddle += "	<\/div>";
      productMiddle += "";
      productMiddle += "	<div class=\"productTitle\" style=\"display:flex; flex-flow: column; justify-content: center; align-items: center; width: max-content; margin-left: 16px\">";
      productMiddle += "		<h4 style=\"margin: 0px\">"+title+"<\/h4>";
      if ( happyMonth != -1) {
        productMiddle += "		<h4 style=\"margin: 0px\">+1 Mes sin publi<\/h4>";
      }
      productMiddle += "	<\/div>";


      //modify productMiddle HTML
      productMiddleElement = purchaseItem.shadowRoot.querySelector('div > div.product-middle')
      productMiddleElement.innerHTML = productMiddle;
      
      //save price
      priceHTML = purchaseItem.shadowRoot.querySelector('div > p > strong').textContent
  
      //Modify pay button
      btn = purchaseItem.shadowRoot.querySelector('.blue')
      btn.innerHTML = 'Pagar '+ priceHTML


      //Modify h6 title
      actionPaymentsMethodsElement = purchaseItem.shadowRoot.querySelector('div > h6');
  
      if (actionPaymentsMethodsElement != null) {
          //Modify text
          paymentsSpan = purchaseItem.shadowRoot.querySelector('div > h6 > span')
          if (paymentsSpan != null) {
            paymentsSpan.innerHTML = "Método de pago"
          }
          
          //Modify text button
          paymentsBtn = purchaseItem.shadowRoot.querySelector('div > h6 > button')
          if (paymentsBtn != null) {
            paymentsBtn.innerHTML = "Cambiar"
            paymentsBtn.addEventListener("click", changePayment);
            
          }
      }
      
      cardContainer = purchaseItem.shadowRoot.querySelector('div > div.cards-container');
      if (cardContainer != null) {
        radioItems = cardContainer.getElementsByClassName('radio-item');

        /**Show only a credit card */

        if (radioItems != null && radioItems.length > 0) {
          for (let i = 0; i < radioItems.length; i++) {
            let string = radioItems[i].querySelector('label').textContent.split('-')[0].toUpperCase() + radioItems[i].querySelector('label').textContent.split('-')[2]
            radioItems[i].querySelector('label').textContent = string;

            if( i > 0) {
              radioItems[i].style.display = "none"
            }
          }
        }
      }
      // Check add-credit-card-item
      addCreditCardItem = purchaseItem.shadowRoot.querySelector('div > add-credit-card-item');

      if (addCreditCardItem != null) {
        addCreditCardItem.style.display = "none"
        //Modify add-credit-card-item
        changeCreditCardItem()
      } 
      loading('close')
  }

  function changePayment() {
      loading()
      setTimeout(()=> {
        addCreditCardItem = purchaseItem.shadowRoot.querySelector('div > add-credit-card-item').shadowRoot;
  
        if (addCreditCardItem != null) {
          cardContainer.style.display = "none"
          changeCreditCardItem();
          paymentsBtn = purchaseItem.shadowRoot.querySelector('div > h6 > button')
          paymentsBtn.addEventListener("click", selectCard);
        } 
      }, 500)
      loading('close')
  }

  function selectCard() {
    cardContainer.style.display = "block";
    addCreditCardItem.style.display = "none"
    paymentsBtn = purchaseItem.shadowRoot.querySelector('div > h6 > button')
    paymentsBtn.innerHTML = "Cambiar"
    paymentsBtn.addEventListener("click", changePayment);
  }

  function changeCreditCardItem() {
    loading()
    addCreditCardItem = purchaseItem.shadowRoot.querySelector('div > add-credit-card-item')
    addCreditCardItem.style.display = "none"

    if (addCreditCardItem != null) {
      insertCustomComponentCSS(addCreditCardItem, addCreditCardItemResource)
      addCreditCardItem.shadowRoot.querySelector('h4').innerText = "Introduce los datos de tu tarjeta";
      addCreditCardItem.style.display = "block"
    }
  }
}, 1000)  
})()
