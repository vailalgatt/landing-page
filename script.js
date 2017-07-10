
// JS is to make the text editable, not required for the effect. Thanks for the suggestion @chriscoyier! 
var h1 = document.querySelector("h1");

h1.addEventListener("input", function() {
    this.setAttribute("data-heading", this.innerText);
});

var button = document.querySelector('.button');
button.addEventListener('click', function(event) {
    var target = document.querySelector(button.getAttribute('data-target'));
    if (target.style.display == "none") {
        target.style.display = "block";
        button.innerHTML = button.getAttribute('data-shown-text');
    } else {
        target.style.display = "none";
        button.innerHTML = button.getAttribute('data-hidden-text');
    }
});