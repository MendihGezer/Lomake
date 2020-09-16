function Tarkista(form)
{

var etunimi = form.etunimi.value;
var sukunimi = form.sukunimi.value;
var osoite = form.osoite.value;
var kotikunta = form.kotikunta.value;
var email = form.email.value;
var pnumero = form.pnumero.value;
var gender = form.gender;
var date = form.date.value;
var jobs= form.jobs.value;
var worktime = form.worktime;


if(etunimi.length<2)
{
  alert("Et antanut etunimeäsi!");
  form.etunimi.focus();
    return false;
}
if(sukunimi.length<2)
{
  alert("Et antanut sukunimeäsi!");
  form.sukunimi.focus();
    return false;
}
if(osoite.length<2)
{
  alert("Et antanut osoitettasi!");
  form.osoite.focus();
    return false;
}
if(kotikunta.length<2)
{
  alert("Et antanut kotikuntaasi!");
  form.kotikunta.focus();
    return false;
}
if(email.indexOf("@") == -1)
{
	alert("Antamasi sähköpostiosoite ei ole kelvollinen!");
	form.email.focus();
  return false;
}
if(pnumero == "")
{
  alert("Et antanut numeroasi!");
  form.pnumero.focus();
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
if (date == "")
{
  alert("Et antanut syntymäaikaasi");
  form.date.focus();
  return false;
}
var jobs = document.getElementById('jobs');
    if(!jobs.value) {
        window.alert('Valitse työtehtävä');
        form.jobs.focus();
        jobs.value = ''
        return false;
    }
var vastaus=false;

for (var i=0; i < worktime.length;i++)
{
if (worktime[i].checked==true)
{
vastaus=true;
}
}
if(vastaus==false)
{
alert("Valitse työn tyyppi!");
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
var intVastaus=-1;

for (var i=0; i < form.Vastaus.length;i++) {
if (form.Vastaus[i].checked==true) {
intVastaus=i;
}
}
