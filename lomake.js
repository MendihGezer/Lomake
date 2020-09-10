/*Tyhjennä lomake-tarkistus*/

function Tyhjennys(form)
{
var tyhj=form.value;

if (!confirm("Haluatko varmasti tyhjentää kaikki kentät?"))
{
return false
}
