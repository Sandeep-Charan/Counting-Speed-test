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
  document.getElementById("bt").innerHTML=localStorage["score1"];
  document.getElementById("fr").innerHTML=localStorage["score2"];
  document.getElementById("se").innerHTML=localStorage["score3"];
  document.getElementById("th").innerHTML=localStorage["score4"];
  document.getElementById("fo").innerHTML=localStorage["score5"];
  if (startstop === 1) {
    start();
    document.getElementById("but20").innerHTML = "Restart";
  } else if (startstop === 2) {
    document.getElementById("but20").innerHTML = "Start";
    startstop = 0;
    regame();
    clearInterval(x);
    reset();
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
var sec = 0; /* holds incrementing value */
/* Contains and outputs returned value of  function checkTime */

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
function RemoveItself() {
    document.getElementById("but0").style.color="black";
}
function RemoveItself1() {
  if (document.getElementById("but0").style.color=="black") {
    document.getElementById("but1").style.color="black";
}
}
function RemoveItself2() {
  if (document.getElementById("but1").style.color=="black") {
    document.getElementById("but2").style.color="black";
  }
}
function RemoveItself3() {
  if (document.getElementById("but2").style.color=="black") {
    document.getElementById("but3").style.color="black";
  }
}
function RemoveItself4() {
  if (document.getElementById("but3").style.color=="black") {
    document.getElementById("but4").style.color="black";
  }
}
function RemoveItself5() {
  if (document.getElementById("but4").style.color=="black") {
    document.getElementById("but5").style.color="black";
  }
}
function RemoveItself6() {
  if (document.getElementById("but5").style.color=="black") {
    document.getElementById("but6").style.color="black";
  }
}
function RemoveItself7() {
  if (document.getElementById("but6").style.color=="black") {
    document.getElementById("but7").style.color="black";
  }
}
function RemoveItself8() {
  if (document.getElementById("but7").style.color=="black") {
    document.getElementById("but8").style.color="black";
  }
}
function RemoveItself9() {
  if (document.getElementById("but8").style.color=="black") {
    document.getElementById("but9").style.color="black";
  }
}
function RemoveItself10() {
  if (document.getElementById("but9").style.color=="black") {
    document.getElementById("but10").style.color="black";
  }
}
function RemoveItself11() {
  if (document.getElementById("but10").style.color=="black") {
    document.getElementById("but11").style.color="black";
  }
}
function RemoveItself12() {
  if (document.getElementById("but11").style.color=="black") {
    document.getElementById("but12").style.color="black";
  }
}
function RemoveItself13() {
  if (document.getElementById("but12").style.color=="black") {
    document.getElementById("but13").style.color="black";
  }
}
function RemoveItself14() {
  if (document.getElementById("but13").style.color=="black") {
    document.getElementById("but14").style.color="black";
  }
}
function RemoveItself15() {
  if (document.getElementById("but14").style.color=="black") {
    document.getElementById("but15").style.color="black";
    stop();
  }
}
function regame() {
    document.getElementById("but0").style.color="green";
    document.getElementById("but1").style.color="green";
    document.getElementById("but2").style.color="green";
    document.getElementById("but3").style.color="green";
    document.getElementById("but4").style.color="green";
    document.getElementById("but5").style.color="green";
    document.getElementById("but6").style.color="green";
    document.getElementById("but7").style.color="green";
    document.getElementById("but8").style.color="green";
    document.getElementById("but9").style.color="green";
    document.getElementById("but10").style.color="green";
    document.getElementById("but11").style.color="green";
    document.getElementById("but12").style.color="green";
    document.getElementById("but13").style.color="green";
    document.getElementById("but14").style.color="green";
    document.getElementById("but15").style.color="green";
}

window.localStorage;
let data=[];
let arr=[];
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
  function myFunction() {
    var x = document.getElementById("square");

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }