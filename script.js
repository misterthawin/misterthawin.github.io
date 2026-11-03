const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".project-card, .about-copy, .contact-section").forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});
