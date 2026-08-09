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

// Die Logik für das Drehen
function handleOrientationChange(e) {
    var elemente = document.querySelectorAll(".glass_blur");

    // 1. Sofort beim Drehen: Bild ausknipsen, damit das falsch skalierte Bild verschwindet
    for (var i = 0; i < elemente.length; i++) {
        elemente[i].classList.add("glass_hide_bg");
        
        // Falls vorher schon mal gedreht wurde, die Ausweichklasse kurz wieder entfernen
        elemente[i].classList.remove("glass_blur_recalc");
    }

    // 2. Dem Gerät kurz Zeit geben, das neue Layout (Breite/Höhe) zu berechnen
    setTimeout(function(){
        for (var j = 0; j < elemente.length; j++) {
            // Verstecken aufheben
            elemente[j].classList.remove("glass_hide_bg");
            
            // 3. Ausweichklasse anwenden: Der Browser WIRD gezwungen, das Bild neu zu berechnen
            elemente[j].classList.add("glass_blur_recalc");
        }
    }, 300); // 300ms sind bei alten Tablets oft sicherer als 200ms
}

// Kompatibilität für alte WebViews
if (mql.addListener) {
    mql.addListener(handleOrientationChange);
} else if (mql.addEventListener) {
    mql.addEventListener("change", handleOrientationChange);
}
