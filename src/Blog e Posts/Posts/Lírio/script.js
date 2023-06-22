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
    { name: 'Sophia', comment: 'Meu lírio está desabrochando com flores magníficas.' },
  { name: 'Lucas', comment: 'As flores do meu lírio exalam um perfume encantador.' },
  { name: 'Isabela@123', comment: 'O lírio é uma planta elegante que adiciona charme ao meu jardim.' },
  { name: 'Gabriel', comment: 'Estou encantado com a beleza e delicadeza das pétalas do meu lírio.' },
  { name: 'Laura', comment: 'Os lírios são perfeitos para criar arranjos florais deslumbrantes.' }
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

    const plantName = 'lirio'; // Nome da planta específica
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
  const plantName = 'lirio'; // Nome da planta específica
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
  conteudo.innerHTML = 'A poda do Lírio da Paz é uma técnica importante para manter a planta saudável e estimular um crescimento mais robusto. Aqui estão algumas informações sobre a poda desta planta:<br><br>Quando podar o Lírio da Paz: A poda deve ser realizada no início da primavera, antes do início da estação de crescimento. É importante evitar podar a planta durante os meses de inverno, pois a planta estará em repouso.<br><br>Por que podar o Lírio da Paz: A poda é importante para remover folhas e caules danificados, além de estimular a formação de novas folhas e flores. A remoção de folhas amareladas ou secas também ajuda a manter a aparência saudável da planta.<br><br>Como podar o Lírio da Paz: Use tesouras de poda afiadas e limpas para cortar folhas e caules. Corte a folha ou caule na base, perto do solo. Evite cortar a planta muito próxima à base, pois isso pode danificar as raízes.<br><br>Quanto podar o Lírio da Paz: Evite cortar mais do que um terço da planta de uma só vez. Cortar muitas folhas ou caules pode estressar a planta e afetar sua capacidade de crescer e florescer.<br><br>O que fazer com os restos de poda: Remova as folhas e caules cortados da planta e descarte-os em um local apropriado. Não deixe os restos de poda na base da planta, pois isso pode atrair pragas e doenças.<br><br>Poda de flores murchas: Se as flores murcharem, é possível remover as hastes de flores antigas para estimular o crescimento de novas flores. Corte a haste de flor na base da planta, perto do solo.<br><br>Cuidados pós-poda: Após a poda, é importante regar a planta e manter o solo úmido. Evite regar em excesso, pois isso pode afetar a saúde da planta. Mantenha a planta em um local com temperatura entre 18°C e 27°C e umidade relativa do ar de cerca de 50%.<br><br>Em resumo, a poda do Lírio da Paz é importante para manter a saúde da planta e estimular o crescimento de novas folhas e flores. A poda deve ser realizada no início da primavera, usando tesouras de poda limpas e afiadas. Evite cortar mais do que um terço da planta de uma só vez e não deixe os restos de poda na base da planta. Após a poda, é importante regar a planta e manter o solo úmido, mas não em excesso.';
}

function solo() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'SOLO';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A planta Lírio da Paz é uma espécie popular de planta ornamental com folhagem exuberante e flores brancas elegantes.<br> Ela é conhecida por sua capacidade de purificar o ar e é frequentemente cultivada em ambientes internos. Para que a Lírio da Paz prospere, é fundamental que ela seja cultivada em solo adequado.<br><br>O solo ideal para a planta Lírio da Paz deve ser rico em nutrientes, bem drenado e ter um pH entre 5,5 e 7,5.<br> Ele deve ser capaz de reter a umidade suficiente, mas não ser excessivamente úmido.<br> Uma mistura de turfa, perlita e areia é geralmente recomendada para garantir que o solo seja adequado para o crescimento da Lírio da Paz.<br><br>É importante evitar solos muito compactos, pois eles podem impedir o desenvolvimento adequado das raízes da planta.<br>O solo também deve ser bem aerado para permitir a entrada de oxigênio nas raízes e evitar o acúmulo de umidade.<br><br>A Lírio da Paz é uma planta de crescimento lento, portanto, não é necessário fertilizá-la com frequência.<br> No entanto, quando for necessário, deve-se usar um fertilizante líquido balanceado ou um fertilizante de liberação lenta.<br> O excesso de fertilizante pode causar danos às raízes da planta, portanto, é importante seguir as instruções do fabricante ao aplicar qualquer fertilizante.<br><brAlém disso, é importante não deixar a Lírio da Paz em água parada, pois isso pode causar apodrecimento das raízes e outras doenças.<br> Portanto, é importante permitir que o solo seque um pouco antes de regar novamente.<br> A planta Lírio da Paz é sensível à temperatura, portanto, deve ser mantida em uma área com temperatura entre 18°C e 27°C, com umidade relativa do ar de cerca de 50%.<br><br>Em resumo, o solo ideal para a planta Lírio da Paz deve ser rico em nutrientes, bem drenado e com pH entre 5,5 e 7,5.<br>Ele deve ser capaz de reter a umidade, mas não ser excessivamente úmido, e não deve ser muito compacto.<br> Com os cuidados adequados em relação ao solo e ao ambiente, a Lírio da Paz pode ser uma bela e saudável adição a qualquer espaço interno.'
}
function adubagem() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'ADUBAGEM';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A adubagem do Lírio da Paz é uma parte importante dos cuidados com esta planta, pois fornece os nutrientes necessários para um crescimento saudável e vigoroso. Aqui estão algumas informações sobre a adubagem do Lírio da Paz:<br><br>Quando adubar o Lírio da Paz: A adubação deve ser feita durante a primavera e o verão, quando a planta está em sua fase de crescimento ativo. Evite adubar a planta durante o inverno, quando ela está em repouso.<br><br>Que tipo de adubo usar: Use um fertilizante balanceado, com quantidades iguais de nitrogênio, fósforo e potássio (NPK). É possível encontrar adubos específicos para plantas de interior, que contêm a quantidade correta de nutrientes necessários para o Lírio da Paz.<br><br>Como aplicar o adubo: Siga as instruções da embalagem do adubo quanto à quantidade e frequência de aplicação. Geralmente, é recomendado diluir o adubo em água e aplicar a solução ao redor da base da planta, evitando molhar as folhas.<br><br>Quanto adubar o Lírio da Paz: Evite adubar em excesso, pois isso pode queimar as raízes da planta e prejudicar sua saúde. A quantidade correta de adubo depende da marca e do tipo de adubo utilizado, portanto, é importante seguir as instruções da embalagem.<br><br>Cuidados extras: Além da adubação regular, é importante manter o solo do Lírio da Paz úmido, mas não encharcado. Também é importante manter a planta em um local com temperatura entre 18°C e 27°C e umidade relativa do ar de cerca de 50%.<br><br>Em resumo, a adubagem do Lírio da Paz é importante para fornecer os nutrientes necessários para um crescimento saudável e vigoroso da planta. A adubação deve ser feita durante a primavera e o verão, usando um fertilizante balanceado diluído em água. Evite adubar em excesso e siga as instruções da embalagem do adubo. Além disso, mantenha o solo úmido, mas não encharcado, e a planta em um local com temperatura e umidade adequadas.';
}

