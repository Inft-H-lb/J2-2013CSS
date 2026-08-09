const pseudo = document.createElement('style');
document.head.appendChild(pseudo);

pseudo.innerHTML = `
    .glass::before{
        background-image: url('bilder/XP.jpg');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        -webkit-filter: blur(5px);
        filter: blur(5px);
    }
`;
