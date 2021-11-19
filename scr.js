var message1 = "Trenn ja toitumine";
var message2 = "Ei tea, mida enne ja pärast trenni süüa?" + "<br>" + "Chubby aitab sind.";
var msgCount = 0;
var blinkCount = 0;
var blinkFlg = 0;
var timer1, timer2;
var messageLabel = document.getElementById("1message");
var messageLabel2 = document.getElementById("hellou");

messageLabel2.innerHTML = message2.substring(0, 0);

function textFunc(message, msgLabel) {

   if (message.charAt(msgCount) == "<" ) {
        msgCount += 3
        msgLabel.innerHTML = message.substring(0, msgCount);
   } else {
        msgLabel.innerHTML = message.substring(0, msgCount);
   }
   
   if (msgCount == message.length && msgCount > 20) {
      // Stop Timer
      clearInterval(timer2);
   }
    else if (msgCount == message.length) {
        // Stop Timer
        clearInterval(timer1);
        msgCount = 0
        timer2 = setInterval("textFunc(message2,messageLabel2)", 50); 

      
   } else {
      msgCount++;
   }
}



timer1 = setInterval("textFunc(message1,messageLabel)", 110); 
