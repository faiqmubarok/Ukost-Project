document.getElementById('scrollLeftBtn').addEventListener('click', function() {
    document.getElementById('card-recomendation').scrollBy({ left: -266, behavior: 'smooth' });
});

document.getElementById('scrollRightBtn').addEventListener('click', function() {
    document.getElementById('card-recomendation').scrollBy({ left: 266, behavior: 'smooth' });
});

window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    var liNavbar = document.querySelectorAll('#navbar li a.li-main');
    var liBtn = document.getElementById('dropdownNavbarLink');
    var image = document.querySelectorAll('#navbar a img');
    if (window.scrollY > 10) {
        navbar.classList.add('bg-[#DAE7ED]');
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('border-b');
        navbar.classList.add('border-gray-200');
        image[1].classList.add('hidden');
        image[0].classList.remove('hidden');
        liBtn.classList.add('li-button');
        liBtn.classList.remove('li-button-before');
        liNavbar.forEach(function(a) {
            if(!a.getAttribute('aria-current')){
                a.classList.add('li-navbar');
                a.classList.remove('li-navbar-before');
            }
        });
    } else {
        navbar.classList.remove('bg-[#DAE7ED]');
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('border-b');
        navbar.classList.remove('border-gray-200');
        image[0].classList.add('hidden');
        image[1].classList.remove('hidden');
        liBtn.classList.add('li-button-before');
        liBtn.classList.remove('li-button');
        liNavbar.forEach(function(a) {
            if(!a.getAttribute('aria-current')){
                a.classList.add('li-navbar-before');
                a.classList.remove('li-navbar');
            }
        });
    }
});