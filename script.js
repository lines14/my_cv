const upperMenu = document.querySelector('.nav-list');

if (upperMenu) {
   const menuButtons = document.querySelectorAll('.nav-item');
   const summary = document.querySelectorAll('.summary');
   const skills = document.querySelectorAll('.skills');
   const projects = document.querySelectorAll('.projects');
   const education = document.querySelectorAll('.education');

   for (let i = 0; i < menuButtons.length; i++) {
    menuButtons[i].addEventListener('click', menuButtonsClickHandler);

      function menuButtonsClickHandler() {
         toggleActiveButton(menuButtons[i], menuButtons);
         blurCards(menuButtons, summary, skills, projects, education);
      }
   }
}

function toggleActiveButton(button, allButtons) {
   button.classList.toggle('active');
 
   let activeButtons = []
   for (let j = 0; j < allButtons.length; j++) {
      if (allButtons[j].classList.contains('active')) {
         activeButtons.push(allButtons[j]);
      }
   }
 
   if (activeButtons.length > 1) {
      for (let i = 0; i < activeButtons.length; i++) {
         activeButtons[i].classList.remove('active')
         button.classList.toggle('active');
      }
   }
 }
 
 function blurCards(allButtons, summary, skills, projects, education) {
   allButtons = Array.from(allButtons);
 
   let activeButtons = []
   for (let j = 0; j < allButtons.length; j++) {
      if (allButtons[j].classList.contains('active')) {
         activeButtons.push(allButtons[j]);
      }
   }
 
   const summaryButton = allButtons.find((button) => button.classList.contains('summary-button'));
   for (let k = 0; k < summary.length; k++) {
      if (!activeButtons.length || summaryButton.classList.contains('active')) {
         summary[k].classList.remove('blur');
      } else {
         summary[k].classList.add('blur');
      }
   }
 
   const skillsButton = allButtons.find((button) => button.classList.contains('skills-button'))
   for (let k = 0; k < skills.length; k++) {
      if (!activeButtons.length || skillsButton.classList.contains('active')) {
         skills[k].classList.remove('blur');
      } else {
         skills[k].classList.add('blur');
      }
   }
 
   const projectsButton = allButtons.find((button) => button.classList.contains('projects-button'))
   for (let k = 0; k < projects.length; k++) {
      if (!activeButtons.length || projectsButton.classList.contains('active')) {
         projects[k].classList.remove('blur');
      } else {
         projects[k].classList.add('blur');
      }
   }

   const educationButton = allButtons.find((button) => button.classList.contains('education-button'))
   for (let k = 0; k < education.length; k++) {
      if (!activeButtons.length || educationButton.classList.contains('active')) {
         education[k].classList.remove('blur');
      } else {
         education[k].classList.add('blur');
      }
   }
}