
/* U-Cricle Website JavaScript */

document.addEventListener("DOMContentLoaded", function () {

  // Mobile menu
  const menuButton = document.querySelector("#menuButton");
  const navLinks = document.querySelector(".nav-links");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }

  // Current year
  const year = document.querySelector("#currentYear");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Demo form validation
  const forms = document.querySelectorAll("form[data-demo]");

  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      alert("এটি একটি Demo Website। বাস্তব লেনদেন সম্পন্ন হয়নি।");
    });
  });

});
