# FRONTEND-ESSENTIALS-2 - 02-Javascript - Taak02

## Functions

### Uitleg

#### Wat is een functie?

Een functie in Javascript (of elke andere programmeertaal) is een manier om je code op te delen in *op zichzelf staande*, *herbruikbare* stukken code. 

Je hebt al gebruik gemaakt van functies als je een `alert()`, `prompt()` of `confirm()` dialog box hebt gebruikt in je code. Er zijn nog veel meer functies die je standaard in elke browser kunt gebruiken. Voor alle functies geld dat je ze aanroept met de naam van de functie gevolgd door `()`. 

:zap: **FYI**: Javascript is een taal. Wat je eigenlijk zegt in die taal als je `prompt()` schrijft is: pak het stukje code genaamd `prompt` en voer dit uit `()`.

#### Zelf functies schrijven

Naast de ingebouwde functies kun je ook zelf functies maken. Zie onderstaande code.

```js
//declaratie van de functie
function toonAlertBox(){
    alert("Alert box opgeroepen door mijn eerste functie!");
}

//aanroep van de functie
toonAlertBox();
```
Bovenstaande code zal een alertbox tonen als je dit runt in je browser. 

Je maakt dus een eigen functie door het `function`-keyword te gebruiken gevolgd door de naam van je functie (die verzin je dus zelf) en `()` en `{}`. In het algemeen ziet elke functie er dus zo uit:

```js
function zelfVerzonnenNaam(){
    //code die wordt uitgevoerd
}
```
Er is meer te doen met functies dan we nu laten zien maar voor nu onthou dat je het `function`-keyword kan gebruiken om een functie te declareren en dat de code die dan wordt uitgevoerd tussen *accolades* (`{}`) staat.

### Leerdoelen

1. Ik kan een functie maken en deze aanroepen

### Opdracht

1. Schrijf 3 functies. 
   1. Een functie die een alert box toont met een willekeurige boodschap. 
   2. Een functie die een prompt toont en de ingevoerde tekst laat zien in de console.
   3. Een functie die: een confirmbox toont en, als de gebruiker op OK klikt, de tekst "Ok" in de console toont; en wanneer de gebruiker op CANCEL drukt de tekst "dan niet" in de console toont.

> :warning: LETOP: vergeet niet onderaan je code de 3 functies aan te roepen. 

### Eindresultaat

3 functies die ook worden aangeroepen in `script.js`.

### :heart: Bronnen

* [W3S - Javascript Functions](https://www.w3schools.com/js/js_functions.asp)  
* [Javascript.info - Functions](https://javascript.info/function-basics)