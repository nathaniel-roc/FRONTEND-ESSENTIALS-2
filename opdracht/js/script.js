function mijnencode(input, code) {
    newInput = split(input, "");
    number = 0;
    newInput.forEach((newInputLos) => {
        number++;
      switch (newInputLos) {
        case a:
          code = number + "." + 232 * code / 5.9590705996;
          break;
        case b:
          code = number + "." + 124 * code / 4.5577053781;
          break;
        case c:
          code = number + "." + 758 * code / 5.2786961881;
          break;
        case d:
          code = number + "." + 467 * code / 8.9611552916;
          break;
        case e:
          code = number + "." + 944 * code / 4.7614157284;
          break;
        case f:
          code = number + "." + 749 * code / 8.8379891963;
          break;
        case g:
          code = number + "." + 131 * code / 3.3064945195;
          break;
        case h:
          code = number + "." + 365 * code / 2.940694154;
          break;
        case i:
          code = number + "." + 967 * code / 0.4044448886;
          break;
        case j:
          code = number + "." + 347 * code / 9.9080496393;
          break;
        case k:
          code = number + "." + 146 * code / 4.6273615133;
          break;
        case l:
          code = number + "." + 523 * code / 9.2455228003;
          break;
        case m:
          code = number + "." + 621 * code / 3.2944629429;
          break;
        case n:
          code = number + "." + 345 * code / 6.5110457857;
          break;
        case o:
          code = number + "." + 835 * code / 0.1754561275;
          break;
        case p:
          code = number + "." + 462 * code / 4.8675159225;
          break;
        case q:
          code = number + "." + 242 * code / 5.4942149072;
          break;
        case r:
          code = number + "." + 144 * code / 8.6355354848;
          break;
        case s:
          code = number + "." + 367 * code / 7.2731111179;
          break;
        case t:
          code = number + "." + 245 * code / 5.5747094217;
          break;
        case u:
          code = number + "." + 456 * code / 1.1042273721;
          break;
        case v:
          code = number + "." + 254 * code / 7.5730889051;
          break;
        case w:
          code = number + "." + 936 * code / 8.2752553328;
          break;
        case x:
          code = number + "." + 345 * code / 9.7146247754;
          break;
        case y:
          code = number + "." + 947 * code / 9.5215790478;
          break;
        case z:
          code = number + "." + 735 * code / 4.6958155113;
          break;
      }
    });
  }
  
  let keuze = prompt(
    "Wilt u een bericht encrypten kies dan optie 1 of wilt u een bericht decrypten kies dan 2."
  );
  
  if (keuze == 1) {
    let message = prompt("Wat wil je versleutelen?");
    let password = prompt("Wat is het wachtwoord?");
  
    var encrypted = CryptoJS.AES.encrypt(message, password);
  
    let check = confirm("Uw tekst is encrypt wilt u het zien of annuleren?");
  
    if (check == true) {
      alert(encrypted);
      document.getElementById("tekst1").innerHTML = "encrypted:";
      document.getElementById("tekst2").innerHTML = encrypted;
      document.getElementById("tekst3").innerHTML = "wachtwoord:";
      document.getElementById("tekst4").innerHTML = password;
    } else {
      alert("dan niet...");
    }
  } else if (keuze == 2) {
    let message = prompt("Wat wil je ontcijferen?");
    let password = prompt("Wat is het wachtwoord?");
  
    var decrypted = CryptoJS.AES.decrypt(message, password);
  
    let check = confirm("Uw tekst is ontcijfert bevestig dat u het wilt zien.");
    if (check == true) {
      document.getElementById("tekst1").innerHTML = "decrypted:";
      document.getElementById("tekst2").innerHTML = decrypted;
      document.getElementById("tekst3").innerHTML = "begrijpbaar:";
      document.getElementById("tekst4").innerHTML = decrypted.toString(
        CryptoJS.enc.Utf8
      );
    } else {
      alert("ok dan niet");
    }
  }
  