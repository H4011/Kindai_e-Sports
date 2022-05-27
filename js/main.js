var ua = window.navigator.userAgent.toLowerCase();

var url = new URL(window.location.href);
var params = url.searchParams;
console.log(params.get('lang'));

if (params.get('lang') == null) {
  url.searchParams.append('lang','default');
	location.href = url;
}

if (params.get('lang') == "en") {
  var list_text = [];
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://h4011.github.io/Kindai_e-Sports/lang/en.txt', true);
  xhr.onreadystatechange = function(){
    if((xhr.readyState == 4) && (xhr.status == 200)){
      console.log(xhr.responseText);
      list_text = xhr.responseText.split("\n");
      console.log(list_text);
      var trans_text = document.querySelectorAll("[data-translation_id]");
      var trans_list = [];
      for (var i = 0; i < trans_text.length; i++) {
        trans_list.push(trans_text[i].dataset.translation_id)
      }
      var trans_list = trans_list.filter(function (x, i, self) {
        return self.indexOf(x) === i;
      });
      console.log(trans_list);
      for(var e of trans_list) {
        for(var w of list_text) {
          if(w.indexOf(e + ':') === 0){
            var change_text = document.querySelectorAll("[data-translation_id=" + e +"]");
            console.log(change_text);
            for (var i = 0; i < change_text.length; i++) {
              change_text[i].textContent = w.replace(e + ':', '');
            }
          }
        }
      }
    }
  }
  xhr.send(null);
}

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
function titleimg() {
  var url2 = window.location.href;
  if ((location.protocol == 'https:' && location.pathname == '/Kindai_e-Sports/') || url2.match(".+/(.+?)([\?#;].*)?$")[1] == 'index.html') {
    var lt = document.getElementById('left-title').clientHeight;
    var rt = document.getElementById('right-title').clientHeight;
    var rtop = Number(getComputedStyle(document.documentElement).getPropertyValue('--right-top').replace('px',''));
    var rbottom = Number(getComputedStyle(document.documentElement).getPropertyValue('--right-bottom').replace('px',''));
    document.documentElement.style.setProperty('--right-top',String((lt - (rt - rtop - rbottom))/2) + 'px');
    document.documentElement.style.setProperty('--right-bottom',String((lt - (rt - rtop - rbottom))/2) + 'px');
    if (Number(getComputedStyle(document.documentElement).getPropertyValue('--right-top').replace('px','')) < 0) {
      setTimeout(() => {
        document.documentElement.style.setProperty('--right-top','0px');
        document.documentElement.style.setProperty('--right-bottom','0px');
        var lt = document.getElementById('left-title').clientHeight;
        var rt = document.getElementById('right-title').clientHeight;
        var rtop = Number(getComputedStyle(document.documentElement).getPropertyValue('--right-top').replace('px',''));
        var rbottom = Number(getComputedStyle(document.documentElement).getPropertyValue('--right-bottom').replace('px',''));
        document.documentElement.style.setProperty('--right-top',String((lt - (rt - rtop - rbottom))/2) + 'px');
        document.documentElement.style.setProperty('--right-bottom',String((lt - (rt - rtop - rbottom))/2) + 'px');
      }, 100);
    }
  }
}
console.log(document.body.clientWidth);
console.log(window.innerHeight);
console.log(getComputedStyle(document.documentElement).getPropertyValue('--main-color'));
titleimg();

function resizeWindow(){
  var nav_h = document.getElementById('nav-extended-height').clientHeight;
  var foo_h = document.getElementById('page-footer-height').clientHeight;
  document.documentElement.style.setProperty('--body-size',String(window.innerHeight - nav_h -foo_h) + 'px');
  document.documentElement.style.setProperty('--back-size',String(window.innerHeight) + 'px');
  document.documentElement.style.setProperty('--back-size2',String(window.innerWidth) + 'px');
  document.documentElement.style.setProperty('--not-page',String(window.innerHeight - nav_h -foo_h) + 'px');
  console.log(String(window.innerHeight) + 'px');
  titleimg();
}

window.onresize = resizeWindow;
setTimeout(() => {
  titleimg();
}, 100);

setInterval(() => {
  titleimg();
}, 500);

$(window).scroll(function (){
  $(".js-markerScrollAnimation").each(function(){
    var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
    var scroll = $(window).scrollTop(); //スクロールの位置を取得
    var windowHeight = $(window).height(); //ウインドウの高さを取得
    if (scroll > position - windowHeight){ //スクロール位置が要素の位置を過ぎたとき
      $(this).addClass('is-active'); //クラス「active」を与える
    }
  });
});
