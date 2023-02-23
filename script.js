// サイドメニュー
const allListElems = document.querySelectorAll(".list");
const allContentElems = document.querySelectorAll(".inner_frame");
const allInputElems = document.querySelectorAll("input[type='text'], input[type='number']");
const allTextareaElems = document.querySelectorAll("textarea");

document.onclick = function(){
  const id = event.target.id;
  if(id.match(/list/)){
    const listElem = document.getElementById(id);
    const markerElem = listElem.children[0];
    for(let i=0; i<allListElems.length; i++){
      allListElems[i].setAttribute("style", "background: #2b2b2b;")
      allListElems[i].children[0].textContent = "\u2022"
      allListElems[i].children[0].setAttribute("style", "color: #f3f3f3;");
    }
    markerElem.textContent = "\u2713";
    markerElem.setAttribute("style", "color: #f33;");
    listElem.setAttribute("style", "background: #555");

    // データ削除
    for(let i=0; i<allInputElems.length; i++){
      allInputElems[i].value = "";
    }
    for(let i=0; i<allTextareaElems.length; i++){
      allTextareaElems[i].value = "";
    }
    
    // コンテンツ変更
    const contentId = "content" + id.replace("list", "");
    for(let i=0; i<allContentElems.length; i++){
      allContentElems[i].setAttribute("style", "display: none;");
    }
    const contentElems = document.getElementById(contentId);
    contentElems.setAttribute("style", "display: block;");

    // 乱数生成サイズ変更
    const elemHeight = content7_1.clientHeight + 130;
    const winHeight = document.documentElement.clientHeight;
    if(winHeight < elemHeight){
      content7_1.setAttribute("style", "width: auto; height: calc(100% - 90px);");
    }
  
    const elemWidth = content7_1.clientWidth;
    const tableWidth = content7_2.clientWidth;
    if(tableWidth <= elemWidth){
      content7_1.setAttribute("style", "width: 100%; height: auto;");
    }
  }
}

// #1 文字数カウント
const content1_1 = document.getElementById("content1_1")
const content1_2_1 = document.getElementById("content1_2_1");
const content1_2_2 = document.getElementById("content1_2_2");

content1_1.oninput = function(){
  const word = this.value;
  const normalLength = word.length;
  const noSpaceLength = word.replace(/\n| |　/g, "").length;
  content1_2_1.textContent = normalLength;
  content1_2_2.textContent = noSpaceLength;
}



// #2 文字置換
const content2_1_1 = document.getElementById("content2_1_1");
const content2_1_2 = document.getElementById("content2_1_2");
const content2_3 = document.getElementById("content2_3");
const content2_4 = document.getElementById("content2_4");

content2_1_1.oninput = function(){
  content2_change();
}

content2_1_2.oninput = function(){
  content2_change();
}

content2_3.oninput = function(){
  content2_change();
}

content2_4.onfocus = function(){
  content2_4.select();
}

function content2_change(){
  content2_4.value = "";
  const changeTextBefore = content2_1_1.value;
  const changeTextAfter = content2_1_2.value;
  const defaultText = content2_3.value;
  const resultText = defaultText.replaceAll(changeTextBefore, changeTextAfter);
  content2_4.value = resultText;
}

// #3 改行・タブ・空白削除
const content3_1_1 = document.getElementById("content3_1_1");
const content3_1_2 = document.getElementById("content3_1_2");
const content3_1_3 = document.getElementById("content3_1_3");
const content3_1_4 = document.getElementById("content3_1_4");
const content3_2 = document.getElementById("content3_2");
const content3_3 = document.getElementById("content3_3");

content3_1_1.onchange = function(){
  content3_change();
}

content3_1_2.onchange = function(){
  content3_change();
}

content3_1_3.onchange = function(){
  content3_1_4.checked = false;
  content3_change();
}

content3_1_4.onchange = function(){
  content3_1_3.checked = false;
  content3_change();
}

content3_2.oninput = function(){
  content3_change();
}

function content3_change(){
  content3_3.value = content3_2.value;
  if(content3_1_1.checked){
    const defaultText = content3_3.value;
    const resultText = defaultText.replace(/\n/g, "");
    content3_3.value = resultText;    
  }
  if(content3_1_2.checked){
    const defaultText = content3_3.value;
    const resultText = defaultText.replace(/　/g, "");
    content3_3.value = resultText;    
  }
  if(content3_1_3.checked){
    const defaultText = content3_3.value;
    const resultText = defaultText.replace(/ /g, "");
    content3_3.value = resultText;    
  }
  if(content3_1_4.checked){
    const defaultText = content3_3.value;
    const resultText = defaultText.replace(/  {2,}/g, "");
    content3_3.value = resultText;    
  }
}



