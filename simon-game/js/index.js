var round = 0, x=0, currSequence;
const sequence = [];
var checkToAddRound = function(arr) {
  return (arr.length === 0 ? (true) : (false)); 
}
function reset() {
  sequence = [];
  currSequence = sequence;
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
 currSequence = sequence;
}
function game($element) {
  console.log(sequence, currSequence);
  if (checkToAddRound(currSequence)) {
    console.log(sequence, currSequence);
    addRound();
  } else {
    if ($element.id === currSequence[0]) {
      currSequence.shift();
      console.log('Right!');
      console.log(sequence, currSequence);
    } else {
      console.log('Wrong!');
      console.log(sequence, currSequence);
      reset();
    }
  }
}


