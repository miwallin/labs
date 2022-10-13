const drawButton = document.querySelector('#drawbutton');

const setImage = image => {
    let cardDiv = document.querySelector('#cardholder');
    let card = document.createElement('img');
    card.setAttribute('src', image);
    cardDiv.innerHTML = ('');
    cardDiv.appendChild(card);
};

const drawCard = () => {
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    .then((response) => response.json())
    .then((data) => { 
        console.log(data);
        setImage(data.cards[0].image);
    });
};

drawButton.addEventListener('click', drawCard);