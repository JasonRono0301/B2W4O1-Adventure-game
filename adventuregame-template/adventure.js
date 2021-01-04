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

//Een variabele met een aangemaakte Element voor de plaatjes die ik kan toevoegen in de container.
var image = document.createElement('img');
document.getElementById('game-container').appendChild(image);
image.setAttribute("id","image");

function mainGame(){
    titel.innerText = "The Lost Mask.";
    description.innerText = "Druk op start.";
    button1.innerHTML = "Start";
    button1.addEventListener('click',storyLine);
    button2.style.visibility = "hidden";
    button3.style.visibility = "hidden";
    image.src = "img/start/masker.jpg";
    image.style.width = "800px";
    inventory.style.visibility = "hidden";

    function storyLine(){
        titel.innerText = "Story line";
        description.innerText = 
        "Welkom bij de game The Lost Mask. Jij bent Vigil een geheime beschermer van jouw volk. Jouw volk word geteisterd door rovers die jouw volk probeert te roven van geld. Maar voordat jij ten strijden kan gaan tegen de rovers heb je een masker nodig zodat jij je identiteit kan verbergen en die speciale masker vind je in de grote mueseum in de grote stad. Maar kijk uit gevaar is altijd op de loer. ";
        button1.innerText = "Verder";
        button1.addEventListener('click',lvl1);
    }//Einde van de storyLine.

    function lvl1(){
        titel.innerText = "Level 1: Test";
        description.innerText = "Laten we beginnen met een oefening bij deze oefening is het belangrijk dat je de juiste keuze maakt succes.";
        inventory.style.display = "none";
        button1.innerText = "begin";
        button1.addEventListener('click',vragen);
        image.src = "img/lvl1/vraagteken.png";
        image.style.height = "600px";
        
        function vragen(){
            titel.innerText = '';
            description.innerText = "Zou jij een makkelijk voorwerp dat zwaar bewaakt is meteen erop afgaan of het sneaky aanpakken.?";
            button1.innerText = "Actie";
            button2.innerText = "Sneaky";
            button3.innerText = "Niks doen";

            button1.onclick = failed;
            button3.onclick = failed;
            button2.onclick = succes;

            function failed(){
                alert('Dit antwoord is fout');
            };
            
            function succes(){
                alert('Dit antwoord is goed. Je gaat nu naar level 2');
                lvl2();
            }

            if(button1.style.visibility = "visible"){
                button2.style.visibility = "visible";
                button3.style.visibility = "visible";
            }
        }//Einde van level 1.   
        
    }
}//Einde van de main game functie.
//mainGame();

function lvl2(){
    titel.innerText = "Level 2: Pak je uitrusting.";
    description.innerText = "Pak je uitrusting om verder te gaan.";
}

mainGame();







