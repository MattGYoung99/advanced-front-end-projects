var round = 0, sequence=[], x=0;
function reset() {
  sequence = [];
  round = sequence.length;
  document.getElementById('c').value = sequence.length;
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
function addRound() {
  switch (Math.round(Math.random()*3)) {
   case 0:
   sequence.push('one');
   break;
   case 1:
   sequence.push('two');
   break;
   case 2:
   sequence.push('three');
   break;
   case 3:
   sequence.push('four');
   break;
 }
 loopIt();
}
function game($element) {
  var elem = document.querySelectorAll('.gameButton');
  console.log(sequence);
  console.log($element.id);
}
function beginRound() {
  addRound();
}


