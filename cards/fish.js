class Player {
    constructor(name, hand) {
        this.name = name;
        this.hand = hand;
        this.points = 0;
        this.stats = null;
    }

    get numCards() {
        return this.hand.length;
    }

    addToHand(card) {
        this.hand.push(card);
    }

    removeFromHand(card) {
        this.hand.pop(card);
    }

    updateStats() {
        this.stats.textContent = this.name + ' Cards: ' + (this.hand.length) + ' Points: ' + this.points;
    }
}

const startGame = document.querySelector('#start > form');
const askForCard = document.querySelector('#ask > form');
let deckid = '';
const players = [];
const incompleteRanks = ['2','3','4','5','6','7','8','9','10','JACK','QUEEN','KING','ACE'];

const startUp = event => {
    event.preventDefault();
    const playersNum = document.querySelector('#number-of-players').value;
    console.log(playersNum);
    fetchDeck().then(data => {
        deckid = data.deck_id;
        console.log(deckid);
        createPlayers(playersNum);
        players.forEach(fetchHand);
        let start = document.querySelector('#start');
        start.classList.add('hide');
        getLakeCards().then(data => {
            let lake = document.querySelector('#lake');
            lake.classList.remove('hide');
            lake.innerHTML = ('Cards in Lake: ' + data.remaining );
            console.log(players);
            setTimeout( () => {
                updateStats();
                getLakeCards().then(data => {
                    lake.innerHTML = ('Cards in Lake: ' + data.remaining );
                });
                populateAskPlayers();
                populateAskRanks();
                let askBox = document.querySelector('#ask');
                askBox.classList.remove('hide');
            }, 3000);
        });
    });
};

const populateAskRanks = () => {
    let rankOptions = document.querySelector('#card-rank');
    let ranksInHand = new Set();
    for (let i = 0; i<players[0].hand.length; i++) {
        ranksInHand.add(players[0].hand[i].value);
    }
    ranksInHand.forEach( value => {
        let opt = document.createElement('option');
        opt.setAttribute('value', value);
        opt.textContent = value;
        rankOptions.appendChild(opt);

    });
}

const populateAskPlayers = () => {
    let playerOptions = document.querySelector('#from-player');
    for (let i = 1; i<players.length; i++) {
        let opt = document.createElement('option');
        opt.setAttribute('value', i);
        opt.textContent = 'Player ' + i;
        playerOptions.appendChild(opt);
    }
}

const updateStats = () => {
    for (let i = 1; i<players.length; i++) {
        let id = '#pl-' + i + '-stats';
        players[i].stats = document.querySelector(id);
        players[i].updateStats();
    }
};

const getLakeCards = async () => {
    let deckURL = 'https://deckofcardsapi.com/api/deck/' + deckid + '/shuffle/?remaining=true';
    const data = await fetch(deckURL);
    return await data.json();
};

const createPlayers = num => {
    let you = new Player('You', []);
    players.push(you);
    let oppDiv = document.querySelector('#opponents');
    oppDiv.innerHTML = ('');
    oppDiv.classList.remove("hide");
    for (let i = 0; i < num; i++) {
        let player = new Player('Player ' + (i+1), []);
        players.push(player);
        let playerDiv = document.createElement('div');
        playerDiv.setAttribute('class', 'p-div');
        let pName = document.createElement('p');
        let pnid = 'pl-' + (i+1) + '-stats';
        pName.textContent = player.name;
        pName.setAttribute('id', pnid);
        playerDiv.appendChild(pName);
        oppDiv.appendChild(playerDiv);
    }
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

const dealHands = (player, hand) => {
    for (let i = 0; i<hand.length; i++) {
        player.addToHand(hand[i]);
    }
}

const fetchHand = player => {
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
        if (player.name === 'You'){
            dealHand(data.cards);
        }
        dealHands(player, data.cards);
    });
};

const fetchDeck = async () => {
    const data = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    return await data.json();
};

startGame.addEventListener('submit', startUp);
askForCard.addEventListener('submit', ask);