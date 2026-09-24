/** Handle page animations, expandable details, and the Easter egg. */
// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
  document.getElementById("year").textContent = new Date().getFullYear().toString();
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    once: true  
  }); // initialize animate on scroll library
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  var content = coll[i].parentElement.parentElement.getElementsByClassName("content_collapsible")[0];
  content.id = "details-" + (i + 1);
  coll[i].setAttribute("aria-controls", content.id);
  coll[i].setAttribute("aria-expanded", "false");
  coll[i].setAttribute("aria-label", "Toggle details for " + coll[i].closest(".card").querySelector(".h5").textContent);
  coll[i].addEventListener("click", function() {
    //console.log(this.id);
    //console.log(this.parentElement.parentElement.getElementsByClassName("content_collapsible")[0]);
    this.classList.toggle("active_collapsible");
    //const name = "collapse_content_" + this.id.replace('collapsible_button_','');
    //console.log(name);
    var content = this.parentElement.parentElement.getElementsByClassName("content_collapsible")[0];
    $(content).stop(true, true).slideToggle(200);
    this.setAttribute("aria-expanded", this.classList.contains("active_collapsible"));
  });
}

// Easter egg section

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("easterEggImg");
var captionText = document.getElementById("caption");
/** Open the Easter egg dialog. */
function easterEgg() {
  modal.style.display = "flex";
  modalImg.src = "images/easter.gif";
  captionText.textContent = ":)";
  closeButton.focus();
}

// Get the button that closes the modal
var closeButton = document.getElementsByClassName("close")[0];

// When the user clicks on the close button, close the modal
closeButton.onclick = function() {
  modal.style.display = "none";
  document.querySelector(".easter-trigger").focus();
}

document.addEventListener("keydown", function(event) {
  if (modal.style.display !== "flex") return;
  if (event.key === "Escape") closeButton.click();
  if (event.key === "Tab") {
    event.preventDefault();
    closeButton.focus();
  }
});
