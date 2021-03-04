let keuze = prompt("Wilt u een bericht encrypten kies dan optie 1 of wilt u een bericht decrypten kies dan 2.")

if(keuze == 1){
    let message = prompt("Wat wil je versleutelen?");
    let password = prompt("Wat is het wachtwoord?");
    
    var encrypted = CryptoJS.AES.encrypt(message, password);
    
    let check = confirm("Uw tekst is encrypt wilt u het zien of annuleren?");

    if(check == true){
        alert(encrypted);
        document.getElementById("tekst1").innerHTML = "encrypted:";
        document.getElementById("tekst2").innerHTML = encrypted;
        document.getElementById("tekst3").innerHTML = "wachtwoord:";
        document.getElementById("tekst4").innerHTML = password;
    }else{
        alert("dan niet...");
    }

}else if(keuze == 2){
    let message = prompt("Wat wil je ontcijferen?");
    let password = prompt("Wat is het wachtwoord?");

    var decrypted = CryptoJS.AES.decrypt(message, password);
    
    let check = confirm("Uw tekst is ontcijfert bevestig dat u het wilt zien.");
    if(check == true){
        document.getElementById("tekst1").innerHTML = "decrypted:";
        document.getElementById("tekst2").innerHTML = decrypted;
        document.getElementById("tekst3").innerHTML = "begrijpbaar:";
        document.getElementById("tekst4").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
    }else{
        alert("ok dan niet");
    }
}