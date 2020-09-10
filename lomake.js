/*Tyhjennä lomake-tarkistus*/

function Tyhjenna(form)
{
var tyhj=form.value;

if (!confirm("Haluatko varmasti tyhjentää kaikki kentät?"))
{
return false
}
}


/*Lomakkeen kenttien varsinainen tarkistus*/

function Tarkista(form)
{

var nimi=form.nimi.value;

if(nimi.length<2)
{
alert("Et antanut etunimeäsi!");
form.nimi.focus();
return false;
}
}
