new TypeIt("#myElement", {
  strings: "Hi, I'm Muhammad Faisal",
}).go();

function renderProjects() {
  const container = document.getElementById("projectsContainer");
  if (!container || typeof projects === 'undefined') return;
  container.innerHTML = projects.map(project => `
    <div class="project-card">
      <img class="project-image" src="${project.image[0]}" alt="${project.title}">
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <div class="project-meta">
          <span>${project.framework}</span>
          <span>${project.date}</span>
        </div>
        <div class="project-tech">${project.techStack}</div>
        <p class="project-description">${project.description}</p>
        <a class="project-link" href="${project.url}" target="_blank">
          View on my Github -> </i>
        </a>
      </div>
    </div>
  `).join("");
}
renderProjects();
