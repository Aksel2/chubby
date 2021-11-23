var message1 = "Trenn ja toitumine"; // Esimene tekst
var message2 = "Ei tea, mida enne ja pärast trenni süüa?" + "<br>" +"<br>" + "Chubby aitab sind."; // Teine tekst
var msgCount = 0; // Mitu sümbolit tahame näidata alates nullist
var timer1, timer2; // Muutujad, kuhu salvestame funktsiooni setInterval ID
var messageLabel = document.getElementById("1message"); 
var messageLabel2 = document.getElementById("hellou");
// Muutujad koos lingiga html-failile

messageLabel2.innerHTML = message2.substring(0, 0); // selleks, et tekstid ilmuksid teine teise järel (alumine tekst pole nähtav, kui esimene on)

function textFunc(message, msgLabel) {
// esimene if plokk
   if (message.charAt(msgCount) == "<" ) { // kui saame aru, et viimane sümbol on <
        msgCount += 3 // suureneb kolme võrra selleks, et lasta üle < märgi, muidu ta loeb seda tekstiks
        msgLabel.innerHTML = message.substring(0, msgCount);
   } else {
        msgLabel.innerHTML = message.substring(0, msgCount);
   }
   // teine if plokk 
   if (msgCount == message.length && msgCount > 20) { // alumise teksti intervall lülitub välja
      // taimer stopp
      clearInterval(timer2);
   }
    else if (msgCount == message.length) { // ülemise teksti intervall lülitub välja
        // taimer stopp
        clearInterval(timer1);
        msgCount = 0
        timer2 = setInterval("textFunc(message2,messageLabel2)", 50); // paneb funktsiooni tööle iga n-millisekundi järel (viimane number)

      
   } else {
      msgCount++; // suureneb iga kord ühe võrra (sama, mis näiteks x = x+1)
   }
}



timer1 = setInterval("textFunc(message1,messageLabel)", 110); // paneb funktsiooni tööle iga n-millisekundi järel (viimane number)