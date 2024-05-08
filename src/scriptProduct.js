// Navbar
window.addEventListener("scroll", function () {
  let navbarSmall = document.getElementById("navbar-small");
  let btnNavigation = document.querySelectorAll("#navbar-small .btn-small");
  let logo = document.getElementById("logo");
  if (this.window.scrollY > 30) {
    navbarSmall.classList.add("bg-[#EDEDED]");
    navbarSmall.classList.remove("bg-transparent");
    navbarSmall.classList.add("shadow-md");
    logo.classList.remove("hidden");
    btnNavigation.forEach((element) => {
      element.classList.add("text-gray-500");
      element.classList.remove("text-white");
    });
  } else {
    navbarSmall.classList.remove("bg-[#EDEDED]");
    navbarSmall.classList.add("bg-transparent");
    navbarSmall.classList.remove("shadow-md");
    logo.classList.add("hidden");
    btnNavigation.forEach((element) => {
      element.classList.remove("text-gray-500");
      element.classList.add("text-white");
    });
  }
});

// Drawer Checkout Mobile
let btnCheckout = document.getElementById("checkout");
btnCheckout.addEventListener("click", function () {
  drawerBottomCheckout = document.getElementById("drawer-bottom-example");
  drawerBottomCheckout.classList.remove("hidden");
});

// Scroll Rekomendation For U
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

// Catatan Kost
function toggleReadMore(button) {
  var content = button.previousElementSibling;
  if (
    content.classList.contains("max-h-20") &&
    content.classList.contains("overflow-hidden")
  ) {
    content.classList.remove("max-h-20", "overflow-hidden");
    button.innerHTML = "Tampilkan Lebih Sedikit";
  } else {
    content.classList.add("max-h-20", "overflow-hidden");
    button.innerHTML = "Baca Selengkapnya...";
  }
}

// Carousel
const carouselElement = document.getElementById("indicators-carousel");
const options = {
  defaultPosition: 1,
  interval: 3000,

  indicators: {
    activeClasses: "bg-white",
    inactiveClasses: "bg-white/50 hover:bg-white",
    items: [
      {
        position: 0,
        el: document.getElementById("carousel-indicator-1"),
      },
      {
        position: 1,
        el: document.getElementById("carousel-indicator-2"),
      },
      {
        position: 2,
        el: document.getElementById("carousel-indicator-3"),
      },
      {
        position: 3,
        el: document.getElementById("carousel-indicator-4"),
      },
    ],
  },

  // callback functions
  onNext: () => {
    console.log("next slider item is shown");
  },
  onPrev: () => {
    console.log("previous slider item is shown");
  },
  onChange: () => {
    console.log("new slider item has been shown");
  },
};

const instanceOptions = {
  id: "indicators-carousel",
  override: true,
};
