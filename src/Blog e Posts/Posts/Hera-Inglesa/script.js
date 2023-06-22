
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
    { name: 'Fernandinha76', comment: 'A hera inglesa é uma ótima opção para cobrir paredes' },
    { name: 'Julia', comment: 'Minha hera inglesa está linda no jardim!' },
    { name: 'loouize1', comment: 'É importante manter o solo úmido para a hera inglesa.' },
    { name: 'hIAGO', comment: 'A hera inglesa possui uma aparência exuberante.' },
    { name: 'Jorge', comment: 'Estou pensando em adubar minha hera inglesa no próximo mês.' },
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

    const plantName = 'Hera-inglesa'; // Nome da planta específica
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
  const plantName = 'Hera-inglesa'; // Nome da planta específica
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
  Bromélia: '../Posts/Bromélia/Index.html',
  Espada_de_são_Jorge: '../Posts/Espada-de-são-Jorge/Index.html',
  Girassol: '../Posts/Girassol/Index.html',
  Cacto: '../Posts/Cacto/Index.html',
  Cebola: '../Posts/Cebola/Index.html',
  Hera_Inglesa: '../Posts/Hera-Inglesa/Index.html',
  Hortência: '../Posts/Hortência/Index.html',
  Iresine: '../Posts/Iresine/Index.html',
  Jasmim: '../Posts/Jasmim/Index.html',
  Lavanda: '../Posts/Lavanda/Index.html',
  Lírio: '../Posts/Lírio/Index.html',
  Neoregélia: '../Posts/Neoregélia/Index.html',
  Orquidea: '../Posts/Orquidea/Index.html',
  Palmeira_Dama: '../Posts/Palmeira-Dama/Index.html',
  Pitanga: '../Posts/Pitanga/Index.html',
  Roseira: '../Posts/Roseira/Index.html',
  Samambaia: '../Posts/Samambaia/Index.html',
  Tomate: '../Posts/Tomate/Index.html',
  Torênia: '../Posts/Torênia/Index.html',
  Trapoeraba: '../Posts/Trapoeraba/Index.html'
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
    conteudo.innerHTML = 'A poda da Hera Inglesa é uma prática importante para manter a planta saudável e com um aspecto estético agradável. Aqui estão algumas dicas gerais sobre como podar essa planta:<br><br>Escolha o momento certo: A melhor época para podar a Hera Inglesa é durante a primavera e o verão, quando a planta está em crescimento ativo. Evite podar durante o outono e o inverno, quando a planta está inativa, pois isso pode enfraquecê-la.<br><br>Determine o objetivo da poda: Antes de começar a poda, determine o que você deseja alcançar. A poda pode ser feita para controlar o tamanho e a forma da planta, para incentivar o crescimento de novos brotos ou para remover partes danificadas ou doentes.<br><br>Corte os ramos excessivos: Se a sua Hera Inglesa está ficando muito grande, você pode cortar os ramos excessivos para controlar o tamanho da planta. Corte os ramos mais longos até um ponto onde você deseja que a planta pare de crescer.<br><br>Remova as folhas e galhos mortos: Se você notar folhas ou galhos mortos em sua Hera Inglesa, remova-os imediatamente. Isso ajudará a prevenir a propagação de doenças e manterá a planta saudável.<br><br>Não exagere na poda: Tenha cuidado para não podar em excesso a Hera Inglesa. A planta precisa de folhas para fazer fotossíntese e produzir alimento, então evite remover mais de 20% da folhagem em uma única poda.<br><br>Lembre-se de usar ferramentas de poda limpas e afiadas para evitar danificar a planta. E se você não se sentir confortável fazendo a poda sozinho, contrate um profissional capacitado para fazer o trabalho.'
  }
  
function solo() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'SOLO';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'O solo é um fator importante para o cultivo saudável da Hera Inglesa. Esta planta prefere solos úmidos, férteis e bem drenados. Aqui estão algumas informações importantes sobre o solo adequado para a Hera Inglesa:<br><br>pH do solo: A Hera Inglesa prefere solos ácidos a neutros, com um pH entre 5,5 e 7,0.<br><br>Drenagem: O solo deve ser bem drenado para evitar que as raízes fiquem encharcadas. Se o solo estiver muito compactado ou argiloso, adicione areia e matéria orgânica para melhorar a drenagem.<br><br>Umidade: A Hera Inglesa gosta de solos úmidos, mas não encharcados. Verifique a umidade do solo regularmente e regue a planta sempre que a camada superior do solo começar a secar.<br><br>Nutrientes: A Hera Inglesa precisa de uma quantidade adequada de nutrientes para crescer saudável. Adicione matéria orgânica, como composto ou esterco, ao solo para melhorar sua fertilidade.<br><br>Luz solar: A Hera Inglesa é uma planta de sombra parcial, que prefere locais com pouca luz solar direta. Ela pode tolerar algumas horas de sol direto pela manhã ou à tarde, mas muita luz solar pode causar queimaduras nas folhas.<br><br>Ao plantar a Hera Inglesa, cave um buraco ligeiramente maior que o tamanho do torrão da planta e adicione um pouco de adubo orgânico e terra nova ao solo. Certifique-se de que as raízes da planta estejam firmes e cobertas com solo. Regue bem a planta depois de plantá-la e continue regando regularmente para manter o solo úmido.'
  }
