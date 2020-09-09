/*Tyhjennä lomake-tarkistus*/

function Tyhjennys(form)
{
var tyhj=form.value;

if (!confirm("Haluatko varmasti tyhjentää kaikki kentät?"))
{
return false
}

}
/*Lomakkeen kenttien varsinainen tarkistus*/

function Laheta(form)
{

var nimi=form.Etunimi.value;

if(nimi.length<2)
{
alert("Et antanut etunimeäsi!");
form.nimi.focus();
return false;
}
}
