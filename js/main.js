var ua = window.navigator.userAgent.toLowerCase();

// ,["",""]
var url_list = [["contact_button","contact.html"],["home_button","index.html"],["form_button","https://forms.gle/xwrbFKLGt4ny6k4N8"],["paper_button","paper.html"]];
for (var i of url_list) {
  var contact = document.querySelectorAll("a[data-translation_id='" + i[0] + "']");
  if(contact.length != 0) {
    for (const j of contact) {
      j.href=i[1];
      //i.href="mailto:ssb.kindai@gmail.com?subject=お問い合わせ";
    }
  }
}

var url = new URL(window.location.href);
var params = url.searchParams;
console.log(params.get('lang'));
var lang2 = (window.navigator.userLanguage || window.navigator.language || window.navigator.browserLanguage).substr(0,2) == "ja" ? "ja" : "en";
if (params.get('lang') == null) {
  if(lang2 == "en") {
    url.searchParams.append('lang','en');
  } else if(lang2 == "ja") {
    url.searchParams.append('lang','default');
  } else {
    url.searchParams.append('lang','default'); 
  }
  url.searchParams.append('lang_set','auto');
	location.href = url;
}

if (params.get('lang') == "default" && params.get('lang_set') != "manual") {
  if(lang2 == "en") {
    url.searchParams.set('lang','en');
    location.href = url;
  }
}

if (params.get('lang') == "en" && params.get('lang_set') != "manual") {
  if(lang2 == "ja") {
    url.searchParams.set('lang','default');
    location.href = url;
  }
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

var info_id = document.querySelectorAll("div.collapsible-header");
var info_count = 0;
for (const j of info_id) {
  j.id = "icon" + info_count;
  info_count++;
}
var device;
if(ua.indexOf("windows nt") !== -1) {
  device = "Windows";
} else if(ua.indexOf("android") !== -1) {
  device = "Android";
} else if(ua.indexOf("iphone") !== -1) {
  device = "iPhone";
} else if(ua.indexOf("ipad") !== -1) {
  device = "iPad";
} else if(ua.indexOf("mac os x") !== -1) {
  device = "Mac";
} else {
  device = undefined;
}
console.log(device);
var paper = document.getElementById('paper');
try {
  if(device == "iPhone" || device == "Android" || device == "iPad") {
    paper.style.width = String(window.innerWidth*0.6) + 'px';
    paper.style.height = 'auto';
  } else {
    paper.style.height = String(window.innerHeight*0.8) + 'px';
    paper.style.width = 'auto';
  }
  paper.setAttribute("src","./img/SSBflyer.png");
} catch (error) {
  ;
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
  } else if((location.protocol == 'https:' && location.pathname == '/Kindai_e-Sports/paper.html') || url2.match(".+/(.+?)([\?#;].*)?$")[1] == 'paper.html'){
    if(device == "iPhone" || device == "Android" || device == "iPad") {
      paper.style.width = String(window.innerWidth*0.6) + 'px';
      paper.style.height = 'auto';
    } else {
      paper.style.height = String(window.innerHeight*0.8) + 'px';
      paper.style.width = 'auto';
    }
  }
}
console.log(document.body.clientWidth);
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(getComputedStyle(document.documentElement).getPropertyValue('--main-color'));
titleimg();

