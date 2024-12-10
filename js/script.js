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

// slider
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Swiper
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // List of links to activate
  const links = [
    document.getElementById("link-1"),
    document.getElementById("link-2"),
    document.getElementById("link-3"),
    document.getElementById("link-4"),
  ];

  // Helper function to update active link
  const updateActiveLink = (index) => {
    links.forEach((link, i) => {
      const icon = link.querySelector("i"); // Get the icon inside the link
      const iconContainer = link.querySelector("div"); // Get the icon container div
      if (i === index) {
        // Set the active state (Change background and icon color)
        link.classList.add("bg-white"); // Add white background when active
        link.classList.remove("bg-customMix"); // Remove inactive background
        iconContainer.classList.add("bg-primary"); // Add primary background to the icon
        iconContainer.classList.remove("bg-customMix"); // Remove default background
        icon.classList.add("text-white"); // Make icon white when active
        icon.classList.remove("text-primary"); // Remove primary text color
      } else {
        // Set the inactive state (Revert background and icon color)
        link.classList.remove("bg-white"); // Remove white background
        link.classList.add("bg-customMix"); // Add default background
        iconContainer.classList.remove("bg-primary"); // Remove primary background from icon
        iconContainer.classList.add("bg-customMix"); // Restore default icon background
        icon.classList.remove("text-white"); // Remove white icon color
        icon.classList.add("text-primary"); // Restore primary text color for icon
      }
    });
  };

  // Update active link on slide change
  swiper.on("slideChange", function () {
    const activeIndex = swiper.realIndex; // Get the active slide index
    updateActiveLink(activeIndex);
  });

  // Initialize active state for the first slide
  updateActiveLink(swiper.realIndex);
});





// Function to animate the counter
const animateCounter = (element, target) => {
  let count = 0;
  const duration = 1000;
  const step = Math.max(1, Math.floor(target / (duration / 16)));

  const interval = setInterval(() => {
    count += step;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    element.textContent = count;
  }, 16);
};


const counters = document.querySelectorAll('.counter');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'), 10);
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

counters.forEach((counter) => {
  observer.observe(counter);
});




// animation

// scroll releav
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: "3000",
  delay: 600,
})

sr.reveal(".hero__section > div", {
  duration: "1000",
  distance: "100px",
  interval: 200
})
sr.reveal(".mission__container > div", {
  duration: "1000",
  distance: "100px",
  interval: 100
})
sr.reveal(".cat__section", {
  duration: "1000",
  interval: 100
})
sr.reveal(".why__img", {
  duration: "1000",
})
sr.reveal(".why__number > div", {
  duration: "1000",
  interval: 200
})
sr.reveal(".blog__section > div", {
  duration: "1000",
  interval: 200
})
sr.reveal(".service__section", {
  duration: "1000",
})
sr.reveal(".right__service > div", {
  duration: "1000",
  interval: 100,
  distance: "100px"
})
sr.reveal(".slider__link > div", {
  origin: "right",
  duration: "1000",
  interval: 200
})
sr.reveal(".plan__text", {
  duration: "1000",

})
sr.reveal(".plan__cards > div", {
  duration: "1000",
  interval: 200
})
sr.reveal(".faq__heading", {
  duration: "1000",
})

sr.reveal(".faq__qu", {
  duration: "1000",
})
sr.reveal(".testi__heading", {
  duration: "1000",
})

sr.reveal(".testi__slide", {
  duration: "1000",
})







