function update_bg(callback) {
    var elemente = document.querySelectorAll(".glass_blur");
    for (var i = 0; i < elemente.length; i++) {
        callback(elemente[i], i);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Beim Laden anwenden
    update_bg(function(pseudo) {
        pseudo.style.backgroundImage = "url('bilder/XP.jpg')";
        pseudo.style.backgroundSize = "cover";
        pseudo.style.backgroundPosition = "center";
        pseudo.style.backgroundAttachment = "fixed";
        pseudo.style.webkitFilter = "blur(5px)";
        pseudo.style.filter = "blur(5px)";
    });
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

// Fallback für ältere WebViews: addListener statt addEventListener("change")
function handleOrientationChange(e) {
    // Alles auf "none" setzen
    update_bg(function(pseudo) {
        pseudo.style.backgroundImage = "none";
        pseudo.style.backgroundSize = "none";
        pseudo.style.backgroundPosition = "none";
        pseudo.style.backgroundAttachment = "none";
        pseudo.style.filter = "none";
        pseudo.style.webkitFilter = "none";
    });

    // Nach 200ms wieder neu setzen
    setTimeout(function(){
        update_bg(function(pseudo) {
            pseudo.style.backgroundImage = "url('bilder/XP.jpg')";
            pseudo.style.backgroundSize = "cover";
            pseudo.style.backgroundPosition = "center";
            pseudo.style.backgroundAttachment = "fixed";
            pseudo.style.webkitFilter = "blur(5px)";
            pseudo.style.filter = "blur(5px)";
        });
    }, 200);
}

if (mql.addListener) {
    mql.addListener(handleOrientationChange);
} else if (mql.addEventListener) {
    mql.addEventListener("change", handleOrientationChange);
}
