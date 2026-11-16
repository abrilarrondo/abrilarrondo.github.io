let menuOpenBtn = document.getElementById("open-menu-button");
const mobileNavMenu = document.getElementById("mobile-navigation");

document.getElementById("open-menu-button").addEventListener("click", function () {
  toggleMobileNavOpenClosed();
});

function toggleMobileNavOpenClosed() {
  if (!(menuOpenBtn.classList.contains("is-open"))) {
    menuOpenBtn.classList.add("is-open");
    mobileNavMenu.classList.add("is-open");
  } else {
    menuOpenBtn.classList.remove("is-open");
    mobileNavMenu.classList.remove("is-open");
  };
};