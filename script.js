// Smooth scroll to contact section
document.getElementById("contactBtn").addEventListener("click", () => {
document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// Form submission alert
document.getElementById("contactForm").addEventListener("submit", (e) => {
e.preventDefault();
alert("Thank you! Your message has been sent.");
e.target.reset();
});