// Funktion zum Setzen des Bildes
function applyImageStyles(element) {
    element.style.backgroundImage = "url('bilder/XP.jpg')";
    element.style.backgroundSize = "cover";
    element.style.backgroundPosition = "center";
    element.style.backgroundAttachment = "fixed";
}

// 1. Initialer Zustand: Beim ersten Laden direkt setzen
document.addEventListener("DOMContentLoaded", function() {
    var elemente = document.querySelectorAll(".glass_blur");
    for (var i = 0; i < elemente.length; i++) {
        applyImageStyles(elemente[i]);
    }
});

var mql = window.matchMedia("(min-aspect-ratio: 1/1)");

function handleOrientationChange(e) {
    var elemente = document.querySelectorAll(".glass_blur");

    // 1. Bild kurz löschen
    for (var i = 0; i < elemente.length; i++) {
        elemente[i].style.backgroundImage = "none";
    }

    // 2. Warten, bis die Drehung vollzogen ist
    setTimeout(function(){
        for (var j = 0; j < elemente.length; j++) {
            // 3. Bild JETZT erst in das Element injizieren
            // Da das CSS-File davon nichts weiß, MUSS der Browser
            // das Bild bei dieser Anweisung neu berechnen.
            applyImageStyles(elemente[j]);
        }
    }, 400); 
}

if (mql.addListener) {
    mql.addListener(handleOrientationChange);
} else if (mql.addEventListener) {
    mql.addEventListener("change", handleOrientationChange);
}
