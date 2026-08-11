const pseudo = document.createElement('style');
document.head.appendChild(pseudo);

pseudo.innerHTML = `
    .glass::before{
        background-image: url('./bilder/Westminster.jpg');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        -webkit-filter: blur(6px);
        filter: blur(6px);
    }
`;
