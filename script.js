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
