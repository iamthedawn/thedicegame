var n=0,m=0;
n = Math.random();
n=n*6+1;
n=Math.floor(n);
m = Math.random();
m=m*6+1;
m=Math.floor(m);

if(n===1){
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
else if(n===2){
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
}
else if(n===3){
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
else if(n===4){
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
else if(n===5){
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
}
else {
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
}


if(m===1){
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
else if(m===2){
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
else if(m===3){
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
else if(m===4){
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
else if(m===5){
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
else {
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
}

if(n===m && n!=0 && m!=0){
    document.querySelector(".ref").innerHTML="It's a Draw!!";
}
if(n>m){
    document.querySelector(".ref").innerHTML="Player1 Wins!!";
}
if(n<m){
    document.querySelector(".ref").innerHTML="Player2 Wins!!";
}

if (window.matchMedia("(min-width: 998px)").matches) {
    /* The viewport is less than, or equal to, 700 pixels wide */
    var myobj = document.querySelector(".nl");
    myobj.remove();
  }
  else{
    document.querySelector(".nl").innerHTML = "<br>";
  
  }

  