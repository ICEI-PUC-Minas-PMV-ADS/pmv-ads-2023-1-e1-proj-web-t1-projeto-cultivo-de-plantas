const commentButton = document.getElementById('commentButton');
const commentSection = document.getElementById('commentSection');
const nameInput = document.getElementById('nameInput');
const commentInput = document.getElementById('commentInput');
const submitButton = document.getElementById('submitButton');
const commentList = document.getElementById('commentList');
const closeButton = document.getElementById('closeButton');

function saveCommentsForPlant(plantName, comments) {
  localStorage.setItem(`comments_${plantName}`, JSON.stringify(comments));
}

function loadCommentsForPlant(plantName) {
  const savedComments = localStorage.getItem(`comments_${plantName}`);
  if (savedComments) {
    return JSON.parse(savedComments);
  }
  return [];
}

function addInitialCommentsForPlant(plantName) {
  const initialComments = [
    { name: 'Isabela', comment: 'Minha samambaia está crescendo e deixando meu ambiente mais verde e fresco.' },
    { name: 'Pedro#789', comment: 'As folhas da minha samambaia são tão exuberantes e cheias de vida.' },
    { name: 'Camila', comment: 'A samambaia é uma planta que traz um toque de natureza e leveza para minha casa.' },
    { name: 'Lucas', comment: 'Estou encantado com a delicadeza e elegância das folhas da minha samambaia.' },
    { name: 'Mariana', comment: 'A samambaia é uma ótima opção para decorar espaços suspensos e criar um visual aconchegante.' }
  ];

  initialComments.forEach((comment) => {
    const commentElement = createCommentElement(comment.name, comment.comment);
    commentList.appendChild(commentElement);
  });

  saveCommentsForPlant(plantName, initialComments);
}

function createCommentElement(name, comment) {
  const commentElement = document.createElement('p');
  commentElement.textContent = `${name}: ${comment}`;
  return commentElement;
}

commentButton.addEventListener('click', function() {
  commentSection.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  commentSection.style.display = 'none';
});

submitButton.addEventListener('click', function() {
  const name = nameInput.value.trim();
  const commentText = commentInput.value.trim();

  if (commentText.length >= 10) {
    const commentElement = createCommentElement(name, commentText);
    commentList.insertBefore(commentElement, commentList.firstChild);

    const plantName = 'Samambaia'; // Nome da planta específica
    const comments = loadCommentsForPlant(plantName);
    comments.unshift({ name, comment: commentText });
    saveCommentsForPlant(plantName, comments);

    commentInput.value = '';
    nameInput.disabled = true;
  } else {
    alert('O comentário deve ter pelo menos 10 caracteres.');
  }
});

window.addEventListener('DOMContentLoaded', function() {
  const plantName = 'Samambaia'; // Nome da planta específica
  const comments = loadCommentsForPlant(plantName);

  if (comments.length === 0) {
    addInitialCommentsForPlant(plantName);
  } else {
    comments.forEach((comment) => {
      const commentElement = createCommentElement(comment.name, comment.comment);
      commentList.appendChild(commentElement);
    });
  }

  const loggedInUserName = document.getElementById('loggedInUserName');
  const nomeUsuarioLog = JSON.parse(sessionStorage.getItem('nomeUsuarioLog'));
  if (nomeUsuarioLog) {
    loggedInUserName.textContent = nomeUsuarioLog.nomeUser;
    nameInput.value = nomeUsuarioLog.nomeUser;
  }
});

function funcaoNome() {
  var loginCadElement = document.getElementById('loginCad');
  var loginCadHamburguer = document.getElementById('LoginCadHamb');
  var accountIconElement = document.querySelector('.account-icon');
  var nomeUsuarioLog = JSON.parse(sessionStorage.getItem('nomeUsuarioLog'));

  if (nomeUsuarioLog) {
    loginCadElement.textContent = nomeUsuarioLog.nomeUser;
    loginCadElement.removeAttribute('href');
    loginCadHamburguer.textContent = nomeUsuarioLog.nomeUser;
    loginCadHamburguer.removeAttribute('href');
    document.getElementById('commentButton').style.display = 'flex';
    nameInput.value = nomeUsuarioLog.nomeUser;
    nameInput.disabled = true;
  } else {
    loginCadElement.innerHTML = '<h3>Login/Cadastro</h3>';
    accountIconElement.style.display = 'block';
  }
}

