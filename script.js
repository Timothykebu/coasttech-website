document.addEventListener("DOMContentLoaded", () => {
  // Contact Form
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your message has been received.");
      contactForm.reset();
    });
  }

  // Sections for fade-in & active nav
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav a");

  // Fade-in effect
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("fade-in");
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));

  // Highlight active nav link on scroll
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 70;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  // Back to Top Button
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
