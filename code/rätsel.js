const noBtn = document.querySelector('[data-nein-btn]');
const noMsg = document.querySelector('[data-no-message]');
const closeBtn = document.querySelector('[data-close]');

noBtn.addEventListener('click', (e) => {
    noMsg.style.display = 'flex';
})

closeBtn.addEventListener('click', (e) => {
    noMsg.style.display = 'none';
})