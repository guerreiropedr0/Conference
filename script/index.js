const FEATURED_PLAYERS = [
{
  Id: '1',
  Img: './images/mobile/main-page/s1mple.png',
  Name: 'Aleksandr \'s1mple\' Kostyliev',
  Role: 'Professional CS:GO player playing for NaVi Team',
  Description: 's1mple is an Ukrainian profesisonal player, he has won 18 HLTV MVP Medals, a Major and has been crowned as the best player of 2018, 2019 and 2020.',
},
{
  Id: '2',
  Img: './images/mobile/main-page/TenZ.jpg',
  Name: 'Tyson \'TenZ\' Ngo',
  Role: 'Professional VALORANT player playing for Sentinels Team',
  Description: 'TenZ is a Canadian professional player, he is an aspiring Valorant streamer and a competitor.',
},
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

let MORE_BUTTON = document.createElement('button');
MORE_BUTTON.type = 'button';
MORE_BUTTON.innerHTML = 'MORE';
MORE_BUTTON.classList.add('web-button');

let MORE_ICON = document.querySelector('i');
MORE_ICON.classList.add('fa', 'fa-angle-down');
MORE_BUTTON.appendChild(MORE_ICON);


function loadFirstFeatured () {
  if(screen.width < 768) {
    for (let i = 0; i < 2; i += 1) {
    const FIRST_PLAYERS = 
    `<div class="featured-player">
      <img src=${FEATURED_PLAYERS[i].Img}>
      <div class="player-description">
       <h4>${FEATURED_PLAYERS[i].Name}</h4>
       <h5>${FEATURED_PLAYERS[i].Role}<hr></h5>
        <p>${FEATURED_PLAYERS[i].Description}</p>
      </div>
    </div>`
    MAIN_FEATURED.innerHTML += FIRST_PLAYERS;
    }
  } else if (screen.width > 768) {
    MORE_BUTTON.style.display = 'none';
    for (let i = 0; i < FEATURED_PLAYERS.length; i += 1) {
      const ALL_PLAYERS =
    `<div class="featured-player">
      <img src=${FEATURED_PLAYERS[i].Img}>
      <div class="player-description">
       <h4>${FEATURED_PLAYERS[i].Name}</h4>
       <h5>${FEATURED_PLAYERS[i].Role}<hr></h5>
        <p>${FEATURED_PLAYERS[i].Description}</p>
      </div>
    </div>`
    MAIN_FEATURED.innerHTML += ALL_PLAYERS;
    }
  }
}
loadFirstFeatured();
MAIN_FEATURED.appendChild(MORE_BUTTON);

MORE_BUTTON.addEventListener('click', () => {
  MORE_BUTTON.style.display = 'none';
  for (let i = 2; i < FEATURED_PLAYERS.length; i += 1) {
  const NEXT_PLAYERS = 
`<div class="featured-player" id="${FEATURED_PLAYERS[i].Id}">
  <img src=${FEATURED_PLAYERS[i].Img}>
  <div class="player-description">
  <h4>${FEATURED_PLAYERS[i].Name}</h4>
  <h5>${FEATURED_PLAYERS[i].Role}<hr></h5>
  <p>${FEATURED_PLAYERS[i].Description}</p>
  </div>
</div>`
MAIN_FEATURED.innerHTML += NEXT_PLAYERS;
  }
});