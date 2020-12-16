const playBut = document.getElementById("play");
playBut .addEventListener("click", playButton);
localStorage.setItem("work", "[]");
localStorage.setItem("messages", "[]");
let interval = setInterval(function () {}, 1000);


function drawball(ctx, x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2, true);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
}

function drawball1(ctx, x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2, true);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function start() {
    writeMessage("start clicked ");
    let start = document.getElementById("start");
    start.onclick = moveFunc();
}


function playButton() {
    let cont = document.getElementById('bigBlock');
    let work = document.createElement("div");
     let arr = JSON.parse(localStorage.getItem("work"));
    arr.push("work appear at " + new Date().toLocaleTimeString());
    localStorage.setItem("work", JSON.stringify(arr));
    work.id = "work";
    let clo = document.createElement("button");
    clo.innerText = "Close";
    clo.id = "close";
    clo.onclick = close;
    let sta = document.createElement("button");
    sta.innerText = "Start";
    sta.id = "start";
    sta.onclick = start;
    let anim = document.createElement("div");
    anim.id = "anim";
    let rightdown = document.createElement("div");
    rightdown.id = "rightDown";
    let message = document.createElement("div");
    message.id = "message";
    message.innerText = "message";
    let canvas = document.createElement("canvas");
    canvas.id = "canvas";
    work.appendChild(canvas);
    work.appendChild(message);
    work.appendChild(clo);
    work.appendChild(sta);
    work.appendChild(rightdown);
    work.appendChild(anim);
    cont.appendChild(work);

    let ctx = canvas.getContext("2d");

    canvas.width = work.offsetWidth;
    canvas.height = work.offsetHeight;
    canvas.style.setProperty('left', 0 + 'px');
    canvas.style.setProperty('top', 0 + 'px');

    drawball(ctx, work.offsetWidth / 2, work.offsetHeight / 2 + 20);
    drawball1(ctx, work.offsetWidth / 2 - 40, work.offsetHeight / 2 + 20);
}


function moveFunc() {
    clearInterval(interval);
    interval = setInterval(moveCircles, 100);
    let distance = 8;
    let work = document.getElementById('work');
    let x = work.offsetWidth / 2;
    let y = work.offsetHeight / 2 + 20;

    let x1 = work.offsetWidth / 2 + 10;
    let y1 = work.offsetHeight / 2 + 50;
    function moveCircles() {
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let ctx1 = canvas.getContext("2d");
        ctx1.clearRect(0, 0, canvas.width, canvas.height);

        

        if (Math.abs(x - x1) <= 9|| Math.abs(y - y1) <= 9 || x >= work.offsetWidth - 10 || y >= work.offsetHeight - 20) {
        
            clearInterval(interval);
            drawball(ctx, x, y);
            drawball1(ctx1, x + 40, y);
            let work = document.getElementById("work");
            let sta = document.getElementById("start");
            let reload = document.createElement("button");
            reload.id = "reload";
            reload.innerText = "Reload";
            reload.addEventListener("click", reloadCircle);
            work.replaceChild(reload, sta);
        } else {
            if (distance % 4 === 0) {
                x = x - distance;
                
                drawball(ctx, x, y);
                writeMessage("circle is on right top square ");
            } else if (distance % 4 === 1) {
                y = y + distance;
                drawball(ctx, x, y);
                writeMessage("circle is on left top square ");
            } else if (distance % 4 === 2) {
                x = x + distance;
                drawball(ctx, x, y);
                writeMessage("circle is on left bottom square ");
            } else if (distance % 4 === 3) {
                y = y + distance;
                drawball(ctx, x, y);
                writeMessage("circle is on right bottom square ");
            }
            
            if (distance % 4 === 0) {
                x1 = x1 - distance;
                drawball1(ctx1, x1, y1);
                writeMessage("circle1 is on right top square ");
            } else if (distance % 4 === 1) {
                y1 = y1 + distance;
                drawball1(ctx1, x1, y1);
                writeMessage("circle1 is on left top square ");
            } else if (distance % 4 === 2) {
                x1 = x1 + distance;
                drawball1(ctx1, x1, y1);
                writeMessage("circle1 is on left bottom square ");
            } else if (distance % 4 === 3) {
                y1 = y1 - distance;
                drawball1(ctx1, x1, y1);
                writeMessage("circle1 is on right bottom square ");
            }
            distance++;
        }
    }
}


function reloadCircle() {
    writeMessage("reload clicked ");
    let work = document.getElementById('work');
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawball(ctx, work.offsetWidth / 2, work.offsetHeight / 2 + 20);
    drawball1(ctx, work.offsetWidth / 2 - 40, work.offsetHeight / 2 + 20);
    let sta = document.createElement("button");
    sta.innerText = "Start";
    sta.id = "start";
    sta.addEventListener("click", start);
    let reload = document.getElementById("reload");
    work.replaceChild(sta, reload);
}


function close() {
    writeMessage("close clicked ");
    clearInterval(interval);
    let cont = document.getElementById('bigBlock');
    let work = document.getElementById('work');
    let canvas = document.getElementById("canvas");
    work.removeChild(canvas);
    cont.removeChild(work);
    let arr = JSON.parse(localStorage.getItem("work"));
    arr.push("work disappear at " + new Date().toLocaleTimeString());
    localStorage.setItem("work", JSON.stringify(arr));
    getLocal();
}

function getLocal() {
    let res = document.getElementById("leftBlock");
    let str = localStorage.getItem("work") + localStorage.getItem("messages");
    res.innerText = str;
}

function writeMessage(string) {
    let div = document.getElementById("message");
    let textBefore = div.innerText;
    let text = textBefore + "<br \\/>" + string;
    div.innerText = text;
    let arr = JSON.parse(localStorage.getItem("messages"));
    arr.push(string + "at " + new Date().toLocaleTimeString());
    localStorage.setItem("messages", JSON.stringify(arr));
}