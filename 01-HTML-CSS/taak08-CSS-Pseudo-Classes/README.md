# FRONTEND-ESSENTIALS-2 - 01 - HTML/CSS - Taak 08

## Basic HTML 

### Uitleg

Zoals je weet gebruik je HTML voor de structuur van een website, CSS voor de vormgeving en Javascript voor de interactie / berekeningen. Gedurende de ontwikkeling van de CSS-standaard zijn er echter steeds meer dingen die eerst alleen met Javascript konden, ingebouwd in CSS en kun je ook simpele dingen als mouse-over-veranderingen met alleen CSS-code oplossen.

Zo kun je bijvoorbeeld aangeven dat een link actief is of gemakkelijk een mouseover style toekennen. Dit doe je met zogenaamde **pseudo selectors**. In deze taak gaan we er twee uitlichten die het maken van een gebruiksvriendelijk menu voor je website wat gemakkelijker maken.

Zoals je weet wordt een menu vaak gemaakt in HTML met een **unordered list** met daarin links naar de verschillende paginas. 

```html
<ul class="menu">
    <li><a href="index.html">Home</a></li>
    <li><a href="page1.html">Page 2</a></li>
    <li><a href="page2.html">Page 3</a></li>
</ul>
```

### Leerdoelen

1. Ik kan een menu maken van een unordered list en deze stijlen met pseudo class :hover om zo een gebruiksvriendelijker menu te maken.

### Opdracht

1. Maak in `index.html` een unordered list met 5 list items aan met in elk list item een link naar een html bestand.
2. Zorg ervoor dat de andere html bestanden ook het menu bevatten zodat je heen en weer kunt klikken tussen de menu opties. 
3. Zorg ervoor dat de achtergrond kleur van de menu opties veranderd als je met je muis over de optie beweegt.
4. EXTRA: 
   1. Maak er een horizontaal menu van. Dit kan met 1 regel CSS code.
   2. Zorg ervoor dat de bullet points van de unordered list niet meer zichtbaar zijn.
   3. Voeg padding en margin toe om het menu mooier te stijlen.


### Eindresultaat

Een menu waarvan de achtergrond kleur van de menuopties veranderd als je met je muis erover beweegt.

### :heart: Bronnen

* [W3S Pseudo Classes](https://www.w3schools.com/Css/css_pseudo_classes.asp)  
* [Emmet.io](https://www.emmet.io/)  
* [Emmet Cheatsheet](https://docs.emmet.io/cheat-sheet/)