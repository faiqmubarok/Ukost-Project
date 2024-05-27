// const { default: id } = require("flowbite-datepicker/locales/id");

// Start Loading
function toggleVisibility(elementId, hide, isGrid = false) {
  let element = document.getElementById(elementId);
  if (hide) {
    element.classList.add('hidden');
    element.classList.remove('flex', 'md:grid');
  } else {
    element.classList.remove('hidden');
    element.classList.add('flex');
    if (isGrid) {
      element.classList.add('md:grid');
    }
  }
}

function resetScroll(elementId) {
  let element = document.getElementById(elementId);
  element.scrollTop = 0;
  element.scrollLeft = 0;
}

function skeletonLoading() {
  toggleVisibility('skeleton-loading', true);
  document.body.classList.remove('overflow-hidden');
}

function swapContentRecomendation() {
  toggleVisibility('card-recomendation-skeleton', true);
  toggleVisibility('card-recomendation', false);
}

function swapContentBudget() {
  toggleVisibility('card-budget-skeleton', true);
  toggleVisibility('card-budget', false, true);
}

function reloadContent(elementSkeletonId, elementContentId, swapFunction, delay, isGrid = false) {
  resetScroll(elementSkeletonId); // Reset scroll position before showing skeleton
  toggleVisibility(elementSkeletonId, false, isGrid);
  toggleVisibility(elementContentId, true);
  setTimeout(swapFunction, delay);
}

function reloadSwapContentRecomendation() {
  reloadContent('card-recomendation-skeleton', 'card-recomendation', swapContentRecomendation, 1000);
}

