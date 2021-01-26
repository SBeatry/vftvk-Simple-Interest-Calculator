  var principal = p;
    var rate = r;
    var years = y;
function compute()
//Returns interest
{
p = document.getElementById("principal").value;
r = document.getElementById("rate").value;
y = document.getElementById("years").value;

    var interest = "principal"*"years"*"rate"/100;
    return interest;

}
function thisyear()
//Adds the number of years to the actual year
{
    var d = new Date();
var n = d.getFullYear();
    var year = n + y;
    return year;
}
function slider()
//Displays slider value
{
var slider = document.getElementById("rate");
var demo = document.getElementById("percentage");
demo.innerHTML = slider.value;

slider.oninput = function() {
  demo.innerHTML = this.value;
}
}
var resulr = document.getElementById("result");

function interest()
//Displays the details
{
SpeechRecognitionResult.innerHTML = 
"If you deposit"+principal break
"at an interest rate of "+rate break
"you will recieve an amount of "+result break
"in the year "+year
}
