document.addEventListener("DOMContentLoaded", function() {
    const elemente = document.querySelectorAll(".glass_blur");
    
    console.log("Gefundene Elemente:", elemente.length); // Sollte größer als 0 sein!

    elemente.forEach(pseudo => {
        pseudo.style.backgroundImage = "url('bilder/XP.jpg')";
        pseudo.style.backgroundSize = "cover";
        pseudo.style.backgroundPosition = "center";
        pseudo.style.backgroundAttachment = "fixed";
        pseudo.style.webkitFilter = "blur(5px)";
        pseudo.style.filter = "blur(5px)";
    });
});

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

function reloadCSS() {
    const linkElement = document.querySelector('link[rel="stylesheet"]');
    if (linkElement) {
        // Wir merken uns den href und hängen einen Trick an, damit der Browser es nicht aus dem Cache holt
        const href = linkElement.href.split('?')[0];
        linkElement.href = href + '?reload=' + new Date().getTime();
    }
}

mql.addEventListener("change", function() {
    pseudo.style.backgroundImage = "none";
    pseudo.style.backgroundSize = "none";
    pseudo.style.backgroundPosition = "none";
    pseudo.style.backgroundAttachment = "none";
    pseudo.style.filter = "none";
    pseudo.style['-webkit-filter'] = "none";
    pseudo.style.filter = "none";
    setTimeout(function(){
        pseudo.style.backgroundImage = "url(bilder/XP.jpg)";
        pseudo.style.backgroundSize = "cover";
        pseudo.style.backgroundPosition = "center";
        pseudo.style.backgroundAttachment = "fixed";
        pseudo.style.filter = "url(#ie-blur)";
        pseudo.style['-webkit-filter'] = "blur(5px)";
        pseudo.style.filter = "blur(5px)";
    }, 200);
});
