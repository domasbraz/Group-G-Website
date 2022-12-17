//lines 1-799 by Domas Brazdeikis x22728815

//declaring multiple variables at once
var on1, on2, on3, on4, on5;
on1 = on2 = on3 = on4 = on5 = false;

var executed1, executed2, executed3, executed4, executed5;
executed1 = executed2 = executed3 = executed4 = executed5 = true;

//arrays used to perform different actions using the same function
var executed = [executed1, executed2, executed3, executed4, executed5];
var on = [on1, on2, on3, on4, on5];
//x value used to identify id
var x;
//z value used to identify alt galleries when veiwing on mobile device
var z;

//called once user clicks on the corresponding div, fills in values for x and z and calls the main function
//side note: z is only declared within function for testing purposes when testing rwd using browser inspect tool
//side note 2: slight visual error when testing rwd with inspect however normal users won't experience this
function gal1()
{
  x = 1;
  z = "";
  funcMain();
}

function gal2()
{
  x = 2;
  z = "";
  funcMain();
}

function gal3()
{
  x = 3;
  z = "";
  funcMain();
}

function gal4()
{
  x = 4;
  z = "";
  funcMain();
}

function gal5()
{
  x = 5;
  z = "";
  funcMain();
}

function galAlt1()
{
  x = 1;
  z = "Alt";
  funcMain();
}

function galAlt2()
{
  x = 2;
  z = "Alt";
  funcMain();
}

function galAlt3()
{
  x = 3;
  z = "Alt";
  funcMain();
}

function galAlt4()
{
  x = 4;
  z = "Alt";
  funcMain();
}

function galAlt5()
{
  x = 5;
  z = "Alt";
  funcMain();
}

function funcMain()
{
  //y value used to reference arrays rather than typing "x - 1"
  let y = x - 1;

  //asks if the code has executed
  //implemented to avoid visual errors
  if (executed[y] == true)
  {

    //sets value to false to prevent users from performing the function while animation is still running
    executed[y] = false;

    //asks if the animation is applied
    if (on[y] == true)
    {
      //animation that removes any previous animations seen later
      document.getElementById('para' + z + x).style.animationName = "textOff";
      document.getElementById('para' + z + x).style.animationDuration = "1s";
      document.getElementById('para' + z + x).style.animationFillMode = "forwards";

      document.getElementById('area' + z + x).style.animationName = "contrastOff";
      document.getElementById('area' + z + x).style.animationDuration = "1s";
      document.getElementById('area' + z + x).style.animationFillMode = "forwards";

      //declares that the animation is removed
      on[y] = false;

      //delay use so that the text would only disapear once the animation is finished
      let delay1 = setTimeout(noText, 1000);

      //removes text
      function noText()
      {
        document.getElementById('para' + z + x).style.display = "none";
      }

    }
    else
    {
    //applies animation
    document.getElementById('area' + z + x).style.animationName = "contrastOn";
    document.getElementById('area' + z + x).style.animationDuration = "1s";
    document.getElementById('area' + z + x).style.animationFillMode = "forwards";

    document.getElementById('para' + z + x).style.display = "inline";
    document.getElementById('para' + z + x).style.animationName = "textOn";
    document.getElementById('para' + z + x).style.animationDuration = "1s";
    document.getElementById('para' + z + x).style.animationFillMode = "forwards";

    //declares that the animation is applied
    on[y] = true;
    }

    //will ensure that the function can only be performed after the animation is finished
    let delay2 = setTimeout(finished, 1000);

    function finished()
    {
      executed[y] = true;
    }

  }

}

