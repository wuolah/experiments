

var html = '<a href="/shop/pro" id="WXP012-pro" class="nav-anchor" style="pointer-events: initial; user-select: initial;">¿No quieres anuncios?</a>';
html +=    '<button id="WXP012-btn" onclick="goShop()" class="wlh-btn wlh-btn-color wlh-btn-premium btn-nav-upload" style="pointer-events: initial; user-select: initial;">';
html +=         '<div class="wlh-btn-icon" style="pointer-events: initial; user-select: initial;">';
html +=             '<img src="https://wuolah-web.s3-eu-west-1.amazonaws.com/assets/icon/pro.gif" style="pointer-events: initial; user-select: initial;">';
html +=         '</div>';
html +=         '<div class="wlh-btn-text" style="pointer-events: initial; user-select: initial;">¡Hazte PRO!</div>';
html +=     '</button>';



element = document.querySelector('body > nav > div.nav-anchor-container');
element.innerHTML = element.innerHTML + html;

var a = document.getElementById("WXP012-pro");
a.style.fontSize = "15px"
a.style.marginLeft = "auto";


image = document.querySelector("#WXP012-btn > div.wlh-btn-icon > img");
image.style.height = "18px"
image.style.margin = "6px 0"

text = document.querySelector("#WXP012-btn > div.wlh-btn-text");
text.style.fontWeight = "600";

function goShop() {
    setCookie("WXP012", "1", 7);
    window.open("https://www.wuolah.com/shop/pro", '_self')
}