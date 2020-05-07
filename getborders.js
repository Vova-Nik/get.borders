
/*****************************outlining**************************************** */

// class Outliner() {



function rend(colorNum) {

    showBordersColors = [
        "rgba(0,0,0,0)",
        "rgba(0,0,0,1)",
        "rgba(255,0,0,1)",
        "rgba(0,255,0,1)",
        "rgba(0,0,255,1)",
        "rgba(255,255,255,1)",
    ];
    let showBordersColor = "rgba(0,0,0,1)";

    const showBordersBtn = document.querySelector(".showBordersBtn");
    let showBordersColor_index =  parseInt(showBordersBtn.getAttribute("showBordersColor"));
    showBordersColor_index ++;
    if (showBordersColor_index >= showBordersColors.length)
        showBordersColor_index = 0;
    showBordersBtn.setAttribute("showBordersColor", showBordersColor_index);
    showBordersColor = showBordersColors[showBordersColor_index];
    // console.log(`index = ${showBordersColor_index}, color = ${showBordersColor}`);
    let showBordersElems = [];
    // showBordersElems.forEach.call(document.querySelectorAll("*"), function (a) { a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16) });
    showBordersElems.forEach.call(document.querySelectorAll("*"), function (a) { a.style.outline = "1px solid " +  showBordersColor});
}


function init() {

    const showBordersBtn = document.createElement("div");
    document.body.appendChild(showBordersBtn);
    showBordersBtn.classList.add("showBordersBtn");
    showBordersBtn.setAttribute("showBordersColor", "0");

    showBordersBtn.style.position = "fixed";
    showBordersBtn.style.width = "40px";
    showBordersBtn.style.top = "120px";
    showBordersBtn.style.left = "20px";
    showBordersBtn.innerHTML = 'Show blocks';
    showBordersBtn.style.backgroundColor = "rgba(255, 200, 200, .6)";
    showBordersBtn.style.textAlign = "center";
    showBordersBtn.style.textShadow = "1px 1px 0px rgba(240, 240, 240, 0.6)";
    showBordersBtn.style.padding = "4px 12px";
    showBordersBtn.style.fontSize = "16px";
    showBordersBtn.style.cursor = "pointer";
    showBordersBtn.style.zIndex = "1000";

    showBordersBtn.onclick = rend;

    showBordersBtn.style.cursor = "move";
    showBordersBtn.onmousedown = dragObj;
    showBordersBtn.ondragstart = function () {
        return false;
    };

}
document.addEventListener('DOMContentLoaded', init);

/*****************************dragging**************************************** */
function dragObj(e) {
    console.log("e = ", e);

    showBordersBtn = e.srcElement;
    let coords = getCoords(showBordersBtn);  //srcElement
    let shiftX = e.pageX - coords.left;
    let shiftY = e.pageY - coords.top;

    document.onmousemove = function (e) {
        showBordersBtn.style.left = e.pageX - shiftX + 'px';
        showBordersBtn.style.top = e.pageY - shiftY + 'px';
    };

    showBordersBtn.onmouseup = function () {
        document.onmousemove = null;
        showBordersBtn.onmouseup = null;
    };
}

function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}

