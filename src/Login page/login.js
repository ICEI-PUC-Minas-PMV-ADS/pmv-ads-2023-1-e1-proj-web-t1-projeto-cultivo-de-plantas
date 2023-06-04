
// Login

form.addEventListener('submit' , (e) => {
    e.preventDefault()
    checkValida()
})

function checkValida() {

    const emailLog = document.getElementById("emailValida").value;
    const senhaLog = document.getElementById("senhaValida").value;
    let msgError = document.getElementById('msgError')
    
var userValid = {
        email: emailLog ,
        senha:  senhaLog
    }
    

let listaCad = JSON.parse(localStorage.getItem("ListaCad"))
    

const usuarioEncontrado = listaCad.find((element) => element.emailCad === userValid.email && element.senhaCad === userValid.senha);

if (usuarioEncontrado) {
   
    console.log("Login bem-sucedido");
    msgError.textContent = ""; 
}
else {
    
    console.log("Login falhou");
    msgError.setAttribute('style', 'display: block');
    msgError.innerHTML = '<strong>Email ou senha inválidos</strong>';
    
}

}

//Menu Hamburguer
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
    }else{
        menuMobile.classList.add('open')
    }
 }
 