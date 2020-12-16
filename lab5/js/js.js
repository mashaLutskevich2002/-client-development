"use strict";

const playBut = document.getElementById("play");
playBut.addEventListener("click", playButton);
localStorage.setItem("work", "[]");
localStorage.setItem("messages", "[]");

//отрисовка поля с анимацией
function playButton() {
  let cont = document.getElementById('bigBlock');
  let work = document.createElement("div");
  let arr = JSON.parse(localStorage.getItem("work"));
  arr.push("work appear at " + new Date().toLocaleTimeString());
  localStorage.setItem("work", JSON.stringify(arr));
  work.id = "work";
  let clo = document.createElement("button");
  clo.innerText = "Close";
  clo.style.backgroundColor = '#FF00FF';
  clo.style.color = 'white';
  clo.id = "close";
  clo.addEventListener("click", close);
  let sta = document.createElement("button");
  sta.style.color = 'white';
  sta.style.backgroundColor = 'red';
  sta.innerText = "Start";
  sta.id = "start";
  sta.onclick = start;
  let anim = document.createElement("div");
  anim.id = "anim";
  let rightdown = document.createElement("div");
  rightdown.id = "rightDown";
  let ci1 = document.createElement("div");
  ci1.id = "circle";
  let ci = document.createElement("div");
  ci.id = "circle1";
  let message = document.createElement("div");
  message.id = "message";
  message.innerText = "message";
  anim.appendChild(ci);
  anim.appendChild(ci1);
  work.appendChild(message);
  work.appendChild(clo);
  work.appendChild(sta);
  work.appendChild(rightdown);
  work.appendChild(anim);
  cont.appendChild(work); 

  let he = work.offsetHeight - 50;//размер поля anim
  let wi = work.offsetWidth - 10;
  anim.style.height = he + "px";
  anim.style.width = wi + "px"; 

  let che = he / 2 - 10;//размер первого круга
  let cwi = wi / 2 + 50;
  ci.style.marginTop = che + "px";
  ci.style.marginLeft = cwi + "px";
  ci.style.marginBottom = che + "px";
  ci.style.marginRight = cwi + "px"; 

  let che1 = he - 730;
  let cwi1 = wi - 450;//размер второго круга
  ci1.style.marginTop = che1 + "px";
  ci1.style.marginLeft = cwi1 + "px";
  ci1.style.marginBottom = che1 + "px";
  ci1.style.marginRight = cwi1 + "px";
}

//движение кругов
function moveFunc() {
    let interval = setInterval(moveCircles, 50);
    let circle1 = document.getElementById("circle1");
    let circle = document.getElementById("circle");
    let distance = 10;
  
    function moveCircles() {
      let to = parseInt(circle1.style.marginTop.replace(/px/g, ""));
     
      let le = parseInt(circle1.style.marginLeft.replace(/px/g, ""));
      let ri = parseInt(circle1.style.marginRight.replace(/px/g, ""));
      let bo = parseInt(circle1.style.marginBottom.replace(/px/g, ""));
      let to1 = parseInt(circle.style.marginTop.replace(/px/g, ""));
      let le1 = parseInt(circle.style.marginLeft.replace(/px/g, ""));
      let ri1 = parseInt(circle.style.marginRight.replace(/px/g, ""));
      let bo1 = parseInt(circle.style.marginBottom.replace(/px/g, ""));
      
    
      if ((circle1.style.marginLeft <= circle.style.marginRight || circle1.style.marginBottom <= circle.style.marginTop) || (to <= 0) || (le <= 0) || (ri <= 0) || (bo <= 0)) {
        clearInterval(interval);
        let work = document.getElementById("work");
        let sta = document.getElementById("start");
        let reload = document.createElement("button");
        reload.id = "reload";
        reload.innerText = "Reload";
        reload.addEventListener("click", reloadcircle1);
        work.replaceChild(reload, sta);
      } else {
        if (distance % 4 === 0) {
          circle1.style.marginLeft = le - distance + "px";
          circle1.style.marginRight = ri + distance + "px";
          myMessage("circle1 is on right top square ");
        } else if (distance % 4 === 1) {
          circle1.style.marginTop = to + distance + "px";
          circle1.style.marginBottom = bo - distance + "px";
          myMessage("circle1 is on left top square ");
        } else if (distance % 4 === 2) {
          circle1.style.marginLeft = le + distance + "px";
          circle1.style.marginRight = ri - distance + "px";
          myMessage("circle1 is on left bottom square ");
        } else if (distance % 4 === 3) {
          circle1.style.marginTop = to - distance + "px";
          circle1.style.marginBottom = bo + distance + "px";
          myMessage("circle1 is on right bottom square ");
        }
  
        if (distance % 4 === 0) {
          circle.style.marginLeft = le1 - distance + "px";
          circle.style.marginRight = ri1 + distance + "px";
          myMessage("circle is on right top square ");
        } else if (distance % 4 === 1) {
          circle.style.marginTop = to1 + distance + "px";
          circle.style.marginBottom = bo1 - distance + "px";
          myMessage("circle is on left top square ");
        } else if (distance % 4 === 2) {
          circle.style.marginLeft = le1 + distance + "px";
          circle.style.marginRight = ri1 - distance + "px";
          myMessage("circle is on left bottom square ");
        } else if (distance % 4 === 3) {
          circle.style.marginTop = to1 - distance + "px";
          circle.style.marginBottom = bo1 + distance + "px";
          myMessage("circle is on right bottom square ");
        }
  
        distance++;
      }
    }
  }


//перерисовка 
function reloadcircle1() {
    myMessage("reload clicked ");
    let ci = document.getElementById("circle1");
    let ci1 = document.getElementById("circle");
    let wo = document.getElementById('work');
    let he = wo.offsetHeight - 50;
    let wi = wo.offsetWidth - 10;
    let che = he / 2 - 10;
    let cwi = wi / 2 - 10;
    ci.style.marginTop = che + "px";
    ci.style.marginLeft = cwi + "px";
    ci.style.marginBottom = che + "px";
    ci.style.marginRight = cwi + "px";
    let che1 = he - 730;
    let cwi1 = wi - 550;
    ci1.style.marginTop = che1 + "px";
    ci1.style.marginLeft = cwi1 + "px";
    ci1.style.marginBottom = che1 + "px";
    ci1.style.marginRight = cwi1 + "px";
    let sta = document.createElement("button");
    sta.innerText = "Start";
    sta.id = "start";
    sta.addEventListener("click", start);
    let reload = document.getElementById("reload");
    wo.replaceChild(sta, reload);
  }




//нажатие на кнопку старт
function start() {
    myMessage("start clicked ");
    let start = document.getElementById("start");
    start.onclick = moveFunc()
  }

//закрытие поля
function close() {
  myMessage("close clicked ");
  let cont = document.getElementById('bigBlock');
  let arr = JSON.parse(localStorage.getItem("work"));
  arr.push("work disappear at " + new Date().toLocaleTimeString());
  localStorage.setItem("work", JSON.stringify(arr));
  cont.innerHTML = null;
  getLocalSt();
}


//получения данных в 1 блоке
function getLocalSt() {
  let res = document.getElementById("leftBlock");
  let str = localStorage.getItem("work") + localStorage.getItem("messages");
  res.innerText = str;
}


function myMessage(string) {
  let div = document.getElementById("message");
  let textBefore = div.innerText;
  let text = textBefore + "<br \\/>" + string;
  div.innerText = text;
  let arr = JSON.parse(localStorage.getItem("messages"));
  arr.push(string + "at " + new Date().toLocaleTimeString());
  localStorage.setItem("messages", JSON.stringify(arr));
}