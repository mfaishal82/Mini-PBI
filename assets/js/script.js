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
                            <span class="project-type">${project.type}</span>
                        </div>
                        <p class="project-description">${
                          project.description
                        }</p>
                        <div class="project-tech">${project.techStack}</div>
                        <a href="${
                          project.url
                        }" target="_blank" class="project-link">
                            <i class="fab fa-github"></i>
                            View on my GitHub
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

renderProjects();
initSwiper();
