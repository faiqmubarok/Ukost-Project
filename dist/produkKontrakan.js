import { initializeNavbar, sinkronNavbarSidebar } from './common-navigation.js';

// Start Loading
function skeletonLoading() {
  let skeletonLoading = document.getElementById("skeleton-loading");
  skeletonLoading.classList.add("hidden");
  skeletonLoading.classList.remove("flex");
  body.classList.remove("overflow-hidden");
}

function swapContent() {
  let skeletonContent = document.getElementById("skeleton-content");
  let skeletonBottomBar = document.getElementById("skeleton-bottom-bar");
  let content = document.getElementById("main-content");

  skeletonBottomBar.classList.add("hidden");
  skeletonContent.classList.add("hidden");
  content.classList.remove("hidden");
}

setTimeout(swapContent, 1800);
setTimeout(skeletonLoading, 800);
// End Loading

// Start Navbar Script
document.addEventListener("DOMContentLoaded", function () {
  let navbarIndex = false;
  let navbarAllProduct = false;
  let navbarProduct = true;
  initializeNavbar(navbarIndex, navbarAllProduct, navbarProduct);
  sinkronNavbarSidebar(navbarIndex, navbarAllProduct, navbarProduct);
});
// End Navbar Script

// Scroll Recomendation For U
document.getElementById("scrollLeftBtn").addEventListener("click", function () {
  document
    .getElementById("card-recomendation")
    .scrollBy({ left: -310, behavior: "smooth" });
});

document.getElementById("scrollRightBtn").addEventListener("click", function (){
    document.getElementById("card-recomendation").scrollBy({ left: 310, behavior: "smooth" });
});
// End Scroll Recomendation For U

// Start See More Catatan
document.addEventListener('DOMContentLoaded', function(){
  let button = document.querySelector('[button-see-more]');
  let catatan = document.getElementById('catatan');
  button.addEventListener('click', function(){
    if(catatan.classList.contains('max-h-20') && catatan.classList.contains('overflow-hidden')){
      catatan.classList.remove('max-h-20', 'overflow-hidden');
      button.innerHTML = 'Tampilkan Lebih Sedikit';
    }else{
      catatan.classList.add('max-h-20', 'overflow-hidden');
      button.innerHTML = 'Tampilkan Lebih Banyak';
    }
  })
})
// End See More Catatan

// Drawer Checkout Mobile
document.addEventListener('DOMContentLoaded', function(){
  let btnCheckout = document.getElementById('checkout');
  let drawerCheckout = document.getElementById('drawer-bottom-example');

  btnCheckout.addEventListener('click', function(){
    drawerCheckout.classList.remove('hidden');
  })
})
// End Drawer Checkout Mobile

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

btnLoginRegister.forEach(function (button) {
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

// Administrasi & Calendar
let hargaThnProduk = 25000000;

let durasiThnSelect = document.getElementById("durasi-tahunan");
let durasiThnSelectMbl = document.getElementById("durasi-tahunan-mobile");

let hargaTahunanElement = document.getElementById("harga-tahunan");
let hargaTahunanElementMbl = document.getElementById("harga-tahunan-mobile");

let totalHargaTahunan = document.getElementById("total-tahunan");
let totalHargaTahunanMbl = document.getElementById("total-tahunan-mobile");

let dateInput = document.getElementById("datepicker-input");
let dateInputMobile = document.getElementById("datepicker-input-mobile");

function formatRupiah(angka) {
  let numberString = angka.toString();
  let sisa = numberString.length % 3;
  let rupiah = numberString.substr(0, sisa);
  let ribuan = numberString.substr(sisa).match(/\d{3}/g);

  if (ribuan) {
    let separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  return rupiah;
}

function setHarga() {
  hargaTahunanElement.innerText = formatRupiah(hargaThnProduk);
  hargaTahunanElementMbl.innerHTML = formatRupiah(hargaThnProduk);
}

function updateTotalHarga(selectElement, hargaProduk, totalHargaElement) {
  let durasi = selectElement.value;
  let totalHarga = hargaProduk * durasi;
  totalHargaElement.innerText = formatRupiah(totalHarga);
}

function syncAndCalculate(
  selectPrimary,
  selectSecondary,
  hargaProduk,
  totalHargaPrimary,
  totalHargaSecondary,
) {
  selectSecondary.value = selectPrimary.value;
  updateTotalHarga(selectPrimary, hargaProduk, totalHargaPrimary);
  updateTotalHarga(selectSecondary, hargaProduk, totalHargaSecondary);
}

function addSyncEvent(
  selectPrimary,
  selectSecondary,
  hargaProduk,
  totalHargaPrimary,
  totalHargaSecondary,
) {
  selectPrimary.addEventListener("change", function () {
    syncAndCalculate(
      selectPrimary,
      selectSecondary,
      hargaProduk,
      totalHargaPrimary,
      totalHargaSecondary,
    );
  });

  selectSecondary.addEventListener("change", function () {
    syncAndCalculate(
      selectSecondary,
      selectPrimary,
      hargaProduk,
      totalHargaSecondary,
      totalHargaPrimary,
    );
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setHarga();
  addSyncEvent(
    durasiThnSelect,
    durasiThnSelectMbl,
    hargaThnProduk,
    totalHargaTahunan,
    totalHargaTahunanMbl,
  );

  // Initialize total harga
  updateTotalHarga(durasiThnSelect, hargaThnProduk, totalHargaTahunan);
  updateTotalHarga(durasiThnSelectMbl, hargaThnProduk, totalHargaTahunanMbl);
});
