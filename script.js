// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(event) {

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });
    }

  });
});


// Add a subtle shadow to the navigation when scrolling

window.addEventListener("scroll", function() {

  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 20) {
    navbar.style.boxShadow = "0 5px 25px rgba(23, 33, 59, 0.08)";
  } else {
    navbar.style.boxShadow = "none";
  }

});
