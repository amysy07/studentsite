document.addEventListener("DOMContentLoaded", function () {
  //TOGGLE NAV MOBILE MENU FOR SMALL SCREENS
  const menubutton = document.querySelector(".menu-button");
  const menunav = document.querySelector(".toggle-nav");
  menubutton.addEventListener("click", function () {
    if (menunav.getAttribute("data-navstate") === "open") {
      menunav.setAttribute("data-navstate", "closed");
    } else {
      menunav.setAttribute("data-navstate", "open");
    }
  });

  // TOGGLE NAV FOR SMALL SCREEMS

  var stickynavlinks = document.querySelectorAll(".sticky nav a");
  var j;
  for (j = 0; j < stickynavlinks.length; j++) {
    stickynavlinks[j].onclick = function () {
      menunav.setAttribute("data-navstate", "closed");
    };
  }
});

// KEYFRAMES

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
