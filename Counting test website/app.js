var marr=[];
var harr=[];
var arrn,arrn1,arrn2;
function load() {
  if (state==="easy") {
    arrn=JSON.parse(localStorage.getItem("easyarr"));
    document.getElementById("bt").innerHTML=arrn[0];
    document.getElementById("fr").innerHTML=arrn[1];
    document.getElementById("se").innerHTML=arrn[2];
    document.getElementById("th").innerHTML=arrn[3];
    document.getElementById("fo").innerHTML=arrn[4];
  for (var i=0;i<arrn.length;i++){
      arr.push(arrn[i]);
    }
  }
  else if (state==="medium") {
    arrn1=JSON.parse(localStorage.getItem("marr"));
    document.getElementById("bt").innerHTML=arrn1[0];
    document.getElementById("fr").innerHTML=arrn1[1];
    document.getElementById("se").innerHTML=arrn1[2];
    document.getElementById("th").innerHTML=arrn1[3];
    document.getElementById("fo").innerHTML=arrn1[4];
    for (var i=0;i<arrn1.length;i++){
      marr.push(arrn1[i]);
    }
  }
  else if (state==="hard") {
    arrn2=JSON.parse(localStorage.getItem("harr"));
    document.getElementById("bt").innerHTML=arrn2[0];
    document.getElementById("fr").innerHTML=arrn2[1];
    document.getElementById("se").innerHTML=arrn2[2];
    document.getElementById("th").innerHTML=arrn2[3];
    document.getElementById("fo").innerHTML=arrn2[4];
    for (var i=0;i<arrn2.length;i++){
      harr.push(arrn2[i]);
    }
  }
}
var arr=[];
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
  q=secOut+"."+miliSecOut;
  if (state==="easy"){
    arr.push(q);
    arr.sort(function(a,b) { return a - b;});
    window.localStorage.setItem('easyarr',JSON.stringify(arr));
  }
  else if (state==="medium"){
    marr.push(q);
    marr.sort(function(a,b) { return a - b;});
    window.localStorage.setItem('marr',JSON.stringify(marr));
  }
  else if (state==="hard"){
    harr.push(q);
    harr.sort(function(a,b) { return a - b;});
    window.localStorage.setItem('hardarr',JSON.stringify(harr));
  }
}
console.log(localStorage);
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
