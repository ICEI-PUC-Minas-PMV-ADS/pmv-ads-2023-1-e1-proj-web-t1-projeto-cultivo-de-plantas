function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
    }else{
        menuMobile.classList.add('open')
    }
}


//Valida Senha e usuário

document.getElementById('senhaForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var senha = document.getElementById('isenha').value;
    var senhaconfirm = document.getElementById('iconfirme').value;
    var modal_valida = document.querySelector('#modal_valida')
    var usuarioLog = document.getElementById('iusuario').value;

    var ListaCad = [];
  
    ListaCad = JSON.parse(localStorage.getItem("ListaCad"));


    ListaCad.forEach(item => {

    if (senha === senhaconfirm && usuarioLog == item.usuarioCad) {
      
      document.getElementById('modal-valida-body').innerHTML = '<strong>A senha foi alterada com sucesso! 🙂 <br> Você será redirecionado para o login!</strong>';
      document.getElementById('modal').style.display = 'block';
    
    console.log('Nova senha cadastrada com sucesso!');
  

    alterarSenha();
    
    setTimeout(() => {
      window.location.href = '../Login page/login-planty.html'
    }, 4000);
    }

    else  {
      modal_valida.innerHTML = '<strong>O usuário ou as senhas não conferem 😦 </strong>';
      modal_valida.setAttribute('style', 'display: block; color: red');
    }
  });
  // Fechar o modal ao clicar no botão "X"
document.getElementById('modal-close').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'none';
});
});

  var itemURLs = {
    Bromélia: '../Blog e Posts/Posts/Bromélia/Index.html',
    Girassol: '../Blog e Posts/Posts/Girassol/Index.html',
    Cacto: '../Blog e Posts/Posts/Cacto/Index.html',
    Cebola: '../Blog e Posts/Posts/Cebola/Index.html',
    Hera_Inglesa: '../Blog e Posts/Posts/Hera-Inglesa/Index.html',
    Hortência: '../Blog e Posts/Posts/Hortência/Index.html',
    Iresine: '../Blog e Posts/Posts/Iresine/Index.html',
    Jasmim: '../Blog e Posts/Posts/Jasmim/Index.html',
    Lavanda: '../Blog e Posts/Posts/Lavanda/Index.html',
    Lírio: '../Blog e Posts/Posts/Lírio/Index.html',
    Neoregélia: '../Blog e Posts/Posts/Neoregélia/Index.html',
    Orquidea: '../Blog e Posts/Posts/Orquidea/Index.html',
    Palmeira_Dama: '../Blog e Posts/Posts/Palmeira_Dama/Index.html',
    Pitanga: '../Blog e Posts/Posts/Pitanga/Index.html',
    Roseira: '../Blog e Posts/Posts/Roseira/Index.html',
    Samambaia: '../Blog e Posts/Posts/Samambaia/Index.html',
    Tomate: '../Blog e Posts/Posts/Tomate/Index.html',
    Torênia: '../Blog e Posts/Posts/Torênia/Index.html',
    Trapoeraba: '../Blog e Posts/Posts/Trapoeraba/Index.html'
 };
 
 var plantas = ['Bromélia', 'Cacto', 'Girassol', 'Cebola', 'Espada-de-são-Jorge', 'Hera_Inglesa', 'Hortência', 'Iresine', 'Jasmim', 'Lavanda' , 'Lírio', 'Neoregélia', 'Orquidea','Palmeira_Dama','Pitanga' ,'Roseira' ,'Samambaia','Tomate','Torênia','Trapoeraba'];
 localStorage.setItem('meuVetor', JSON.stringify( plantas));
 
 document.getElementById('txtBusca').addEventListener('input', function() {
    var searchTerm = this.value.toLowerCase();
    var storedVetor = JSON.parse(localStorage.getItem('meuVetor'));
    var searchResults = [];
  
    // Percorre o vetor e verifica se o termo de pesquisa está contido em cada item
    for (var i = 0; i < storedVetor.length; i++) {
      var item = storedVetor[i].toLowerCase();
      if (item.indexOf(searchTerm) !== -1) {
        searchResults.push(storedVetor[i]);
      }
    }
  
    // Atualiza a lista de resultados na página
    var resultsElement = document.getElementById('searchResults');
    resultsElement.innerHTML = '';
  
    for (var j = 0; j < searchResults.length; j++) {
      var li = document.createElement('li');
      
      var link = document.createElement('a');
      var itemText = searchResults[j];
  
      if (itemURLs.hasOwnProperty(itemText)) {
        link.href = itemURLs[itemText];
      } else {
        link.href = '#'; // Defina um URL padrão para itens não mapeados
      }
      li.classList.add('searchResult');
  
      link.textContent = itemText;
  
      link.addEventListener('click', function() {
        window.location.href = this.href;
      });
  
      li.appendChild(link);
      resultsElement.appendChild(li);
    }
 
    document.addEventListener('click', function(event) {
      var searchBar = document.getElementById('txtBusca');
      var searchResults = document.getElementById('searchResults');

      // Verifica se o clique ocorreu fora da barra de pesquisa
      if (event.target !== searchBar && !searchBar.contains(event.target)) {
        // Limpa os resultados da pesquisa
        searchResults.innerHTML = '';
      }
    });
 
 
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


//Funcao para alterar a senha no LocalStorage
function alterarSenha() {
  var usuarioLog = document.getElementById('iusuario').value;
  var novaSenha = document.getElementById('isenha');
  var ListaCad = [];
  
  ListaCad = JSON.parse(localStorage.getItem("ListaCad"));
  
  ListaCad.forEach(item => {
    if (usuarioLog == item.usuarioCad) {
      item.senhaCad = novaSenha.value;
      localStorage.setItem("ListaCad", JSON.stringify(ListaCad));
    }
  });
}


