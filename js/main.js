var ua = window.navigator.userAgent.toLowerCase();

if(ua.indexOf("windows nt") !== -1) {
  console.log("「Microsoft Windows」をお使いですね!");
} else if(ua.indexOf("android") !== -1) {
  console.log("「Android」をお使いですね!");
} else if(ua.indexOf("iphone") !== -1 || ua.indexOf("ipad") !== -1) {
  console.log("「iOS」をお使いですね!");
} else if(ua.indexOf("mac os x") !== -1) {
  console.log("「macOS」をお使いですね!");
} else {
  console.log("何をお使いなのですか?");
}
console.log(document.body.clientWidth);
console.log(window.innerHeight);
console.log(getComputedStyle(document.documentElement).getPropertyValue('--main-color'));

function resizeWindow(){
  var nav_h = document.getElementById('nav-extended-height').clientHeight;
  var foo_h = document.getElementById('page-footer-height').clientHeight;
  document.documentElement.style.setProperty('--body-size',String(window.innerHeight - nav_h -foo_h) + 'px');
  document.documentElement.style.setProperty('--back-size',String(window.innerHeight) + 'px');
  document.documentElement.style.setProperty('--back-size2',String(window.innerWidth) + 'px');
  console.log(String(window.innerHeight) + 'px');
}

window.onresize = resizeWindow;
