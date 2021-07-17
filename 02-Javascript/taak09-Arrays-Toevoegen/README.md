# FRONTEND-ESSENTIALS-2 - 02-Javascript - Taak09

## Arrays

### Uitleg

#### Array push

Het handige van een lijstje is dat de lengte daarvan kan veranderen. Je kunt dingen verwijderen en dingen toevoegen. Om in javascript een element toe te voegen aan het einde van een array gebruik je de `array.push` methode. Zie onderstaande code:

```js
topFilms = ["The Godfather", "The Shawshank Redemption", "Schindler's List"];
topFilms.push("Tenet");
```
De array topFilms bestaat nu uit vier elementen met als laatste element (met als index 3) de film "Tenet". 

Omdat arrays dus dynamisch kunnen veranderen, wil je vaak ook weten hoeveel elementen er in een array zitten op een bepaald moment in je programma. Dit doe je door de `array.length` eigenschap (property) aan te spreken.

```js
topFilms = ["The Godfather", "The Shawshank Redemption", "Schindler's List"];
console.log(topFilms.length); // toont 3 in je console

topFilms.push("Tenet");
console.log(topFilms.length); // toont 4 in je console
```
 
In `index.html` zijn nu de gegevens uit de topFilms array in een `ordered list` geplaatst. De inhoud daarvan wordt gevuld vanuit `script.js` met behulp van een `for-loop`. Hierover later meer.

#### Waardes overzetten van 1 array in een andere
Stel dat je nu een nieuwe array wilt aanmaken met de top 3 films waarbij de volgorde is omgedraaid.

```js
topFilms = ["The Godfather", "The Shawshank Redemption", "Schindler's List"];
topFilmsOmgedraaid = []; //lege array, hierin komen de films uit topFilms in omgekeerde volgorde

topFilmsOmgedraaid.push(topFilms[2]); 
topFilmsOmgedraaid.push(topFilms[1]);
topFilmsOmgedraaid.push(topFilms[0]);

console.log(topFilmsOmgedraaid); // Toont het arrayobject waarbij de elementen van volgorde zijn veranderd.
```

### Leerdoelen

1. Ik kan een waarde toevoegen aan een array.

### Opdracht

1. Schrijf code die het volgende doet:
   1. Als je op de knop `Kies film voor plek 1` klikt, verschijnt er een prompt met de vraag welke film volgens de gebruiker op plek 1 moet staan.
   2. De gekozen filmnaam wordt toegevoegd aan de `eigenTopFilms`-array.
   3. De naam van de film wordt getoond in de console
   4. De naam van de film wordt in de `Eigen Top 3 Films` ordered list gezet
   5. De tekst op de button verandert van van `Kies film voor plek 1` naar `Kies film voor plek 2`, etc.
   6. Zorg ervoor dat er drie films een nieuwe plek krijgen in de `eigenTopFilms`-array en getoond worden in de ordered list `Eigen Top 3 Films` 
   7. :rocket: EXTRA: het is wel handig als de gebruiker ziet welke films hij al heeft gekozen. Je kunt dit op meerdere manieren oplossen, bedenk zelf een logische, duidelijke oplossing.
### Eindresultaat

![Eindresultaat](img/eindresultaat-top3films.gif)

### :heart: Bronnen

* [W3S Javascript Arrays](https://www.w3schools.com/js/js_arrays.asp)  
* [W3S Javascript Array push() method](https://www.w3schools.com/jsref/jsref_push.asp)