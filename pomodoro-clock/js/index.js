$(document).ready(function() {
  var pomodoroSess; var pomodoroBreak;
  var sessNum; var breakNum;
  var sessSum; var breakSum;
   var x = new Date();
  function pomodoroRest() { 
   breakSum = Number(document.getElementById('breakTime').value);
   breakNum = x.setTime(x.getTime() + (breakSum*60*1000));
   pomodoroBreak = setInterval(function() {
   var now =  Date.now();
   var distance = breakNum - now;
   var hours = Math.round(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
   var minutes = Math.round(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
   var seconds = Math.round(Math.floor((distance % (1000 * 60)) / 1000));
    if (hours > 0) {
		  $('#time').html(hours + ':' + minutes + ':' + seconds);
    } else {
		  $('#time').html(minutes + ':' + seconds);
    }
   if (distance < 0) {
     $('#time').html('Break is up!');
     clearInterval(pomodoroBreak);
    }
   }, 1000);
  }
  function pomodoroTime () {
  sessSum = Number(document.getElementById('sessTime').value);
	sessNum =  x.setTime(x.getTime() + (sessSum*60*1000));
  pomodoroSess = setInterval(function() {
	var now =  Date.now();
  var distance = sessNum - now;
  var hours = Math.round(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
  var minutes = Math.round(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  var seconds = Math.round(Math.floor((distance % (1000 * 60)) / 1000));
    if (hours > 0) {
		  $('#time').html(hours + ':' + minutes + ':' + seconds);
    } else {
		  $('#time').html(minutes + ':' + seconds);
    }
    if (distance < 0) {
    	  $('#time').html('Time is up!');
        pomodoroRest();
        clearInterval(pomodoroSess);
    }
  }, 1000);
}
  function resetTime() {
	clearInterval(pomodoroSess);
  clearInterval(pomodoroBreak);
}
  $('#play').click(function() {
    pomodoroTime();
  });
  $('#reset').click(function() {
    clearInterval(pomodoroSess);
    $('#time').html('00:00');
  })
  $('#sess1').click(function() {
    var sSubOne= Number(document.getElementById('sessTime').value) - 1;
    document.getElementById('sessTime').value = sSubOne;
    });
  $('#sess2').click(function() {
    var sPlusOne = Number(document.getElementById('sessTime').value) + 1;
    document.getElementById('sessTime').value = sPlusOne;
    });
  $('#break1').click(function() {
    var bSubOne = Number(document.getElementById('breakTime').value) - 1;
    document.getElementById('breakTime').value = bSubOne;
    });
  $('#break2').click(function() {
    var bPlusOne = Number(document.getElementById('breakTime').value) + 1;
    document.getElementById('breakTime').value = bPlusOne;
  });  
});