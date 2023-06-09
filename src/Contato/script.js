/* MENU MOBILE */
function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open')
  }else{
      menuMobile.classList.add('open')
  }
}

/* MODAL */

document.addEventListener('DOMContentLoaded', function() {
  const openModalButton = document.getElementById('openModal');
  const modal = document.getElementById('myModal');
  const closeButton = document.getElementsByClassName('close')[0];

  openModalButton.addEventListener('click', function(event) {
    event.preventDefault(); 

    const messageInput = document.getElementById('message');
    const message = messageInput.value.trim();

    if (message !== '') {
      modal.style.display = 'block';
    } else {
      alert('Por favor, preencha o campo de mensagem antes de enviar o formulário.');
    }
  });

  closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', function(event) {
    event.stopPropagation();
  });
});



/*ANIMAÇÃO*/

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



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


