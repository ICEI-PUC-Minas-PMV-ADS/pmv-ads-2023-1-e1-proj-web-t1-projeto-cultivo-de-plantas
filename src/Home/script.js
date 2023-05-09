const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');
const usuario = document.querySelector('.usuario');

menu.addEventListener('click', () =>{
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
    usuario.classList.toggle('ativo');
})