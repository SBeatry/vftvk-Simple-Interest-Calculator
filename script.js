function slider1()
{
    //Shows slider value
var x = document.getElementById("rate").value; 
document.getElementById("percentage").innerHTML=x;
}

function compute()
{
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal*years*rate/100;
var d = new Date ();
var n = d.getFullYear();
var sum = +years + +n;
//Shows results
document.getElementById("result").innerHTML="<br><br>" + "If you deposit " + "<mark>" + principal + "</mark>" + "," + "<br>" +
"at an interest rate of " + "<mark>" + rate + "</mark>" + "." + "<br>" +
"You will receive an amount of " + "<mark>" + interest + "</mark>" + "," + "<br>" +
"in the year " + "<mark>" + sum + "</mark>";
}

function checkdata(){

      //Check if principal is positive 
      if(principal.value <= 0){
            alert("Enter a positive number");
            principal.focus();
            return false;
      }
     
     //If it is positive return true.
     else{
    compute();
     }
}
