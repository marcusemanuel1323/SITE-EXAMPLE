const menuBar = document.getElementById('btn-mobile');

function toggleMenu(){
    const menuMobile = document.getElementById('menu-mobile');
    menuMobile.classList.toggle('active');
}

menuBar.addEventListener('click', toggleMenu);

$('#btn-mobile').click(function(){
    $('#menu-mobile').toggleClass('active');
});
