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
    { name: 'Lúcia', comment: 'Meu jasmim exala um perfume incrível.' },
  { name: 'Rafael@99', comment: 'As flores do meu jasmim são belíssimas e delicadas.' },
  { name: 'Ana', comment: 'O jasmim é uma planta trepadeira que embeleza meu jardim.' },
  { name: 'Pedro', comment: 'Estou cuidando do meu jasmim para garantir um crescimento saudável.' },
  { name: 'Mariana', comment: 'O aroma do jasmim é relaxante e traz tranquilidade para o ambiente.' }
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

    const plantName = 'Jasmim'; // Nome da planta específica
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
  const plantName = 'Jasmim'; // Nome da planta específica
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
    conteudo.innerHTML = 'A poda da jasmim é uma prática importante para manter a planta saudável e estimular a produção de flores. A poda deve ser realizada após a floração, quando a planta entra em período de dormência, ou na primavera, antes do início do novo ciclo de crescimento.<br><br>A primeira etapa da poda é a remoção de galhos e ramos mortos, doentes ou danificados. Esses galhos podem impedir o fluxo de nutrientes e água para a planta e, portanto, devem ser removidos para manter a saúde da jasmim.<br><br>A poda também pode ser usada para controlar o tamanho e a forma da planta. O jasmim pode crescer de forma desordenada e espalhada, o que pode prejudicar a aparência da planta e dificultar o seu cuidado. Podar os galhos mais longos e finos pode ajudar a manter a planta mais compacta e atraente.<br><br>Outra razão para a poda da jasmim é estimular a produção de flores. A poda pode ser usada para remover as flores murchas e estimular o crescimento de novos botões de flores. Além disso, a poda pode ajudar a concentrar a energia da planta em produzir flores em vez de crescer mais folhas.<br><br>Ao podar a jasmim, é importante usar ferramentas limpas e afiadas para evitar danificar a planta. Também é importante não podar a planta em excesso, pois isso pode prejudicar o seu crescimento e florescimento.<br><br>Em resumo, a poda da jasmim é uma prática importante para manter a planta saudável e atraente, além de estimular a produção de flores. A poda deve ser realizada com cuidado e moderação, evitando danos à planta e mantendo a sua forma e aparência naturais.'
  }
  
function solo() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'SOLO';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'O solo ideal para o jasmim deve ser rico em nutrientes e ter uma boa capacidade de drenagem, para evitar o acúmulo de água nas raízes da planta. O pH do solo deve ser ligeiramente ácido a neutro, entre 6,0 e 7,0.<br><br>Uma mistura de solo bem equilibrada para o jasmim pode ser feita com partes iguais de terra vegetal, composto orgânico e areia. Adicionar perlita ou vermiculita à mistura do solo pode ajudar a melhorar a drenagem.<br><br>Além disso, o jasmim prefere solos ricos em matéria orgânica. Adicionar adubo orgânico ou esterco bem decomposto ao solo antes do plantio pode ajudar a fornecer nutrientes essenciais para o crescimento e florescimento da planta.<br><br>É importante evitar solos muito compactados ou argilosos, que podem impedir a circulação de ar e água nas raízes do jasmim. Se o solo não for adequado, pode ser necessário melhorá-lo com a adição de materiais orgânicos ou areia.<br><br>O jasmim também é uma planta que se beneficia de uma camada de cobertura morta no solo. Isso pode ajudar a reter a umidade do solo e evitar o crescimento de ervas daninhas ao redor da planta.<br><br>Em resumo, o solo ideal para o jasmim deve ser rico em nutrientes, bem drenado e com uma boa quantidade de matéria orgânica. Manter o solo saudável e bem cuidado pode ajudar a garantir um crescimento saudável e uma florada abundante para o jasmim.'
  }
