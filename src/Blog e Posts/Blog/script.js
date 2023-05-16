

var carousel = document.getElementById('carousel_first')
var carousel_dois = document.getElementById('carousel_second')
var btn_right = document.getElementById('rigth_btn')
var btn_left = document.getElementById('left_btn')


btn_right.addEventListener('click', clicar)

function clicar(){
   carousel.style.display = 'none'
   carousel_dois.style.display = 'flex'

}
btn_left.addEventListener('click', voltar)

function voltar(){
   carousel.style.display = 'flex'
   carousel_dois.style.display = 'none'

}


