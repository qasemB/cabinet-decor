document.addEventListener("DOMContentLoaded", function () {
    const sidenav = document.querySelector(".sidenav");
    M.Sidenav.init(sidenav, {});
  
    var float_social = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(float_social, {hoverEnabled: false});

  });