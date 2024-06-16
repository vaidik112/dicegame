var randomnum = Math.floor(Math.random()*6) + 1;
var rimage = "dice" + randomnum + ".png";
var randomim = "images/" + rimage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomim);
var randomnum1 = Math.floor(Math.random()*6) + 1;
var rimage1 = "dice" + randomnum1 + ".png";
var randomim1 = "images/" + rimage1;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomim1);

if(randomnum>randomnum1)
    {
         document.querySelector("h1").innerHTML = "Player 1 wins  🚩";
         document.querySelector("h3").innerHTML = "";
    }
    else if(randomim1 === randomim)
        {
            document.querySelector("h1").innerHTML = "Draw";
            document.querySelector("h3").innerHTML = "";
        }
    else
    {
        document.querySelector("h1").innerHTML = "Player 2 wins  🚩";
        document.querySelector("h3").innerHTML = "";
    }