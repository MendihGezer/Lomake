function Tarkista(form)
{

var nimi = form.nimi.value;
var ika = form.ika.value;
var henk = form.henk.value;
var gender = form.gender;

if(nimi.length<2)
{
alert("Et antanut nimeäsi!");
form.nimi.focus();
return false;
}
if(ika.length<1)
{
alert("Et antanut ikääsi!");
form.ika.focus();
return false;
}
if (henk.length<1)
{
alert("Et antanut henkilötunnustasi");
form.henk.focus();
return false
}
if(form.email.value.indexOf('@',0) == -1)
{
alert("Et antanut sähköpostiosoitettasi tai se on virheellinen!");
form.email.focus();
return false;
}

var vastaus=false;

for (var i=0; i < gender.length;i++)
{
if (gender[i].checked==true)
{
vastaus=true;
}
}
if(vastaus==false)
{
alert("Et valinnut sukupuolta!");
return false;
}
}

function Tyhjenna(form)
{
var tyhj=form.value;

if (!confirm("Haluatko varmasti tyhjentää kaikki kentät?"))
{
return false
}
}