function plant() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'Lirio-da-paz';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'O Lírio da Paz é uma planta muito popular em todo o mundo devido à sua aparência exótica e elegante, além de sua capacidade de melhorar a qualidade do ar em ambientes fechados. Aqui estão alguns fatos interessantes sobre esta planta:<br><br>Nome científico: O nome científico do Lírio da Paz é Spathiphyllum wallisii, mas existem outras espécies de Spathiphyllum.<br><br>Origem:<br> O Lírio da Paz é originário das florestas tropicais da América Central e do Sul.<br><br>Significado:<br> O nome popular "Lírio da Paz" se deve ao fato de que a planta simboliza a paz e a tranquilidade. Em muitas culturas, a planta é presenteada como um gesto de amizade ou para desejar bem-estar e harmonia.<br><br>Aparência:<br> A planta tem folhas longas e verdes, com flores brancas em forma de espiga que podem durar por semanas. As flores são cercadas por uma folha semelhante a uma espata, que pode ser verde ou branca.<br><br>Cuidados:<br> O Lírio da Paz é uma planta relativamente fácil de cuidar, mas requer alguns cuidados específicos, como manter o solo úmido, mas não encharcado, e evitar exposição direta ao sol. A planta pode ser cultivada tanto em vasos como em jardins.<br><br>Melhoria da qualidade do ar:<br> O Lírio da Paz é uma das plantas mais eficazes em melhorar a qualidade do ar em ambientes fechados. Ela absorve toxinas como formaldeído, benzeno e monóxido de carbono, ajudando a purificar o ar e melhorar a saúde respiratória.<br><br>Simbolismo religioso:<br> Em algumas religiões, o Lírio da Paz é considerado uma planta sagrada, associada a deidades como a Virgem Maria e a deusa do amor e da fertilidade, Afrodite.<br><br>Em resumo, o Lírio da Paz é uma planta popular e versátil, que pode ser cultivada tanto em ambientes fechados como em jardins. Além de sua aparência elegante, a planta também tem benefícios para a saúde, ajudando a purificar o ar e melhorar a qualidade do ambiente.';
}
function pragas() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'PRAGAS E DOENÇAS';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'Assim como outras plantas, o Lírio da Paz pode ser suscetível a algumas pragas e doenças. Aqui estão algumas das principais pragas e doenças que afetam esta planta:<br><br>Cochonilhas:<br> As cochonilhas são pequenos insetos que se fixam na superfície da planta e sugam a seiva, causando descoloração e murcha das folhas. Podem ser tratadas com inseticidas ou removidas manualmente com um pano úmido.<br><br>Ácaros:<br> Os ácaros são pragas microscópicas que se alimentam da seiva das plantas, causando manchas amarelas nas folhas e teias finas. Podem ser tratados com acaricidas ou com água e sabão.<br><br>Tripes:<br> Os tripes são insetos pequenos que se alimentam do tecido das folhas, causando manchas prateadas ou bronzeadas. Podem ser tratados com inseticidas ou com uma solução de água e sabão.<br><br>Cochonilha-algodão:<br> Esta é uma espécie de cochonilha que cria uma camada branca e algodonosa na superfície da planta. Podem ser tratadas com inseticidas ou removidas manualmente com um pano úmido.<br><br>Podridão das raízes:<br> Esta é uma doença fúngica que causa apodrecimento das raízes e pode levar à morte da planta. É causada por excesso de água ou solo mal drenado. O tratamento inclui a remoção das raízes afetadas e o replantio em solo novo.<br><br>Manchas foliares:<br> Existem várias doenças fúngicas que causam manchas nas folhas do Lírio da Paz. O tratamento inclui a remoção das folhas afetadas e o uso de fungicidas.<br><br>Murcha vascular:<br> Esta é uma doença fúngica que afeta o sistema vascular da planta, causando murcha e morte. É causada por um solo mal drenado ou por rega excessiva. O tratamento inclui a remoção das partes afetadas e o replantio em solo novo.<br><br>Para prevenir pragas e doenças no Lírio da Paz, é importante manter a planta em condições ideais de luz, umidade e solo, além de verificar regularmente por sinais de infestação ou doença. É recomendável também manter a planta isolada de outras plantas infectadas para evitar a propagação de pragas e doenças.';
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
