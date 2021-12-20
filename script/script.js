const NAVIGATION_MENU = document.querySelector('.navigation-menu');
const NAVIGATION_ICON = document.querySelector('.navigation-icon');
const NAVIGATION_LIST = document.querySelector('.navigation-list');
const NAVIGATION_BTN = document.querySelector('.navigation-button');
const MAIN_FEATURED = document.querySelector('.main-featured');

NAVIGATION_ICON.addEventListener('click', () => {
  NAVIGATION_LIST.style.display = 'flex';
  NAVIGATION_ICON.style.display = 'none';
});

NAVIGATION_BTN.addEventListener('click', () => {
  NAVIGATION_LIST.style.display = 'none';
  NAVIGATION_ICON.style.display = 'initial';
});

const FIRST_FEATURED_PLAYERS = [
{
  Img: './images/mobile/main-page/s1mple.png',
  Name: 'Aleksandr \'s1mple\' Kostyliev',
  Role: 'Professional CS:GO player playing for NaVi Team',
  Description: 's1mple is an Ukrainian profesisonal player, he has won 18 HLTV MVP Medals, a Major and has been crowned as the best player of 2018, 2019 and 2020.',
},
{
  Img: './images/mobile/main-page/TenZ.jpg',
  Name: 'Tyson \'TenZ\' Ngo',
  Role: 'Professional VALORANT player playing for Sentinels Team',
  Description: 'TenZ is a Canadian professional player, he is an aspiring Valorant streamer and a competitor.',
},
];

const NEXT_FEATURED_PLAYERS = [
{
  Id: '3',
  Img: './images/mobile/main-page/ImperialHal.jpg',
  Name: 'Phillip \'ImperialHal\' Dosen',
  Role: 'Professional Apex Legends player playing for TSM Team',
  Description: 'ImperialHal is an American professional player, playing Apex Legends since 2019 and winning 10 awards.',
},
{
  Id: '4',
  Img: './images/mobile/main-page/HusKerrs.jpg',
  Name: 'Jordan \'HusKerrs\' Thomas',
  Role: 'Professional COD Warzone player and streamer playing for NRG Team',
  Description: 'HusKerrs is an American professional player and the first to earn $100K in Warzone.',
},
{
  Id: '5',
  Img: './images/mobile/main-page/Pengu.png',
  Name: 'Niclas \'Pengu\' Mouritzen',
  Role: 'Professional Rainbow Six Siege player playing for G2 Esports',
  Description: 'Pengu is a Danish professional player, considered by far and away the best player in the world.'
},
{
  Id: '6',
  Img: './images/mobile/main-page/ZywOo.jpg',
  Name: 'Mathieu \'ZywOo\' Herbaut',
  Role: 'Professional CS:GO player playing for Team Vitality',
  Description: 'ZywOo is a French professional player, he is one of the best CS:GO players in the world.'
}];

function loadFirstFeatured () {
for (let i = 0; i < FIRST_FEATURED_PLAYERS.length; i += 1) {
  const FIRST_PLAYERS = 
`<div class="featured-player">
  <img src=${FIRST_FEATURED_PLAYERS[i].Img}>
  <div class="player-description">
  <h4>${FIRST_FEATURED_PLAYERS[i].Name}</h4>
  <h5>${FIRST_FEATURED_PLAYERS[i].Role}<hr></h5>
  <p>${FIRST_FEATURED_PLAYERS[i].Description}</p>
  </div>
</div>`
MAIN_FEATURED.innerHTML += FIRST_PLAYERS;
}
}

loadFirstFeatured();

let MORE_BUTTON = document.createElement('button');
MORE_BUTTON.type = 'button';
MORE_BUTTON.innerHTML = 'MORE';
MORE_BUTTON.classList.add('web-button');
MAIN_FEATURED.appendChild(MORE_BUTTON);

let LESS_BUTTON = document.createElement('button');
LESS_BUTTON.type = 'button';
LESS_BUTTON.classList.add('web-button');
LESS_BUTTON.innerHTML = 'LESS';

MORE_BUTTON.addEventListener('click', () => {
  MORE_BUTTON.style.display = 'none';
  for (let i = 0; i < NEXT_FEATURED_PLAYERS.length; i += 1) {
  const NEXT_PLAYERS = 
`<div class="featured-player" id="${NEXT_FEATURED_PLAYERS[i].Id}">
  <img src=${NEXT_FEATURED_PLAYERS[i].Img}>
  <div class="player-description">
  <h4>${NEXT_FEATURED_PLAYERS[i].Name}</h4>
  <h5>${NEXT_FEATURED_PLAYERS[i].Role}<hr></h5>
  <p>${NEXT_FEATURED_PLAYERS[i].Description}</p>
  </div>
</div>`
MAIN_FEATURED.innerHTML += NEXT_PLAYERS;
  }
MAIN_FEATURED.appendChild(LESS_BUTTON);
});

