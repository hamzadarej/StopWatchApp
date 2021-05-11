var tens = "00";
var seconds = "00";

function starWatch() {
  seconds++;
  if (seconds < 9) {
    seconds = "0" + seconds;
  }
  if (seconds / 60 === 1) {
    seconds = 0;
    tens++; 
    if (tens < 9) {
      tens = "0"+tens;}
  }

  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("tens").innerHTML = tens;
}

var result;
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
buttonStart.onclick = function () {
  result = setInterval(starWatch, 100);
};
buttonStop.onclick = function () {
  clearInterval(result);
  clearInterval(result);

};
buttonReset.onclick=function(){
  clearInterval(result);
  tens="00";
  seconds="00"
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("tens").innerHTML = tens;

}

