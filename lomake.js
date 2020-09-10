/*Tyhjennä lomake-tarkistus*/

function Tyhjennys(form)
{
var tyhj=form.value;

if (!confirm("Haluatko varmasti tyhjentää kaikki kentät?"))
{
return false
}

}
function Tarkista(form)

var nimi = form.nimi.value;


if (nimi.length<2) {
alert("Et antanut nimeäsi");
form.nimi.focus();
return false;
}
