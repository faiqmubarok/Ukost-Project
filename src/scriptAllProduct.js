// Loading
function swapContent(){
  let content = document.getElementById('content');
  let skeleton = document.getElementById('skeleton');

  content.classList.add('grid');
  content.classList.remove('hidden');
  skeleton.classList.add('hidden');
  skeleton.classList.remove('grid');
}

function skeletonLoading(){
  let skeletonLoading = document.getElementById('skeleton-loading');
  skeletonLoading.classList.add('hidden');
  skeletonLoading.classList.remove('flex');
  body.classList.remove('overflow-hidden');
}
setTimeout(swapContent, 1800);
setTimeout(skeletonLoading, 800);

function reloadSwapContent(){
  let content = document.getElementById('content');
  let skeleton = document.getElementById('skeleton');

  content.classList.remove('grid');
  content.classList.add('hidden');
  skeleton.classList.remove('hidden');
  skeleton.classList.add('grid');
  
  setTimeout(swapContent, 1000);

}

// Scroll Recomendation
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

// Navbar
let listDropdown = document.getElementById('dropdownNavbar').querySelectorAll('ul li a');
listDropdown.forEach((element, index) => {
  element.addEventListener('click', function(){
    if(index !== 2){
      changeStyleDropdown(element);
      document.getElementsByName('Tipe-Produk-2')[index].checked = true;
      handleProductTypeChange.call(document.getElementsByName('Tipe-Produk-2')[index], true);
      reloadSwapContent();
    }
  })
});

function changeStyleDropdown(list){
  listDropdown.forEach(element => {
    element.classList.remove('text-bluePrimary');
    element.classList.add('hover:bg-gray-100');
  });
  list.classList.add('text-bluePrimary');
  list.classList.remove('hover:bg-gray-100');
}

// Open Drawer and Login
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
  };
}

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
// Chage Style List Gender
function changeStyleListGender(elemen){
    let label = elemen.parentElement;
    // Menerapkan gaya sesuai dengan status checkbox
    if (elemen.checked) {
      label.classList.add('bg-bluePrimary');
      label.classList.remove('text-gray-700');
      label.classList.remove('bg-white');
      label.classList.add('text-white');
    } else {
      label.classList.remove('bg-bluePrimary');
      label.classList.add('text-gray-700');
      label.classList.add('bg-white');
      label.classList.remove('text-white');
    }
}

let listGenderSearch = document.querySelector('#list-gender').querySelectorAll('input');
listGenderSearch.forEach(element => {
  element.addEventListener('change', function(){
    changeStyleListGender(element);
  });
});
let listGenderSearch2 = document.querySelector('#list-gender-2').querySelectorAll('input');
listGenderSearch2.forEach(element => {
  element.addEventListener('change', function(){
    changeStyleListGender(element);
  })
})

let defaultSearchEngine = document.getElementById('default-search-engine');
let listSearchDefault = defaultSearchEngine.querySelectorAll('ul[list-search] li a');
let contentDivs = defaultSearchEngine.querySelectorAll('[search-category]');

let defaultSearchEngine2 = document.getElementById('default-search-engine-2');
let listSearchDefault2 = defaultSearchEngine2.querySelectorAll('ul[list-search] li a');
let contentDivs2 = defaultSearchEngine2.querySelectorAll('[search-category]');

function changeListSearchEngine(element, index, listSearch, mainContent){
    element.classList.add('list-active');
    element.classList.remove('list-other');
    listSearch.forEach(otherElement => {
      if (otherElement !== element) {
        otherElement.classList.remove('list-active');
        otherElement.classList.add('list-other');
      }
    });
    mainContent.forEach(content=>{
      content.classList.add('hidden');
      content.classList.remove('flex');
    })
    mainContent[index].classList.add('flex');
    mainContent[index].classList.remove('hidden');
}

listSearchDefault.forEach((element, index) => {
  element.addEventListener('click', function(){
    changeListSearchEngine(element, index, listSearchDefault, contentDivs);
  })
});

listSearchDefault2.forEach((element, index) => {
  element.addEventListener('click', function(){
    changeListSearchEngine(element, index, listSearchDefault2, contentDivs2);

  })
});

