const styleTag = document.createElement('style');
document.head.appendChild(styleTag); //dem Head der HTML Datei wird ein Element <style> hinzugefügt

styleTag.innerHTML = `
  .glass::before{
  content: "";
  background-color: #83b9b9;
  opacity: 0.2;
  background-color: #83b9b9;
  opacity: 0.2;
  position: absolute;
  top: -10px;
  bottom: -10px;
  left: -10px;
  right: -10px;
  background-image: url(https://static.giga.de/wp-content/uploads/2019/12/Gruene-Idylle-rcm1680x944u.jpg);
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: -1;
  -webkit-filter: blur(4px);
  filter: blur(4px);
}
`;

let bg_toggle = 0;

document.addEventListener('keydown', function(event){
    if(event.key === "b"){
        if(bg_toggle == 0){
            styleTag.innerHTML = `
                .glass::before{
                    content: "";
                    background-color: #83b9b9;
                    opacity: 0.2;
                    position: absolute;
                    top: -10px;
                    bottom: -10px;
                    left: -10px;
                    right: -10px;
                    background-image: linear-gradient(
                    to bottom left,
                        #439fd4,
                        #445abd,
                        #6d1986
                    );
                    z-index: -1;
                    -webkit-filter: blur(4px);
                    filter: blur(4px);
                }
            `;
            document.body.style.backgroundImage = "linear-gradient(to bottom left, #439fd4, #445abd, #6d1986)";
            bg_toggle = 1;
        }
        else{
            styleTag.innerHTML = `
                .glass::before{
                    content: "";
                    background-color: #83b9b9;
                    opacity: 0.2;
                    position: absolute;
                    top: -10px;
                    bottom: -10px;
                    left: -10px;
                    right: -10px;
                    background-image: url(https://static.giga.de/wp-content/uploads/2019/12/Gruene-Idylle-rcm1680x944u.jpg);
                    -webkit-background-size: cover;
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                    z-index: -1;
                    -webkit-filter: blur(4px);
                    filter: blur(4px);
                }
            `;
            document.body.style.backgroundImage = "url(https://static.giga.de/wp-content/uploads/2019/12/Gruene-Idylle-rcm1680x944u.jpg)";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundAttachment = "fixed";
            bg_toggle = 0;
    }
    } 
});

window.addEventListener("orientationchange", function() {
    setTimeout(function() {
        var currentCSS = styleTag.innerHTML;
        styleTag.innerHTML = ""; // Styles komplett löschen
        setTimeout(function() {
            styleTag.innerHTML = currentCSS; // Styles neu schreiben
        }, 50);
    }, 800);
});
