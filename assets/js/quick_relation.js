document.addEventListener("DOMContentLoaded", function () {
  const sidenav = document.querySelector(".sidenav");
  M.Sidenav.init(sidenav, {});

  var tooltip_elem = document.querySelectorAll(".tooltipped");
  M.Tooltip.init(tooltip_elem, {});

  var ss = document.querySelectorAll(".scrollspy");
  M.ScrollSpy.init(ss, {});

  var float_social = document.querySelectorAll('.fixed-action-btn');
  M.FloatingActionButton.init(float_social, {hoverEnabled: false});
});
