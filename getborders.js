
function rend() {
    [].forEach.call(document.querySelectorAll("*"), function (a) { a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16) });
}

function init() {
    let bBtn = document.createElement("div");
    bBtn.innerHTML = 'Show blocks';
    document.body.appendChild(bBtn);
    // console.log("Created", bBtn)
    bBtn.style.backgroundColor = "rgba(210, 210, 210, .6)";
    bBtn.style.border = "2px solid blue";
    // bBtn.style.width = "150px";
    bBtn.style.textAlign = "center";
    bBtn.style.textShadow = "1px 1px 0px rgba(240, 240, 240, 0.6)";
   

    bBtn.style.padding = "4px 12px";
    bBtn.style.fontSize = "16px";
    bBtn.style.position = "fixed";
    bBtn.style.top = "256px";
    bBtn.style.left = "16px";
    bBtn.style.cursor = "pointer";
    bBtn.style.borderRadius = "6px";
    bBtn.className = "rendBtn";
    bBtn.style.zIndex = "1000";
    bBtn.onclick = rend;
}

document.addEventListener('DOMContentLoaded', init);

//window.addEventListener(`resize`, event => {
setInterval(() => {
    console.log("width - ", window.screen.width);
    let bBtn = document.querySelector(".rendBtn");
    bBtn.innerHTML = `Show blocks </br> ${window.innerWidth}`;
}
    , 600);
