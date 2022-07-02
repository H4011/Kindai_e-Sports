var ua = window.navigator.userAgent.toLowerCase();

// ,["",""]
var url_list;
if (location.protocol == 'https:') {
  url_list = [["contact_button","contact.html"],["home_button","./"],["form_button","https://forms.gle/xwrbFKLGt4ny6k4N8"],["paper_button","paper.html"]];
} else if(location.protocol == 'file:'){
  url_list = [["contact_button","contact.html"],["home_button","index.html"],["form_button","https://forms.gle/xwrbFKLGt4ny6k4N8"],["paper_button","paper.html"]];
}
for (var i of url_list) {
  var contact = document.querySelectorAll("a[data-translation_id='" + i[0] + "']");
  if(contact.length != 0) {
    for (const j of contact) {
      j.href=i[1];
    }
  }
}

console.log(localStorage.getItem('lang'));
var lang2 = (window.navigator.userLanguage || window.navigator.language || window.navigator.browserLanguage).substr(0,2) == "ja" ? "ja" : "en";
if (localStorage.getItem('lang') == null) {
  if(lang2 == "en") {
    localStorage.setItem('lang','en');
  } else if(lang2 == "ja") {
    localStorage.setItem('lang','default');
  } else {
    localStorage.setItem('lang','default'); 
  }
  localStorage.setItem('lang_set','auto');
} else {
  localStorage.setItem('lang','default'); 
}

if (localStorage.getItem('lang') == "default" && localStorage.getItem('lang_set') != "manual") {
  if(lang2 == "en") {
    localStorage.setItem('lang','en');
  }
}

if (localStorage.getItem('lang') == "en" && localStorage.getItem('lang_set') != "manual") {
  if(lang2 == "ja") {
    localStorage.setItem('lang','default');
  }
}

if (localStorage.getItem('lang') == "en") {
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
  if(document.referrer.indexOf("h4011.github.io") !== -1){
    if(localStorage.getItem('device') == null){
      const result = confirm("デバイスを判別できませんでした。\nPC版のサイトを表示しますか？");
      device = "Smartphone";
      if(result == true) device = "PC";
    } else {
      device = localStorage.getItem('device');
    }
  } else {
    const result = confirm("デバイスを判別できませんでした。\nPC版のサイトを表示しますか？");
    device = "Smartphone";
    if(result == true) device = "PC";
    localStorage.setItem('device',device);
  }
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
var url2 = window.location.href;
function titleimg() {
  try{
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
    if(device == "iPhone" || device == "Android" || device == "iPad" || device == "Smartphone") {
      paper.style.width = String(window.innerWidth*0.6) + 'px';
      paper.style.height = 'auto';
    } else {
      paper.style.height = String(window.innerHeight*0.8) + 'px';
      paper.style.width = 'auto';
    }
  }
  } catch (error) {;}
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
  try {
  var nav_h = document.getElementById('nav-extended-height').clientHeight;
  var foo_h = document.getElementById('page-footer-height').clientHeight;
  } catch (error) {;}
  if(device == "iPhone" || device == "iPad" || device == "Android" || device == "Smartphone") {
    try {
    document.documentElement.style.setProperty('--body-size',String(window.innerHeight - nav_h -foo_h) + 'px');
    document.documentElement.style.setProperty('--not-page',String(window.innerHeight - nav_h -foo_h) + 'px');
    } catch (error) {;}
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
    //titleimg();
  } else if(device == "Windows" || device == "Mac" || device == "PC") {
    try {
    document.documentElement.style.setProperty('--body-size',String(window.innerHeight - nav_h -foo_h) + 'px');
    document.documentElement.style.setProperty('--not-page',String(window.innerHeight - nav_h -foo_h) + 'px');
    } catch (error) {;}
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
    //titleimg();
  }
}

window.onresize = resizeWindow;
setTimeout(() => {
  titleimg();
}, 100);

