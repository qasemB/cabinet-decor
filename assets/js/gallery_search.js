document.addEventListener("DOMContentLoaded", function () {
    const sidenav = document.querySelector(".sidenav");
    M.Sidenav.init(sidenav, {});
  
    var float_social = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(float_social, {hoverEnabled: false});

    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});

    $(".carousel_arrow_right").click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(".carousel_gallery").carousel("next");
    });
    $(".carousel_arrow_left").click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(".carousel_gallery").carousel("prev");
    });

    var top_slider = document.querySelectorAll(".carousel");
  
    $(".simple_item").click(function () {
      $(".gallery_back").removeClass("d_none");
      M.Carousel.init(top_slider, {
        fullWidth: true,
        indicators: true,
        indicators: true,
      });
    });
    $(".close_gallery").click(function () {
      $(".gallery_back").addClass("d_none");
      M.Carousel.init(top_slider, {
        fullWidth: true,
        indicators: true,
        indicators: true,
      });
    });
  
    document
      .getElementById("carousel_arrow_right")
      .addEventListener("click", function () {
        instances.Carousel.next();
      });
    document
      .getElementById("carousel_arrow_left")
      .addEventListener("click", function () {
        instances.Carousel.prev();
      });
  });