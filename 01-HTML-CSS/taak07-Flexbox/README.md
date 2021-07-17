# FRONTEND-ESSENTIALS-2 - 01 - HTML/CSS - Taak 07

## Basic HTML 

### Uitleg

Met Flexbox kun je gemakkelijker elementen positioneren. Je hebt al gebruik gemaakt van CSS-properties `align-items` en `justify-content`. Met als waarden `flex-start`, `flex-end` of `center`.

In deze taak gaan we dit nog een keer oefenen.

```html
<div class="dobbelsteen dobbelsteen1">
    <div class="stip"></div>
</div>
```
Bovenstaande code laat de HTML-structuur zien van de eerste dobbelsteen. Er zijn twee classes: `dobbelsteen` en `dobbelsteen1`. In `style.css` zijn er CSS-properties aangemaakt onder de `dobbelsteen`-class die zorgen voor de afgeronde hoeken, de achtergrondkleur, etc. Eigenschappen die *alle* dobbelstenen gemeen hebben. Properties die je wilt aanmaken voor een specifieke dobbelsteen kun je aanmaken door de `dobbelsteen1`-class aan te spreken in je CSS. Zie onderstaande CSS en wat dat oplevert eronder.

```css
.dobbelsteen1{
    align-items: center;
    justify-content: center;
}
```
![Dobbelstenen met container divs zichtbaar](img/dobbelstenen-container-vis.jpg)

Bovenstaande HTML en CSS levert de dobbelsteen met het getal 1 op. In bovenstaand plaatje zie je hoe bij de overige dobbelstenen er containers zijn aangemaakt. Aan jouw de taak om te kijken of je het voor elkaar krijgt om, als je van deze containers flexboxen maakt, je de stippen op de juiste positie kunt krijgen.

:zap: TIP: om een specifieke container met als classnaam bv. `links` aan te spreken kun je een samengestelde selector gebruikt zoals b.v. `dobbelsteen2 .links{}` om alleen de donkergrijs gekleurde `div` met de class `.links` van dobbelsteen nr.2 te stijlen.


### Leerdoelen

1. Ik kan samengestelde selectors gebruiken om onderscheid te maken tussen schijnbaar gelijke elementen.
2. 

### Opdracht

1. Maak de dobbelstenen af. De structuur staat al in `index.html`, laat deze staan zoals die is. Je hoeft alleen de CSS af te maken.

### Eindresultaat

![Eindresultaat](img/eindres-dobbelstenen.jpg)

### :heart: Bronnen

* [Emmet.io](https://www.emmet.io/)  
* [Emmet Cheatsheet](https://docs.emmet.io/cheat-sheet/)
* [Flexbox op Scrimba](https://scrimba.com/learn/flexbox)