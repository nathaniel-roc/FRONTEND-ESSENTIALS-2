var huidigeKleur = "white";

function toonAlert(){
    alert("Je hebt op de knop gedrukt!");
}

function maakGroen(){
    document.querySelector("body").style.backgroundColor = "Green";
}

//TODO: maak 2 functies genaamd maakBlauw en maakRood


function veranderKleur(kleur){
    document.querySelector("body").style.backgroundColor = kleur;
    //TODO: verander de achtergrond kleur op basis van de meegegeven waarde in de kleur parameter
}