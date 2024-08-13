import { initializeNavbar, sinkronNavbarSidebar } from './common-navigation.js';

// Start Loading
function toggleVisibility(elementId, hide, isGrid = false) {
  let element = document.getElementById(elementId);
  if (hide) {
    element.classList.add("hidden");
    element.classList.remove("flex", "md:grid");
  } else {
    element.classList.remove("hidden");
    element.classList.add("flex");
    if (isGrid) {
      element.classList.add("md:grid");
    }
  }
}

function resetScroll(elementId) {
  let element = document.getElementById(elementId);
  element.scrollTop = 0;
  element.scrollLeft = 0;
}

function skeletonLoading() {
  toggleVisibility("skeleton-loading", true);
  document.body.classList.remove("overflow-hidden");
}

function swapContentRecomendation() {
  toggleVisibility("card-recomendation-skeleton", true);
  toggleVisibility("card-recomendation", false);
}

function swapContentBudget() {
  toggleVisibility("card-budget-skeleton", true);
  toggleVisibility("card-budget", false, true);
}

function reloadContent(
  elementSkeletonId,
  elementContentId,
  swapFunction,
  delay,
  isGrid = false,
) {
  resetScroll(elementSkeletonId); // Reset scroll position before showing skeleton
  toggleVisibility(elementSkeletonId, false, isGrid);
  toggleVisibility(elementContentId, true);
  setTimeout(swapFunction, delay);
}

function reloadSwapContentRecomendation() {
  reloadContent(
    "card-recomendation-skeleton",
    "card-recomendation",
    swapContentRecomendation,
    1000,
  );
}

function reloadSwapContentBudget() {
  reloadContent(
    "card-budget-skeleton",
    "card-budget",
    swapContentBudget,
    1000,
    true,
  );
}

function reloadSwapContent() {
  reloadSwapContentRecomendation();
  reloadSwapContentBudget();
}

function swapContent() {
  setTimeout(swapContentRecomendation, 1800);
  setTimeout(swapContentBudget, 1800);
}

setTimeout(skeletonLoading, 800);
swapContent();
// End Loading

// Start Scroll Card
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
// End Scroll Card

// Start Navbar Script
document.addEventListener("DOMContentLoaded", function () {
  let navbarIndex = true;
  let navbarAllProduct = false;
  let navbarProduct = false;
  initializeNavbar(navbarIndex, navbarAllProduct, navbarProduct);
  sinkronNavbarSidebar(navbarIndex, navbarAllProduct, navbarProduct);
});
// End Navbar Script


// Start List Jumbotron Scripting
let listJumbotron = document.querySelectorAll("ul.container-feature li a");
let ulCategoryBudgetKost = document.getElementById("list-category-budget-kost");
let ulCategoryBudgetKontrakan = document.getElementById(
  "list-category-budget-kontrakan",
);

listJumbotron.forEach((element, index) => {
  element.addEventListener("click", function () {
    let judulSearchCampus = document.querySelector("#judul-search-campus span");
    let judulSearchBudget = document.getElementById("judul-search-budget");
    if (index != 2) {
      listJumbotron.forEach((e) => {
        if (e.classList.contains("list-jumbotron-active")) {
          e.classList.remove("list-jumbotron-active");
          e.classList.add("list-jumbotron-pasif");
        }
        reloadSwapContent();
      });
      element.classList.remove("list-jumbotron-pasif");
      element.classList.add("list-jumbotron-active");
    }
    if (index === 1) {
      judulSearchCampus.innerHTML = "Cari Kontrakan Sekitar Kampus di";
      judulSearchBudget.innerHTML = "Cari Kontrakan Sesuai Budgetmu";
      ulCategoryBudgetKontrakan.classList.remove("hidden");
      ulCategoryBudgetKontrakan.classList.add("flex");
      ulCategoryBudgetKost.classList.remove("flex");
      ulCategoryBudgetKost.classList.add("hidden");
    } else if (index === 0) {
      judulSearchCampus.innerHTML = "Cari Kost Sekitar Kampus di";
      judulSearchBudget.innerHTML = "Cari Kost Sesuai Budgetmu";
      ulCategoryBudgetKontrakan.classList.add("hidden");
      ulCategoryBudgetKontrakan.classList.remove("flex");
      ulCategoryBudgetKost.classList.add("flex");
      ulCategoryBudgetKost.classList.remove("hidden");
    }
  });
});
// End List Jumbotron Scripting

