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

