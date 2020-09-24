function generateArray(count) {
  var result = Array(count * 2);
  for (var i = 0; i < count; i++) {
    result[i * 2] = i + 1;
    result[i * 2 + 1] = i + 1;
  }
  return result;
}

function shuffle(array) {
  var counter = array.length;
  while (counter > 0) {
    var index = Math.floor(Math.random() * counter);
    counter--;
    var temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

var images = '';
//lisään kuvia tähän myöhemmin

function generateFirstGame () {
  var myGame = document.createElement("table");
  var myGameId = document.getElementById("game");
  var rows = 4;
  var columns = 4;
  var gameArray = generateArray(rows * columns / 2);
  shuffle(gameArray);

  for (var i = 0; i < rows; i++) {
    var row = $('<tr></tr>').appendTo(myGame);

  for (var j = 0; j < columns; j++) {
    var imageUrl = images + gameArray[i * columns + j] + '.png';
     $('<td></td>')
       .css('background-image', 'url(' + imageUrl + ')')
       .appendTo(row);
    }
  }

  myGameId.innerHTML='';
  myGameId.appendChild(myGame);
  $("td").attr("class", "closed");

$('td').click(function() {
    var $element = $(this);
    $element.toggleClass('closed');

  });
}