function reloadSwapContentBudget() {
  reloadContent('card-budget-skeleton', 'card-budget', swapContentBudget, 1000, true);
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

document.getElementById("scrollRightBtn").addEventListener("click", function (){
    document.getElementById("card-recomendation").scrollBy({ left: 310, behavior: "smooth" });
});
// End Scroll Card


// Start Navbar Effect
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
    navbar.classList.add("shadow-sm");
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
    navbar.classList.remove("shadow-sm");
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
// End Navbar Effect


// Start List Jumbotron Scripting
let listJumbotron = document.querySelectorAll('ul.container-feature li a');
let ulCategoryBudgetKost = document.getElementById('list-category-budget-kost');
let ulCategoryBudgetKontrakan = document.getElementById('list-category-budget-kontrakan');

listJumbotron.forEach((element, index) => {
  element.addEventListener('click', function(){
    let judulSearchCampus = document.querySelector('#judul-search-campus span');
    let judulSearchBudget = document.getElementById('judul-search-budget');
    if(index != 2){
      listJumbotron.forEach(e => {
        if(e.classList.contains('list-jumbotron-active')){
          e.classList.remove('list-jumbotron-active');
          e.classList.add('list-jumbotron-pasif');
        }
        reloadSwapContent();
      });
      element.classList.remove('list-jumbotron-pasif');
      element.classList.add('list-jumbotron-active');
    }
    if(index === 1){
      judulSearchCampus.innerHTML = 'Cari Kontrakan Sekitar Kampus di';
      judulSearchBudget.innerHTML = 'Cari Kontrakan Sesuai Budgetmu';
      ulCategoryBudgetKontrakan.classList.remove('hidden');
      ulCategoryBudgetKontrakan.classList.add('flex');
      ulCategoryBudgetKost.classList.remove('flex');
      ulCategoryBudgetKost.classList.add('hidden');
    }else if(index === 0){
      judulSearchCampus.innerHTML = 'Cari Kost Sekitar Kampus di';
      judulSearchBudget.innerHTML = 'Cari Kost Sesuai Budgetmu';
      ulCategoryBudgetKontrakan.classList.add('hidden');
      ulCategoryBudgetKontrakan.classList.remove('flex');
      ulCategoryBudgetKost.classList.add('flex');
      ulCategoryBudgetKost.classList.remove('hidden');
    }
  })
});
// End List Jumbotron Scripting

// List Budget in Main Content Scripting
let listCategoryBudgetKost = document.querySelectorAll('#list-category-budget-kost li a');
let listCategoryBudgetKontrakan = document.querySelectorAll('#list-category-budget-kontrakan li a');

listCategoryBudgetKost.forEach(element => {
  element.addEventListener('click', function() {
    changeListActive(listCategoryBudgetKost, element);
  });
});

listCategoryBudgetKontrakan.forEach(element => {
  element.addEventListener('click', function() {
    changeListActive(listCategoryBudgetKontrakan, element);
  });
});

function changeListActive(listCategory, element) {
  listCategory.forEach(e =>{
    e.classList.remove('list-budget-active');
    e.classList.add('list-budget-pasif');
  });
  element.classList.remove('list-budget-pasif');
  element.classList.add('list-budget-active');
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
function rangeKost() {
  return {
    minprice: 0,
    maxprice: 5000000,
    min: 0,
    max: 5000000,
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
    reset() {
      this.minprice = this.min;
      this.maxprice = this.max;
      this.mintrigger();
      this.maxtrigger();
    },
  };
}

document.addEventListener('DOMContentLoaded', function () {
  const minRange = document.getElementById('min-range');
  const maxRange = document.getElementById('max-range');
  const minInput = document.getElementById('min-input');
  const maxInput = document.getElementById('max-input');
  const track = document.getElementById('track');
  const minThumb = document.getElementById('min-thumb');
  const maxThumb = document.getElementById('max-thumb');
  const min = 0;
  const max = 5000000;
  const step = 100000;

  function updateTrackAndThumbs() {
    const minVal = parseInt(minRange.value);
    const maxVal = parseInt(maxRange.value);

    const minPercent = ((minVal - min) / (max - min)) * 100;
    const maxPercent = ((maxVal - min) / (max - min)) * 100;

    track.style.left = minPercent + '%';
    track.style.right = (100 - maxPercent) + '%';

    minThumb.style.left = minPercent + '%';
    maxThumb.style.left = maxPercent + '%';

    minInput.value = minVal;
    maxInput.value = maxVal;
  }

  function syncMinRange() {
    const minVal = Math.min(parseInt(minInput.value) || 0, parseInt(maxRange.value) - step);
    minRange.value = minVal;
    minInput.value = minVal;
    updateTrackAndThumbs();
  }

  function syncMaxRange() {
    const maxVal = Math.max(parseInt(maxInput.value) || max, parseInt(minRange.value) + step);
    maxRange.value = maxVal;
    maxInput.value = maxVal;
    updateTrackAndThumbs();
  }

  function enforceMinMax() {
    if (parseInt(minRange.value) > parseInt(maxRange.value) - step) {
      minRange.value = parseInt(maxRange.value) - step;
    }
    if (parseInt(maxRange.value) < parseInt(minRange.value) + step) {
      maxRange.value = parseInt(minRange.value) + step;
    }
    updateTrackAndThumbs();
  }

  minRange.addEventListener('input', function() {
    enforceMinMax();
  });

  maxRange.addEventListener('input', function() {
    enforceMinMax();
  });

  minInput.addEventListener('input', function() {
    syncMinRange();
  });

  maxInput.addEventListener('input', function() {
    syncMaxRange();
  });

  // Initial update
  updateTrackAndThumbs();
});

function rangeKontrakan() {
  return {
    minprice: 0,
    maxprice: 50000000,
    min: 0,
    max: 50000000,
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
// Range Slider Search

// See More in search feature
let btnSeeMore = document.querySelectorAll("[btn-see-more]");
btnSeeMore.forEach(button => {
  button.addEventListener('click', function(){
    const overItem = button.previousElementSibling.querySelector('[over-items-search]');
    // Toggle class untuk menampilkan atau menyembunyikan elemen
    overItem.classList.toggle('hidden');
    overItem.classList.toggle('grid');
    // Mengubah teks tombol
    button.textContent = overItem.classList.contains('hidden') ? 'Lihat lebih banyak' : 'Lihat lebih sedikit';
  })
});

// Gender in search feature
function updateLabelStyle(element) {
  const label = element.parentElement;

  if (element.checked) {
    label.classList.add('bg-bluePrimary', 'text-white');
    label.classList.remove('text-gray-700', 'bg-white');
  } else {
    label.classList.remove('bg-bluePrimary', 'text-white');
    label.classList.add('text-gray-700', 'bg-white');
  }
}
const listGenderSearch = document.querySelectorAll('#list-gender input');

listGenderSearch.forEach(element => {
  element.addEventListener('change', function() {
    updateLabelStyle(element);
  });
  updateLabelStyle(element);
});


let defaultSearchEngine = document.getElementById('default-search-engine');
let listSearchDefault = defaultSearchEngine.querySelectorAll('ul[list-search] li a');
let contentDivs = defaultSearchEngine.querySelectorAll('[search-category]');

listSearchDefault.forEach((element, index) => {
  element.addEventListener('click', function(){
    element.classList.add('list-active');
    element.classList.remove('list-other');
    listSearchDefault.forEach(otherElement => {
      if (otherElement !== element) {
        otherElement.classList.remove('list-active');
        otherElement.classList.add('list-other');
      }
    });
    contentDivs.forEach(content=>{
      content.classList.add('hidden');
      content.classList.remove('flex');
    })
    contentDivs[index].classList.add('flex');
    contentDivs[index].classList.remove('hidden');
  })
});

// Change Condition Type in Search
function handleProductTypeChange() {
  let gender = document.getElementById('gender');
  let fasilitasUmum = document.getElementById('fasilitas-umum');
  let fasilitasKamar = document.getElementById('fasilitas-kamar');
  let fasilitasBersama = document.getElementById('fasilitas-bersama');
  let fasilitasKontrakan = document.getElementById('fasilitas-kontrakan');
  let jumlahKamar = document.getElementById('jumlah-kamar');
  let jumlahKamarMandi = document.getElementById('jumlah-kamar-mandi');
  let peraturanKost = document.getElementById('peraturan-kost');
  let rangeJudul = document.getElementById('judul-range');
  let rangeKost = document.getElementById('range-kost');
  let rangeKontrakan = document.getElementById('range-kontrakan');

  if (this.checked && this.id === 'Kontrakan') {
    hideElements([gender, fasilitasUmum, fasilitasKamar, peraturanKost]);
    showElements([fasilitasBersama, fasilitasKontrakan, jumlahKamar, jumlahKamarMandi]);
    rangeJudul.innerHTML = 'Harga per tahun';
    toggleElements([rangeKost, rangeKontrakan]);
    resetFilter();
  } else {
    showElements([gender, fasilitasUmum, fasilitasKamar, peraturanKost]);
    hideElements([fasilitasBersama, fasilitasKontrakan, jumlahKamar, jumlahKamarMandi]);
    rangeJudul.innerHTML = 'Harga per bulan';
    toggleElements([rangeKost, rangeKontrakan]);
    resetFilter();
  }
}

function hideElements(elements) {
  elements.forEach(element => {
    element.classList.add('hidden');
    if (element.nextElementSibling) {
      element.nextElementSibling.classList.add('hidden');
    }
  });
}

function showElements(elements) {
  elements.forEach(element => {
    element.classList.remove('hidden');
    if (element.nextElementSibling) {
      element.nextElementSibling.classList.remove('hidden');
    }
  });
}

function toggleElements(elements) {
  elements.forEach(element => {
    element.classList.toggle('flex');
    element.classList.toggle('hidden');
  });
}

document.getElementsByName('Tipe-Produk').forEach(element => {
  element.addEventListener('change', handleProductTypeChange);
});

// Reset Semua Inputan Filter & Search
document.getElementById('reset-button').addEventListener('click', resetFilter);

function resetFilter(){
  const selectedRadio = document.querySelector('input[name="Tipe-Produk"]:checked');
  const selectedValue = selectedRadio ? selectedRadio.value : null;

  document.getElementById('search-filter-form').reset();

  if (selectedValue) {
    document.querySelector(`input[name="Tipe-Produk"][value="${selectedValue}"]`).checked = true;
  }
  listGenderSearch.forEach(element => {
    updateLabelStyle(element);
  });
  
}