//here is the code I previouslly used to perform the same task
//the code above is the optimized version
/*
function gallery1Text()
{

  if (executed1 == true)
  {

    executed1 = false;


    if (on1 == true)
    {

      document.getElementById('para1').style.animationName = "textOff";
      document.getElementById('para1').style.animationDuration = "1s";
      document.getElementById('para1').style.animationFillMode = "forwards";

      document.getElementById('t1').style.animationName = "contrastOff";
      document.getElementById('t1').style.animationDuration = "1s";
      document.getElementById('t1').style.animationFillMode = "forwards";

      on1 = false;

      let delay1_1 = setTimeout(noText1, 1000);

      function noText1()
      {
        document.getElementById('para1').style.display = "none";
      }

    }
    else
    {

    document.getElementById('t1').style.animationName = "contrastOn";
    document.getElementById('t1').style.animationDuration = "1s";
    document.getElementById('t1').style.animationFillMode = "forwards";

    document.getElementById('para1').style.display = "inline";
    document.getElementById('para1').style.animationName = "textOn";
    document.getElementById('para1').style.animationDuration = "1s";
    document.getElementById('para1').style.animationFillMode = "forwards";

    on1 = true;
    }

    let delay2_1 = setTimeout(finished1, 1000);

    function finished1()
    {
      executed1 = true;
    }

  }

}

function gallery2Text()
{

  if (executed2 == true)
  {

    executed2 = false;


    if (on2 == true)
    {

      document.getElementById('para2').style.animationName = "textOff";
      document.getElementById('para2').style.animationDuration = "1s";
      document.getElementById('para2').style.animationFillMode = "forwards";

      document.getElementById('t2').style.animationName = "contrastOff";
      document.getElementById('t2').style.animationDuration = "1s";
      document.getElementById('t2').style.animationFillMode = "forwards";

      let contrastApplied2 = false;

      on2 = false;

      let delay1_2 = setTimeout(noText2, 1000);

      function noText2()
      {
        document.getElementById('para2').style.display = "none";
      }

    }
    else
    {

    document.getElementById('t2').style.animationName = "contrastOn";
    document.getElementById('t2').style.animationDuration = "1s";
    document.getElementById('t2').style.animationFillMode = "forwards";

    document.getElementById('para2').style.display = "inline";
    document.getElementById('para2').style.animationName = "textOn";
    document.getElementById('para2').style.animationDuration = "1s";
    document.getElementById('para2').style.animationFillMode = "forwards";

    let contrastApplied2 = true;

    on2 = true;
    }

    if (contrastApplied2 = true)
    {
      document.getElementById('para2').style.display = "inline";
    }

    let delay2_2 = setTimeout(finished2, 1000);

    function finished2()
    {
      executed2 = true;
    }

  }

}

function gallery3Text()
{

  if (executed3 == true)
  {

    executed3 = false;


    if (on3 == true)
    {

      document.getElementById('para3').style.animationName = "textOff";
      document.getElementById('para3').style.animationDuration = "1s";
      document.getElementById('para3').style.animationFillMode = "forwards";

      document.getElementById('t3').style.animationName = "contrastOff";
      document.getElementById('t3').style.animationDuration = "1s";
      document.getElementById('t3').style.animationFillMode = "forwards";

      let contrastApplied3 = false;

      on3 = false;

      let delay1_3 = setTimeout(noText3, 1000);

      function noText3()
      {
        document.getElementById('para3').style.display = "none";
      }

    }
    else
    {

    document.getElementById('t3').style.animationName = "contrastOn";
    document.getElementById('t3').style.animationDuration = "1s";
    document.getElementById('t3').style.animationFillMode = "forwards";

    document.getElementById('para3').style.display = "inline";
    document.getElementById('para3').style.animationName = "textOn";
    document.getElementById('para3').style.animationDuration = "1s";
    document.getElementById('para3').style.animationFillMode = "forwards";

    let contrastApplied3 = true;

    on3 = true;
    }

    if (contrastApplied3 = true)
    {
      document.getElementById('para3').style.display = "inline";
    }

    let delay2_3 = setTimeout(finished3, 1000);

    function finished3()
    {
      executed3 = true;
    }

  }

}

function gallery4Text()
{

  if (executed4 == true)
  {

    executed4 = false;


    if (on4 == true)
    {

      document.getElementById('para4').style.animationName = "textOff";
      document.getElementById('para4').style.animationDuration = "1s";
      document.getElementById('para4').style.animationFillMode = "forwards";

      document.getElementById('t4').style.animationName = "contrastOff";
      document.getElementById('t4').style.animationDuration = "1s";
      document.getElementById('t4').style.animationFillMode = "forwards";

      let contrastApplied4 = false;

      on4 = false;

      let delay1_4 = setTimeout(noText4, 1000);

      function noText4()
      {
        document.getElementById('para4').style.display = "none";
      }

    }
    else
    {

    document.getElementById('t4').style.animationName = "contrastOn";
    document.getElementById('t4').style.animationDuration = "1s";
    document.getElementById('t4').style.animationFillMode = "forwards";

    document.getElementById('para4').style.display = "inline";
    document.getElementById('para4').style.animationName = "textOn";
    document.getElementById('para4').style.animationDuration = "1s";
    document.getElementById('para4').style.animationFillMode = "forwards";

    let contrastApplied4 = true;

    on4 = true;
    }

    if (contrastApplied4 = true)
    {
      document.getElementById('para4').style.display = "inline";
    }

    let delay2_4 = setTimeout(finished4, 1000);

    function finished4()
    {
      executed4 = true;
    }

  }

}

function gallery5Text()
{

  if (executed5 == true)
  {

    executed5 = false;


    if (on5 == true)
    {

      document.getElementById('para5').style.animationName = "textOff";
      document.getElementById('para5').style.animationDuration = "1s";
      document.getElementById('para5').style.animationFillMode = "forwards";

      document.getElementById('t5').style.animationName = "contrastOff";
      document.getElementById('t5').style.animationDuration = "1s";
      document.getElementById('t5').style.animationFillMode = "forwards";

      let contrastApplied5 = false;

      on5 = false;

      let delay1_5 = setTimeout(noText5, 1000);

      function noText5()
      {
        document.getElementById('para5').style.display = "none";
      }

    }
    else
    {

    document.getElementById('t5').style.animationName = "contrastOn";
    document.getElementById('t5').style.animationDuration = "1s";
    document.getElementById('t5').style.animationFillMode = "forwards";

    document.getElementById('para5').style.display = "inline";
    document.getElementById('para5').style.animationName = "textOn";
    document.getElementById('para5').style.animationDuration = "1s";
    document.getElementById('para5').style.animationFillMode = "forwards";

    let contrastApplied5 = true;

    on5 = true;
    }

    if (contrastApplied5 = true)
    {
      document.getElementById('para5').style.display = "inline";
    }

    let delay2_5 = setTimeout(finished5, 1000);

    function finished5()
    {
      executed5 = true;
    }

  }

}

function galleryAlt1Text()
{

  if (executed1 == true)
  {

    executed1 = false;


    if (on1 == true)
    {

      document.getElementById('paraAlt1').style.animationName = "textOff";
      document.getElementById('paraAlt1').style.animationDuration = "1s";
      document.getElementById('paraAlt1').style.animationFillMode = "forwards";

      document.getElementById('tAlt1').style.animationName = "contrastOff";
      document.getElementById('tAlt1').style.animationDuration = "1s";
      document.getElementById('tAlt1').style.animationFillMode = "forwards";

      let contrastApplied1 = false;

      on1 = false;

      let delay1_1 = setTimeout(noText1, 1000);

      function noText1()
      {
        document.getElementById('paraAlt1').style.display = "none";
      }

    }
    else
    {

    document.getElementById('tAlt1').style.animationName = "contrastOn";
    document.getElementById('tAlt1').style.animationDuration = "1s";
    document.getElementById('tAlt1').style.animationFillMode = "forwards";

    document.getElementById('paraAlt1').style.display = "inline";
    document.getElementById('paraAlt1').style.animationName = "textOn";
    document.getElementById('paraAlt1').style.animationDuration = "1s";
    document.getElementById('paraAlt1').style.animationFillMode = "forwards";

    let contrastApplied1 = true;

    on1 = true;
    }

    if (contrastApplied1 = true)
    {
      document.getElementById('paraAlt1').style.display = "inline";
    }

    let delay2_1 = setTimeout(finished1, 1000);

    function finished1()
    {
      executed1 = true;
    }

  }

}

function galleryAlt2Text()
{

  if (executed2 == true)
  {

    executed2 = false;


    if (on2 == true)
    {

      document.getElementById('paraAlt2').style.animationName = "textOff";
      document.getElementById('paraAlt2').style.animationDuration = "1s";
      document.getElementById('paraAlt2').style.animationFillMode = "forwards";

      document.getElementById('tAlt2').style.animationName = "contrastOff";
      document.getElementById('tAlt2').style.animationDuration = "1s";
      document.getElementById('tAlt2').style.animationFillMode = "forwards";

      let contrastApplied2 = false;

      on2 = false;

      let delay1_2 = setTimeout(noText2, 1000);

      function noText2()
      {
        document.getElementById('paraAlt2').style.display = "none";
      }

    }
    else
    {

    document.getElementById('tAlt2').style.animationName = "contrastOn";
    document.getElementById('tAlt2').style.animationDuration = "1s";
    document.getElementById('tAlt2').style.animationFillMode = "forwards";

    document.getElementById('paraAlt2').style.display = "inline";
    document.getElementById('paraAlt2').style.animationName = "textOn";
    document.getElementById('paraAlt2').style.animationDuration = "1s";
    document.getElementById('paraAlt2').style.animationFillMode = "forwards";

    let contrastApplied2 = true;

    on2 = true;
    }

    if (contrastApplied2 = true)
    {
      document.getElementById('paraAlt2').style.display = "inline";
    }

    let delay2_2 = setTimeout(finished2, 1000);

    function finished2()
    {
      executed2 = true;
    }

  }

}

function galleryAlt3Text()
{

  if (executed3 == true)
  {

    executed3 = false;


    if (on3 == true)
    {

      document.getElementById('paraAlt3').style.animationName = "textOff";
      document.getElementById('paraAlt3').style.animationDuration = "1s";
      document.getElementById('paraAlt3').style.animationFillMode = "forwards";

      document.getElementById('tAlt3').style.animationName = "contrastOff";
      document.getElementById('tAlt3').style.animationDuration = "1s";
      document.getElementById('tAlt3').style.animationFillMode = "forwards";

      let contrastApplied3 = false;

      on3 = false;

      let delay1_3 = setTimeout(noText3, 1000);

      function noText3()
      {
        document.getElementById('paraAlt3').style.display = "none";
      }

    }
    else
    {

    document.getElementById('tAlt3').style.animationName = "contrastOn";
    document.getElementById('tAlt3').style.animationDuration = "1s";
    document.getElementById('tAlt3').style.animationFillMode = "forwards";

    document.getElementById('paraAlt3').style.display = "inline";
    document.getElementById('paraAlt3').style.animationName = "textOn";
    document.getElementById('paraAlt3').style.animationDuration = "1s";
    document.getElementById('paraAlt3').style.animationFillMode = "forwards";

    let contrastApplied3 = true;

    on3 = true;
    }

    if (contrastApplied3 = true)
    {
      document.getElementById('paraAlt3').style.display = "inline";
    }

    let delay2_3 = setTimeout(finished3, 1000);

    function finished3()
    {
      executed3 = true;
    }

  }

}

function galleryAlt4Text()
{

  if (executed4 == true)
  {

    executed4 = false;


    if (on4 == true)
    {

      document.getElementById('paraAlt4').style.animationName = "textOff";
      document.getElementById('paraAlt4').style.animationDuration = "1s";
      document.getElementById('paraAlt4').style.animationFillMode = "forwards";

      document.getElementById('tAlt4').style.animationName = "contrastOff";
      document.getElementById('tAlt4').style.animationDuration = "1s";
      document.getElementById('tAlt4').style.animationFillMode = "forwards";

      let contrastApplied4 = false;

      on4 = false;

      let delay1_4 = setTimeout(noText4, 1000);

      function noText4()
      {
        document.getElementById('paraAlt4').style.display = "none";
      }

    }
    else
    {

    document.getElementById('tAlt4').style.animationName = "contrastOn";
    document.getElementById('tAlt4').style.animationDuration = "1s";
    document.getElementById('tAlt4').style.animationFillMode = "forwards";

    document.getElementById('paraAlt4').style.display = "inline";
    document.getElementById('paraAlt4').style.animationName = "textOn";
    document.getElementById('paraAlt4').style.animationDuration = "1s";
    document.getElementById('paraAlt4').style.animationFillMode = "forwards";

    let contrastApplied4 = true;

    on4 = true;
    }

    if (contrastApplied4 = true)
    {
      document.getElementById('paraAlt4').style.display = "inline";
    }

    let delay2_4 = setTimeout(finished4, 1000);

    function finished4()
    {
      executed4 = true;
    }

  }

}

function galleryAlt5Text()
{

  if (executed5 == true)
  {

    executed5 = false;


    if (on5 == true)
    {

      document.getElementById('paraAlt5').style.animationName = "textOff";
      document.getElementById('paraAlt5').style.animationDuration = "1s";
      document.getElementById('paraAlt5').style.animationFillMode = "forwards";

      document.getElementById('tAlt5').style.animationName = "contrastOff";
      document.getElementById('tAlt5').style.animationDuration = "1s";
      document.getElementById('tAlt5').style.animationFillMode = "forwards";

      let contrastApplied5 = false;

      on5 = false;

      let delay1_5 = setTimeout(noText5, 1000);

      function noText5()
      {
        document.getElementById('paraAlt5').style.display = "none";
      }

    }
    else
    {

    document.getElementById('tAlt5').style.animationName = "contrastOn";
    document.getElementById('tAlt5').style.animationDuration = "1s";
    document.getElementById('tAlt5').style.animationFillMode = "forwards";

    document.getElementById('paraAlt5').style.display = "inline";
    document.getElementById('paraAlt5').style.animationName = "textOn";
    document.getElementById('paraAlt5').style.animationDuration = "1s";
    document.getElementById('paraAlt5').style.animationFillMode = "forwards";

    let contrastApplied5 = true;

    on5 = true;
    }

    if (contrastApplied5 = true)
    {
      document.getElementById('paraAlt5').style.display = "inline";
    }

    let delay2_5 = setTimeout(finished5, 1000);

    function finished5()
    {
      executed5 = true;
    }

  }

}*/