// List Budget in Main Content Scripting
let listCategoryBudgetKost = document.querySelectorAll(
  "#list-category-budget-kost li a",
);
let listCategoryBudgetKontrakan = document.querySelectorAll(
  "#list-category-budget-kontrakan li a",
);

listCategoryBudgetKost.forEach((element) => {
  element.addEventListener("click", function () {
    changeListActive(listCategoryBudgetKost, element);
  });
});

listCategoryBudgetKontrakan.forEach((element) => {
  element.addEventListener("click", function () {
    changeListActive(listCategoryBudgetKontrakan, element);
  });
});

function changeListActive(listCategory, element) {
  listCategory.forEach((e) => {
    e.classList.remove("list-budget-active");
    e.classList.add("list-budget-pasif");
  });
  element.classList.remove("list-budget-pasif");
  element.classList.add("list-budget-active");
  reloadSwapContentBudget();
}

// Start Open Drawer & Login
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
// End Open Drawer & Login

// Start Search Campus Scripting
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
// End Search Campus Scripting

// Range Slider Search
// function rangeKost() {
//   return {
//     minprice: 0,
//     maxprice: 5000000,
//     min: 0,
//     max: 5000000,
//     minthumb: 0,
//     maxthumb: 0,

//     mintrigger() {
//       this.minprice = Math.min(this.minprice, this.maxprice - 500);
//       this.minthumb =
//         ((this.minprice - this.min) / (this.max - this.min)) * 100;
//     },

//     maxtrigger() {
//       this.maxprice = Math.max(this.maxprice, this.minprice + 500);
//       this.maxthumb =
//         100 - ((this.maxprice - this.min) / (this.max - this.min)) * 100;
//     },
//     reset() {
//       this.minprice = this.min;
//       this.maxprice = this.max;
//       this.mintrigger();
//       this.maxtrigger();
//     },
//   };
// }

function formatRupiah(angka) {
  let reverse = angka.toString().split('').reverse().join('');
  let ribuan = reverse.match(/\d{1,3}/g);
  ribuan = ribuan.join('.').split('').reverse().join('');
  return ribuan;
}

function updateTrackAndThumbs(slider) {
  const { minRange, maxRange, track, minThumb, maxThumb, minInput, maxInput, min, max } = slider;
  const minVal = parseInt(minRange.value);
  const maxVal = parseInt(maxRange.value);

  const minPercent = ((minVal - min) / (max - min)) * 100;
  const maxPercent = ((maxVal - min) / (max - min)) * 100;

  track.style.left = minPercent + "%";
  track.style.right = 100 - maxPercent + "%";

  minThumb.style.left = minPercent + "%";
  maxThumb.style.left = maxPercent + "%";

  minInput.value = formatRupiah(minVal);
  maxInput.value = formatRupiah(maxVal);
}

function syncMinRange(slider) {
  const { minRange, maxRange, minInput, step } = slider;
  const minVal = Math.min(
    parseInt(minInput.value.replace(/\./g, '')) || 0,
    parseInt(maxRange.value) - step,
  );
  minRange.value = minVal;
  minInput.value = formatRupiah(minVal);
  updateTrackAndThumbs(slider);
}

function syncMaxRange(slider) {
  const { minRange, maxRange, maxInput, step, max } = slider;
  const maxVal = Math.max(
    parseInt(maxInput.value.replace(/\./g, '')) || max,
    parseInt(minRange.value) + step,
  );
  maxRange.value = maxVal;
  maxInput.value = formatRupiah(maxVal);
  updateTrackAndThumbs(slider);
}

function enforceMinMax(slider) {
  const { minRange, maxRange, step } = slider;
  if (parseInt(minRange.value) > parseInt(maxRange.value) - step) {
    minRange.value = parseInt(maxRange.value) - step;
  }
  if (parseInt(maxRange.value) < parseInt(minRange.value) + step) {
    maxRange.value = parseInt(minRange.value) + step;
  }
  updateTrackAndThumbs(slider);
}

function initializeSliders(slider) {
  const { minRange, maxRange, minInput, maxInput, min, max, step } = slider;

  minRange.min = min;
  minRange.max = max;
  minRange.step = step;
  minRange.value = min;

  maxRange.min = min;
  maxRange.max = max;
  maxRange.step = step;
  maxRange.value = max;

  minInput.maxLength = max.toString().length;
  maxInput.maxLength = max.toString().length;

  updateTrackAndThumbs(slider);
}

