const toggleButton = document.getElementById('navbar-toggle');
const mobileNav = document.getElementById('mobile-nav');
const closeButton = document.getElementById('close-navbar');

// Open the mobile nav
toggleButton.addEventListener('click', () => {
    mobileNav.classList.remove('hidden'); // Show the mobile nav
    toggleButton.classList.add('hidden'); // Hide the hamburger button
});

// Close the mobile nav
closeButton.addEventListener('click', () => {
    mobileNav.classList.add('hidden'); // Hide the mobile nav
    toggleButton.classList.remove('hidden'); // Show the hamburger button
});

// Close the mobile nav when clicking outside the menu
mobileNav.addEventListener('click', (event) => {
    if (event.target === mobileNav) {
        mobileNav.classList.add('hidden'); // Hide the mobile nav
        toggleButton.classList.remove('hidden'); // Show the hamburger button
    }
});



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


document.addEventListener("DOMContentLoaded", function () {
  const links = [
    document.getElementById("link-1"),
    document.getElementById("link-2"),
    document.getElementById("link-3"),
    document.getElementById("link-4"),
  ];

  const text = document.getElementById("textSection")


  const updateActiveLink = (index) => {
    links.forEach((link, i) => {
      const icon = link.querySelector("i");
      const iconContainer = link.querySelector("div");


      if (i === index) {
        // Apply active styles
        link.classList.remove("group");
        link.classList.remove("hover:bg-[#EAEBEC]");
        link.classList.add("bg-white");
        link.classList.remove("bg-surface");
        iconContainer.classList.add("bg-primary");
        icon.classList.add("text-white");
        icon.classList.remove("text-primary");
        console.log(link)
      } else {
        // Apply inactive styles
        link.classList.add("group");
        link.classList.remove("bg-white");
        link.classList.add("bg-surface");
        iconContainer.classList.remove("bg-primary");
        icon.classList.remove("text-white");
        icon.classList.add("text-primary");
      }
    });
  };

  // Initialize Swiper
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChange: function () {
        const activeIndex = this.realIndex;
        const textSection = document.getElementById("textSection");

        if (activeIndex === 0) {
          textSection.classList.remove("hidden");
        }
        else {
          textSection.classList.add("hidden");
        }
        updateActiveLink(activeIndex);
      },
    },
  });

  // Set initial state
  updateActiveLink(0);
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







