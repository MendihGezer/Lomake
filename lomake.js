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

var Etunimi=form.Etunimi.value;

if(Etunimi.length<2)
{
alert("Et antanut etunimeäsi!");
form.Etunimi.focus();
return false;
}


var Sukunimi=form.Sukunimi.value;

if(Sukunimi.length<3)
{
alert("Et antanut sukunimeäsi!");
form.Sukunimi.focus();
return false;
}


if(form.Email.value.indexOf('@', 0) == -1)
{
alert("Et antanut sähköpostiosoitettasi tai se on virheellinen!");
form.Email.focus();
return false;
}


var Teksti=form.Teksti.value;

if(Teksti.length<10)
{
alert("Et kirjoittanut palautteeseesi mitään tekstiä! (min. 10 merkkiä)");
form.Teksti.focus();
return false;
}

if(Teksti.length>1000)
{
alert("Palaute-tekstin pituus on rajattu 1000 merkkiin!");
form.Teksti.focus();
return false;
}


/*Radio-painikkeiden tarkistus*/

var intVastaus=-1;

for (var i=0; i < form.Vastaus.length;i++) {
if (form.Vastaus[i].checked==true) {
intVastaus=i;
}
}


/*Huomautus, jos radio-painikkeita ei ole valittu*/

if(intVastaus==-1){
alert("Et valinnut vastataanko palautteeseesi!");
return false;
}


/*Varmistus-koodin tarkistus*/

var koodi=form.koodi.value;

if(koodi!="292KBX47J6")
{
alert("Et kirjoittanut tarkistus-koodia oikein!");
form.koodi.focus();
return false;
}

}


/*Tekstikentän pituuden tarkistaminen ja näyttäminen*/

function Tarkistamerkit(form)
{
var maxpituus=1000;

var Teksti=form.Teksti.value;

var Merkkejayhteensa=Teksti.length;

form.Merkkejajaljella.value = maxpituus - Merkkejayhteensa;

}
	
