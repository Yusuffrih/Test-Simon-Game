let noteArrangement = [];
let playerInput = [];
let level = 0; 

const playButton = document.querySelector('#play-button');
const info = document.querySelector('.info');

function playKey(letter){
    const key = document.querySelector(`[data-note='${letter}']`);
    const sound = document.querySelector(`data-sound='${letter}`);
    
    note.classList.add('activated');
    sound.play();

    setTimeout(() => {
        key.classList.remove('activated');
    }, 500)
}

function playLevel(nextArrangement){
    nextArrangement.forEach((letter, index) => {
    setTimeout(() => {
        playKey(letter);
    }, (index + 1) * 400);
    });
}

function nextNote(){
    const keys = 
    ['C-note', 'Db-note', 'D-note', 
    'Eb-note', 'E-note', 'F-note', 
    'Gb-note', 'G-note', 'Ab-note', 
    'A-note', 'Bb-note', 'B-note'];
    const random = keys[Math.floor(Math.random()*keys.length)];
    return random;
}

function nextLevel(){
    level += 1;

    const nextArrangement = [...noteArrangment];
    nextArrangement.push(nextNote());
    playLevel(nextArrangement);
}

function playGame (){
    playButton.classList.add('hidden'); 
    info.classList.remove('hidden');
    info.innerHTML = 
    `<p>For white piano keys use: z,x,c,v,b,n,m</p>
    <p>For black keys use: s,d,g,h,j</p>`
    nextLevel();
}

playButton.addEventListener('click', playGame); 

