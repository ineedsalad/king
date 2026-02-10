const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');

// This makes the NO button move when the mouse (or finger) gets close
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton); // For mobile

function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

yesBtn.addEventListener('click', () => {
    alert("I knew you'd say yes, Syempre Chamcham na to oh! 💗”);
});
