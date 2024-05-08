document.getElementById("scrollLeftBtn").addEventListener("click", function () {
  document
    .getElementById("card-recomendation")
    .scrollBy({ left: -310, behavior: "smooth" });
});

document
  .getElementById("scrollRightBtn")
  .addEventListener("click", function () {
    document
      .getElementById("card-recomendation")
      .scrollBy({ left: 310, behavior: "smooth" });
  });

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var liNavbar = document.querySelectorAll("#navbar li a.li-main");
  var btnSidebar = document.getElementById("btn-sidebar");
  var btnSearch = document.getElementById("btn-search");
  var liBtn = document.getElementById("dropdownNavbarLink");
  var image = document.querySelectorAll("#navbar a img");
  let btnLogin = document.getElementById("btn-login");
  if (window.scrollY > 10) {
    navbar.classList.add("bg-[#EDEDED]");
    navbar.classList.remove("bg-transparent");
    navbar.classList.add("border-b");
    navbar.classList.add("border-gray-200");
    btnSidebar.classList.remove("text-white");
    btnSidebar.classList.add("text-gray-500");
    btnSearch.classList.remove("text-white");
    btnSearch.classList.add("text-gray-500");
    image[1].classList.add("hidden");
    image[0].classList.remove("hidden");
    liBtn.classList.add("li-button");
    liBtn.classList.remove("li-button-before");
    liNavbar.forEach(function (a) {
      if (!a.getAttribute("aria-current")) {
        a.classList.add("li-navbar");
        a.classList.remove("li-navbar-before");
      }
    });
    btnLogin.classList.remove("border-gray-400");
    btnLogin.classList.add("border-gray-200");
    btnLogin.classList.remove("bg-transparent");
    btnLogin.classList.add("bg-bluePrimary");
  } else {
    navbar.classList.remove("bg-[#EDEDED]");
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("border-b");
    navbar.classList.remove("border-gray-200");
    btnSidebar.classList.add("text-white");
    btnSidebar.classList.remove("text-gray-500");
    btnSearch.classList.add("text-white");
    btnSearch.classList.remove("text-gray-500");
    image[0].classList.add("hidden");
    image[1].classList.remove("hidden");
    liBtn.classList.add("li-button-before");
    liBtn.classList.remove("li-button");
    liNavbar.forEach(function (a) {
      if (!a.getAttribute("aria-current")) {
        a.classList.add("li-navbar-before");
        a.classList.remove("li-navbar");
      }
    });
    btnLogin.classList.add("bg-transparent");
    btnLogin.classList.remove("bg-bluePrimary");
    btnLogin.classList.remove("border-gray-400");
    btnLogin.classList.add("border-gray-200");
  }
});

// Open Drawer + Login
let btnLoginRegister = document.querySelectorAll("[login-register]");
let overlay = document.getElementById("overlay");
let contentDrawer = document.getElementById("content-drawer");
let btnClose = document.querySelectorAll("button.btn-close-drawer");
let body = document.body;

function openDrawer() {
  overlay.classList.remove("hidden");
  contentDrawer.classList.remove("hidden");
  setTimeout(() => {
    contentDrawer.classList.remove("scale-0");
  }, 10);
  body.classList.add("overflow-hidden");
}

function closeDrawer() {
  overlay.classList.add("hidden");
  contentDrawer.classList.add("hidden");
  contentDrawer.classList.add("scale-0");
  body.classList.remove("overflow-hidden");
}

btnLoginRegister.forEach(function(button){
  button.addEventListener("click", openDrawer);
});
btnClose.forEach(function (button) {
  button.addEventListener("click", closeDrawer);
});
overlay.addEventListener("click", closeDrawer);

var buttons = document.querySelectorAll(".button-hide");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    var input = this.parentElement.querySelector("input");
    var hideIcon = this.querySelector(".hide");
    var unhideIcon = this.querySelector(".unhide");

    if (input.type === "password") {
      input.type = "text";
      hideIcon.classList.add("hidden");
      unhideIcon.classList.remove("hidden");
    } else {
      input.type = "password";
      hideIcon.classList.remove("hidden");
      unhideIcon.classList.add("hidden");
    }
  });
});

// Search Campus
document.addEventListener("DOMContentLoaded", function () {
  const citySelect = document.getElementById("city");
  const cities = document.querySelectorAll(".city");

  citySelect.addEventListener("change", function (event) {
    const selectedCityId = event.target.value;

    cities.forEach(function (city) {
      if (city.id === selectedCityId) {
        city.classList.remove("hidden");
        city.classList.add("grid");
      } else {
        city.classList.add("hidden");
        city.classList.remove("grid");
      }
    });
  });
});

// Range Slider
function range() {
  return {
    minprice: 0,
    maxprice: 20000000,
    min: 0,
    max: 20000000,
    minthumb: 0,
    maxthumb: 0,

    mintrigger() {
      this.minprice = Math.min(this.minprice, this.maxprice - 500);
      this.minthumb =
        ((this.minprice - this.min) / (this.max - this.min)) * 100;
    },

    maxtrigger() {
      this.maxprice = Math.max(this.maxprice, this.minprice + 500);
      this.maxthumb =
        100 - ((this.maxprice - this.min) / (this.max - this.min)) * 100;
    },
  };
}

// See More in search feature
let btnSeeMore = document.querySelectorAll("[btn-see-more]");
btnSeeMore.forEach((button) => {
  button.addEventListener("click", function () {
    const container = button.parentElement.querySelector(
      "[container-items-search]",
    );
    if (
      container.classList.contains("h-16") &&
      container.classList.contains("overflow-hidden")
    ) {
      container.classList.remove("h-16", "overflow-hidden");
      button.innerHTML = "Lihat lebih sedikit";
    } else if (container.classList.contains("other") && container.classList.contains("overflow-hidden")){
      container.classList.remove("h-[100px]", "overflow-hidden");
      button.innerHTML = "Lihat lebih sedikit";
    } else if (container.classList.contains("other")){
      container.classList.add("h-[100px]", "overflow-hidden");
      button.innerHTML = "Lihat lebih banyak";
    } else {
      container.classList.add("h-16", "overflow-hidden");
      button.innerHTML = "Lihat lebih banyak";
    }
  });
});
