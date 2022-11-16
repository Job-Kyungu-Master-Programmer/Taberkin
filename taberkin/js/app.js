// Display And Hide The Banner Search 

let searchButton = document.querySelector('#BtnOpenSearch');
let Search       = document.querySelector('.main-app__search-cantique');
let IconSearch   = document.querySelector('.main-app__span-input');

searchButton.addEventListener('click' , () => {
     Search.classList.toggle('CacheSearch');
    IconSearch.classList.toggle('ElementIcon');
});



//Open and Close the Menu Share 
let OpenShare   = document.querySelector('#Globe');
let MenuShare   = document.querySelector('.hero-app-item__header-share');
OpenShare.addEventListener('click' , () => {
    MenuShare.classList.toggle('OpenMenuShare');
});


//Open and Closed The Menu Language 
let OpenLanguage = document.querySelector('#Language');
let MenuLang     = document.querySelector('.hero-app-item__header-lang');
OpenLanguage.addEventListener('click' , () => {
     MenuLang.classList.toggle('OpenMenuLanguage');
});

