var anumero = 0;
var viesti = '';
var luvut = 0;

function Sekoita(){
  anumero = Math.round(Math.random()*10);
  luvut =0;
}
Sekoita();

function arvaatko(){
  var num = document.getElementById('arvaus').value;
  if (num < anumero){
  viesti= num + ' on liian matala. Yritä uudelleen.';
  } else if (num > anumero){
    viesti= num + ' on liian suuri. Yritä uudelleen';
  } else if (num == anumero){
  viesti= num + ' on oikein.';
  }
  alertResult(viesti);
  luvut++;
}

function alertResult(){
  console.log(viesti + ' ' + anumero);

var tulokset = document.getElementById('tulokset');
  tulokset.innerHTML = '<p>' + viesti + '</p>';
}
