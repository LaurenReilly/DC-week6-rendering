
function renderPokerHand(pokerHand) {
   var card = pokerHand.map(function(card) {
        return `
            <img src="${card.image}">
    `
    });
    return card.join("");
}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C",
            image:"king-c.png"
        },
        {
            value: "K",
            suit: "D",
            image: "king-d.png"
        },
        {
            value: "9",
            suit: "S",
            image: "nine-s.png"
        },
        {
            value: "2",
            suit: "H",
            image: "two-h.png"
        },
        {
            value: "9",
            suit: "H",
            image: "nine-h.png"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}