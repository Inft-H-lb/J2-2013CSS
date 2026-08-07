const pseudo = document.createElement('style');
document.head.appendChild(pseudo);

pseudo.innerHTML = `
    .glass::before{
        background-image: url(bilder/XP.jpg);
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }
`;


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
    pseudo.innerHTML = "";
    setTimeout(function(){
        pseudo.innerHTML = `
            .glass::before{
                background-image: url(bilder/XP.jpg);
                background-size: cover;
                background-position: center;
                background-attachment: fixed;
            }
        `;
    }, 200);
});