document.addEventListener("DOMContentLoaded", function () {
  const sliderBulanan = {
    minRange: document.getElementById("min-range-bulanan"),
    maxRange: document.getElementById("max-range-bulanan"),
    minInput: document.getElementById("min-input-bulanan"),
    maxInput: document.getElementById("max-input-bulanan"),
    track: document.getElementById("track-bulanan"),
    minThumb: document.getElementById("min-thumb-bulanan"),
    maxThumb: document.getElementById("max-thumb-bulanan"),
    min: 0,
    max: 5000000,
    step: 100000
  };

  const sliderTahunan = {
    minRange: document.getElementById("min-range-tahunan"),
    maxRange: document.getElementById("max-range-tahunan"),
    minInput: document.getElementById("min-input-tahunan"),
    maxInput: document.getElementById("max-input-tahunan"),
    track: document.getElementById("track-tahunan"),
    minThumb: document.getElementById("min-thumb-tahunan"),
    maxThumb: document.getElementById("max-thumb-tahunan"),
    min: 0,
    max: 50000000,
    step: 1000000
  };

  initializeSliders(sliderBulanan);
  initializeSliders(sliderTahunan);

  // Event listeners for sliderBulanan
  sliderBulanan.minRange.addEventListener("input", function () {
    enforceMinMax(sliderBulanan);
  });

  sliderBulanan.maxRange.addEventListener("input", function () {
    enforceMinMax(sliderBulanan);
  });

  sliderBulanan.minInput.addEventListener("input", function () {
    syncMinRange(sliderBulanan);
  });

  sliderBulanan.maxInput.addEventListener("input", function () {
    syncMaxRange(sliderBulanan);
  });

  // Event listeners for sliderTahunan
  sliderTahunan.minRange.addEventListener("input", function () {
    enforceMinMax(sliderTahunan);
  });

  sliderTahunan.maxRange.addEventListener("input", function () {
    enforceMinMax(sliderTahunan);
  });

  sliderTahunan.minInput.addEventListener("input", function () {
    syncMinRange(sliderTahunan);
  });

  sliderTahunan.maxInput.addEventListener("input", function () {
    syncMaxRange(sliderTahunan);
  });
});

const range = document.getElementById('steps-range');
const rangeValue = document.getElementById('range-value');

  // Function to format number to Indonesian currency
  // function formatRupiah(angka) {
  //   var number_string = angka.toString().replace(/[^,\d]/g, ''),
  //     split = number_string.split(','),
  //     sisa = split[0].length % 3,
  //     rupiah = split[0].substr(0, sisa),
  //     ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  //   if (ribuan) {
  //     separator = sisa ? '.' : '';
  //     rupiah += separator + ribuan.join('.');
  //   }

  //   rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
  //   return 'Rp ' + rupiah;
  // }

  // Update the value of number input when the range input changes
  // range.addEventListener('input', () => {
  //   rangeValue.value = formatRupiah(range.value);
  // });

  // // Update the value of range input when the number input changes
  // rangeValue.addEventListener('input', () => {
  //   // Remove non-digit characters
  //   const value = rangeValue.value.replace(/\D/g, '');
  //   // Update range value
  //   range.value = value;
  //   // Format and display value with currency format
  //   rangeValue.value = formatRupiah(value);
  // });

  // // Format initial value
  // rangeValue.value = formatRupiah(range.value);

  // // Update the slider when input value changes
  // rangeValue.addEventListener('change', () => {
  //   const value = rangeValue.value.replace(/\D/g, ''); // Remove non-digit characters
  //   range.value = value;
  // });














// Range Slider Search

// See More in search feature




let btnSeeMore = document.querySelectorAll("[btn-see-more]");
btnSeeMore.forEach((button) => {
  button.addEventListener("click", function () {
    const overItem = button.previousElementSibling.querySelector(
      "[over-items-search]",
    );
    // Toggle class untuk menampilkan atau menyembunyikan elemen
    overItem.classList.toggle("hidden");
    overItem.classList.toggle("grid");
    // Mengubah teks tombol
    button.textContent = overItem.classList.contains("hidden")
      ? "Lihat lebih banyak"
      : "Lihat lebih sedikit";
  });
});

// Gender in search feature
function updateLabelStyle(element) {
  const label = element.parentElement;

  if (element.checked) {
    label.classList.add("bg-bluePrimary", "text-white");
    label.classList.remove("text-gray-700", "bg-white");
  } else {
    label.classList.remove("bg-bluePrimary", "text-white");
    label.classList.add("text-gray-700", "bg-white");
  }
}
const listGenderSearch = document.querySelectorAll("#list-gender input");

