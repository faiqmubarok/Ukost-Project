document.getElementById('scrollLeftBtn').addEventListener('click', function() {
    document.getElementById('card-recomendation').scrollBy({ left: -306, behavior: 'smooth' });
});

document.getElementById('scrollRightBtn').addEventListener('click', function() {
    document.getElementById('card-recomendation').scrollBy({ left: 306, behavior: 'smooth' });
});

window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('bg-white');
        navbar.classList.remove('bg-[#DAE7ED]');
    } else {
        navbar.classList.remove('bg-white');
        navbar.classList.add('bg-[#DAE7ED]');
    }
});