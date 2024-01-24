const diceEl = document.getElementById('dice');
const rollBtnEl = document.getElementById('roll-button');
const historyEl = document.getElementById('roll-history');

let historyList = [];

function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    diceEl.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistory();
}

function updateRollHistory() {
    historyEl.innerHTML = ""; // Clear the existing content
    historyList.slice().reverse().forEach((rollResult, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Roll ${historyList.length - index}: `;
        listItem.innerHTML += `<span>${getDiceFace(rollResult)}</span>`;
        historyEl.appendChild(listItem);
    });
}



function getDiceFace(rollResult) {
    switch (rollResult) {
        case 1:
            return '&#9856;';
        case 2:
            return '&#9857;';
        case 3:
            return '&#9858;';
        case 4:
            return '&#9859;';
        case 5:
            return '&#9860;';
        case 6:
            return '&#9861;';
        default:
            return '&#127922;';
    }
}

rollBtnEl.addEventListener('click', () => {
    diceEl.classList.add('roll-animation');
    setTimeout(() => {
        diceEl.classList.remove('roll-animation');
        rollDice();
    }, 1000);
});