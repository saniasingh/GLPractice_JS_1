const img = document.getElementById("image");

let secs = 15;
let flag = false;

function countDown() {
   if(flag === false ){
      Decrement()
      flag = true;
   }

};

function Decrement() {

const seconds = document.getElementById("sec");
 seconds.value = secs;
 
 if(secs < 10){
    seconds.style.color = "red";
    seconds.style.fontSize = "60px";
    document.getElementById("msg").innerHTML = "Hurry Up!!";
 }

 if(secs < 0) {
    alert("Timeout");
    seconds.value = '00';
    document.getElementById("timeBox").innerHTML = "<h2>Time's Up.</h2>";
 } else {
    secs--;
    setTimeout('Decrement()', 1000);
 }

}