const diceEl = document.getElementById('dice');
const rollBtnEl = document.getElementById('roll-button');
const historyEl = document.getElementById('roll-history');

let historyList = [];

/**
 * Rolls a dice by generating a random number between 1 and 6, 
 * converts that to a dice face string, updates the DOM to 
 * display it, pushes the result to history, and updates the
 * roll history UI.
 */
function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    diceEl.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistory();
}

/**
 * Updates the roll history UI by clearing it and re-rendering 
 * the roll results in reverse chronological order.
 */
function updateRollHistory() {
    historyEl.innerHTML = ""; // Clear the existing content
    historyList.slice().reverse().forEach((rollResult, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Roll ${historyList.length - index}: `;
        listItem.innerHTML += `<span>${getDiceFace(rollResult)}</span>`;
        historyEl.appendChild(listItem);
    });
}



/**
 * Converts a dice roll result number to the corresponding emoji.
 */
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