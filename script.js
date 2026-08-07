const styleTag = document.createElement('style');
document.head.appendChild(styleTag); //dem Head der HTML Datei wird ein Element <style> hinzugefügt

styleTag.innerHTML = `
  .glass::before{
    background-image: url(./bilder/BlurryWindowsXP.jpg);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
`;

let bg_toggle = 0;

document.addEventListener('keydown', function(event){
    if(event.key === "b"){
        if(bg_toggle == 0){
            styleTag.innerHTML = `
                .glass::before{
                    background-image: linear-gradient(
                    to bottom left,
                        #439fd4,
                        #445abd,
                        #6d1986
                    );
                }
            `;
            document.body.style.backgroundImage = "linear-gradient(to bottom left, #439fd4, #445abd, #6d1986)";
            bg_toggle = 1;
        }
        else{
            styleTag.innerHTML = `
                .glass::before{
                    background-image: url(./bilder/BlurryWindowsXP.jpg);
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
            `;
            document.body.style.backgroundImage = "url(./bilder/BlurryWindowsXP.jpg)";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundAttachment = "fixed";
            bg_toggle = 0;
    }
    } 
});

const mql = window.matchMedia("(orientation: portrait)");

mql.addEventListener("change", function(e) {
    styleTag.innerHTML = '';
    setTimeout(function() {
        styleTag.innerHTML = `
            .glass::before{
                background-image: url(./bilder/BlurryWindowsXP.jpg);
                background-size: cover;
                background-position: center;
                background-attachment: fixed;
            }
        `;
    }, 2000);

}
);
