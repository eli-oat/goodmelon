function menu() {
    var ele = document.getElementById("menuDiv");
    var text = document.getElementById("menuTrigger");
    if (ele.style.display == "block") {
        ele.style.display = "none";
    } else {
        ele.style.display = "block";
    }
}
