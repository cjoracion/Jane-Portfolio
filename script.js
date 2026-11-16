// Parallax Hero Section Scrolling
const heroBg = document.querySelector(".hero-bg");

if (heroBg) {
  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        // Moves the background slower than the foreground text for depth
        if (scrollY <= window.innerHeight * 1.2) {
          heroBg.style.transform = `translate3d(0, ${scrollY * 0.35}px, 0)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}


//HERO SECTION BUTTONS

// Smooth scroll to about section
document.getElementById("aboutBtn").addEventListener("click", () => {
document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

// Smooth scroll to projects section
document.getElementById("projectsBtn").addEventListener("click", () => {
document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

// Smooth scroll to contact section
document.getElementById("contactBtn").addEventListener("click", () => {
document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

//PROJECTS SECTION BUTTONS

// Smooth scroll to project 1 section
document.getElementById("project-1-click").addEventListener("click", () => {
document.getElementById("project-1").scrollIntoView({ behavior: "smooth" });
});

// Smooth scroll to project 2 section
document.getElementById("project-2-click").addEventListener("click", () => {
document.getElementById("project-2").scrollIntoView({ behavior: "smooth" });
});

// Form submission alert
document.getElementById("contactForm").addEventListener("submit", (e) => {
e.preventDefault();
alert("Thank you! Your message has been sent.");
e.target.reset();
});