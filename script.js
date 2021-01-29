
var principal = document.getElementById("principal");
var rate = document.getElementById("rate");
var year = document.getElementById("years");

function compute()
//Returns interest
{
var interest = principal * year * rate / 100;
return interest;
}
function thisyear()
//Adds the number of years to the actual year
{
    var d = new Date();
var n = d.getFullYear();
var year = document.getElementById("years");

    var years = n + year;
    return years;
}
function slider()
//Displays slider value
{
var slider = document.getElementById("rate");
var demo = document.getElementById("percentage");
demo.innerHTML = slider.value;

slider.onchange = function() {
  demo.innerHTML = this.value;
}
}
var result = document.getElementById("result");

function interest()
//Displays the details
{
"If you deposit"+principal break
"at an interest rate of "+rate break
"you will recieve an amount of "+result break
"in the year "+year
}