funcaoNome();



var itemURLs = {
  Bromélia: '../Bromélia/Index.html',
  Espada_de_são_Jorge: '../Espada-de-são-Jorge/Index.html',
  Girassol: '../Girassol/Index.html',
  Cacto: '../Cacto/Index.html',
  Cebola: '../Cebola/Index.html',
  Hera_Inglesa: '../Hera-Inglesa/Index.html',
  Hortência: '../Hortência/Index.html',
  Iresine: '../Iresine/Index.html',
  Jasmim: '../Jasmim/Index.html',
  Lavanda: '../Lavanda/Index.html',
  Lírio: '../Lírio/Index.html',
  Neoregélia: '../Neoregélia/Index.html',
  Orquidea: '../Orquidea/Index.html',
  Palmeira_Dama: '../Palmeira-Dama/Index.html',
  Pitanga: '../Pitanga/Index.html',
  Roseira: '../Roseira/Index.html',
  Samambaia: '../Samambaia/Index.html',
  Tomate: '../Tomate/Index.html',
  Torênia: '../Torênia/Index.html',
  Trapoeraba: '../Trapoeraba/Index.html'
};

var plantas = ['Bromélia', 'Cacto', 'Girassol', 'Cebola', 'Espada_de_são_Jorge', 'Hera_Inglesa', 'Hortência', 'Iresine', 'Jasmim', 'Lavanda' , 'Lírio', 'Neoregélia', 'Orquidea','Palmeira_Dama','Pitanga' ,'Roseira' ,'Samambaia','Tomate','Torênia','Trapoeraba'];
localStorage.setItem('meuVetor', JSON.stringify(plantas));

document.addEventListener('DOMContentLoaded', function() {
  var searchInput = document.getElementById('searchInput');
  var searchResults = document.getElementById('searchResults');
  var buscaDiv = document.querySelector('.busca');

  searchInput.addEventListener('input', function() {
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

    if (searchTerm.trim().length > 0) {
      buscaDiv.style.display = 'block';
    } else {
      buscaDiv.style.display = 'none';
    }
  });

  document.addEventListener('click', function(event) {
    var searchBar = document.getElementById('searchInput');

    if (event.target !== searchBar && !searchBar.contains(event.target)) {
      searchResults.innerHTML = '';
    }
  });
});
function poda() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'PODA';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A poda da samambaia é uma parte importante do cuidado dessa planta, já que ela ajuda a manter um formato bonito e saudável, além de estimular o crescimento e a ramificação. A seguir estão algumas dicas para podar sua samambaia:<br><br>Use uma tesoura de poda afiada: é importante usar uma tesoura de poda limpa e afiada para evitar danificar a planta.<br><br>Remova folhas secas e amareladas: retire as folhas que estiverem secas ou amareladas, pois elas não contribuem para o crescimento saudável da planta.<br><br>Corte as folhas mortas ou danificadas: se houver folhas mortas ou danificadas, corte-as até a base para estimular o crescimento de novas folhas.<br><br>Pode as pontas das folhas: se as pontas das folhas estiverem secas ou danificadas, pode-as com uma tesoura limpa e afiada para manter um formato bonito.<br><br>Reduza o tamanho da samambaia: se a sua samambaia estiver muito grande ou volumosa, é possível reduzir seu tamanho cortando algumas das frondes.<br><br>Reproduza a samambaia através de mudas: se você deseja propagar sua samambaia, pode retirar algumas das mudas laterais e replantá-las em vasos menores.<br><br>Lembre-se de que a poda da samambaia deve ser feita com cuidado para evitar danos à planta. É importante evitar podar mais de um terço da planta de uma só vez, pois isso pode prejudicar seu crescimento. Além disso, evite podar a samambaia durante os meses de inverno, quando ela está em repouso.'
}

