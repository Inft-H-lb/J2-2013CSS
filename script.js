const styleTag = document.createElement('style');
document.head.appendChild(styleTag); //dem Head der HTML Datei wird ein Element <style> hinzugefügt

styleTag.innerHTML = `
  .glass::before{
  content: "";
  position: absolute;
  top: -10px;
  bottom: -10px;
  left: -10px;
  right: -10px;
  background-color: rgba(166, 184, 199, 0.2);

  background-image: url(https://static.giga.de/wp-content/uploads/2019/12/Gruene-Idylle-rcm1680x944u.jpg);
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
                    background-color: #83b9b948;
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
                    position: absolute;
                    top: -10px;
                    bottom: -10px;
                    left: -10px;
                    right: -10px;
                    background-color: rgba(166, 184, 199, 0.2);

                    background-image: url(https://static.giga.de/wp-content/uploads/2019/12/Gruene-Idylle-rcm1680x944u.jpg);
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

const mql = window.matchMedia("(orientation: portrait)");

location.reload();
