var slider = document.getElementById("rate");
var output = document.getElementById("ratex");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

function compute()
{
    p = document.getElementById("principal").value;
    
}
        