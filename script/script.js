const NAVIGATION_ICON = document.querySelector('.navigation-icon');
const NAVIGATION_LIST = document.querySelector('.navigation-list');
const NAVIGATION_BTN = document.querySelector('.navigation-button');
const ABOUT_TEXT = document.querySelector('.aboutme-page-content p');
const LOGO_TEXT = document.querySelector('.logo-page p');

NAVIGATION_ICON.addEventListener('click', () => {
  NAVIGATION_LIST.style.display = 'flex';
  NAVIGATION_ICON.style.display = 'none';
});

NAVIGATION_BTN.addEventListener('click', () => {
  NAVIGATION_LIST.style.display = 'none';
  NAVIGATION_ICON.style.display = 'initial';
});

function desktopText() {
  if (screen.width > 768) {
    ABOUT_TEXT.innerHTML += 'So if you\'re a gamer and engaged in first person shooters games - CS:GO, Valorant, Apex Legends, COD Warzone and R6 Siege - we hope you\'ll consider joining us this year to build the biggest gaming event.';
    LOGO_TEXT.innerHTML += 'After online public voting and Selection Committee\'s judging process, the logo from Ariel Camus won the prize. After consultation with Mr. Camus we optimized the prize-winning-logo for this year\'s summit as following:';
  }
}
desktopText();