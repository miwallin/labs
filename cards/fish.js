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

const startUp = event => {
    event.preventDefault();
    const playersNum = document.querySelector('#number-of-players').value;
    console.log(playersNum);
    fetchDeck().then(data => {
        deckid = data.deck_id;
        console.log(deckid);
        createPlayers(playersNum);
        let start = document.querySelector('#start');
        start.classList.add('hide');
        fetchHand();
        let lake = document.querySelector('#lake');
        lake.classList.remove('hide');
        lake.innerHTML = ('Cards in Lake: ');
    });
};

const createPlayers = num => {
    let oppDiv = document.querySelector('#opponents');
    oppDiv.innerHTML = ('');
    oppDiv.classList.remove("hide");
    for (let i = 0; i < num; i++) {
        let player = new Player('Player ' + (i+1), []);
        players.push(player);
        let playerDiv = document.createElement('div');
        playerDiv.setAttribute('class', 'p-div');
        let pName = document.createElement('p');
        pName.textContent = player.name;
        playerDiv.appendChild(pName);
        oppDiv.appendChild(playerDiv);
    }
};

const addPlayer = (name) => {
};

const dealHand = hand => {
    let cardDiv = document.querySelector('#cardholder');
    cardDiv.innerHTML = ('');
    cardDiv.classList.remove("hide");
    for (let i = 0; i<hand.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', hand[i].image);
        cardDiv.appendChild(card);
    };
};

const fetchHand = () => {
    let handURL = '';
    if (players.length <= 2) {
        handURL = 'https://deckofcardsapi.com/api/deck/' + deckid + '/draw/?count=7';
    }
    else {
        handURL = 'https://deckofcardsapi.com/api/deck/' + deckid + '/draw/?count=5';
    }
    fetch(handURL)
    .then((response) => response.json())
    .then((data) => {
        dealHand(data.cards);
    });
};

const fetchDeck = async () => {
    const data = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    return await data.json();
};

startGame.addEventListener('submit', startUp);