
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
        senha:  '',
        usuario: ''
    }
    

ListaCad = JSON.parse(localStorage.getItem("ListaCad"))
    
ListaCad.forEach((item) => {
  if(emailLog.value == item.emailCad && senhaLog.value == item.senhaCad.value){
    userValid = {
      email: item.emailCad ,
      senha: item.senhaCad ,
      usuario: item.usuarioCad
    }
  }
});

if (emailLog.value == userValid.email && senhaLog == userValid.senha) {
   
    console.log("Login bem-sucedido");
    msgValida.setAttribute('style', 'display: block; color: green');
    msgValida.innerHTML = '<strong>Login realizado com sucesso! <br> Você será redirecionado para o Blog :) </strong>';
   /* setTimeout(()=>{
      window.location.href = '/src/Blog e Posts/Blog/Index.html'
  }, 4000)  */  

  //função para alterar o nome
  checkLogin(userValid.usuario)
  
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
 

//////

function checkLogin(usuario) {
  const isLoggedIn = true; // Estado do Login

  var loginCadElement = document.getElementById('loginCad');
  var accountIconElement = document.querySelector('.account-icon');

  if (isLoggedIn) {
    // Se o usuário estiver logado
    loginCadElement.innerHTML = usuario;
    loginCadElement.removeAttribute('href');

    var nomeUsuarioLog = JSON.parse(sessionStorage.getItem('nomeUsuarioLog') || '{}');

    nomeUsuarioLog.nomeUser = String(usuario);

    sessionStorage.setItem('nomeUsuarioLog', JSON.stringify(nomeUsuarioLog));
  } else {
    // Se o usuário não estiver logado
    loginCadElement.innerHTML = 'Login / Cadastro';
    accountIconElement.style.display = 'block';
    
  }
}


function funcaoNome() {
  var loginCadElement = document.getElementById('loginCad');
  var accountIconElement = document.querySelector('.account-icon');
  var nomeUsuarioLog = JSON.parse(localStorage.getItem('nomeUsuarioLog'));

  if (nomeUsuarioLog) {
      loginCadElement.innerHTML = nomeUsuarioLog.nomeUser; 
      loginCadElement.removeAttribute('href');

  } else {
      
      loginCadElement.innerHTML = 'Login / Cadastro'; 
      accountIconElement.style.display = 'block'; 
  }
}
