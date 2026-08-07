let bg_toggle = 0;

// 1. Umschalten zwischen Bild und Farbverlauf per Taste "b"
document.addEventListener('keydown', function(event){
    if(event.key === "b"){
        if(bg_toggle == 0){
            document.body.className = "mode-gradient";
            bg_toggle = 1;
        } else {
            document.body.className = "";
            bg_toggle = 0;
        }
    } 
});

// 2. Dreh-Fix für alte Android-Browser (wegen background-attachment: fixed)
const mql = window.matchMedia("(orientation: portrait)");

mql.addEventListener("change", function(e) {
    // Aktuellen Modus merken
    const currentClass = document.body.className;
    
    // Klasse kurz entfernen...
    document.body.className = "";
    
    // ...und nach 2 Sekunden wiederherstellen, damit das Bild neu gerendert wird
    setTimeout(function() {
        document.body.className = currentClass;
    }, 2000);
});