// #4 URLエンコード・デコード
const content4_1 = document.getElementById("content4_1");
const content4_2 = document.getElementById("content4_2");
const content4_3 = document.getElementById("content4_3");

content4_2.onclick = function(){
  const encodeText = content4_1.value;
  const decodeText = content4_3.value;
  if(encodeText){
    const resultText = encodeURIComponent(encodeText);
    content4_3.value = resultText;
  }else{
    const resultText = decodeURIComponent(decodeText);
    content4_1.value = resultText;
  }
}


// #4 URLエンコード・デコード
const content5_1 = document.getElementById("content5_1");
const content5_2 = document.getElementById("content5_2");
const content5_3 = document.getElementById("content5_3");

content5_2.onclick = function(){
  const encodeText = content5_1.value;
  const decodeText = content5_3.value;
  if(encodeText){
    const resultText = escape(encodeText);
    content5_3.value = resultText;
  }else{
    const resultText = unescape(decodeText);
    content5_1.value = resultText;
  }
}



// #6 ユーザースペニット変換
const content6_1 = document.getElementById("content6_1");
const content6_2 = document.getElementById("content6_2");
const content6_3 = document.getElementById("content6_3");

content6_2.onclick = function(){
  content6_3.value = "";
  const userInputText = content6_1.value;
  const splitText = userInputText.split("\n");
  for(let i=0; i<splitText.length; i++){
    const resultText = "\"" + splitText[i] + "\",\n";
    content6_3.value += resultText;
  }
}



// #7 乱数生成
const content7_1 = document.getElementById("content7_1");
const content7_2 = document.getElementById("content7_2");
const content7_2_1 = document.getElementById("content7_2_1");
const content7_2_2 = document.getElementById("content7_2_2");
const content7_3 = document.getElementById("content7_3");

content7_3.onclick = function(){
  content7_1.innerHTML = "";
  const minNum = Number(content7_2_1.value);
  const maxNum = Number(content7_2_2.value) + 1;
  if(minNum > maxNum){
    content7_2_1.value = maxNum;
    content7_2_2.value = minNum;
    content7_3.click();
    return false;
  }
  for(let i=0; i<10; i++){
    for(let i=0; i<10; i++){
      const num = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
      const span = document.createElement("span");
      span.textContent = num;
      content7_1.appendChild(span);
    }
    const br = document.createElement("br");
    content7_1.appendChild(br);
  }
}

window.onresize = function(){
  const elemHeight = content7_1.clientHeight + 130;
  const winHeight = document.documentElement.clientHeight;
  if(winHeight < elemHeight){
    content7_1.setAttribute("style", "width: auto; height: calc(100% - 90px);");
  }

  const elemWidth = content7_1.clientWidth;
  const tableWidth = content7_2.clientWidth;
  if(tableWidth <= elemWidth){
    content7_1.setAttribute("style", "width: 100%; height: auto;");
  }
}



// #8 総合検索
const content8_1 = document.getElementById("content8_1");
const content8_2 = document.getElementById("content8_2");
const content8_3 = document.getElementById("content8_3");
const content8_4 = document.getElementById("content8_4");
const content8_5 = document.getElementById("content8_5");
const content8_6 = document.getElementById("content8_6");
const content8_7 = document.getElementById("content8_7");
const content8_8 = document.getElementById("content8_8");
const content8_9 = document.getElementById("content8_9");
const content8_10 = document.getElementById("content8_10");

content8_2.onclick = function(){
  const text = content8_1.value;
  window.open("https://www.google.com/search?q=" + text);
}
content8_3.onclick = function(){
  const text = content8_1.value;
  window.open("https://search.yahoo.co.jp/search?p=" + text);
}
content8_4.onclick = function(){
  const text = content8_1.value;
  window.open("https://www.youtube.com/results?search_query=" + text);
}
content8_5.onclick = function(){
  const text = content8_1.value;
  window.open("https://www.pixiv.net/tags/" + text + " 1000users入り/artworks?s_mode=s_tag");
}
content8_6.onclick = function(){
  const text = content8_1.value;
  window.open("https://dic.pixiv.net/search?query=" + text);
}
content8_7.onclick = function(){
  const text = content8_1.value;
  window.open("https://www.nicovideo.jp/search/" + text);
}
content8_8.onclick = function(){
  const text = content8_1.value;
  window.open("https://dic.nicovideo.jp/s/al/t/" + text);
}
content8_9.onclick = function(){
  const text = content8_1.value;
  window.open("https://seiga.nicovideo.jp/search/" + text);
}
content8_10.onclick = function(){
  const text = content8_1.value;
  window.open("https://ja.wikipedia.org/w/index.php?search=" + text);
}