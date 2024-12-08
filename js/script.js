document.addEventListener("DOMContentLoaded", function () {
    // Make the first question active by default
    const firstQuestion = document.querySelectorAll('.question')[0];
    firstQuestion.classList.add('active');
    firstQuestion.querySelector('p').classList.remove('hidden'); // Show first answer
    
    // Add event listener to toggle active state
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
      question.querySelector('h1').addEventListener('click', function () {
        // Toggle active state for the clicked question
        question.classList.toggle('active');
        const isActive = question.classList.contains('active');
        const answer = question.querySelector('p');
  
        // Show or hide the clicked answer
        answer.classList.toggle('hidden', !isActive);
  
        // Close other questions
        questions.forEach(otherQuestion => {
          if (otherQuestion !== question) {
            otherQuestion.classList.remove('active');
            otherQuestion.querySelector('p').classList.add('hidden');
          }
        });
      });
    });
  });
  