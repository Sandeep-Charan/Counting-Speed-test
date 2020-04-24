var arr=[];
function load() {
  document.getElementById("bt").innerHTML=localStorage["score1"];
  document.getElementById("fr").innerHTML=localStorage["score2"];
  document.getElementById("se").innerHTML=localStorage["score3"];
  document.getElementById("th").innerHTML=localStorage["score4"];
  document.getElementById("fo").innerHTML=localStorage["score5"];
  for (var i=0;i<localStorage.length;i++) {
    a = localStorage.key(i);
    arr.push(parseFloat(localStorage.getItem(a)));
  }
}
var x,dms,ds;
var startstop = 0;
function startStop() { /* Toggle StartStop */
  startstop = startstop + 1;
  if (startstop === 1) {
    start();
    document.getElementById("but20").innerHTML = "Restart";
    document.getElementById("square").addEventListener("load", createButtons(), false);
  } else if (startstop === 2) {
    document.getElementById("but20").innerHTML = "Start";
    window.location.reload();
    startstop = 0;
    clearInterval(x);
    reset();
    num=1;
  }
}
function start() {
  x = setInterval(timer, 10);
} /* Start */
function stop() {
  clearInterval(x);
  localstorage();
} /* Stop */

var milisec = 0;
var sec = 0;
var miliSecOut = 0;
var secOut = 0;
var minOut = 0;
var hourOut = 0;

/* Output variable End */


function timer() {
  /* Main Timer */


  miliSecOut = checkTime(milisec);
  secOut = checkTime(sec);
  milisec = ++milisec;

  if (milisec === 100) {
    milisec = 0;
    sec = ++sec;
  }
  document.getElementById("milisec").innerHTML = miliSecOut;
  document.getElementById("sec").innerHTML = secOut;
}
/* Adds 0 when value is <10 */
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function reset() {
  /*Reset*/

  milisec = 0;
  sec = 0;

  document.getElementById("milisec").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";

}
window.localStorage;
let data=[];

function localstorage(){
  if (secOut<10){
    q=(((secOut+miliSecOut/10)/10).toFixed(2));
  }
  else{
  q=((secOut+miliSecOut/100)).toFixed(2);
  }
  arr.push(parseFloat(q));
  k=arr.length;
  if (k==0){
  document.getElementById("bt").innerHTML='0';
  } else if (k==1) {
  document.getElementById("bt").innerHTML='' + arr[0];
  console.log(arr);
  localStorage.setItem("score1",arr[0]);
  } else if (k==2){
  arr.sort(function(a, b){
    return a - b;
  }); 
  document.getElementById("bt").innerHTML=''+arr[0];
  document.getElementById("fr").innerHTML=""+arr[1];
  console.log(arr);
  localStorage.setItem("score1",arr[0]);
  localStorage.setItem("score2",arr[1]);
  }
  else if (k==3) {
    arr.sort(function(a, b){
      return a - b;
    });
    document.getElementById("bt").innerHTML=''+arr[0];
    document.getElementById("fr").innerHTML=""+arr[1];
    document.getElementById("se").innerHTML=''+arr[2];
    console.log(arr);
    localStorage.setItem("score1",arr[0]);
    localStorage.setItem("score2",arr[1]);
    localStorage.setItem("score3",arr[2]);
  }
  else if (k==4) {
    arr.sort(function(a, b){
      return a - b;
    }); 
    document.getElementById("bt").innerHTML=''+arr[0];
    document.getElementById("fr").innerHTML=""+arr[1];
    document.getElementById("se").innerHTML=''+arr[2];
    document.getElementById("th").innerHTML=''+arr[3];
    console.log(arr);
    localStorage.setItem("score1",arr[0]);
    localStorage.setItem("score2",arr[1]);
    localStorage.setItem("score3",arr[2]);
    localStorage.setItem("score4",arr[3]);
  }
  else if (k>=5) {
    arr.sort(function(a, b){
      return a - b;
    }); 
    document.getElementById("bt").innerHTML=''+arr[0];
    document.getElementById("fr").innerHTML=""+arr[1];
    document.getElementById("se").innerHTML=''+arr[2];
    document.getElementById("th").innerHTML=''+arr[3];
    document.getElementById("fo").innerHTML=''+arr[4];
    console.log(arr);
    localStorage.setItem("score1",arr[0]);
    localStorage.setItem("score2",arr[1]);
    localStorage.setItem("score3",arr[2]);
    localStorage.setItem("score4",arr[3]);
    localStorage.setItem("score5",arr[4]);
  }
  }
  console.log(localStorage);