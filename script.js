function update_bg(callback) {
    const elemente = document.querySelectorAll(".glass_blur");
    for (let i = 0; i < elemente.length; i++) {
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

let bg_toggle = 0;

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

const mql = window.matchMedia("(min-aspect-ratio: 1/1)");

mql.addEventListener("change", function() {
    // Alles auf "none" setzen
    update_bg(function(pseudo) {
        pseudo.style.backgroundImage = "none";
        pseudo.style.backgroundSize = "none";
        pseudo.style.backgroundPosition = "none";
        pseudo.style.backgroundAttachment = "none";
        pseudo.style.filter = "none";
        pseudo.style['-webkit-filter'] = "none";
    });

    // Nach 200ms wieder neu setzen
    setTimeout(function(){
        update_bg(function(pseudo) {
            pseudo.style.backgroundImage = "url(bilder/XP.jpg)";
            pseudo.style.backgroundSize = "cover";
            pseudo.style.backgroundPosition = "center";
            pseudo.style.backgroundAttachment = "fixed";
            pseudo.style.filter = "url(#ie-blur)";
            pseudo.style.webkitFilter = "blur(5px)";
            pseudo.style.filter = "blur(5px)";
        });
    }, 200);
});
