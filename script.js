var principal = document.getElementById("principal");
var rate = document.getElementById("rate");
var years = document.getElementById("years");
var interest = principal * years * rate / 100;
var d = new Date ();
var n = d.getFullYear();
var number = n + years;
function slider1 ()
{
document.getElementById("percentage").innerHTML=this.value;
}


function compute(){
document.getElementById("result").innerHTML=
"If you deposit principal," +
"at an interest rate of rate." +
"You will receive an amount of interest," +
"in the year number";
}



function checkdata(){

      //Check if principal is positive 
      if(principal.value < 1){
            alert("Enter a positive number");
            principal.focus();
            return false;
      }
     
     //If it is positive return true.
      return true;
}
