var selectores = "#btn-upload-nav"
element = document.querySelector(selectores);

if (element && element.classList.contains("wlh-btn-color")) {
    element.classList.remove("wlh-btn-color");
  }

var selector = '#btn-upload-nav > div.wlh-btn-icon > img'
imgElement = document.querySelector(selector);
if (imgElement != null) {
  imgElement.src="https://wuolah-web.s3-eu-west-1.amazonaws.com/wuolah-public/static/media/res/images/new-icon-upload-111.png"
}

