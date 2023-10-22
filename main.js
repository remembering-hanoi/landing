document.addEventListener("DOMContentLoaded", function () {
  $(".customer-smiles").owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 12,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      640: {
        items: 2,
      },
    },
  });
});
