// Start Navbar Script
export function initializeNavbar (index, allProduct, product) {
    let navbarIndex = index;
    let navbarAllProduct = allProduct;
    let navbarProduct = product;

    let navbar = document.getElementById("navbar");
    let logo = document.getElementById("logo");
    let imageLogo = document.querySelectorAll("#logo a img");
    let secondSection = document.getElementById("second-section");
    let btnSidebar = document.getElementById("btn-sidebar");
    let btnSearch = document.getElementById("btn-search");
    let btnSearchMediumAllProduct = document.getElementById(
    "btn-search-medium-allProduct",
    );
    let btnSearchMediumIndex = document.getElementById("btn-search-medium-index");
    let btnLogin = document.getElementById("btn-login");
    let liNavbar = document.querySelectorAll("#navbar li a.li-main");
    let liBtn = document.getElementById("dropdownNavbarLink");
    let btnBack = document.getElementById("btn-back");

    if (navbarIndex) {
        window.addEventListener("scroll", function () {
        var image = document.querySelectorAll("#navbar a img");
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
            if(!liBtn.getAttribute('aria-current')){
            liBtn.classList.remove('li-button-before');
            liBtn.classList.add('li-button');
            }
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
            if(!liBtn.getAttribute('aria-current')){
            liBtn.classList.add('li-button-before');
            liBtn.classList.remove('li-button');
            }
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
    } else {
        if (navbarAllProduct === false && navbarProduct) {
        window.addEventListener("scroll", function () {
            if (this.window.scrollY > 30) {
            navbar.classList.add("bg-[#EDEDED]");
            navbar.classList.remove("bg-transparent");
            navbar.classList.add("shadow-md");
            btnSidebar.classList.remove("text-white");
            btnSidebar.classList.add("text-gray-500");
            logo.classList.remove("hidden");
            btnBack.classList.remove("text-white");
            btnBack.classList.add("text-gray-500");
            } else {
            navbar.classList.remove("bg-[#EDEDED]");
            navbar.classList.add("bg-transparent");
            navbar.classList.remove("shadow-md");
            btnSidebar.classList.add("text-white");
            btnSidebar.classList.remove("text-gray-500");
            logo.classList.add("hidden");
            btnBack.classList.add("text-white");
            btnBack.classList.remove("text-gray-500");
            }
        });
        }
    }
};
// End Navbar Script


// Sinkronisasi Navbar & Sidebar
export function sinkronNavbarSidebar(index, allProduct, product){
    let navbarIndex = index;
    let navbarAllProduct = allProduct;
    let navbarProduct = product;

  let sidebarItem = document.querySelectorAll('[sidebar-item]');
  let navbarItem = document.querySelectorAll('[navbar-item]');
  let dropdownParentNavbar = document.getElementById('dropdownNavbarLink');
  let dropdownParentSidebar = document.getElementById('dropdownSidebarLink');
  
  function syncActiveClass(target){
    if(navbarIndex){
      navbarItem.forEach((item, index) => {
        if (index !== 1 && index !== 2) {
          if (item.getAttribute('data-target') === target) {
              item.setAttribute('aria-current', 'page');
              item.classList.add('li-navbar-ariaCurrent');
              item.classList.remove('li-navbar-before');
              dropdownParentNavbar.classList.add('li-button-before');
              dropdownParentNavbar.classList.remove('li-button-active');
              dropdownParentNavbar.removeAttribute('aria-current');
          } else {
              item.classList.remove('li-navbar-ariaCurrent');
              item.classList.add('li-navbar-before');
              item.removeAttribute('aria-current');
          }
        } else {
          if(item.getAttribute('data-target') === target){
            item.classList.add('list-dropdown-active');
            item.classList.remove('list-dropdown-pasif');
            dropdownParentNavbar.classList.remove('li-button-before');
            dropdownParentNavbar.classList.add('li-button-active');
            dropdownParentNavbar.setAttribute('aria-current', 'page');
          }
          else{
            item.classList.remove('list-dropdown-active');
            item.classList.add('list-dropdown-pasif');
          }
        }
      });
    } else{
      navbarItem.forEach((item, index) => {
        if (index !== 1 && index !== 2) {
          if (item.getAttribute('data-target') === target) {
              item.setAttribute('aria-current', 'page');
              item.classList.add('li-navbar-ariaCurrent');
              item.classList.remove('li-navbar');
              dropdownParentNavbar.classList.add('li-button');
              dropdownParentNavbar.classList.remove('li-button-active');
              dropdownParentNavbar.removeAttribute('aria-current');
          } else {
              item.classList.remove('li-navbar-ariaCurrent');
              item.classList.add('li-navbar');
              item.removeAttribute('aria-current');
          }
        } else {
          if(item.getAttribute('data-target') === target){
            item.classList.add('list-dropdown-active');
            item.classList.remove('list-dropdown-pasif');
            dropdownParentNavbar.classList.remove('li-button');
            dropdownParentNavbar.classList.add('li-button-active');
            dropdownParentNavbar.setAttribute('aria-current', 'page');
          }
          else{
            item.classList.remove('list-dropdown-active');
            item.classList.add('list-dropdown-pasif');
          }
        }
      });
    }
    sidebarItem.forEach((item, index) => {
      if (index !== 1 && index !== 2) {
        if(item.getAttribute('data-target') === target){
          item.setAttribute('aria-current', 'page');
          item.classList.add('list-sidebar-active');
          item.classList.remove('list-sidebar-pasif');
          dropdownParentSidebar.classList.add('list-sidebar-pasif');
          dropdownParentSidebar.classList.remove('list-sidebar-active');
          dropdownParentSidebar.removeAttribute('aria-current');
        }else{
          item.removeAttribute('aria-current');
          item.classList.remove('list-sidebar-active');
          item.classList.add('list-sidebar-pasif');
        }
      } else {
        if(item.getAttribute('data-target') === target){
          item.classList.add('list-sidebar-active');
          item.classList.remove('list-sidebar-pasif');
          dropdownParentSidebar.classList.remove('list-sidebar-pasif');
          dropdownParentSidebar.classList.add('list-sidebar-active');
          dropdownParentSidebar.setAttribute('aria-current', 'page');
        }else{
          item.classList.remove('list-sidebar-active');
          item.classList.add('list-sidebar-pasif');
        }
      }
    })
  };

  function setActiveItem(target) {
    localStorage.setItem('activeItem', target);
  }

  function loadActiveItem() {
    const activeItem = localStorage.getItem('activeItem');
    if (activeItem) {
      syncActiveClass(activeItem);
    }
  }

  navbarItem.forEach(item => {
    item.addEventListener('click', function(){
      const target = this.getAttribute('data-target');
      syncActiveClass(target);
    })
  });

  sidebarItem.forEach(item => {
    item.addEventListener('click', function(){
      const target = this.getAttribute('data-target');
      syncActiveClass(target);
    })
  });

  setActiveItem()

  loadActiveItem();
};
// End Sinkronisasi Navbar & Sidebar
