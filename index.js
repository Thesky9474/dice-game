// For Image 1

var randomVariable1 = Math.floor(Math.random()*6)+1;

var randomImage1 = "dice"+randomVariable1+".png";

var randomImageSource1="images/"+randomImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource1);

// For Image 2

var randomVariable2=Math.floor(Math.random()*6)+1;

var randomImage2="dice"+randomVariable2+".png";

var randomImageSource2 = "images/"+randomImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);

if(randomVariable1 > randomVariable2)
document.querySelector("h1").innerHTML="🚩 Player 1 Win!";
else if(randomVariable1 < randomVariable2)
document.querySelector("h1").innerHTML="🚩 Player 2 Win!";
else
document.querySelector("h1").innerHTML="Draw!";