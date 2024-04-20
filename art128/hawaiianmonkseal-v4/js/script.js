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
  .to('.bg-clouds-left', 4, { y: 300 })
  .to('.bg-clouds-right', 4, { y: 500 }, "-=4")
  .to('.white-tern', 4, { x: 300 }, "-=4")
  .to('.bg-rock', 4, { y: -85 }, "-=4")
  .to('.bg-mountains-to-ocean', 3, { y: -100 }, "-=3");

let scene = new ScrollMagic.Scene({
  triggerElement: ".bg-wrapper",
  duration: "100%",
  triggerHook: .2,
})

  .setTween(timeline)
  .addTo(controller);