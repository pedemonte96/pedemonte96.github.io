// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

import { educationData } from './education.js';
import { experienceData } from './experience.js';
import { skillsData } from './skills.js';

$(document).ready(function() {
  document.getElementById("age").textContent = martisAge();
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
  createDivs();
  setListeners();
});

function setListeners() {
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

function createDivs() {
  var i;
  //console.log(experienceData);
  for (i = 0; i < experienceData.length; i++) {
    createExperienceCard(experienceData[i]);
  }

  //console.log(educationData);
  for (i = 0; i < educationData.length; i++) {
    createEducationCard(educationData[i]);
  }

  //console.log(skillsData);
  for (i = 0; i < skillsData.length; i++) {
    createSkillsCard(skillsData[i]);
  }
}

function createExperienceCard(elementInfo) {
  document.getElementById("experience_container").innerHTML += "  ";
  var div = document.createElement("div");
  div.className = 'card';
  div.innerHTML += `
              <div class="row">
                <div class="col-md-4 col-lg-3 bg-primary vertical-center" data-aos="fade-right" data-aos-offset="20" data-aos-duration="500">
                  <div class="card-body cc-education-header">
                    <p style="margin-bottom: 5px;">${elementInfo.dates}</p>
                    ${elementInfo.logo_info}
                  </div>
                </div>
                <div class="col-md-8 col-lg-9" data-aos="fade-left" data-aos-offset="20" data-aos-duration="500">
                  <div class="card-body">
                    <div style="display:flex;">
                      <div style="width: 100%;">
                        <div class="h5">${elementInfo.degree}</div>
                        <p class="category" style="margin-bottom: -5px;">${elementInfo.institution}</p>
                        <p align="justify" style="margin-bottom: 0px; margin-top: 10px;">${elementInfo.noncollapsible_text}</p>
                        <div class="content_collapsible">${elementInfo.collapsible_content}</div>
                      </div>
                      <div style="width:auto; text-align:right; white-space: nowrap">
                        <button class="collapsible"></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `;
  document.getElementById("experience_container").appendChild(div);
  document.getElementById("experience_container").innerHTML += "\n          ";
}

function createEducationCard(elementInfo) {
  document.getElementById("education_container").innerHTML += "  ";
  var div = document.createElement("div");
  div.className = 'card';
  div.innerHTML += `
              <div class="row">
                <div class="col-md-4 col-lg-3 bg-primary vertical-center" data-aos="fade-right" data-aos-offset="20" data-aos-duration="500">
                  <div class="card-body cc-education-header">
                    <p style="margin-bottom: 5px;">${elementInfo.dates}</p>
                    ${elementInfo.logo_info}
                  </div>
                </div>
                <div class="col-md-8 col-lg-9" data-aos="fade-left" data-aos-offset="20" data-aos-duration="500">
                  <div class="card-body">
                    <div style="display:flex;">
                      <div style="width: 100%;">
                        <div class="h5">${elementInfo.degree}</div>
                        <p class="category" style="margin-bottom: -5px;">${elementInfo.institution}</p>
                        <div class="content_collapsible">${elementInfo.collapsible_content}</div>
                      </div>
                      <div style="width:auto; text-align:right; white-space: nowrap">
                        <button class="collapsible"></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `;
  document.getElementById("education_container").appendChild(div);
  document.getElementById("education_container").innerHTML += "\n          ";
}

function createSkillsCard(elementInfo) {
  document.getElementById("skill_container").innerHTML += "  ";
  var div = document.createElement("div");
  div.className = 'row';
  div.innerHTML += `
                  <div class="col-md-6">
                    <div class="progress-container progress-primary"><span class="progress-badge">${elementInfo.name1}</span>
                      <div class="progress">
                        <div class="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: ${elementInfo.level1}%;"></div><span class="progress-value"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="progress-container progress-primary"><span class="progress-badge">${elementInfo.name2}</span>
                      <div class="progress">
                        <div class="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: ${elementInfo.level2}%;"></div><span class="progress-value"></span>
                      </div>
                    </div>
                  </div>
                `;
  document.getElementById("skill_container").appendChild(div);
  document.getElementById("skill_container").innerHTML += "\n              ";
}