listGenderSearch.forEach((element) => {
  element.addEventListener("change", function () {
    updateLabelStyle(element);
  });
  updateLabelStyle(element);
});

let defaultSearchEngine = document.getElementById("default-search-engine");
let listSearchDefault = defaultSearchEngine.querySelectorAll(
  "ul[list-search] li a",
);
let contentDivs = defaultSearchEngine.querySelectorAll("[search-category]");

listSearchDefault.forEach((element, index) => {
  element.addEventListener("click", function () {
    element.classList.add("list-active");
    element.classList.remove("list-other");
    listSearchDefault.forEach((otherElement) => {
      if (otherElement !== element) {
        otherElement.classList.remove("list-active");
        otherElement.classList.add("list-other");
      }
    });
    contentDivs.forEach((content) => {
      content.classList.add("hidden");
      content.classList.remove("flex");
    });
    contentDivs[index].classList.add("flex");
    contentDivs[index].classList.remove("hidden");
  });
});

// Change Condition Type in Search
function handleProductTypeChange() {
  let gender = document.getElementById("gender");
  let fasilitasUmum = document.getElementById("fasilitas-umum");
  let fasilitasKamar = document.getElementById("fasilitas-kamar");
  let fasilitasBersama = document.getElementById("fasilitas-bersama");
  let fasilitasKontrakan = document.getElementById("fasilitas-kontrakan");
  let jumlahKamar = document.getElementById("jumlah-kamar");
  let jumlahKamarMandi = document.getElementById("jumlah-kamar-mandi");
  let peraturanKost = document.getElementById("peraturan-kost");
  let rangeJudul = document.getElementById("judul-range");

  if (this.checked && this.id === "Kontrakan") {
    hideElements([
      gender, 
      fasilitasUmum, 
      fasilitasKamar, 
      peraturanKost
    ]);
    showElements([
      fasilitasBersama,
      fasilitasKontrakan,
      jumlahKamar,
      jumlahKamarMandi,
    ]);
    rangeJudul.innerHTML = "Harga per tahun";
    initializeSlider(slider, kontrakanMax, kontrakanStep);
    
  } else {
    showElements([
      gender, 
      fasilitasUmum, 
      fasilitasKamar, 
      peraturanKost
    ]);
    hideElements([
      fasilitasBersama,
      fasilitasKontrakan,
      jumlahKamar,
      jumlahKamarMandi,
    ]);
    rangeJudul.innerHTML = "Harga per bulan";
    initializeSlider(slider, kostMax, kostStep);
  }
}

function hideElements(elements) {
  elements.forEach((element) => {
    element.classList.add("hidden");
    if (element.nextElementSibling) {
      element.nextElementSibling.classList.add("hidden");
    }
  });
}

function showElements(elements) {
  elements.forEach((element) => {
    element.classList.remove("hidden");
    if (element.nextElementSibling) {
      element.nextElementSibling.classList.remove("hidden");
    }
  });
}

function toggleElements(elements) {
  elements.forEach((element) => {
    element.classList.toggle("flex");
    element.classList.toggle("hidden");
  });
}

document.getElementsByName("Tipe-Produk").forEach((element) => {
  element.addEventListener("change", handleProductTypeChange);
});

// Reset Semua Inputan Filter & Search
document.getElementById("reset-button").addEventListener("click", resetFilter);

function resetFilter() {
  const selectedRadio = document.querySelector('input[name="Tipe-Produk"]:checked',);
  const selectedValue = selectedRadio ? selectedRadio.value : null;

  document.getElementById("search-filter-form").reset();

  document.querySelector(`input[name="Tipe-Produk"][value="${selectedValue}"]`,).checked = true;

  listGenderSearch.forEach((element) => {
    updateLabelStyle(element);
  });

  // minRange.value = 0;
  // maxRange.value = 50000000;
  // minInput.value = 0;
  // maxInput.value = 50000000;
  // step = 1000000;
  // updateTrackAndThumbs();

  // if(selectedValue === 'Kontrakan'){
  //   minRange.value = 0;
  //   maxRange.value = 50000000;
  //   minInput.value = 0;
  //   maxInput.value = 50000000;
  //   step = 1000000;
  //   updateTrackAndThumbs();
  // }else if(selectedValue === 'Kost'){
  //   minRange.value = 0;
  //   maxRange.value = 5000000;
  //   minInput.value = 0;
  //   maxInput.value = 5000000;
  //   step = 100000;
  //   updateTrackAndThumbs();
  // }
}
