
function rend() {
    [].forEach.call(document.querySelectorAll("*"), function (a) { a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16) });
}

function init() {
    let bBtn = document.createElement("div");
    bBtn.innerHTML = 'Show blocks';
    document.body.appendChild(bBtn);
    bBtn.style.backgroundColor = "rgba(200, 200, 200, .4)";
    bBtn.style.border = "2px solid blue";
    bBtn.style.width = "150px";
    bBtn.style.textAlign = "center";
    bBtn.style.textShadow = "1px 1px 0px rgba(216,216,216,0.8)";
    bBtn.style.color = "rgba(20,20,20,0.9)";
    bBtn.style.padding = "0 12px";
    bBtn.style.fontSize = "20px";
    bBtn.style.position = "fixed";
    bBtn.style.top = "256px";
    bBtn.style.lef = "16px";
    bBtn.style.cursor = "pointer";
    bBtn.style.borderRadius = "6px";
    bBtn.className = "rendBtn";
    bBtn.onclick = rend;
}

document.addEventListener('DOMContentLoaded', init);

//window.addEventListener(`resize`, event => {
setInterval(() => {

    let bBtn = document.querySelector(".rendBtn");
    bBtn.innerHTML = `Show blocks  ${window.innerWidth}`;
}
    , 600);

