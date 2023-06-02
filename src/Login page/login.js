
// Menu Hamburguer

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
    }else{
        menuMobile.classList.add('open')
    }
}

// Login

form.addEventListener('submit' , (e) => {
    e.preventDefault()
    checkValida()
})

function checkValida() {

    const emailLog = document.getElementById("emailValida").value;
    const senhaLog = document.getElementById("senhaValida").value;
    let msgError = document.getElementById("msgError");

    var listaCad = []
    var userValid = {
        email: emailLog ,
        senha:  senhaLog
    }
    

let listaCad = JSON.parse(localStorage.getItem("ListaCad"))
    

const usuarioEncontrado = listaCad.find((element) => user.emailCad === userValid.email && user.senhaCad === userValid.senha);

if (usuarioEncontrado) {
   
    console.log("Login bem-sucedido");
    msgError.textContent = ""; 
}
else {
    
    console.log("Login falhou");
    msgError.textContent = "Email ou senha inválidos";
}

}
