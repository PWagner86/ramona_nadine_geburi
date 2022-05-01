const RESULT = 25 + 4 + 1987 + 8 + 5 + 1990;
const enterBtn = document.querySelector('[data-enter-btn]');
const input = document.querySelector('input');
const message = document.querySelector('[data-message]');
const counter = document.querySelector('[data-counter]');
const resultText = document.querySelector('[data-text]');
const gameState = document.querySelector('[data-game-state]');

let i = 90;

let timer = setInterval(() => {
    counter.innerHTML = `Übrigens....ihr händ nu na <br /><span>${i}</span> Sekunde <br /> Ziit.`;
    if(i > 0){
        i--;
    }else{
        gameState.innerHTML = `
            <h2>Ihr händs nid gschafft. Sehr schad. Viellicht klappets ja bim nächste Geburtstag</h2>
            <a href="./rätsel.html">Zeitreise zum nächsten Geburtstag</a>
        `;
        gameState.classList.add('show');
        clearInterval(timer);
    }
}, 1000)


input.focus();

window.addEventListener('keydown', (e) => {

    switch(e.key){
        case "Enter":
            if(input.value === RESULT.toString()){
                clearInterval(timer);
                resultText.textContent = 'Richtig!!!'
                setTimeout(() => {
                    gameState.innerHTML = `
                        <h1>Gratuliere<br /> ihr händ s Rätsel glöst</h1>
                        <img src="../design/treasure.gif">
                    `;
                    gameState.classList.add('show');
                }, 2000)
            }else{
                resultText.textContent = 'Das isch leider falsch.';
                input.value = '';
                input.focus();
            };
        default:
            return
    }
});

