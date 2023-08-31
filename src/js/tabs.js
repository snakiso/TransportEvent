let accordions = document.querySelectorAll('.presentation__accordion');
let accordionTitleBoxes = document.querySelectorAll('.presentation__accordion-title-box');
let accordionContent = document.querySelectorAll('.presentation__accordion-content')
let padding = 30;
let margin = 25;
let titleHeight = 0;
let contentHeight = 0

window.addEventListener('load', () => {

  for (let i = 0; i < accordions.length; i++) {
    let accordion = accordions[i];
    titleHeight = accordionTitleBoxes[i].offsetHeight;
    accordion.style.maxHeight = `${titleHeight + padding}px`

    contentHeight = accordionContent[i].offsetHeight
  }
})


for (let j = 0; j < accordionTitleBoxes.length; j++) {
  let box = accordionTitleBoxes[j];
  let accordion = accordions[j];
  box.addEventListener('click', () => {
    accordion.classList.toggle('active')
    console.log('click')
  })
}

function openTab(evt, day) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.querySelectorAll(".tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tabs__link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(day).style.display = "flex";
  evt.currentTarget.className += " active";

  if (accordions) {
    for (let i = 0; i < accordions.length; i++) {
      let accordion = accordions[i];
      titleHeight = accordionTitleBoxes[i].offsetHeight;
      accordion.style.maxHeight = `${titleHeight + padding}px`
      contentHeight = accordionContent[i].offsetHeight
    }
  }
}

document.getElementById("defaultOpen").click();