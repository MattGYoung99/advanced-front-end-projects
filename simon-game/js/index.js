  var round = 0, x=0, currSequence=[], sequence = [], gameOnOff = false;
  // console.log(sequence + '*', currSequence)
  var checkToAddRound = function(arr) {
    return (arr.length === 0 ? (true) : (false)); 
  }
  function loopIt() {
    if (x<=round && sequence.length<21 && gameOnOff === true) {
      $('#one, #two, #three, #four, #startmode, #strictmode, #c').prop('disabled',true);
        setTimeout(function() {
          let y = document.getElementById(sequence[x] + 'sound');
          y.play();
          $('#' + sequence[x]).fadeOut();
          $('#' + sequence[x]).fadeIn();
          x++;
        loopIt(x);
      }, 1000)
    } else {
      x=0;
      round = sequence.length;
      document.getElementById('c').value = sequence.length;
      $('#one, #two, #three, #four, #startmode, #strictmode, #c').prop('disabled',false);
    }
  }
  function addRound() {
  if (gameOnOff === true) {
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
        currSequence.push(sequence[x])
      }
    }
  }
  function reset(val) {
    if (val === true) {
      sequence = [];
      currSequence = [];
      round = sequence.length;
      document.getElementById('c').value = sequence.length;
    } else {
      sequence.unshift();
      currSequence = []
      round = sequence.length;
      document.getElementById('c').value = sequence.length;
      loopIt();
      for (var x in sequence) {
        currSequence.push(sequence[x])
      }
    }
  }
  function game($element) {
    if (checkToAddRound(currSequence) && gameOnOff === true) {
      addRound();
    } else {
      if ($element.id === currSequence[0] && gameOnOff === true) {
        currSequence.shift()
        if (currSequence.length === 0) {
          addRound()
        } 
        console.log('Right!');
      } else if (gameOnOff === true) {
        console.log('Wrong!');
        if ($('#strictmode').prop('checked')) {
          console.log('restarting game');
          reset(true)
        } else {
          console.log('restarting round');
          reset(false);
        }
      }
    }
  }
$(document).ready(function() {
  if ($('#powermode').prop('checked')) {
    console.log('checked');
    $('#one, #two, #three, #four, #startmode, #strictmode, #c').prop('disabled',false);
  } else {
    console.log('not checked');
    sequence = [];
    currSequence = [];
    round = sequence.length;
    document.getElementById('c').value = sequence.length;
    $('#one, #two, #three, #four, #startmode, #strictmode, #c').prop('disabled',true);
  }
    $('#one').click(function() {
      var sound = document.getElementById(this.id + 'sound');
      sound.play();
    });
    $('#two').click(function() {
      var sound = document.getElementById(this.id + 'sound');
      sound.play();
    });
    $('#three').click(function() {
      var sound = document.getElementById(this.id + 'sound');
      sound.play();
    });
    $('#four').click(function() {
      var sound = document.getElementById(this.id + 'sound');
      sound.play();
    });
    $("#powermode").change(function() {
      if ($(this).prop('checked')) {
        console.log('checked');
        $('#one, #two, #three, #four, #startmode, #strictmode, #c').prop('disabled',false);
        gameOnOff = true;
      } else {
        console.log('not checked');
        sequence = [];
        currSequence = [];
        round = sequence.length;
        document.getElementById('c').value = sequence.length;
        $('#one, #two, #three, #four, #startmode, #strictmode, #c').prop('disabled',true);
        gameOnOff = false;
      }
    });
  });

