let naam;
let check;
naam = prompt("hoe heet je?");
check = confirm("je heet dus " + naam + "?");
if(check == true){
    alert("wow " + naam + " is een hele coole naam hoor!");
}else{
    naam = prompt("Hoe heet je dan wel?");
    check = confirm("Weet je zeker dat je " + naam + " heet?");
    if(check == true){
        alert("wow " + naam + " is een hele coole naam hoor typ het de volgende keer wel gelijk even goed!");
    }else{
        alert("Ja nou heb je gewoon pech ik ga je het niet nog een keer vragen");
    }
}