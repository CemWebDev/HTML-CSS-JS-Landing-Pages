const openMobile = document.querySelector(".mobile > i");
const mobileMenu = document.querySelector(".header__nav");

const handleMobileMenu = () => {
  openMobile.classList.toggle("bi-x");
  if (openMobile.classList.contains("bi-x")) {
    mobileMenu.style.top = "100%";
  } else {
    mobileMenu.style.top = "-400%";
  }
};

openMobile.addEventListener("click", handleMobileMenu);