function adubagem() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'ADUBAGEM';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'A adubagem é essencial para manter a saúde e o vigor da planta jasmim. A planta deve ser fertilizada durante a primavera e o verão, quando está em seu período de crescimento ativo. Existem várias opções para fertilizantes que podem ser usados na adubagem do jasmim, incluindo fertilizantes químicos ou orgânicos.<br><br>Ao escolher um fertilizante químico, é importante selecionar um produto formulado especialmente para plantas com flores e seguir as instruções de dosagem e aplicação. Normalmente, o fertilizante é adicionado à água de irrigação a cada duas semanas durante a estação de crescimento ativo.<br><br>Os fertilizantes orgânicos, como o composto ou adubo orgânico, podem ser uma opção mais saudável e ecológica para a adubagem do jasmim. Eles fornecem nutrientes essenciais para a planta de uma maneira mais suave e gradual. O composto pode ser adicionado ao solo ao redor da planta uma vez por ano, enquanto o adubo orgânico pode ser adicionado à água de irrigação a cada duas semanas durante a estação de crescimento ativo.<br><br>Independentemente do tipo de fertilizante usado, é importante não exagerar na adubação, pois isso pode levar a problemas de saúde da planta. Certifique-se de seguir as instruções de dosagem e aplicação fornecidas pelo fabricante e não aplique fertilizantes durante o período de dormência do jasmim.';
  }
  
function plant() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'Jasmin';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'Jasmim é um gênero de plantas com mais de 200 espécies, muitas das quais são valorizadas por suas flores perfumadas e atraentes. O jasmim é nativo da região tropical e subtropical da Ásia, África e América do Sul, mas hoje em dia é amplamente cultivado em todo o mundo.<br><br>As espécies de jasmim mais comuns em cultivo incluem o jasmim-manga (Jasminum sambac), o jasmim-estrela (Jasminum multiflorum) e o jasmim-do-cabo (Jasminum angulare). Essas plantas são geralmente cultivadas por suas flores perfumadas, que são usadas na produção de perfumes, chás, óleos e outros produtos.<br><br>O jasmim é uma planta de crescimento rápido que pode ser cultivada tanto em ambientes internos quanto externos. Ela prefere um solo rico em matéria orgânica e bem drenado, e requer rega regular, especialmente durante os períodos de seca.<br><br>A planta jasmin geralmente floresce na primavera e no verão, produzindo flores brancas ou amareladas, com uma fragrância forte e doce. Algumas espécies de jasmim também produzem frutas comestíveis, como o jasmim-manga, que produz frutas semelhantes a mangas pequenas.<br><br>O jasmim é uma planta que pode ser cultivada a partir de sementes ou por meio de estacas. As estacas são mais comumente usadas para propagar a planta, já que o processo é mais rápido e garante a produção de plantas idênticas à planta mãe.<br><br>O jasmim é uma planta relativamente fácil de cuidar, mas pode ser suscetível a algumas pragas e doenças, como cochonilhas e fungos. É importante manter a planta livre de pragas e doenças, e fornecer um ambiente adequado para o seu crescimento saudável e florescimento abundante.';
  }
function pragas() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'PRAGAS E DOENÇAS';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'O jasmim é geralmente uma planta resistente a doenças e pragas, mas ainda pode ser afetado por algumas delas. As principais pragas e doenças que afetam o jasmim incluem:<br><br>Cochonilha: É uma praga comum em jasmim, especialmente em plantas cultivadas em ambientes fechados. As cochonilhas aparecem como pequenos pontos brancos ou marrons no caule e nas folhas da planta. Elas sugam a seiva da planta e podem causar o enfraquecimento da planta e a queda de folhas. Para controlar a infestação, as cochonilhas devem ser removidas manualmente ou com o uso de pesticidas naturais.<br><br>Ácaros: Os ácaros podem aparecer como pequenos pontos brancos na parte inferior das folhas do jasmim. Eles sugam a seiva da planta e podem causar o amarelecimento e queda das folhas. O controle de ácaros pode ser feito com a aplicação de pesticidas naturais.<br><br>Míldio: É um tipo de doença fúngica que afeta principalmente as folhas do jasmim. Ela aparece como manchas brancas ou cinzentas nas folhas, seguidas de um murchamento e queda das folhas. O controle pode ser feito com a remoção das partes infectadas da planta e a aplicação de fungicidas naturais.<br><br>Oídio: É outra doença fúngica que pode afetar o jasmim. Ele aparece como um revestimento branco nas folhas e caules da planta. O controle pode ser feito com a remoção das partes infectadas e a aplicação de fungicidas naturais.<br><br>Mosca branca: É uma praga que suga a seiva da planta e pode causar amarelecimento e queda das folhas. O controle pode ser feito com a aplicação de pesticidas naturais.<br><br>Para evitar a infestação de pragas e doenças, é importante manter a planta saudável, fornecendo um solo bem drenado, fertilizantes adequados e rega adequada. Além disso, é importante inspecionar a planta regularmente em busca de sinais de pragas e doenças e agir rapidamente para controlá-las, caso sejam detectadas.';
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
