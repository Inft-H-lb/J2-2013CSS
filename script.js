function update_bg(action) {
    var elemente = document.querySelectorAll(".glass_blur");
    for (var i = 0; i < elemente.length; i++) {
        if (action === "set") {
            elemente[i].classList.add("active-bg");
        } else {
            elemente[i].classList.remove("active-bg");
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    update_bg("set");
});

var bg_toggle = 0;

document.addEventListener('keydown', function(event){
    if(event.keyCode === 66){
        if(bg_toggle == 0){
            document.body.className = "mode-gradient";
            bg_toggle = 1;
        } else {
            document.body.className = "";
            bg_toggle = 0;
        }
    } 
});

var mql = window.matchMedia("(min-aspect-ratio: 1/1)");

function handleOrientationChange(e) {
    // Kurz entfernen, damit das alte WebView das Layout neu berechnen kann
    update_bg("remove");

    // 400ms Verzögerung geben dem alten Fully Kiosk Zeit zum Drehen
    setTimeout(function(){
        update_bg("set");
    }, 400);
}

if (mql.addListener) {
    mql.addListener(handleOrientationChange);
} else if (mql.addEventListener) {
    mql.addEventListener("change", handleOrientationChange);
}
