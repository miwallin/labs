const drawButton = document.querySelector('#drawbutton');

const dealHand = hand => {
    let cardDiv = document.querySelector('#cardholder');
    cardDiv.innerHTML = ('');
    for (let i = 0; i<hand.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', hand[i].image);
        cardDiv.appendChild(card);
    }
}

const drawCards = () => {
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=5')
    .then((response) => response.json())
    .then((data) => { 
        console.log(data);
        dealHand(data.cards);
    });
};

drawButton.addEventListener('click', drawCards);