/*Tyhjennä lomake-tarkistus*/

function Tyhjennys(form)
{
var tyhj=form.value;

if (!confirm("Haluatko varmasti tyhjentää kaikki kentät?"))
{
return false
}

}
function Laheta(form)
{
  var Nimi = document.forms["Nimi"].value;

  if(Nimi.length<2)
  {
  alert("Et antanut nimeäsi!");
  form.Nimi.focus();
  return false;
  }
}
