// select my elements from the DOM
const banners = document.querySelectorAll(".banner-item");
let nextBanner = 1;
// wait afew seconds
setInterval(() => {
  // remove the active class from the current banner
  const activeBanner = document.querySelector(".banner-item.active");
  activeBanner.classList.remove("active");

  // add the active class to the next banner
  banners[nextBanner].classList.add("active");
  nextBanner++;
  if (nextBanner === banners.length) {
    nextBanner = 0;
  }
}, 2000);