// Change Condition Type in Search
function handleProductTypeChange(isSecondForm) {
  let kontrakanChecked = this.checked && (isSecondForm ? this.id === 'Kontrakan-2' : this.id === 'Kontrakan');
  let gender = isSecondForm ? document.getElementById('gender-2') : document.getElementById('gender');
  let fasilitasUmum = isSecondForm ? document.getElementById('fasilitas-umum-2') : document.getElementById('fasilitas-umum');
  let fasilitasKamar = isSecondForm ? document.getElementById('fasilitas-kamar-2') : document.getElementById('fasilitas-kamar');
  let fasilitasBersama = isSecondForm ? document.getElementById('fasilitas-bersama-2') : document.getElementById('fasilitas-bersama');
  let fasilitasKontrakan = isSecondForm ? document.getElementById('fasilitas-kontrakan-2') : document.getElementById('fasilitas-kontrakan');
  let jumlahKamar = isSecondForm ? document.getElementById('jumlah-kamar-2') : document.getElementById('jumlah-kamar');
  let jumlahKamarMandi = isSecondForm ? document.getElementById('jumlah-kamar-mandi-2') : document.getElementById('jumlah-kamar-mandi');
  let peraturanKost = isSecondForm ? document.getElementById('peraturan-kost-2') : document.getElementById('peraturan-kost');
  let rangeJudul = isSecondForm ? document.getElementById('judul-range-2') : document.getElementById('judul-range');
  let rangeKost = isSecondForm ? document.getElementById('range-kost-2') : document.getElementById('range-kost');
  let rangeKontrakan = isSecondForm ? document.getElementById('range-kontrakan-2') : document.getElementById('range-kontrakan');

  // Memeriksa jenis produk yang dipilih
  if (kontrakanChecked) {
    hideElements([gender, fasilitasUmum, fasilitasKamar, peraturanKost]);
    showElements([fasilitasBersama, fasilitasKontrakan, jumlahKamar, jumlahKamarMandi]);
    rangeJudul.textContent = 'Harga per tahun';
    toggleElements([rangeKost, rangeKontrakan]);
  } else {
    showElements([gender, fasilitasUmum, fasilitasKamar, peraturanKost]);
    hideElements([fasilitasBersama, fasilitasKontrakan, jumlahKamar, jumlahKamarMandi]);
    rangeJudul.textContent = 'Harga per bulan';
    toggleElements([rangeKost, rangeKontrakan]);
  }
}

function hideElements(elements) {
  elements.forEach(element => {
    element.classList.add('hidden');
    let nextElement = element.nextElementSibling;
    if (nextElement) {
      nextElement.classList.add('hidden');
    }
  });
}

function showElements(elements) {
  elements.forEach(element => {
    element.classList.remove('hidden');
    let nextElement = element.nextElementSibling;
    if (nextElement) {
      nextElement.classList.remove('hidden');
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
  element.addEventListener('change', function() {
    handleProductTypeChange.call(this, false);
  });
});


document.getElementsByName('Tipe-Produk-2').forEach((element, index) => {
  element.addEventListener('change', function() {
    handleProductTypeChange.call(this, true);
    let navIndex = listDropdown[index];
    changeStyleDropdown(navIndex);
    reloadSwapContent();
  });
});


// Pagination
document.addEventListener("DOMContentLoaded", function () {
  const totalPages = 99;
  const paginationDisplayCount = 3;
  let currentPage = 1;
  let startPage = 1;

  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const prevAllButton = document.getElementById("prevAll-button");
  const nextAllButton = document.getElementById("nextAll-button");
  const paginationList = document.getElementById("list-pagination");
  const pageLinks = paginationList.querySelectorAll("[page-link]");

  function updatePagination() {
    if (currentPage <= Math.floor(paginationDisplayCount / 2) + 1) {
      startPage = 1;
    } else if (currentPage > totalPages - Math.floor(paginationDisplayCount / 2)) {
      startPage = totalPages - paginationDisplayCount + 1;
    } else {
      startPage = currentPage - Math.floor(paginationDisplayCount / 2);
    }

    pageLinks.forEach((link, index) => {
      const page = startPage + index;
      link.textContent = page;
      link.classList.remove("bg-bluePrimary", "text-white", "bg-white");
      link.classList.add("hover:bg-gray-100", "hover:text-bluePrimary");
      if (page === currentPage) {
        link.classList.add("bg-bluePrimary", "text-white");
        link.classList.remove("hover:bg-gray-100", "hover:text-bluePrimary");
      }
      link.style.display = page <= totalPages ? "flex" : "none";
    });

    updateButtonState(prevButton, currentPage === 1);
    updateButtonState(nextButton, currentPage === totalPages);
    updateButtonState(prevAllButton, currentPage === 1);
    updateButtonState(nextAllButton, currentPage === totalPages);
  }

  function updateButtonState(button, isDisabled) {
    if (isDisabled) {
      button.classList.add("cursor-not-allowed");
      button.classList.remove("hover:bg-gray-100", "hover:text-bluePrimary");
      button.disabled = true;
    } else {
      button.classList.remove("cursor-not-allowed");
      button.classList.add("hover:bg-gray-100", "hover:text-bluePrimary");
      button.disabled = false;
    }
  }

  prevButton.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      updatePagination();
    }
    window.scrollTo(0, 0);
    reloadSwapContent();
  });

  nextButton.addEventListener("click", function () {
    if (currentPage < totalPages) {
      currentPage++;
      updatePagination();
    }
    window.scrollTo(0, 0);
    reloadSwapContent();
  });

  prevAllButton.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage = 1;
      updatePagination();
    }
    window.scrollTo(0, 0);
    reloadSwapContent();
  });

  nextAllButton.addEventListener("click", function () {
    if (currentPage < totalPages) {
      currentPage = totalPages;
      updatePagination();
    }
    window.scrollTo(0, 0);
    reloadSwapContent();
  });

  pageLinks.forEach((link, index) => {
    link.addEventListener("click", function () {
      const page = startPage + index;
      if (page <= totalPages) {
        currentPage = page;
        updatePagination();
        window.scrollTo(0, 0);
        reloadSwapContent();
      }
    });
  });

  updatePagination();
});





