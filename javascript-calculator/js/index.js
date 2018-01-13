var regex = /[^0-9]/g;
var nums = [];
function sum(val) {
  if (regex.test(document.getElementById('myScreen').value)) {
    document.getElementById('myScreen').value = '';
  }
  if (val === '') {
    document.getElementById('myScreen').value = val;
    nums = [];
  } else if (val === '+' || val === '-' || val === '*' || val === '/') {
    nums.push(document.getElementById('myScreen').value, val);
    document.getElementById('myScreen').value = val;
  } else if (typeof val === 'number') {
   document.getElementById('myScreen').value += val;
  } else if (val === '=') {
    nums.push(document.getElementById('myScreen').value); 
    if (regex.test(nums[0]) || regex.test(nums[nums.length-1])) {
      document.getElementById('myScreen').value = 'error';
      nums = [];
    } else {
      equation(nums);
    }
  }
}
function equation(eq) {
  if (eq[eq.length-1] === '') {
    document.getElementById('myScreen').value = 'error';
  }
    var eqStr = eq.toString();
    eqStr = eqStr.replace(/,/g,'');
    var final = eval(eqStr);
    document.getElementById('myScreen').value = final;
    nums = [];
}
$(document).ready(function() {
  
});