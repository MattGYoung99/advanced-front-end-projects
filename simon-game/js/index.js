var round = 0, x=0, currSequence=[], sequence = [];
// console.log(sequence + '*', currSequence)
var checkToAddRound = function(arr) {
  return (arr.length === 0 ? (true) : (false)); 
}
function reset() {
  sequence = [];
  currSequence = [];
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
 for (var x in sequence) {
   currSequence.push(sequence[x]);
 }
}
function game($element) {
  if (checkToAddRound(currSequence)) {
    addRound();
  } else {
    if ($element.id === currSequence[0]) {
      console.log(sequence + '*', currSequence)
      currSequence.shift()
      console.log(sequence + '*', currSequence)
      if (currSequence.length === 0) {
        addRound();
      }
      console.log('Right!');
    } else {
      console.log('Wrong!');
      reset();
    }
  }
}