function solo() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'SOLO';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'O solo adequado para a samambaia deve ser rico em matéria orgânica e ter uma boa capacidade de retenção de água. A samambaia cresce melhor em solo leve, solto e bem drenado, com um pH entre 5,5 e 7,5. Um solo ácido com um pH abaixo de 7,0 é ideal para a maioria das espécies de samambaia.<br><br></br>Uma mistura de solo recomendada para a samambaia é uma combinação de turfa, casca de pinheiro e perlita. Essa mistura é leve, solta e porosa, permitindo uma boa drenagem e circulação de ar. A turfa ajuda a reter a umidade e a casca de pinheiro fornece nutrientes ao solo. A perlita ajuda a melhorar a drenagem, evitando o acúmulo de água no solo.<br><br>Ao plantar a samambaia em um vaso, é importante escolher um tamanho adequado, pois ela precisa de espaço para crescer e se desenvolver. Certifique-se de que o vaso tenha um bom sistema de drenagem para evitar o acúmulo de água no fundo.<br><br>Para manter o solo da samambaia saudável, é importante fertilizá-lo regularmente. Um fertilizante líquido para plantas verdes pode ser aplicado uma vez por mês durante a primavera e o verão, quando a planta está crescendo ativamente. No entanto, evite fertilizar a samambaia durante o inverno, quando ela está em repouso.<br><br>Além disso, a samambaia prefere um ambiente úmido, então é recomendado regá-la com frequência para manter o solo úmido, mas não encharcado. Evite deixar a planta em locais com excesso de luz solar direta ou em ambientes muito secos, pois isso pode afetar a saúde da planta e secar o solo rapidamente.'
}
function adubagem() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'ADUBAGEM';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A adubagem é uma parte importante do cuidado da samambaia, pois ajuda a fornecer os nutrientes necessários para um crescimento saudável e forte da planta. Aqui estão algumas dicas para adubar sua samambaia:<br><br>Escolha um fertilizante equilibrado: escolha um fertilizante líquido balanceado para plantas verdes, que contenha nitrogênio, fósforo e potássio em quantidades iguais. O nitrogênio ajuda a estimular o crescimento das folhas, o fósforo ajuda a estimular o crescimento das raízes e o potássio ajuda a fortalecer a planta.<br><br>Adube a planta regularmente: é recomendado adubar a samambaia a cada 4 a 6 semanas durante a primavera e o verão, que são as estações de crescimento ativo. Durante o outono e o inverno, a adubação pode ser reduzida ou até mesmo interrompida, pois a planta está em repouso.<br><br>Dilua o fertilizante: dilua o fertilizante líquido com água de acordo com as instruções do fabricante. Evite aplicar o fertilizante em excesso, pois isso pode danificar as raízes da samambaia.<br><br>Aplique o fertilizante corretamente: aplique o fertilizante na superfície do solo ou diretamente na água de irrigação. Evite aplicar o fertilizante diretamente nas folhas, pois isso pode causar queimaduras nas folhas.<br><br>Monitore a planta: observe a planta após a adubação para garantir que ela esteja respondendo bem ao fertilizante. Se as folhas começarem a amarelar ou a ficar marrons, pode ser um sinal de que a planta está recebendo fertilizante em excesso ou em falta.<br><br>Além disso, é importante lembrar que a samambaia prefere um ambiente úmido, por isso, é importante manter a planta regada regularmente e em um ambiente com umidade adequada. Uma boa irrigação e um ambiente com umidade equilibrada podem ajudar a maximizar a absorção de nutrientes pela samambaia.';
}

