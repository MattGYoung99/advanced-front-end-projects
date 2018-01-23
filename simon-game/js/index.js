var round = 0, color, sequence=[], x=0;

function addRound() {
   color = Math.round(Math.random()*3);
   if (color === 0) {
    sequence.push('one');
  } else if (color === 1) {
    sequence.push('two');
  } else if (color === 2) {
    sequence.push('three');
  } else if (color === 3) {
    sequence.push('four');
 }
  console.log(sequence);
}
function reset() {
  turn = 0;
  sequence = [];
  round = sequence.length;
  document.getElementById('c').value = sequence.length;
}
function game(arr) {
  var elem = document.querySelectorAll('.gameButton');
  if (arr.length === 0) {
    beginRound();
  } else {
    for (var k=0;k<elem.length;k++) {
      elem[k].addEventListener("click", function() {
        if (this.id == arr[0]) {
          console.log('right!');
          arr = arr.splice(1);
          console.log(arr);
          game(arr);
        } else {
          console.log('oops, wrong button!');
          reset();
        }
      })
    }
  }
}
function loopIt() {
  if (x<=round && sequence.length<21) {
    $('#one, #two, #three, #four, #strt').prop('disabled',true);
      setTimeout(function() {
        $('#' + sequence[x]).fadeOut();
        $('#' + sequence[x]).fadeIn();
        x++;
      loopIt(x);
    }, 1000)
  } else {
    x=0;
    round++;
    document.getElementById('c').value = round;
    $('#one, #two, #three, #four, #strt').prop('disabled',false);
  }
}
function beginRound() {
  addRound();
  loopIt();
  game(sequence);
}


