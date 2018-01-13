var round = 0, color, sequence=[], x=0, turn = 0;
function generateSequence() {
   turn = 0;
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
function game(level) {
  var elem = document.querySelectorAll('.gameButton');
  var checkArr = sequence.slice(0, level-1);
  for (var k=0;k<elem.length;k++) {
    elem[k].addEventListener("click", function(a) {
      if (this.id == sequence[level]) {
        console.log('yepo');
        turn++
      } else {
        console.log('try again bitch');
        reset();
      }
    })
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
function start() {
  generateSequence();
  loopIt();
  game();
}