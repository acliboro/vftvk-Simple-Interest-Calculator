
function updateTextInput(val){
  document.getElementById('ratex').innerHTML=val;
}

var calcform = document.getElementById("calculatorform");
if (calcform) {
  calcform.addEventListener("submit", function(e) {
    e.preventDefault()
  });
}

window.onload = function() { 
  document.getElementById("calculatorform").onsubmit = function() { 
      compute();
      return false;
  };
};

function compute() {   
    const d = new Date()
    let year_today = d.getFullYear();
    var result_node = document.getElementById("result");
    result_node.removeChild(result_node.firstChild)
    
    var amount = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var year = document.getElementById("years").value;
    
    var computed_amount = parseInt(amount)*(parseFloat(rate)/100)*parseInt(year)
    var total_year = parseInt(year_today) + parseInt(year)
    var firstline = "If you deposit <mark>" + amount + "</mark>,<br>"
    var secondline = "at an interest rate of <mark>" + rate + "%</mark>.<br>"
    var thirdline = "You will receive an amount of <mark>" + computed_amount + "</mark>,<br>"
    var fourthline = "in the year <mark>" + total_year + "</mark>"
    var totaline = "<p>"+firstline+secondline+thirdline+fourthline+"</p>"
    result_node.insertAdjacentHTML('afterbegin', totaline)
}
        