var size3 = 0;
/*
function resizeWindow(){
  var nav_h = document.getElementById('nav-extended-height').clientHeight;
  var foo_h = document.getElementById('page-footer-height').clientHeight;
  if(size3 < window.innerHeight && (device == "iPhone" || device == "iPad" || device == "Android")) {
    document.getElementById('home-anim').style.setProperty("width",'auto')
    document.documentElement.style.setProperty('--body-size',String(window.innerHeight - nav_h -foo_h) + 'px');
    document.documentElement.style.setProperty('--back-size',String(window.innerHeight) + 'px');
    document.documentElement.style.setProperty('--back-size2',String(window.innerWidth) + 'px');
    document.documentElement.style.setProperty('--not-page',String(window.innerHeight - nav_h -foo_h) + 'px');
    console.log(String(window.innerHeight) + 'px');
    size3 = window.innerHeight;
    if(document.getElementById('home-anim').clientWidth < window.innerWidth) {
      document.documentElement.style.setProperty('--back-size','auto');
      document.getElementById('home-anim').style.setProperty("width",String(window.innerWidth) + 'px')
    }
    titleimg();
  } else if(device == "Windows" || device == "Mac") {
    document.getElementById('home-anim').style.setProperty("width",'auto')
    document.documentElement.style.setProperty('--body-size',String(window.innerHeight - nav_h -foo_h) + 'px');
    document.documentElement.style.setProperty('--back-size',String(window.innerHeight) + 'px');
    document.documentElement.style.setProperty('--back-size2',String(window.innerWidth) + 'px');
    document.documentElement.style.setProperty('--not-page',String(window.innerHeight - nav_h -foo_h) + 'px');
    console.log(String(window.innerHeight) + 'px');
    if(document.getElementById('home-anim').clientWidth < window.innerWidth) {
      document.documentElement.style.setProperty('--back-size','auto');
      document.getElementById('home-anim').style.setProperty("width",String(window.innerWidth) + 'px')
    }
    titleimg();
  }
}
*/
function resizeWindow(){
  var nav_h = document.getElementById('nav-extended-height').clientHeight;
  var foo_h = document.getElementById('page-footer-height').clientHeight;
  if(device == "iPhone" || device == "iPad" || device == "Android") {
    document.documentElement.style.setProperty('--body-size',String(window.innerHeight - nav_h -foo_h) + 'px');
    document.documentElement.style.setProperty('--not-page',String(window.innerHeight - nav_h -foo_h) + 'px');
    if(window.innerHeight >= window.innerWidth) {
      if(Number(getComputedStyle(document.documentElement).getPropertyValue('--back-size').replace('px','').replace('auto','0')) <= window.innerHeight) {
        document.documentElement.style.setProperty('--back-size',String(window.innerHeight) + 'px');
        document.documentElement.style.setProperty('--back-size2','auto');
      }
      console.log("Height")
    } else if(window.innerHeight < window.innerWidth) {
      if(Number(getComputedStyle(document.documentElement).getPropertyValue('--back-size2').replace('px','').replace('auto','0')) <= window.innerWidth) {
        console.log(Number(getComputedStyle(document.documentElement).getPropertyValue('--back-size2').replace('px','').replace('auto','0')));
        document.documentElement.style.setProperty('--back-size2',String(window.innerWidth) + 'px');
        document.documentElement.style.setProperty('--back-size','auto');
        if(document.getElementById('home-anim').clientHeight < window.innerHeight) {
          document.documentElement.style.setProperty('--back-size',String(window.innerHeight) + 'px');
          document.documentElement.style.setProperty('--back-size2','auto');
          console.log("Width --> Height")
        } else {
          console.log("Width")
        }
      } else {
        console.log("Cancel Width")
      }
    }
    titleimg();
  } else if(device == "Windows" || device == "Mac") {
    document.documentElement.style.setProperty('--body-size',String(window.innerHeight - nav_h -foo_h) + 'px');
    document.documentElement.style.setProperty('--not-page',String(window.innerHeight - nav_h -foo_h) + 'px');
    if(window.innerHeight >= window.innerWidth) {
        document.documentElement.style.setProperty('--back-size',String(window.innerHeight) + 'px');
        document.documentElement.style.setProperty('--back-size2','auto');
      console.log("Height")
    }
    if(window.innerHeight < window.innerWidth) {
        document.documentElement.style.setProperty('--back-size2',String(window.innerWidth) + 'px');
        document.documentElement.style.setProperty('--back-size','auto');
        if(document.getElementById('home-anim').clientHeight < window.innerHeight) {
          document.documentElement.style.setProperty('--back-size',String(window.innerHeight) + 'px');
          document.documentElement.style.setProperty('--back-size2','auto');
          console.log("Width --> Height")
        } else {
          console.log("Width")
        }
    }
    titleimg();
  }
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

resizeWindow();


