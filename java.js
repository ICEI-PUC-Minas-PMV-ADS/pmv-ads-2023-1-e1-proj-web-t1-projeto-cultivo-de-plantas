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

// Dados de pesquisa

var itemURLs = {
  Bromélia: './src/Blog e Posts/Posts/Bromélia/Index.html',
  Espada_de_são_Jorge: './src/Blog e Posts/Posts/Espada-de-são-jorge/index.html',
  Girassol: './src/Blog e Posts/Posts/Girassol/Index.html',
  Cacto: './src/Blog e Posts/Posts/Cacto/Index.html',
  Cebola: './src/Blog e Posts/Posts/Cebola/Index.html',
  Hera_Inglesa: './src/Blog e Posts/Posts/Hera-Inglesa/Index.html',
  Hortência: './src/Blog e Posts/Posts/Hortência/Index.html',
  Iresine: './src/Blog e Posts/Posts/Iresine/Index.html',
  Jasmim: './src/Blog e Posts/Posts/Jasmim/Index.html',
  Lavanda: './src/Blog e Posts/Posts/Lavanda/Index.html',
  Lírio: './src/Blog e Posts/Posts/Lírio/Index.html',
  Neoregélia: './src/Blog e Posts/Posts/Neoregélia/Index.html',
  Orquidea: './src/Blog e Posts/Posts/Orquidea/Index.html',
  Palmeira_Dama: './src/Blog e Posts/Posts/Palmeira-Dama/Index.html',
  Pitanga: './src/Blog e Posts/Posts/Pitanga/Index.html',
  Roseira: './src/Blog e Posts/Posts/Roseira/Index.html',
  Samambaia: './src/Blog e Posts/Posts/Samambaia/Index.html',
  Tomate: './src/Blog e Posts/Posts/Tomate/Index.html',
  Torênia: './src/Blog e Posts/Posts/Torênia/Index.html',
  Trapoeraba: './src/Blog e Posts/Posts/Trapoeraba/Index.html'
};

var plantas = ['Bromélia', 'Cacto', 'Girassol', 'Cebola', 'Espada_de_são_Jorge', 'Hera_Inglesa', 'Hortência', 'Iresine', 'Jasmim', 'Lavanda' , 'Lírio', 'Neoregélia', 'Orquidea','Palmeira_Dama','Pitanga' ,'Roseira' ,'Samambaia','Tomate','Torênia','Trapoeraba'];
localStorage.setItem('meuVetor', JSON.stringify( plantas));

document.getElementById('txtBusca').addEventListener('input', function() {
  var searchTerm = this.value.toLowerCase();
  var storedVetor = JSON.parse(localStorage.getItem('meuVetor'));
  var searchResults = [];

  
  for (var i = 0; i < storedVetor.length; i++) {
    var item = storedVetor[i].toLowerCase();
    if (item.indexOf(searchTerm) !== -1) {
      searchResults.push(storedVetor[i]);
    }
  }

  
  var resultsElement = document.getElementById('searchResults');
  resultsElement.innerHTML = '';

  for (var j = 0; j < searchResults.length; j++) {
    var li = document.createElement('li');
    
    var link = document.createElement('a');
    var itemText = searchResults[j];

    if (itemURLs.hasOwnProperty(itemText)) {
      link.href = itemURLs[itemText];
    } else {
      link.href = '#'; 
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
  
    
    if (event.target !== searchBar && !searchBar.contains(event.target)) {
     
      searchResults.innerHTML = '';
    }
  });
  
});
