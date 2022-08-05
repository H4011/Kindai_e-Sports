//@macaron_miku_ 

if(window.location.href == "https://h4011.github.io/Kindai_e-Sports/index.html"){
  window.location.href = "https://h4011.github.io/Kindai_e-Sports/"
}
var bot = false;
function reCAPTCHA(){
  var contact_b = document.querySelectorAll("a.btn.waves-effect.waves-light.contact.disabled");
  if(contact_b.length != 0) {
    for (const j of contact_b) {
      j.classList.remove("disabled")
    }
  }
  bot = true;
}
function NotreCAPTCHA(){
  var contact_b2 = document.querySelectorAll("a.btn.waves-effect.waves-light.contact");
  if(contact_b2.length != 0) {
    for (const j of contact_b2) {
      j.classList.add("disabled")
    }
  }
  bot = false;
}
// ,["",""]
var url_list;
if (location.protocol == 'https:') {
  url_list = [["contact_button","/Kindai_e-Sports/contact.html"],["home_button","/Kindai_e-Sports/"],["form_button","https://forms.gle/xwrbFKLGt4ny6k4N8"],["paper_button","/Kindai_e-Sports/paper.html"]];
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
var url2 = window.location.href;
var dt0 = new Date(new Date().toLocaleString({ timeZone: 'Asia/Tokyo' }));
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
  if(localStorage.getItem('lang_set') != "manual"){
    localStorage.setItem('lang','default'); 
  }
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
if ((location.protocol == 'https:' && location.pathname == '/Kindai_e-Sports/') || url2.match(".+/(.+?)([\?#;].*)?$")[1] == 'index.html') {
  $.getJSON("https://h4011.github.io/Kindai_e-Sports/info.json", function(json){
    let data_info = json;
    Object.keys(data_info.contents_list).forEach(function(i){
      if((new Date(data_info.contents_list[i].date) <= dt0 && data_info.contents_list[i].display != false) || localStorage.getItem('test') == "true"){
        var newElement = document.createElement("div");
        newElement.setAttribute("class","QA z-depth-3");
        var Element_info = document.createElement("div");
        Element_info.setAttribute("class","info");
        var Element_info2 = document.createElement("div");
        Element_info2.setAttribute("class","info2");
        var Element_row = document.createElement("div"); //
        Element_row.setAttribute("class","row");
        var title_div = document.createElement("div"); //
        title_div.setAttribute("class","col s7 left-align info_div");
        var date_div = document.createElement("div"); //
        date_div.setAttribute("class","col s5 right-align info_div");
        var title_p = document.createElement("p"); //
        title_p.appendChild(document.createTextNode(data_info.contents_list[i].title));
        var date_p = document.createElement("p"); //
        date_p.appendChild(document.createTextNode(data_info.contents_list[i].date.split(" ")[0]));
        var Element_ul = document.createElement("ul"); //
        Element_ul.setAttribute("class","collapsible");
        var li_info = document.createElement("li"); //
        li_info.setAttribute("class","info");
        var div_header = document.createElement("div"); //
        div_header.setAttribute("class","collapsible-header not-select");
        div_header.setAttribute("onclick","$('#'+this.id).toggleClass('active');");
        var icon1 = document.createElement("i"); //
        icon1.setAttribute("class","material-icons icon1");
        icon1.appendChild(document.createTextNode("expand_more"));
        var icon2 = document.createElement("i"); //
        icon2.setAttribute("class","material-icons icon2");
        icon2.appendChild(document.createTextNode("expand_less"));
        var div_body = document.createElement("div"); //
        div_body.setAttribute("class","collapsible-body");
        var contents_p = document.createElement("p"); //
        //contents_p.appendChild(document.createTextNode(data_info.contents_list[i].contents)); //
        contents_p.innerHTML = data_info.contents_list[i].contents.replace(/\n/g, '<br>');
        if(data_info.contents_list[i].URL.value){
          var url_count = data_info.contents_list[i].URL.Link.length;
          var div_url = document.createElement("div");//
          div_url.setAttribute("class","url");
          ///data_info.contents_list[i].URL.Link.forEach(function(j){
            for (var index = 0; index < url_count; index++) {
              var url_a = document.createElement("a");//
              url_a.appendChild(document.createTextNode(data_info.contents_list[i].URL.URL_title[index]));
              url_a.setAttribute("href",data_info.contents_list[i].URL.Link[index]);
              if(data_info.contents_list[i].URL.Link_target[index]){
                url_a.setAttribute("target","_blank");
              }
              div_url.appendChild(url_a);
            }
          //});
          div_body.appendChild(div_url);
        }
        div_body.insertBefore(contents_p, div_body.firstChild);
        div_header.appendChild(icon1);
        div_header.appendChild(icon2);
        li_info.appendChild(div_header);
        li_info.appendChild(div_body);
        Element_ul.appendChild(li_info);
        title_div.appendChild(title_p);
        date_div.appendChild(date_p);
        Element_row.appendChild(title_div);
        Element_row.appendChild(date_div);
        Element_info.appendChild(Element_row);
        Element_info.appendChild(Element_ul);
        newElement.appendChild(Element_info);
        newElement.appendChild(Element_info2);
        var parentDiv = document.getElementById("test3");
        var child = document.getElementById("info_p");
        parentDiv.insertBefore(newElement, child.nextSibling);
      }
    });
    infoid();
  });
}
function infoid(){
  var info_id = document.querySelectorAll("div.collapsible-header");
  var info_count = 0;
  for (const j of info_id) {
    j.id = "icon" + info_count;
    info_count++;
  }
  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
}
var ua = window.navigator.userAgent.toLowerCase();
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
    paper.style.width = String(document.documentElement.clientWidth*0.6) + 'px';
    paper.style.height = 'auto';
  } else {
    paper.style.height = String(document.documentElement.clientHeight*0.8) + 'px';
    paper.style.width = 'auto';
  }
  paper.setAttribute("src","./img/SSB_flyer.png");
} catch (error) {
  ;
}

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
      paper.style.width = String(document.documentElement.clientWidth*0.6) + 'px';
      paper.style.height = 'auto';
    } else {
      paper.style.height = String(document.documentElement.clientHeight*0.8) + 'px';
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

function resizeWindow(){
  try {
  var nav_h = document.getElementById('nav-extended-height').clientHeight;
  var foo_h = document.getElementById('page-footer-height').clientHeight;
  } catch (error) {;}
  if(device == "iPhone" || device == "iPad" || device == "Android" || device == "Smartphone") {
    try {
    document.documentElement.style.setProperty('--body-size',String(document.documentElement.clientHeight - nav_h -foo_h) + 'px');
    document.documentElement.style.setProperty('--not-page',String(document.documentElement.clientHeight - nav_h -foo_h) + 'px');
    } catch (error) {;}
    if(document.documentElement.clientHeight >= document.documentElement.clientWidth) {
      if(Number(getComputedStyle(document.documentElement).getPropertyValue('--back-size').replace('px','').replace('auto','0')) <= document.documentElement.clientHeight && document.documentElement.clientHeight >= window.innerHeight) {
        document.documentElement.style.setProperty('--back-size',String(document.documentElement.clientHeight) + 'px');
        document.documentElement.style.setProperty('--back-size2','auto');
      } else if(Number(getComputedStyle(document.documentElement).getPropertyValue('--back-size').replace('px','').replace('auto','0')) <= window.innerHeight){
        document.documentElement.style.setProperty('--back-size',String(window.innerHeight) + 'px');
        document.documentElement.style.setProperty('--back-size2','auto');
      }
      console.log("Height");
    } else if(document.documentElement.clientHeight < document.documentElement.clientWidth) {
      if(Number(getComputedStyle(document.documentElement).getPropertyValue('--back-size2').replace('px','').replace('auto','0')) <= document.documentElement.clientWidth) {
        console.log(Number(getComputedStyle(document.documentElement).getPropertyValue('--back-size2').replace('px','').replace('auto','0')));
        document.documentElement.style.setProperty('--back-size2',String(document.documentElement.clientWidth) + 'px');
        document.documentElement.style.setProperty('--back-size','auto');
        if(document.getElementById('home-anim').clientHeight < document.documentElement.clientHeight) {
          document.documentElement.style.setProperty('--back-size',String(document.documentElement.clientHeight) + 'px');
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
    document.documentElement.style.setProperty('--body-size',String(document.documentElement.clientHeight - nav_h -foo_h) + 'px');
    document.documentElement.style.setProperty('--not-page',String(document.documentElement.clientHeight - nav_h -foo_h) + 'px');
    } catch (error) {;}
    if(document.documentElement.clientHeight >= document.documentElement.clientWidth) {
        document.documentElement.style.setProperty('--back-size',String(document.documentElement.clientHeight) + 'px');
        document.documentElement.style.setProperty('--back-size2','auto');
      console.log("Height")
    }
    if(document.documentElement.clientHeight < document.documentElement.clientWidth) {
        document.documentElement.style.setProperty('--back-size2',String(document.documentElement.clientWidth) + 'px');
        document.documentElement.style.setProperty('--back-size','auto');
        if(document.getElementById('home-anim').clientHeight < document.documentElement.clientHeight) {
          document.documentElement.style.setProperty('--back-size',String(document.documentElement.clientHeight) + 'px');
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

//var dt0 = new Date(dt.getFullYear()+"/"+(dt.getMonth()+1)+"/"+dt.getDate());
var iii = 0;
function obi(){
  var dt = new Date(new Date().toLocaleString({ timeZone: 'Asia/Tokyo' }));
  var dt1 = new Date('2022/07/06 00:00:00');
  var dt2 = new Date('2022/08/06 00:00:00');
  var diffTime = dt1.getTime() - dt.getTime();
  var diffDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  var diffDay1 = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  var diffh1 = Math.floor(diffTime / (1000 * 60 * 60)) - (diffDay1 * 24);
  var diffm1 = Math.floor(diffTime / (1000 * 60)) - (diffDay1 * 24 * 60) - (diffh1 * 60);
  var diffs1 = Math.floor(diffTime / 1000) - (diffDay1 * 24 * 60 * 60) - (diffh1 * 60 * 60) - (diffm1 * 60);
  var diffTime2 = dt2.getTime() - dt.getTime();
  var diffDay2 = Math.ceil(diffTime2 / (1000 * 60 * 60 * 24));
  var diffDay12 = Math.floor(diffTime2 / (1000 * 60 * 60 * 24));
  var diffh12 = Math.floor(diffTime2 / (1000 * 60 * 60)) - (diffDay12 * 24);
  var diffm12 = Math.floor(diffTime2 / (1000 * 60)) - (diffDay12 * 24 * 60) - (diffh12 * 60);
  var diffs12 = Math.floor(diffTime2 / 1000) - (diffDay12 * 24 * 60 * 60) - (diffh12 * 60 * 60) - (diffm12 * 60);
  if ((location.protocol == 'https:' && location.pathname == '/Kindai_e-Sports/') || url2.match(".+/(.+?)([\?#;].*)?$")[1] == 'index.html') {
    if(dt < dt1){
      if(diffDay <= 3 && diffDay != 1){
        if(iii == 0) {
          iii = 1;
        }
        if(localStorage.getItem('lang') == "en"){
          document.querySelector("div.obi p b").textContent = diffDay1+" day and "+('0'+diffh1).slice(-2)+" hours "+('0'+diffm1).slice(-2)+" minutes "+('0'+diffs1).slice(-2)+" seconds until application starts";
        } else {
          document.querySelector("div.obi p b").textContent = "申込開始まで後"+diffDay1+"日"+('0'+diffh1).slice(-2)+"時間"+('0'+diffm1).slice(-2)+"分"+('0'+diffs1).slice(-2)+"秒";
        }
      } else if(diffDay1 == 0){
        if(iii == 0) {
          iii = 1;
        }
        if(diffm1 <= 10 && diffh1 == 0){
          document.querySelector("div.obi p b").textContent = "まもなく申込開始です！申込開始まで後"+('0'+diffm1).slice(-2)+"分"+('0'+diffs1).slice(-2)+"秒";
        } else {
          if(localStorage.getItem('lang') == "en"){
            document.querySelector("div.obi p b").textContent = ('0'+diffh1).slice(-2)+" hours "+('0'+diffm1).slice(-2)+" minutes "+('0'+diffs1).slice(-2)+" seconds until application starts";
          } else {
            document.querySelector("div.obi p b").textContent = "申込開始まで後"+('0'+diffh1).slice(-2)+"時間"+('0'+diffm1).slice(-2)+"分"+('0'+diffs1).slice(-2)+"秒";
          }
        }
      }
    } else if(diffDay == 0) {
      if(iii == 0) {
        iii = 1;
      }
      document.querySelector("div.obi p b").textContent = "申込の受付を開始しました！";
    } else if(diffDay < 0 && diffDay12 > 0) {
      if(iii == 0) {
        iii = 1;
      }
      document.querySelector("div.obi p b").textContent = "申込受付中です。受付終了まで"+diffDay12+"日"+('0'+diffh12).slice(-2)+"時間"+('0'+diffm12).slice(-2)+"分"+('0'+diffs12).slice(-2)+"秒";
    } else if(diffDay12 == 0) {
      if(iii == 0) {
        iii = 1;
      }
      document.querySelector("div.obi p b").textContent = "本日受付最終日です！終了まで"+('0'+diffh12).slice(-2)+"時間"+('0'+diffm12).slice(-2)+"分"+('0'+diffs12).slice(-2)+"秒";
    } else if(diffTime2 < 0) {
      iii = 3;
      document.querySelector("p.day").textContent = "申込期間：受付は終了しました";
      var contact2 = document.querySelectorAll("a[data-translation_id='form_button']");
      if(contact2.length != 0) {
        for (const j of contact2) {
          j.href="Tournament.html";
          j.setAttribute("data-translation_id","tournament_button");
          j.textContent = "トーナメント表"
          j.target="";
        }
      }
      document.querySelector("a.form_a").textContent = "受付終了";
    }
    if(iii == 1){
      document.querySelector("div.obi").classList.remove("not-display");
      iii = 2;
    }
    if(iii == 3){
      document.querySelector("div.obi").classList.add("not-display");
      iii = 4;
    }
  } else {
    if(diffTime2 < 0){
      var contact2 = document.querySelectorAll("a[data-translation_id='form_button']");
      if(contact2.length != 0) {
        for (const j of contact2) {
          j.href="Tournament.html";
          j.setAttribute("data-translation_id","tournament_button");
          j.textContent = "トーナメント表"
          j.target="";
        }
      }
    }
  }
}
obi();

var dt4 = new Date('2022/07/03 12:00:00');
var diffTime0 = dt4.getTime() - dt0.getTime();
var ii = 0;
function PageOpen(){
  var dt3 = new Date(new Date().toLocaleString({ timeZone: 'Asia/Tokyo' }));
  var diffTime3 = dt4.getTime() - dt3.getTime();
  var diffDay3 = Math.floor(diffTime3 / (1000 * 60 * 60 * 24));
  var diffh = Math.floor(diffTime3 / (1000 * 60 * 60)) - (diffDay3 * 24);
  var diffm = Math.floor(diffTime3 / (1000 * 60)) - (diffDay3 * 24 * 60) - (diffh * 60);
  var diffs = Math.floor(diffTime3 / 1000) - (diffDay3 * 24 * 60 * 60) - (diffh * 60 * 60) - (diffm * 60);
  //console.log(diffDay3+"日"+diffh+"時間"+diffm+"分"+diffs+"秒");
  if(diffTime3 >= 0 && ii == 0){
    try{
    document.querySelector("div.main").remove();
  } catch (error) {
    if (location.protocol == 'https:') {
      window.location.href = "https://h4011.github.io/Kindai_e-Sports/"
    } else if(location.protocol == 'file:'){
      window.location.href = window.location.href.replace("paper","index").replace("contact","index").replace("404","index");
    }
  }
    ii = 1
  }
  if(ii == 1 && diffTime3 >= 0){
    document.querySelector("p.count3").textContent = "残り"+diffDay3+"日"+('0'+diffh).slice(-2)+"時間"+('0'+diffm).slice(-2)+"分"+('0'+diffs).slice(-2)+"秒";
  }
  if(ii == 1 && diffTime3 < 0){
    location.reload();
  }
}
PageOpen();
if(ii == 0) {
  try{
  document.querySelector("div.main").classList.remove("not-display");
  } catch (error) {;}
} else {
  try{
  document.querySelector("div.count").classList.remove("not-display");
  } catch (error) {;}
}
setInterval(() => {
  if(ii == 1){
    PageOpen();
  } else if(iii != 4) {
    obi();
  }
}, 500);

$(window).scroll(function (){
  $(".js-markerScrollAnimation").each(function(){
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight){
      $(this).addClass('is-active');
    }
  });
});

resizeWindow();

$(function() {
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
    if(content.replaceAll(" ","").replaceAll("　","").replaceAll("\n","") == "") {
      alert("お問い合わせ内容を入力して下さい。");
      return;
    }
    if(bot != true) {
      alert("reCAPTCHA認証をして下さい。");
      return;
    }
    var all = "氏名："+first_name+" "+last_name+"\n学籍番号："+ssb_num+"\n選手名："+ssb_name+"\n\n問い合わせ項目："+checkValue+"\n\n◇お問い合わせ内容\n"+content+"\n\n※このまま送信して下さい";
    console.log(all);
    location.href = "mailto:ssb.kindai@gmail.com?subject="+encodeURI("お問い合わせ")+"&body="+encodeURI(all);
  });
});
var text_value = "";
var text_value2 = 0;
$(function() {
  $('a#page1').click(function() {
    if (text_value2 == 0) {
      text_value += "1";
    }
    page5();
  });
});
$(function() {
  $('a#page2').click(function() {
    if (text_value2 == 0) {
      text_value += "2";
    }
    page5();
  });
});
$(function() {
  $('a#page3').click(function() {
    if (text_value2 == 0) {
      text_value += "3";
    }
    page5();
  });
});
$(function() {
  $('a#page4').click(function() {
    if (text_value2 == 0) {
      text_value += "4";
    }
    page5();
  });
});
function page5(){
  if(text_value == "4231423"){
    document.querySelector("li.page-5").classList.remove("not-display");
  } else if(text_value.length == 8){
    document.querySelector("li.page-5").classList.add("not-display");
    text_value2 = 1;
  }
}