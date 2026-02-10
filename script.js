const envelope =
document.getElementById('envelope-container');
const letter =
document.getElementById('letter-container');
const yesBtn =
document.getElementById('yes-btn');
const noBtn =
document.getElementById('no-btn');

eveloppe.addEventListener('click', () 
=> {
    envelope.style.display = 'none';
    letter.style.display = 'block';
});

let scale = 1;
noBtn.style.transform = `scale(${scale})`;

yesBtn.addEventListener('click', () =>
{
    letter.innerHTML = "<h1> Yehhhheeeeyyyy! Happy Valentines Baby King! 💗</h1><img
src='cat-dance.gif'>";
});
