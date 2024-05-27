// import Datepicker from 'flowbite-datepicker/Datepicker';

// const { default: el } = require("flowbite-datepicker/locales/el");

// // Datepicker
// document.addEventListener('DOMContentLoaded', function () {
//   const today = new Date();
//   const minDate = today.toISOString().split('T')[0];

//   const datepicker = new Datepicker(document.getElementById('datepicker-input'), {
//     minDate: minDate,
//     format: 'yyyy-mm-dd'  // Sesuaikan format sesuai kebutuhan
//   });
// });

// Loading
function skeletonLoading(){
  let skeletonLoading = document.getElementById('skeleton-loading');
  skeletonLoading.classList.add('hidden');
  skeletonLoading.classList.remove('flex');
  body.classList.remove('overflow-hidden');
}

function swapContent(){
  let skeletonContent = document.getElementById('skeleton-content');
  let skeletonBottomBar = document.getElementById('skeleton-bottom-bar');
  let content = document.getElementById('main-content');

  skeletonBottomBar.classList.add('hidden');
  skeletonContent.classList.add('hidden');
  content.classList.remove('hidden');
}

setTimeout(swapContent, 1800);
setTimeout(skeletonLoading, 800);

// Navbar
window.addEventListener("scroll", function () {
  let navbarSmall = document.getElementById("navbar-small");
  let btnNavigation = document.querySelectorAll("#navbar-small .btn-small");
  let logo = document.getElementById("logo");
  if (this.window.scrollY > 30) {
    navbarSmall.classList.add("bg-[#EDEDED]");
    navbarSmall.classList.remove("bg-transparent");
    navbarSmall.classList.add("shadow-sm");
    logo.classList.remove("hidden");
    btnNavigation.forEach((element) => {
      element.classList.add("text-gray-500");
      element.classList.remove("text-white");
    });
  } else {
    navbarSmall.classList.remove("bg-[#EDEDED]");
    navbarSmall.classList.add("bg-transparent");
    navbarSmall.classList.remove("shadow-sm");
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

document.getElementById("scrollRightBtn").addEventListener("click", function () {
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

// Administrasi & Calendar
let hargaBlnProduk = 2000000;
let hargaThnProduk = 25000000;

let durasiBlnSelect = document.getElementById('durasi-bulanan');
let durasiBlnSelectMbl = document.getElementById('durasi-bulanan-mobile');
let durasiThnSelect = document.getElementById('durasi-tahunan');
let durasiThnSelectMbl = document.getElementById('durasi-tahunan-mobile');

let hargaBulananElement = document.getElementById('harga-bulanan');
let hargaBulananMblElement = document.getElementById('harga-bulanan-mobile');
let hargaTahunanElement = document.getElementById('harga-tahunan');
let hargaTahunanElementMbl = document.getElementById('harga-tahunan-mobile');

let totalHargaBulanan = document.getElementById('total-bulanan');
let totalHargaBulananMbl = document.getElementById('total-bulanan-mobile');
let totalHargaTahunan = document.getElementById('total-tahunan');
let totalHargaTahunanMbl = document.getElementById('total-tahunan-mobile');

// Calendar
let dateInput = document.getElementById('datepicker-input');
let dateInputMobile = document.getElementById('datepicker-input-mobile');

function formatRupiah(angka) {
  let numberString = angka.toString();
  let sisa = numberString.length % 3;
  let rupiah = numberString.substr(0, sisa);
  let ribuan = numberString.substr(sisa).match(/\d{3}/g);

  if (ribuan) {
      let separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
  }

  return rupiah;
}

function setHarga() {
  hargaBulananElement.innerText = formatRupiah(hargaBlnProduk);
  hargaBulananMblElement.innerText = formatRupiah(hargaBlnProduk);
  hargaTahunanElement.innerText = formatRupiah(hargaThnProduk);
  hargaTahunanElementMbl.innerHTML = formatRupiah(hargaThnProduk);
}

function updateTotalHarga(selectElement, hargaProduk, totalHargaElement) {
  let durasi = selectElement.value;
  let totalHarga = hargaProduk * durasi;
  totalHargaElement.innerText = formatRupiah(totalHarga);
}

function syncAndCalculate(selectPrimary, selectSecondary, hargaProduk, totalHargaPrimary, totalHargaSecondary) {
  selectSecondary.value = selectPrimary.value;
  updateTotalHarga(selectPrimary, hargaProduk, totalHargaPrimary);
  updateTotalHarga(selectSecondary, hargaProduk, totalHargaSecondary);
}

function addSyncEvent(selectPrimary, selectSecondary, hargaProduk, totalHargaPrimary, totalHargaSecondary) {
  selectPrimary.addEventListener('change', function() {
    syncAndCalculate(selectPrimary, selectSecondary, hargaProduk, totalHargaPrimary, totalHargaSecondary);
  });

  selectSecondary.addEventListener('change', function() {
    syncAndCalculate(selectSecondary, selectPrimary, hargaProduk, totalHargaSecondary, totalHargaPrimary);
  });
}



document.addEventListener('DOMContentLoaded', function() {
  setHarga();
  addSyncEvent(durasiBlnSelect, durasiBlnSelectMbl, hargaBlnProduk, totalHargaBulanan, totalHargaBulananMbl);
  addSyncEvent(durasiThnSelect, durasiThnSelectMbl, hargaThnProduk, totalHargaTahunan, totalHargaTahunanMbl);
  
  // Initialize total harga
  updateTotalHarga(durasiBlnSelect, hargaBlnProduk, totalHargaBulanan);
  updateTotalHarga(durasiBlnSelectMbl, hargaBlnProduk, totalHargaBulananMbl);
  updateTotalHarga(durasiThnSelect, hargaThnProduk, totalHargaTahunan);
  updateTotalHarga(durasiThnSelectMbl, hargaThnProduk, totalHargaTahunanMbl);
});