setInterval(() => {
  titleimg();
}, 500);
var dt = new Date(new Date().toLocaleString({ timeZone: 'Asia/Tokyo' }));
var dt0 = new Date(dt.getFullYear()+"/"+(dt.getMonth()+1)+"/"+dt.getDate());
if ((location.protocol == 'https:' && location.pathname == '/Kindai_e-Sports/') || url2.match(".+/(.+?)([\?#;].*)?$")[1] == 'index.html') {
  var dt1 = new Date('2022/07/06');
  var dt2 = new Date('2022/08/05');
  var diffTime = dt1.getTime() - dt0.getTime();
  var diffDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  var diffTime2 = dt2.getTime() - dt0.getTime();
  var diffDay2 = Math.ceil(diffTime2 / (1000 * 60 * 60 * 24));
  console.log(diffDay);
  if(dt0 < dt1){
    if(diffDay <= 3 && diffDay != 1){
      document.querySelector("div.obi").classList.remove("not-display");
      document.querySelector("div.obi p b").textContent = "申込開始まで後"+diffDay+"日！";
    } else if(diffDay == 1){
      document.querySelector("div.obi").classList.remove("not-display");
      document.querySelector("div.obi p b").textContent = "明日、申込開始です！";
    }
  } else if(diffDay == 0) {
    document.querySelector("div.obi").classList.remove("not-display");
    document.querySelector("div.obi p b").textContent = "申込の受付を開始しました！";
  } else if(diffDay < 0 && diffDay2 > 0) {
    document.querySelector("div.obi").classList.remove("not-display");
    document.querySelector("div.obi p b").textContent = "申込受付中です。受付終了まで"+diffDay2+"日";
  } else if(diffDay2 == 0) {
    document.querySelector("div.obi").classList.remove("not-display");
    document.querySelector("div.obi p b").textContent = "本日受付最終日です！";
  } else if(diffDay2 < 0) {
    document.querySelector("p.day").textContent = "申込期間：受付は終了しました";
  }
}
var dt0 = new Date(new Date().toLocaleString({ timeZone: 'Asia/Tokyo' }));
var dt4 = new Date('2022/07/03 15:00:00');
var diffTime0 = dt4.getTime() - dt0.getTime();
var ii = 0;
function PageOpen(){
  var dt3 = new Date(new Date().toLocaleString({ timeZone: 'Asia/Tokyo' }));
  var diffTime3 = dt4.getTime() - dt3.getTime();
  var diffDay3 = Math.floor(diffTime3 / (1000 * 60 * 60 * 24));
  var diffh = Math.floor(diffTime3 / (1000 * 60 * 60)) - (diffDay3 * 24);
  var diffm = Math.floor(diffTime3 / (1000 * 60)) - (diffDay3 * 24 * 60) - (diffh * 60);
  var diffs = Math.floor(diffTime3 / 1000) - (diffDay3 * 24 * 60 * 60) - (diffh * 60 * 60) - (diffm * 60);
  console.log(diffDay3+"日"+diffh+"時間"+diffm+"分"+diffs+"秒");
  if(diffTime3 >= 0 && ii == 0){
    try{
    document.querySelector("div.main").remove();
  } catch (error) {
    if (location.protocol == 'https:') {
      window.location.href = "https://h4011.github.io/Kindai_e-Sports/"
    } else if(location.protocol == 'file:'){
      window.location.href = window.location.href.replace("paper","index").replace("contact","index")
    }
  }
    ii = 1
  }
  if(ii == 1 && diffTime3 >= 0){
    document.querySelector("p.count3").textContent = "残り"+diffDay3+"日"+('0'+diffh).slice(-2)+"時間"+('0'+diffm).slice(-2)+"分"+('0'+diffs).slice(-2)+"秒"
  }
  if(ii == 1 && diffTime3 < 0){
    location.reload();
  }
}
PageOpen();
if(ii == 0) {
  document.querySelector("div.main").classList.remove("not-display")
} else {
  document.querySelector("div.count").classList.remove("not-display")
}
setInterval(() => {
  if(ii == 1){
    PageOpen();
  }
}, 1000);

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

$(function() {
  // ボタンをクリックしたら発動
  $('a.btn.waves-effect.waves-light.contact').click(function() {
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var ssb_num = document.getElementById("ssb_num").value;
    var ssb_name = document.getElementById("ssb_name").value;
    var elements = document.getElementsByName('group1');
    var len = elements.length;
    var checkValue = '';
    for (let i = 0; i < len; i++){
        if (elements.item(i).checked){
            checkValue = document.querySelectorAll("span#group1")[i].textContent;
        }
    }
    var content = document.getElementById("textarea1").value;
    if(first_name == "") {
      alert("姓を入力して下さい。");
      return;
    }
    if(last_name == "") {
      alert("名を入力して下さい。");
      return;
    }
    if(ssb_num == "" || ssb_num.length != 10) {
      alert("学籍番号を入力して下さい。");
      return;
    }
    if(checkValue == '') {
      alert("問い合わせ項目を選択して下さい。");
      return;
    }
    if(content.replaceAll(" ","").replaceAll("　","").replaceAll("\n","") == "") {
      alert("お問い合わせ内容を入力して下さい。");
      return;
    }
    var all = "氏名："+first_name+" "+last_name+"\n学籍番号："+ssb_num+"\n選手名："+ssb_name+"\n\n問い合わせ項目："+checkValue+"\n\n◇お問い合わせ内容\n"+content+"\n\n※このまま送信して下さい";
    console.log(all);
    location.href = "mailto:ssb.kindai@gmail.com?subject="+encodeURI("お問い合わせ")+"&body="+encodeURI(all);
  });
});