function slider1()
{
    //Shows slider value
var x = document.getElementById("rate").value; 
document.getElementById("percentage").innerHTML=x;
}

function compute()
{
var principal = document.getElementById("principal");
var rate = document.getElementById("rate");
var years = document.getElementById("years");
var interest = principal * years * rate / 100;
var d = new Date ();
var n = d.getFullYear();
var number = n + years;
//Shows results
document.getElementById("result").innerHTML="<br><br>" + "If you deposit " + principal.value + "," + "<br>" +
"at an interest rate of " + rate.value + "." + "<br>" +
"You will receive an amount of " + interest.value + "," + "<br>" +
"in the year " + number.value;
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
