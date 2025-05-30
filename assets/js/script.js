new TypeIt("#myElement", {
  strings: "Hi, I'm Muhammad Faisal",
}).go();

function renderProjects() {
  const container = document.getElementById("projectsContainer");

  projects.forEach((project) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    slide.innerHTML = `
                    <img src="${project.image[0]}" alt="${
      project.title
    }" class="project-image">
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <div class="project-meta">
                            <span>${project.date}</span>
                            <span class="project-type">${project.type.toUpperCase()}</span>
                        </div>
                        <p class="project-description">${
                          project.description
                        }</p>
                        <div class="project-tech">${project.techStack}</div>
                        <a href="${
                          project.url
                        }" target="_blank" class="project-link">
                            <i class="fab fa-github"></i>
                            View on GitHub
                        </a>
                    </div>
                `;

    container.appendChild(slide);
  });
}

function initSwiper() {
  new Swiper(".projectSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}

function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

function initNavbarScroll() {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

function initContactForm() {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Simulate form submission
    alert("Thank you for your message! I will get back to you soon.");
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderProjects();
  initSwiper();
  initSmoothScrolling();
  initNavbarScroll();
  initContactForm();
});

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll(".section").forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });
}

// Initialize scroll animations
document.addEventListener("DOMContentLoaded", initScrollAnimations);
