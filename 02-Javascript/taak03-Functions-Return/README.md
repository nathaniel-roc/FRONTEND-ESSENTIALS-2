# FRONTEND-ESSENTIALS-2 - 02-Javascript - Taak03

## Functions

### Uitleg

#### Return-statements

Als je een functie aanroept, kun je aangeven dat je iets terug wilt krijgen van die functie. Dit geef je aan in het codeblock van de functie met het `return`-keyword.

```js
function geefGetalTerug(){
    return 10;
}

console.log(geefGetalTerug());
```
Bovenstaande code zal het getal 10 laten zien in je console.

Dit is natuurlijk niet echt een handige functie. Het wordt al beter als je de functie iets nuttigs laat doen zoals getallen optellen en het antwoord teruggeven. 

Als voorbeeld maken we een functie die een random getal teruggeeft. Javascript heeft een ingebouwd `Math`-object dat allemaal handige functies bevat die iets met rekenen en wiskunde te maken hebben.

De `Math.random()` functie geeft een willekeurig (random) getal terug tussen 0 en 1, bv. 0.5870716524545631. Zo op het eerste gezicht heb je hier nog niet veel aan. Om er een geheel getal van bv. tussen de 1 en 100 te maken moeten we er nog een berekening uitvoeren.

```js
function geefRandomGetalTerug(){                    //randomGetal =
    let randomGetal = Math.random();                //0.54654983435
    randomGetal = randomGetel *100 + 1;             //54.654983435
    randomGetal = Math.floor(randomGetal);          //54
    return randomGetal;
}

console.log(geefRandomGetalTerug());                //het getal 54 wordt getoond in de console

```
Bovenstaande code laat een random getal zien in je console tussen 1 en 100. De code is opgedeeld in 4 stappen zodat je goed kan zien hoe de waarde van `randomGetal` bij elke stap verandert. Kun je afleiden van de code wat `Math.floor()` doet? (de tegenhander van `Math.floor` is `Math.ceil`, zie [Bronnen](#heart-bronnen)).


:zap: Een functie die bij een object hoort, noem ook wel een `method`. Dus het object `Math` heeft een aantal handige *methods* om mee te rekenen. 

### Leerdoelen

1. Ik kan een functie maken die een waarde teruggeeft.

### Opdracht

1. In `script.js` is een functie genaamd `geefRandomGetalTerug` voor je aangemaakt. Zorg ervoor dat deze functie een random getal teruggeeft tussen 1 en 10.
2. In de voorbeeldcode worden 4 regels code gebruikt. Zorg ervoor dat je maar 1 regel code gebruikt.   
   :rocket: TIP: De regel begint natuurlijk met het `return`-keyword en de `randomGetal`-variabele, die in de tussenstappen wordt gebruikt, vervalt.
3. Zorg ervoor dat er 10 random getallen onder elkaar in de console worden getoond.


### Eindresultaat



### :heart: Bronnen

* [W3S Javascript Functions](https://www.w3schools.com/js/js_functions.asp)
* [Javascript.info - Functions](https://javascript.info/function-basics) 
* [W3S Javascript random() Method](https://www.w3schools.com/jsref/jsref_random.asp)  
* [W3S Javascript floor() Method](https://www.w3schools.com/jsref/jsref_floor.asp)  
* [W3S Javascript ceil() Method](https://www.w3schools.com/jsref/jsref_ceil.asp)  