function plant() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'Samambaia';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A samambaia é uma planta que pertence à família das Polypodiaceae e é encontrada em todo o mundo, principalmente em climas tropicais e subtropicais. Existem milhares de espécies diferentes de samambaias, variando em tamanho, forma e cor.<br><br>As samambaias são plantas vasculares sem sementes e reproduzem-se através de esporos. Elas têm folhas complexas, chamadas frondes, que são geralmente verdes e em forma de leque. As frondes da samambaia são geralmente divididas em folhetos menores, que são chamados de pínulas. Algumas espécies de samambaia têm folhas com até três níveis de divisão.<br><br>A samambaia é uma planta comum em jardins e interiores, onde é valorizada pela sua aparência exótica e pela capacidade de purificar o ar. Algumas espécies de samambaia também têm propriedades medicinais e são usadas em remédios naturais.<br><br>As samambaias são plantas relativamente fáceis de cuidar e crescem bem em condições de luz filtrada, umidade elevada e solo úmido e bem drenado. Elas também são capazes de crescer em ambientes com pouca luz, tornando-as uma opção popular para áreas com sombra.';
}
function pragas() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'PRAGAS E DOENÇAS';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A samambaia pode ser suscetível a algumas pragas e doenças comuns. Aqui estão algumas das principais pragas e doenças que podem afetar sua samambaia e o que você pode fazer para prevenir e controlar esses problemas:<br><br>Cochonilha: as cochonilhas são pequenos insetos que se alimentam da seiva da planta e podem causar danos graves à samambaia. Os sinais de infestação incluem manchas brancas e pegajosas nas folhas. Para controlar a cochonilha, remova manualmente os insetos com um cotonete embebido em álcool ou use um inseticida adequado.<br><br>Pulgões: os pulgões são outra praga comum que pode afetar a samambaia. Eles se alimentam da seiva da planta e podem causar danos significativos. Os sinais de infestação incluem folhas enroladas ou murchas. Para controlar os pulgões, remova-os manualmente com um jato de água ou use um inseticida adequado.<br><br>Ácaros: os ácaros são pequenos insetos que podem ser difíceis de detectar. Os sinais de infestação incluem manchas prateadas nas folhas e uma teia fina na planta. Para controlar os ácaros, aplique um inseticida adequado.<br><br>Manchas foliares: as manchas foliares são causadas por fungos e podem aparecer como manchas marrons ou amarelas nas folhas da samambaia. Para prevenir a ocorrência de manchas foliares, evite molhar as folhas ao regar a planta e certifique-se de que a planta esteja bem ventilada. Se ocorrerem manchas foliares, remova as folhas afetadas e aplique um fungicida adequado.<br><br>Podridão das raízes: a podridão das raízes é uma doença causada por fungos que pode afetar a samambaia. Os sinais incluem raízes moles e pretas e uma planta que parece murcha. Para prevenir a podridão das raízes, certifique-se de que a planta esteja plantada em solo bem drenado e evite regar em excesso. Se a podridão das raízes ocorrer, remova as raízes afetadas e replante a planta em solo fresco e seco.<br><br>Em geral, a prevenção é a melhor maneira de evitar problemas de pragas e doenças em sua samambaia. Mantenha a planta saudável e bem cuidada, evite molhar as folhas e monitore regularmente a planta para detectar quaisquer sinais de problemas. Se ocorrerem problemas, trate-os imediatamente para evitar danos graves à planta.';
}



  let image_one = document.getElementById('img_one');
  let image_two = document.getElementById('img_two');
  let image_three = document.getElementById('img_three');
  let btn_one = document.getElementById('btn-one');
  let btn_two = document.getElementById('btn-two');
  let btn_three = document.getElementById('btn-three');

  btn_one.addEventListener('click', displayImageOne)

  function displayImageOne(){
     image_one.style.display = 'flex';
     image_two.style.display ='none';
     image_three.style.display = 'none'
  
  }
  
  btn_two.addEventListener('click', displayImageTwo)

  function displayImageTwo(){
     image_one.style.display = 'flex';
     image_two.style.display ='flex';
     image_three.style.display = 'none'
  
  }
  
  
  btn_three.addEventListener('click', displayImageThree)

  function displayImageThree(){
     image_one.style.display = 'flex';
     image_two.style.display ='none';
     image_three.style.display = 'flex'
  
  }

  
let menu_hamb = document.getElementById('menu_hamb')
let btn_hamb = document.getElementById('btn_hamb')
let btn_close = document.getElementById('btn_close')

btn_hamb.addEventListener('click', openMenuHamb)

function openMenuHamb(){
   menu_hamb.style.display = 'flex'
}

btn_close.addEventListener('click', closeMenuHamb)

function closeMenuHamb(){
   menu_hamb.style.display = 'none'
}

;
