//Adventure Game 
//14-12-2020.

//Variabelen met de getElementById van de container,title,description.
var container = document.getElementById('game-container');
var titel = document.getElementById('title');
var description = document.getElementById('description');
//De variabelen met getElementById van de buttons.
var gameButtons = document.getElementById('game-buttons');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');

//Variabele met de getElementById van de inventory item.
var inventory = document.getElementById('inventoryItem');
inventory.style.display = "none";

function intro1(){
    container.style.backgroundImage = "url(img/mainImg.png)";
    container.style.backgroundRepeat  = "no-repeat";
        titel.innerHTML = 'THE LOST MASK.';
        titel.style.paddingLeft = "50px";
        description.innerHTML = 'Druk op de middelste knop';
        description.style.paddingLeft = "90px";
            inventory.style.display = "none";
        button1.innerHTML = "--->";
        button2.innerHTML = "klik hier";
        button3.innerHTML = "<---";

}
//intro1();//De intro functie.

function intro2(){
    gameButtons.style.display = "none";
    titel.innerHTML = "Storyline";
    description.innerHTML = 
    "Welkom bij THE LOST GAME een game waar jij de masker van Vigil<br> van zijn die een held was in zijn stad. Maar nu is het jou taak om<br> de stad te beschermen tegen de boeven die jouw volk proberen te beroven.<br>Vigil zijn 2 wapens zijn verstopt in 2 verschillende schuiplaatsen.<br> Maar gevaar zit op de loer.";

}

intro2();
