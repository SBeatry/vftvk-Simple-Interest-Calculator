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