function adubagem() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'ADUBAGEM';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'A adubação é um aspecto importante para manter a Hera Inglesa saudável e com um bom crescimento. Aqui estão algumas informações importantes sobre como adubar essa planta:<br><br>Frequência: A Hera Inglesa deve ser adubada regularmente durante a temporada de crescimento ativo, que geralmente é de março a setembro. Você pode adubar a planta uma vez por mês durante este período.<br><br>Tipo de adubo: Use um adubo equilibrado, com uma proporção de nutrientes NPK de 10-10-10 ou 20-20-20. Você também pode usar um adubo orgânico, como composto ou esterco bem decomposto.<br><br>Quantidade de adubo: Aplique cerca de 1 colher de sopa de adubo por pé de planta, espalhando-o uniformemente sobre a superfície do solo.<br><br>Aplicação de adubo: Aplique o adubo em torno da base da planta, mantendo-o a uma distância de cerca de 5 cm do caule para evitar queimar as raízes.<br><br>Rega: Após a aplicação do adubo, regue bem a planta para permitir que o adubo penetre no solo e alcance as raízes.<br><br>Lembre-se de não exagerar na quantidade de adubo aplicado, pois isso pode prejudicar a planta. A Hera Inglesa é uma planta resistente que pode crescer bem sem muita adubação, então use adubo com moderação e regue regularmente para manter a planta saudável e com um bom crescimento.';
  }
  
function plant() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'Hera Inglesa';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'A Hera Inglesa (Hedera helix) é uma planta trepadeira perene originária da Europa e da Ásia Ocidental. Ela é amplamente cultivada em todo o mundo como planta ornamental e é frequentemente usada para cobrir paredes, cercas e outras estruturas.<br><br>A Hera Inglesa é uma planta versátil, que pode ser cultivada tanto em áreas ensolaradas quanto sombreadas. Ela é uma trepadeira vigorosa, capaz de se agarrar a superfícies verticais por meio de raízes adesivas. As folhas são verdes escuras e brilhantes, com um formato característico em forma de coração e uma textura aveludada na parte inferior.<br><br>Além de sua beleza ornamental, a Hera Inglesa tem sido usada por seus benefícios medicinais. Suas folhas contêm compostos que possuem propriedades anti-inflamatórias, expectorantes e antiespasmódicas, tornando-a útil no tratamento de várias condições respiratórias, como a bronquite e a asma.<br><br>No entanto, é importante notar que a Hera Inglesa é tóxica quando ingerida e pode causar irritação na pele em algumas pessoas. Portanto, é recomendável tomar precauções ao manusear a planta e mantê-la fora do alcance de crianças e animais de estimação.';
  }
function pragas() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'PRAGAS E DOENÇAS';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'A Hera Inglesa é uma planta relativamente resistente a pragas e doenças, mas ainda assim pode ser afetada por alguns problemas. Aqui estão alguns dos problemas mais comuns que podem afetar a Hera Inglesa:<br><br>Cochonilhas: Essas pequenas pragas podem aparecer nas folhas, caules e flores da Hera Inglesa. Elas se alimentam da seiva da planta e podem causar danos significativos. Use um spray de óleo mineral ou sabão inseticida para eliminá-las.<br><br>Ácaros: Ácaros são pequenos insetos que sugam a seiva da planta, causando manchas brancas ou amareladas nas folhas. Use um spray de óleo de nim ou enxofre para controlá-los.<br><br>Pulgões: Esses pequenos insetos verdes ou pretos se alimentam da seiva da planta, causando enrugamento e deformação das folhas. Use um spray de sabão inseticida ou óleo de nim para controlá-los.<br><br>Ferrugem: Esta é uma doença fúngica que pode afetar a Hera Inglesa. Ela causa manchas amarelas nas folhas e pode fazer com que as folhas caiam. Remova as folhas infectadas e aplique um fungicida para controlar a infecção.<br><br>Oídio: Esta é outra doença fúngica que pode afetar a Hera Inglesa. Ela causa um revestimento branco em pó nas folhas e pode fazer com que as folhas caiam. Use um fungicida para controlar a infecção.<br><br>Para prevenir problemas com pragas e doenças, é importante manter a Hera Inglesa saudável e bem cuidada. Certifique-se de que a planta esteja em um local bem iluminado, mas protegido da luz solar direta, e que o solo esteja úmido, mas não encharcado. Evite regar a planta por cima das folhas para evitar a proliferação de doenças fúngicas.';
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
