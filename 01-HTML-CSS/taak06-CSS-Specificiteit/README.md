# FRONTEND-ESSENTIALS-2 - 01 - HTML/CSS - Taak 06

## Basic HTML 

### Uitleg

Tot nu toe hebben we met de simpelste selectors gewerkt.

```css
div{ /* element selector */
    property: value;        /*in het nederlands is dit eigenschap: waarde; */
}           

.een-class{ /* class selector */
    property: value;
}     

#een-id{ /* id selector */
    property: value;
}
```

De CSS-regels in bv. `style.css` worden van boven naar onder toegepast. De laatste toekenning van een waarde geldt. Daarnaast worden regels toegepast op elementen op basis van hoe specifiek de **selector** is die wordt gebruikt. 

Bijvoorbeeld: De `div` selector is heel erg algemeen, alle `div` elementen krijgen de CSS-stijlen toegepast die in de body van de CSS-regel staan. Als je één `div` voorziet van een class en de regels spreken elkaar tegen dan wint de regel die je bij de class definieert. Als je een id meegeeft dan overschrijft die weer ook de class CSS regel. Zie onderstaand voorbeeld.

```css
div{
    /* alle divs worden blauw */
    background-color: blue;
}

.class-toegekend-aan-een-div{
    /* alle divs met deze class worden rood */
    background-color: red;
}

#id-toegekend-aan-een-div{
    /* Eén specieke div wordt groen */
    background-color: green;
}
```
Dit noem je CSS-specificity. 

In deze taak gaan we via een online game leren over hoe selectors kunt opbouwen zodat je elementen kunt stijlen zonder elk element een eigen class te geven.


### Leerdoelen

1. Ik ken de verschillende manieren om een HTML-element te selecteren vanuit CSS

### Opdracht

1. Speel alle levels in het online spel [CSS Diner](https://flukeout.github.io/)

### Eindresultaat

Je hoeft niet alles te onthouden. Zorg ervoor dat je begrijpt welke mogelijkheden je ongeveer hebt. Je kunt altijd later weer opzoeken hoe je bv. een element in een ander element selecteert.

### :heart: Bronnen

* [W3S CSS Specificity](https://www.w3schools.com/css/css_specificity.asp)  
* [CSS Diner](https://flukeout.github.io/)  
