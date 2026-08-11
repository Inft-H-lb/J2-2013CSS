const pseudo = document.createElement('style');
document.head.appendChild(pseudo);

pseudo.innerHTML = `
    .glass::before{
        background-image: url('https://cdn.pixabay.com/photo/2015/12/15/05/43/starry-night-1093721_960_720.jpg');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        -webkit-filter: blur(5px);
        filter: blur(5px);
    }
`;
