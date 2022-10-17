class Player {
    constructor(name, hand) {
        this.name = name;
        this.hand = hand;
        this.points = 0;
    }
}

const startGame = document.querySelector('#start > form');
let deckid = '';
const players = [];

const startUp = async event => {
    event.preventDefault();
    const playersNum = document.querySelector('#number-of-players').value;
    console.log(playersNum);
    let fd = new Promise( (resolve) => resolve(fetchDeck()));
    await fd.then(console.log(deckid));
    await createPlayers(playersNum);
};

const createPlayers = num => {
    let oppDiv = document.querySelector('#opponents');
    oppDiv.innerHTML = ('');
    for (let i = 0; i < num; i++) {
        let playerDiv = document.createElement('div');
        playerDiv.setAttribute('class', 'p-div');
        let pName = document.createElement('p');
        pName.textContent = 'Player ' + num;
        playerDiv.appendChild(pName);
    }
};

const addPlayer = (name) => {
};

const dealHand = hand => {
    let cardDiv = document.querySelector('#cardholder');
    cardDiv.innerHTML = ('');
    for (let i = 0; i<hand.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', hand[i].image);
        cardDiv.appendChild(card);
    };
};

const fetchHand = () => {
    fetch('https://deckofcardsapi.com/api/' + deckid + '/draw/?count=2')
    .then((response) => response.json())
    .then((data) => {

    });
};

const fetchDeck = () => {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then((response) => response.json())
    .then((data) => { 
        deckid = data.deck_id;
        console.log(data);
    });
};

startGame.addEventListener('submit', startUp);