//lines 803-847 made by Evan O Neill X22527456
var player = "player";
var computer = "computer";

function editName() {

player = prompt("change your username:");


document.getElementById("player").innerHTML= player;

//this is to change username by using the change your username button
// i got the idea for this in slides from javascript in web design
// i used an ID instead of class because i had to use that Player multiple times in the script as you see below
}


function rollDice() {

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  // there is two randomNumber generators so i get two different numbers so the game doesnt always end in a draw

  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
  //these two lines above  change the images to by using the number generated above
  //i used querySelector here as i found it more useful to code then lines like getElementById it also gave me less to code
  // this allowed me to use less IDs and classes , i learned of querySelector through w3schools

  if (randomNumber1 === randomNumber2) {
    document.querySelector("h2").innerHTML = "It's a Draw!";
  }

  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h2").innerHTML  = (computer + " WINS!");
  }

  else {
    document.querySelector("h2").innerHTML  = (player + " WINS!");
  }
  // this shows the outcome of each game
  // this is how game functions
  // i got the idea for the random number generator and queryselectors from https://www.geeksforgeeks.org/building-a-dice-game-using-javascript/
  // i didnt use alot of stuff from the website above as it overcomplacited my code and i didnt think it was neccesary for the functionality of the game
}

//lines 850-864 made by Alex Garbalyauskas x22440482
/*this JavaScript code is part of the valdiation of the form.
it sends a message to the user demanding him to fill in the form if he presses submit without filling in the form,
it will send a message stating "thank you" if you do fill in the form*/
function MyFunction(){
let name=document.getElementById('nameid').value;
let phone=document.getElementById('phoneid').value;
let email=document.getElementById('emailid').value;


if (name.length > 2 && phone.length > 0 && email.length > 0 ){
  document.getElementById('p1').innerHTML="Thank you";
}else {
  document.getElementById('p1').innerHTML="Please fill the whole form";
}
}
