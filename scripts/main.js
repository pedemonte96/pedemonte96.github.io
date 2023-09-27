// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
  document.getElementById("age").textContent = martisAge();
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    //console.log(this.id);
    //console.log(this.parentElement.parentElement.getElementsByClassName("content_collapsible")[0]);
    this.classList.toggle("active_collapsible");
    //const name = "collapse_content_" + this.id.replace('collapsible_button_','');
    //console.log(name);
    var content = this.parentElement.parentElement.getElementsByClassName("content_collapsible")[0];
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function martisAge() {
  var today = new Date();
  const birthday_this = new Date(today.getFullYear(), 10, 28);
  var years = today.getFullYear()-1996;
  if(today<birthday_this){
    years = years - 1;
  }
  //console.log(years)
  return years.toString();
}

// Easter egg section

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("easterEggImg");
var captionText = document.getElementById("caption");
function easterEgg() {
  console.log("hello");
  modal.style.display = "flex";
  modalImg.src = "images/easter.gif";
  captionText.innerHTML = ":)";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}