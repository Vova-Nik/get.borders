
function rend() {
    [].forEach.call(document.querySelectorAll("*"), function (a) { a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16) });
}


function init() {
    let bBtn = document.createElement("div");
    bBtn.innerHTML = 'Show blocks';
    document.body.appendChild(bBtn);
    console.log("Created", bBtn)
    bBtn.style.backgroundColor = "rgba(128, 32, 32, .8)";
    bBtn.style.border = "2px solid blue";
    bBtn.style.width = "150px";
    bBtn.style.textAlign = "center";
    bBtn.style.textShadow = "1px 1px 0px rgba(200,206,204,0.52)";
   

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
    console.log("width - ", window.screen.width);
    let bBtn = document.querySelector(".rendBtn");
    // bBtn.innerHTML = `Show blocks  ${window.screen.width}`;
    bBtn.innerHTML = `Show blocks  ${window.innerWidth}`;
}
    , 600);


// alert( window.innerWidth ); // полная ширина окна
// alert( document.documentElement.clientWidth ); 