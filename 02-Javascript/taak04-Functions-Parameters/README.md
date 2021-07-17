# FRONTEND-ESSENTIALS-2 - 02-Javascript - Taak04

## Functions

### Uitleg

#### Parameters

In de voorgaande taken hebben we gezien hoe je een functie definieert met het `function`-keyword en hoe je een waarde terug kunt krijgen van een functie met het `return`-keyword. Er is nog één basisonderdeel van functies dat ervoor zorgt dat je echt handige herbruikbare code kan schrijven. Dit is het meegeven van een waarde aan een functie zodat je daarmee binnen de functie iets kunt doen.

Je doet dit door tussen de `()` in een functie definitie een **parameter** in te vullen. In onderstaande code is een functie gemaakt genaamd `doeIets` met een parameter `metDit`. Binnen de body van de functie kun je `metDit` gebruiken alsof het een variabele is. Net als bij variabelen verzin je de naam van een parameter zelf. 
```js
function doeIets(metDit){           //definitie van functie met een parameter
    console.log(metDit);            //body van functie (code die wordt uitgevoerd)
}

doeIets(10);                        //1ste aanroep: console toont 10
doeIets("Test string");             //2e aanroep: console toont Test String

let voorbeeldVariabele = 100;
doeIets(voorbeeldVariabele);        //3e aanroep: via een variabele, console toont 100
```
In bovenstaande code wordt de functie `doeIets` 3 keer aangeroepen met telkens een andere waarde. Het resultaat is dat er in de console het getal `10` wordt getoond, daarna de string `Test string` en daarna het getal `100`.

#### Meerdere parameters

Het komt vaak voor dat je meerdere gegevens wilt doorgeven aan een functie. Dit doe je door de parameters te scheiden met een komma (`,`). Zie onderstaande code.

```js
function telOp(getal1, getal2){
    let som = getal1 + getal2;
    return som;
}

console.log(telOp(5,6));
console.log(telOp(3,4));
console.log(telOp(200,210));
```
Bovenstaande code laat onder elkaar de volgende getallen zien: 11, 7 en 410. 

### Leerdoelen

1. Ik kan een functie maken die een of meerdere parameters bevat

### Opdracht

1. Schrijf code die het volgende doet:
   1. Vraag aan de gebruiker om twee keer een getal in te voeren d.m.v. prompts.
   2. Sla de opgegeven getallen op in variabelen.
   3. Schrijf een functie die de twee opgegeven getallen vermenigvuldigt en teruggeeft.
   4. Roep de vermenigvuldig-functie aan en toon de uitkomst in de console.

### Eindresultaat

De vermenigvuldiging van de twee opgegeven getallen wordt getoond in de console.

### :heart: Bronnen

* [W3S Javascript Function Parameters](https://www.w3schools.com/js/js_function_parameters.asp)
* [Javascript.info - Functions](https://javascript.info/function-basics)