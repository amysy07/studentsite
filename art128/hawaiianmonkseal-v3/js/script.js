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

// PARALLAX SCROLLING


let controller = new ScrollMagic.Controller();

let timeline = new TimelineMax();

timeline
  .to('.white-tern', 3, { x: 500 })
  .to('.bg-rock', 3, { x: -200 });

