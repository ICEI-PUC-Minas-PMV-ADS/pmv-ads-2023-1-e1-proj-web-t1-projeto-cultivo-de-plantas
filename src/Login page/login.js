
// Login

form.addEventListener('submit' , (e) => {
    e.preventDefault()
    checkValida()
})

function checkValida() {

    const emailLog = document.getElementById("emailValida").value;
    const senhaLog = document.getElementById("senhaValida").value;
    let msgValida = document.getElementById('msgValida')
    

var listaCad = []
var userValid = {
        email: '' ,
        senha:  ''
    }
    

ListaCad = JSON.parse(localStorage.getItem("ListaCad"))
    
ListaCad.forEach((item) => {
  if(emailLog.value == item.emailCad && senhaLog.value == item.senhaCad.value){
    userValid = {
      email: item.emailCad ,
      senha: item.senhaCad
    }
  }
});

if (emailLog.value == userValid.email && senhaLog == userValid.senha) {
   
    console.log("Login bem-sucedido");
    msgValida.setAttribute('style', 'display: block; color: green');
    msgValida.innerHTML = '<strong>Login realizado com sucesso! <br> Você será redirecionado para o Blog :) </strong>';
    setTimeout(()=>{
      window.location.href = './src/Blog e Posts/Blog/Index.html'
  }, 4000)    
  
}
else {
    
    console.log("Login falhou");
    msgValida.setAttribute('style', 'display: block; color: red')
    msgValida.innerHTML = '<strong>Email ou senha inválidos</strong>';
    
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
 
