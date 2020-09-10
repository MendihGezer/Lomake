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

function Tarkista(form)
{

var ika=form.ika.value;

if(ika.length<1)
{
alert("Et antanut ikääsi!");
form.ika.focus();
return false;
}
}

function Tarkista(form)
{

var henk=form.henk.value;

if(henk.length<2)
{
alert("Et antanut henkilötunnustasi!");
form.henk.focus();
return false;
}
}

function Tarkista(form)
{

var henk=form.henk.value;

if(form.email.value.indexOf('@',0) == -1)
{
alert("Et antanut sähköpostiosoitettasi tai se on virheellinen!");
form.email.focus();
return false;
}
}
