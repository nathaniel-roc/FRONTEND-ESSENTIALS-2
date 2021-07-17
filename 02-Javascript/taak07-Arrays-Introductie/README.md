# FRONTEND-ESSENTIALS-2 - 02-Javascript - Taak07

## Arrays

### Uitleg

In deze taak gaan we aan de slag met arrays. Je bent al bekend met variabelen. In een variabele kun je één waarde opslaan. Maar soms wil je dat je programma een hele lijst aan gegevens bijhoudt. Neem als voorbeeld een top 10 lijstje met films. Je kunt de naam van elke film opslaan in een variabele:

```js
film0 = "The Godfather";
film1 = "The Shawshank Redemption";
film2 = "Schindler's List";
film3 = "Raging Bull";
film4 = "Casablanca";
film5 = "Citizen Kane";
film6 = "Gone with the Wind";
film7 = "The Wizard of Oz";
film8 = "One Flew Over the Cuckoo's Nest";
film9 = "Lawrence of Arabia";
```
Dit wordt als snel onhandig. Wat als je een film wilt toevoegen? Of de volgorde wilt veranderen? Omdat het vaak voorkomt dat je een lijstje van gegevens gebruikt in een programma bestaat er een speciale soort variabele voor: de array. In een array kun je meerdere waardes opslaan. Eigenlijk is het niet anders dan een lijstje:

```js
topFilm = []; //definieer een lege array genaamd topFilm
```

```js
topFilms = ["The Godfather", "The Shawshank Redemption", "Schindler's List"]; //een gevulde array met top 3 films
```
:zap: Zoals je ziet definieer je een array door tussen twee vierkante haakjes (`[ ]`) waardes op te geven gescheiden door een komma (`,`). Eén zo'n waarde in een array noem je een **element** van de array. De `topFilms` array in bovenstaande code bevat dus 3 **elementen**.

Je kunt allerlei verschillende datatypes opslaan in een array (al dan niet gemengd). Meestal sla je maar 1 soort datatype op in een array, dat is wel zo overzichtelijk.
```js
//een gevulde array met 3 getallen
topGetallen = [433, 321, 201]; 

//een gevulde array met 3 soorten datatype (string, integer en boolean)
topAllerlei = ["Dit is een string", 321, true]; 
```

Oké, maar hoe haal je nu gegevens op uit een array? In het geval van de `topFilms`-array, haal je de waarde op door de array aan te spreken gevolgd door `[ ]` met daarin de **index** van het **element**. Zie onderstaande code:
```js
topFilms = ["The Godfather", "The Shawshank Redemption", "Schindler's List"]; //definitie van array
console.log(topFilms[1]); //toont "The Shawshank Redemption" in de console
```
Welke film naam wordt er nu getoond in je console? Je zou denken dat `"The Godfather"` als tekst in je console verschijnt. Maar dat is niet het geval. **Arrays beginnen namelijk altijd met tellen vanaf 0**, dus:
```js
topFilms = ["The Godfather", "The Shawshank Redemption", "Schindler's List"]; //definitie van array
console.log(topFilms[0]); //geeft "The Godfather"
console.log(topFilms[1]); //geeft "The Shawshank Redemption"
console.log(topFilms[2]); //geeft "Schindler's List"
console.log(topFilms[3]); //geeft een array foutmelding want er bestaat geen element met index gelijk aan 3
```

### Leerdoelen

1. Ik kan een array aanmaken in Javascript en ik kan waardes uit een array halen en tonen in de console.

### Opdracht

1. Maak 3 arrays aan in `script.js` met telkens een andere persoonlijke top 3. Dit mogen film, games, muziek of iets anders (wat je maar wilt) zijn. 
2. Toon de inhoud van alle elementen in de 3 arrays in je console (dat betekent dus negen(!) `console.log`-statements).

### Eindresultaat

Een lijstje van negen top3-dingen getoond in de console van je browser

### :heart: Bronnen

* [W3S Javascript Arrays](https://www.w3schools.com/js/js_arrays.asp)
* [Javascript.info Arrays](https://javascript.info/array)