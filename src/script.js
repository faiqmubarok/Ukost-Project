document.getElementById('scrollLeftBtn').addEventListener('click', function() {
    document.getElementById('card-recomendation').scrollBy({ left: -275, behavior: 'smooth' });
});

document.getElementById('scrollRightBtn').addEventListener('click', function() {
    document.getElementById('card-recomendation').scrollBy({ left: 275, behavior: 'smooth' });
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


// Open Drawer + Login
let btnDrawer = document.getElementById('open-drawer');
let overlay = document.getElementById('overlay');
let contentDrawer = document.getElementById('content-drawer');
let btnClose = document.querySelectorAll('button.btn-close-drawer');
let body = document.body;

function openDrawer(){
    overlay.classList.remove('hidden');
    contentDrawer.classList.remove('hidden');
    setTimeout(() => {
        contentDrawer.classList.remove('scale-0');
    }, 10);
    body.classList.add('overflow-hidden');
}

function closeDrawer(){
    overlay.classList.add('hidden');
    contentDrawer.classList.add('hidden');
    contentDrawer.classList.add('scale-0');
    body.classList.remove('overflow-hidden');
}

btnDrawer.addEventListener('click', openDrawer);
btnClose.forEach(function(button){
    button.addEventListener('click', closeDrawer);
})
overlay.addEventListener('click', closeDrawer);



var buttons = document.querySelectorAll('.button-hide');
buttons.forEach(function(button){
    button.addEventListener('click', function(){
        var input = this.parentElement.querySelector('input');
        var hideIcon = this.querySelector('.hide');
        var unhideIcon = this.querySelector('.unhide');

        if(input.type === 'password'){
            input.type = 'text';
            hideIcon.classList.add('hidden');
            unhideIcon.classList.remove('hidden');
        }else{
            input.type = 'password';
            hideIcon.classList.remove('hidden');
            unhideIcon.classList.add('hidden');
        }
    })
})

// Product.html
function toggleReadMore(button) {
    var content = button.previousElementSibling;
    if (content.classList.contains("max-h-20") && content.classList.contains("overflow-hidden")) {
        content.classList.remove("max-h-20", "overflow-hidden");
        button.innerHTML = 'Tampilkan Lebih Sedikit';
    } else {
        content.classList.add("max-h-20", "overflow-hidden");
        button.innerHTML = 'Baca Selengkapnya...';
    }
}
