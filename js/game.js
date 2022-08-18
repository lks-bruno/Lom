const grid = document.querySelector('.grid')
const playerName = document.querySelector('.player')
const timer = document.querySelector('.time')
console.log(playerName)
const characters = [
    'kaisa',
    'kindred',
    'akali',
    'zoe',
    'jinx',
    'neeko',
    'soraka',
    'poppy',
    'seraphine',
    'sona',
]
const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;

    return element;
}
const checkEndgame = () => {
    const disableCards = document.querySelectorAll('.disable-card');

    if(disableCards.length == 20 ) {
        setTimeout(()=> {
            clearInterval(this.loop)
            alert(`Parabéns, ${playerName.innerHTML}, seu tempo foi ${timer.innerHTML}`)

        },600)
        
    }

}
const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if(firstCharacter == secondCharacter) {

        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');
        firstCard = '';
        secondCard = '';


        checkEndgame()

    } else {

        setTimeout(()=> {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');
            firstCard = '';
            secondCard = '';
    

        }, 500)


    }

    
}
let firstCard = '';
let secondCard = '';
const revealCard = ({target}) => {

    if(target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if(firstCard === '') {
        target.parentNode.classList.add('reveal-card');
        firstCard =  target.parentNode;

    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card');
        secondCard =  target.parentNode;
    }

    checkCards()
}
const createCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face-card front');
    const back = createElement('div', 'face-card back');

    front.style.backgroundImage = `url('../images/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);
    
    card.addEventListener('click', revealCard);
    
    card.setAttribute('data-character', character);


    return card;
}
const loadGame = () => {

    const characterSpreed = [ ...characters, ...characters];

    const characterShf = characterSpreed.sort(() => Math.random() - 0.5)

    characterShf.forEach((items) => {
        const cards  = createCard(items);
        grid.appendChild(cards)
       
    });
}
const startTimer = () => {
    this.loop = setInterval(()=>{
        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;
        
    },1000)
    
}
window.onload = () => {

    playerName.innerHTML = localStorage.getItem('Player');

    startTimer();
    loadGame();
}


