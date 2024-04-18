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
  .to('.bg-clouds-left', 3, { y: 300 })
  .to('.bg-clouds-right', 3, { y: 500 }, "-=3")
  .to('.white-tern', 3, { x: 300 }, "-=3")
  .to('.bg-rock', 3, { y: -65 }, "-=3")
  .to('.bg-mountains-to-ocean', 3, { y: -100 }, "-=3");

let scene = new ScrollMagic.Scene({
  triggerElement: ".bg-wrapper",
  duration: "100%",
  triggerHook: 0,
})

  .setTween(timeline)
  .addTo(controller);