const monsters = [

    {
        id: 'gore',
        name: 'Gore Magala',
        title: 'The Black Eclipse',
        img: './assets/imgs/monster-img/Gore.webp',
        color: 'purple',
        info: "A dark presence has descended upon the region. Villages report strange frenzied creatures and a winged shadow cloaked in darkness. Track the source of the chaos, confront the Gore Magala, and end the spread of its corruption before the land is consumed."
    },

    {
        id: 'radobaan',
        name: 'Radobaan',
        title: 'The Bone-Crusher',
        img: './assets/imgs/monster-img/Radobaan.webp',
        color: 'grey',
        info: "A massive creature roams the Rotten Vale, dragging bones and decay in its wake. Its relentless movements threaten the balance of the ecosystem. Track the Radobaan, break through its armored shell, and put an end to its destructive rampage."
    },

    {
        id: 'stygian',
        name: 'Stygian Zinogre',
        title: 'Red Fur, Red Fury',
        img: './assets/imgs/monster-img/ZinogreS.webp',
        color: 'red',
        info: "An ominous howl echoes through the land as dragon energy surges unchecked. This corrupted Zinogre prowls relentlessly, its power growing with every strike. Face the storm, withstand its fury, and bring down the Stygian Zinogre before its wrath consumes everything."
    },
]
/* get node */
const heroSectionEl = document.getElementById('hero-section')
const cardsWrapperEl = document.getElementById('cards-wrapper')
const enterTheGuildButton = document.getElementById('enter-the-guild')
const questBoard = document.getElementById('quest-board')
const themeSong = new Audio('./assets/sound/Monster Hunter Original Soundtrack — Proof of a Hero (Main Theme.).mp3');



/* enter the guild */


enterTheGuildButton.addEventListener('click', function () {
    if (themeSong.paused) {
        themeSong.play().catch(error => {
            console.error("Il file audio non è stato trovato al percorso indicato:", error);
        });
        themeSong.volume = 0.2;
    }

    questBoard.classList.toggle('d-none');
    heroSectionEl.classList.add('d-none')
    this.classList.add('d-none')
});

/* forEach injection */
monsters.forEach(monster => {

    const monsterCard =

    `<div class="monster-card" id="${monster.id}" style= "--glow-color: ${monster.color}">
    <img class = "monster-img" src= "${monster.img}">
    <h3 class="monster-name">${monster.name}</h3>
    <p class="quest-name">${monster.title}</p>
    <div class="info-box">
    <button class="info-button">More Info</button>
    <div class = "more-info d-none">
    <p class = "quest-information ">${monster.info}</p>
    <div class="buttons-container">
    <button class = "accept-btn">Accept</button>
    <button class = "refuse-btn">Refuse</button>
    </div>
    </div>
    </div>
    </div>`;

    cardsWrapperEl.innerHTML += monsterCard

})

/* new nodes */
const moreInfoButtonEl = document.querySelectorAll('.info-button')
const moreInfoBoxEl = document.querySelectorAll('.more-info')
const acceptBtnEl = document.querySelectorAll('.accept-btn')
const refuseBtnEl = document.querySelectorAll('.refuse-btn')

moreInfoButtonEl.forEach((button) => {
    button.addEventListener('click', () => {
        /* find closest button */
        const card = button.closest('.monster-card')
        const infoBox = card.querySelector('.more-info');
        infoBox.classList.toggle('d-none')
    })
}) 



