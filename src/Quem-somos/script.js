/* MENU MOBILE */
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
    }else{
        menuMobile.classList.add('open')
    }
  }
  
  
//Função nome
function funcaoNome() {
    var loginCadElement = document.getElementById('loginCad');
    var accountIconElement = document.querySelector('.account-icon');
    var nomeUsuarioLog = JSON.parse(sessionStorage.getItem('nomeUsuarioLog'));
 
    if (nomeUsuarioLog) {
        loginCadElement.innerHTML = nomeUsuarioLog.nomeUser; 
        loginCadElement.removeAttribute('href');
 
    } else {
        
        loginCadElement.innerHTML = 'Login / Cadastro'; 
        accountIconElement.style.display = 'block'; 
    }
  }
 
  
 