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

    giveFromHand(rank) {
        const toGive = this.hand.filter(c => c.value === rank);
        const newHand = this.hand.filter(c => c.value !== rank);
        this.hand = newHand;
        return toGive;
    }

    hasRank (rank) {
        const cardsWithRank = this.hand.filter(c => c.value === rank);
        if (cardsWithRank.length === 0){
            return false;
        }
        else {
            return true;
        }
    }

    completeRank(rank) {
        const cardsWithRank = this.hand.filter(c => c.value === rank);
        if (cardsWithRank.length === 4){
            const newHand = this.hand.filter(c => c.value !== rank);
            this.hand = newHand;
            this.points++;
            return true;
        }
        else {
            return false;
        }
    }

    updateStats() {
        this.stats.textContent = this.name + ' Cards: ' + (this.hand.length) + ' Points: ' + this.points;
    }
}

const startGame = document.querySelector('#start > form');
const askForCard = document.querySelector('#ask > form');
const lake = document.querySelector('#lake');
const round = document.querySelector('#round');
let deckid = '';
const players = [];
let lakeEmpty = false;

const startUp = event => {
    event.preventDefault();
    const playersNum = document.querySelector('#number-of-players').value;
    console.log(playersNum);
    fetchDeck().then(data => {
        deckid = data.deck_id;
        console.log(deckid);
        createPlayers(playersNum);
        for (p of players) { fetchHand(p) }
        setTimeout( () => {
            let start = document.querySelector('#start');
            start.classList.add('hide');
            lake.classList.remove('hide');
            let askBox = document.querySelector('#ask');
            askBox.classList.remove('hide');
            setStats();
            populateAskPlayers();
            populateAskRanks();
            getLakeCards();
        }, 1000);
    });
};

const onAsk = event => {
    event.preventDefault();
    const askedPlayer = document.querySelector('#from-player').value;
    const askedRank = document.querySelector('#card-rank').value;
    round.innerHTML = ('');
    if ( askForRank(askedPlayer, 0, askedRank) ) {
        dealHand(players[0].hand);
        players[askedPlayer].updateStats;
        populateAskRanks();
        endRound();
        return;
    }
    if (!lakeEmpty) { 
        fishing(players[0], true);
    }
    for (let i = 1; i<players.length; i++) {
        let success = true;
        while (success) {
            let toAsk = i;
            let whichRank = Math.floor(Math.random() * players[i].numCards);
            while (toAsk === i) {
                toAsk = Math.floor(Math.random() * players.length);
            }
            if ( (whichRank !== undefined) && (!players[i].completeRank(whichRank)) ) {
                success = askForRank(toAsk, i, players[i].hand[whichRank].value);
            }
        }
        if (!lakeEmpty) { 
            fishing(players[i], false);
        }
    }
    endRound();
    setTimeout( () => {
        populateAskRanks();
        console.log(players);
        checkForWin();
    }, 1000);
};

const checkForWin = () => {
    let totalPiles = 0;
    const pointsNow = [];
    console.log(pointsNow);
    players.forEach( p => {
        if (p.points >= 8){
            gameWon(p);
        }
        pointsNow.push([p, p.points]);
        totalPiles += p.points;
    });
    pointsNow.sort( (a, b) => a.points - b.points);
    if (totalPiles >= 8) {

    }
};

const gameWon = player => {
    round.innerHTML = ('');
    let winText = document.createElement('p');
    winText.textContent = player.name + ' won.';
    round.appendChild(winText);
    okButton.textContent = 'OK';
    okButton.addEventListener('click', () => round.classList.add('hide') );
    round.appendChild(okButton);
    round.classList.remove('hide');
};

const fishing = (player, you) => {
    goFish().then( caughtCard => {
        if (caughtCard !== undefined) {
            getLakeCards().then ( lc  => {
                player.addToHand(caughtCard);
                if (player.completeRank(caughtCard.value)) {
                    let caughtText = document.createElement('p');
                    caughtText.textContent = player.name + ' caught ' + caughtCard.value + '.';
                    round.appendChild(caughtText);
                }
                if (you) {
                    dealHand(player.hand);
                }
                else {
                    player.updateStats();
                }
            });
        }
    });
};

const endRound = () => {
    let okButton = document.createElement('button');
    okButton.textContent = 'OK';
    okButton.addEventListener('click', () => round.classList.add('hide') );
    round.appendChild(okButton);
    round.classList.remove('hide');
};

const askForRank = (playerAsked, playerAsking, rank) => {
    let roundText = document.createElement('p');
    let roundTextString = players[playerAsking].name + ' asked ' + players[playerAsked].name + ' for ' + rank + '.\n';
    if (players[playerAsked].hasRank(rank)) {
        roundTextString += players[playerAsked].name + ' had ' + rank + '.\n';
        let cardsWon = players[playerAsked].giveFromHand(rank);
        cardsWon.forEach(card => { players[playerAsking].addToHand(card)});
        if (players[playerAsking].completeRank(rank)) {
            roundTextString += players[playerAsking].name + ' got all ' + rank + 's.\n';
        }
        roundText.textContent = roundTextString;
        round.appendChild(roundText);
        return true;
    }
    else if (!lakeEmpty) {
        roundTextString += players[playerAsking].name + ' went fishing.\n';
        roundText.textContent = roundTextString;
        round.appendChild(roundText);
        return false;
    }
    else {
        return false;
    }
};

const populateAskRanks = () => {
    let rankOptions = document.querySelector('#card-rank');
    rankOptions.innerHTML = ('');
    let ranksInHand = new Set();
    for (let i = 0; i<players[0].numCards; i++) {
        ranksInHand.add(players[0].hand[i].value);
    }
    ranksInHand.forEach( value => {
        if (!players[0].completeRank(value)){
            let opt = document.createElement('option');
            opt.setAttribute('value', value);
            opt.textContent = value;
            rankOptions.appendChild(opt);
        }
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

const setStats = () => {
    for (let i = 1; i<players.length; i++) {
        let id = '#pl-' + i + '-stats';
        players[i].stats = document.querySelector(id);
        players[i].updateStats();
    }
};

const getLakeCards = async () => {
    let deckURL = 'https://deckofcardsapi.com/api/deck/' + deckid + '/shuffle/?remaining=true';
    const response = await fetch(deckURL);
    const data =  await response.json();
    if (data.remaining === 0) {
        lakeEmpty = true;
        lake.innerHTML = ('No more fishies.');
        return 0;
    }
    lake.innerHTML = ('Cards in Lake: ' + data.remaining );
    return data;
};

const goFish = async () => {
    await delay(Math.floor(Math.random() * 500));
    let fishURL = 'https://deckofcardsapi.com/api/deck/' + deckid + '/draw/?count=1';
    const response = await fetch(fishURL);
    const data = await response.json();
    const catchOfTheRound = data.cards[0];
    return catchOfTheRound;
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

const fetchHand = async player => {
    let handURL = '';
    await delay((players.indexOf('player')) * 100);
    if (players.length <= 2) {
        handURL = 'https://deckofcardsapi.com/api/deck/' + deckid + '/draw/?count=7';
    }
    else {
        handURL = 'https://deckofcardsapi.com/api/deck/' + deckid + '/draw/?count=5';
    }
    const response = await fetch(handURL);
    const data = await response.json();
    if (player.name === 'You'){
        dealHand(data.cards);
    }
    dealHands(player, data.cards);
};

const delay = n => new Promise((res) => setTimeout(res, n));

const fetchDeck = async () => {
    const data = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    return await data.json();
};

startGame.addEventListener('submit', startUp);
askForCard.addEventListener('submit', onAsk);