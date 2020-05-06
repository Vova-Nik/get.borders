
function rend() {
    [].forEach.call(document.querySelectorAll("*"), function (a) { a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16) });
}

function init() {
    const uho = document.createElement("div");
    document.body.appendChild(uho);
    uho.style.width = "20px";
    uho.style.height = "12px";
    uho.style.backgroundColor = "rgba(210, 210, 210, .6)";
    uho.innerHTML = "<div class = 'mainButton'>Ha ha ha</div>";

    uho.style.position = "fixed";
    uho.style.left = "100px";

    uho.classList.add("getBordersUho");
    uho.style.zIndex = "1002";
    const bBtn = document.querySelector(".mainButton");
    bBtn.style.position = "absolute";
    bBtn.style.top = "12px";
    bBtn.innerHTML = 'Show blocks';
    bBtn.style.backgroundColor = "rgba(210, 210, 210, .6)";
    bBtn.style.textAlign = "center";
    bBtn.style.textShadow = "1px 1px 0px rgba(240, 240, 240, 0.6)";
    bBtn.style.padding = "4px 12px";
    bBtn.style.fontSize = "16px";
    bBtn.style.cursor = "pointer";
    bBtn.className = "rendBtn";
    bBtn.style.zIndex = "1000";
    bBtn.onclick = rend;

    uho.style.cursor = "move";

    uho.onmousedown = dragObj;
    uho.ondragstart = function () {
    return false;
};

}
document.addEventListener('DOMContentLoaded', init);

setInterval(() => {
    console.log("width - ", window.screen.width);
    let bBtn = document.querySelector(".rendBtn");
    bBtn.innerHTML = `Show blocks </br> ${window.innerWidth}`;
}, 600);


/********************************************************************** */
function dragObj(e) {
    console.log("e = ", e);
    const uho = document.querySelector(".getBordersUho");

    let coords = getCoords(uho);
    let shiftX = e.pageX - coords.left;
    let shiftY = e.pageY - coords.top;

    document.onmousemove = function (e) {
        uho.style.left = e.pageX - shiftX + 'px';
        uho.style.top = e.pageY - shiftY + 'px';
    };

    uho.onmouseup = function () {
        document.onmousemove = null;
        uho.onmouseup = null;
    };
}

function getCoords(elem) { 
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };

}