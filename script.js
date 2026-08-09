// Vorladen des Bildes in den Browser-Cache
var imgCache = new Image();
imgCache.src = 'bilder/XP.jpg';

// Funktion zum Setzen des Bildes
function applyImageStyles(element) {
    element.style.backgroundImage = "url('bilder/XP.jpg')";
    element.style.backgroundSize = "cover";
    element.style.backgroundPosition = "center";
    element.style.backgroundAttachment = "fixed";
    element.style.webkitFilter = "blur(5px)";
    element.style.filter = "blur(5px)";
}

// 1. Initialer Zustand: Beim ersten Laden direkt setzen
document.addEventListener("DOMContentLoaded", function() {
    var elemente = document.querySelectorAll(".glass_blur");
    for (var i = 0; i < elemente.length; i++) {
        applyImageStyles(elemente[i]);
    }
});

var resizeTimer;

function handleOrientationChange() {
    var elemente = document.querySelectorAll(".glass_blur");

    // 1. Bild kurz löschen
    for (var i = 0; i < elemente.length; i++) {
        elemente[i].style.backgroundImage = "none";
    }

    // 2. FORCED REFLOW: Zwingt den Browser, das Fehlen des Bildes sofort zu verarbeiten
    var dummy = document.body.offsetHeight;

    // 3. Debounce-Logik: Warten, bis die Dreh-Aktivität/Resize-Events aufgehört haben
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        for (var j = 0; j < elemente.length; j++) {
            applyImageStyles(elemente[j]);
        }
    }, 400); 
}

// Hört sowohl auf den Resize-Event (für's Drehen) als auch auf die Media-Query-Änderung
window.addEventListener("resize", handleOrientationChange);

var mql = window.matchMedia("(min-aspect-ratio: 1/1)");
if (mql.addListener) {
    mql.addListener(handleOrientationChange);
} else if (mql.addEventListener) {
    mql.addEventListener("change", handleOrientationChange);
}

// Taste B Logik bleibt wie gehabt
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
