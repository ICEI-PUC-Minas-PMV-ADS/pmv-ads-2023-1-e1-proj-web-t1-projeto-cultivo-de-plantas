// Dados de pesquisa

var itemURLs = {
  Bromélia: '../Blog e Posts/Posts/Bromélia/Index.html',
  Espada_de_são_Jorge: '../Blog e Posts/Posts/Espada-de-são-jorge/index.html',
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
  Palmeira_Dama: '../Blog e Posts/Posts/Palmeira-Dama/Index.html',
  Pitanga: '../Blog e Posts/Posts/Pitanga/Index.html',
  Roseira: '../Blog e Posts/Posts/Roseira/Index.html',
  Samambaia: '../Blog e Posts/Posts/Samambaia/Index.html',
  Tomate: '../Blog e Posts/Posts/Tomate/Index.html',
  Torênia: '../Blog e Posts/Posts/Torênia/Index.html',
  Trapoeraba: '../Blog e Posts/Posts/Trapoeraba/Index.html'
};

var plantas = ['Bromélia', 'Cacto', 'Girassol', 'Cebola', 'Espada_de_são_Jorge', 'Hera_Inglesa', 'Hortência', 'Iresine', 'Jasmim', 'Lavanda' , 'Lírio', 'Neoregélia', 'Orquidea','Palmeira_Dama','Pitanga' ,'Roseira' ,'Samambaia','Tomate','Torênia','Trapoeraba'];
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

  if (searchResults.length === 0) {
    var li = document.createElement('li');
    li.textContent = 'Nenhuma planta encontrada';
    resultsElement.appendChild(li);
  } else {
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



// Login

form.addEventListener('submit' , (e) => {
    e.preventDefault()
    checkValida()
})
function checkValida() {
  const emailLog = document.getElementById("emailValida").value;
  const senhaLog = document.getElementById("senhaValida").value;
  let msgValida = document.getElementById('msgValida');

  var listaCad = [];
  var userValid = {
    email: '',
    senha: '',
    usuario: ''
  };

  listaCad = JSON.parse(localStorage.getItem("ListaCad"));

  if (listaCad && listaCad.length > 0) {
    listaCad.forEach((item) => {
      if (emailLog === item.emailCad && senhaLog === item.senhaCad) {
        userValid = {
          email: item.emailCad,
          senha: item.senhaCad,
          usuario: item.usuarioCad
        };
      }
    });

    if (emailLog === userValid.email && senhaLog === userValid.senha) {
      console.log("Login bem-sucedido");
      msgValida.setAttribute('style', 'display: block; color: green');
      msgValida.innerHTML = '<strong>Login realizado com sucesso! <br> Você será redirecionado para o Blog :) </strong>';
      setTimeout(() => {
        window.location.href = '../Blog e Posts/Blog/Index.html';
      }, 4000);

      //função para alterar o nome
      checkLogin(userValid.usuario);

    } else {
      console.log("Login falhou");
      msgValida.setAttribute('style', 'display: block; color: red');
      msgValida.innerHTML = '<strong>Email ou senha inválidos</strong>';
    }
  } else {
    console.log("Login falhou");
    msgValida.setAttribute('style', 'display: block; color: red');
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
  var loginCadHamburguer = document.getElementById('LoginCadHamb')
  var accountIconElement = document.querySelector('.account-icon');
  var nomeUsuarioLog = JSON.parse(sessionStorage.getItem('nomeUsuarioLog'));

  if (nomeUsuarioLog) {
      loginCadElement.innerHTML = nomeUsuarioLog.nomeUser; 
      loginCadElement.removeAttribute('href');
      loginCadHamburguer.innerHTML = nomeUsuarioLog.nomeUser;
      loginCadElement.removeAttribute('href')

  } else {
      
      loginCadElement.innerHTML = 'Login / Cadastro'; 
      accountIconElement.style.display = 'block'; 
      
  }
}
