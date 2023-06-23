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
    { name: 'Juliana', comment: 'Minha orquídea está desabrochando com flores deslumbrantes.' },
  { name: 'Rafael#789', comment: 'As flores da minha orquídea são tão delicadas e exóticas.' },
  { name: 'Isabel', comment: 'A orquídea é uma planta elegante que traz sofisticação ao meu espaço.' },
  { name: 'André', comment: 'Estou encantado com a beleza e diversidade das orquídeas em minha coleção.' },
  { name: 'Luiza', comment: 'As orquídeas são flores incríveis, cheias de mistério e beleza.' }
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

    const plantName = 'Orquidea'; // Nome da planta específica
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
  const plantName = 'Orquidea'; // Nome da planta específica
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
  conteudo.innerHTML = 'A poda das orquídeas é um aspecto importante do cuidado e manutenção dessas plantas. Embora nem todas as espécies de orquídeas exijam poda regular, algumas se beneficiam dessa prática para promover o crescimento saudável, estimular a floração e manter a planta em um tamanho adequado.<br><br>O objetivo da poda nas orquídeas é principalmente remover partes danificadas, secas, mortas ou doentes da planta. Isso inclui folhas murchas, amareladas ou manchadas, hastes florais murchas ou desbotadas, bem como raízes podres ou secas. A remoção dessas partes indesejadas permite que a planta concentre sua energia nos tecidos saudáveis, promovendo o crescimento e a floração.<br><br>Ao realizar a poda, é importante usar ferramentas limpas e afiadas para evitar a propagação de doenças. Recomenda-se esterilizar as ferramentas antes e depois de cada corte, utilizando álcool isopropílico ou uma chama para desinfetar as lâminas. Isso ajuda a evitar a contaminação e infecção da planta.<br><br>Em relação às hastes florais, muitas orquídeas têm um ciclo de floração específico. Após a floração, algumas hastes podem secar naturalmente e se tornar marrons ou amareladas. Nesses casos, é seguro cortar as hastes mortas rente à base da planta. No entanto, é importante observar que algumas espécies de orquídeas têm a capacidade de rebrotar em hastes antigas, então é recomendável pesquisar a espécie específica antes de realizar a poda.<br><br>Quando se trata das raízes das orquídeas, a poda pode ser necessária se houver raízes mortas, podres ou excessivamente secas. Antes de podar as raízes, é importante inspecioná-las com cuidado. Raízes saudáveis têm uma cor verde prateada e são firmes ao toque. Se você encontrar raízes mortas ou podres, é recomendável cortá-las com uma tesoura esterilizada, removendo apenas as partes afetadas e deixando as raízes saudáveis ​​intactas.<br><br>No entanto, é importante ter cautela ao podar as raízes, pois as orquídeas dependem delas para absorver água e nutrientes. Evite cortar raízes saudáveis ​​sem motivo. É comum que as raízes das orquídeas cresçam para fora do vaso ou se enrolem, e isso é parte natural do seu crescimento. Ao fazer a poda, procure remover apenas as raízes mortas ou doentes e deixe as raízes saudáveis ​​intactas.<br><br>Em resumo, a poda das orquídeas é uma prática importante para manter a saúde e a estética das plantas. Ao remover partes danificadas, secas ou doentes, é possível promover o crescimento saudável e estimular a floração. No entanto, é essencial ter cuidado ao podar, utilizando ferramentas limpas e afiadas, e evitando cortar partes saudáveis sem necessidade.'
}

function solo() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'SOLO';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'As orquídeas possuem requisitos específicos quando se trata do solo ou substrato em que são cultivadas. Diferentemente de muitas outras plantas, as orquídeas não são tradicionalmente cultivadas em solo comum de jardim. Elas são epífitas, o que significa que naturalmente crescem em superfícies como troncos de árvores, galhos e rochas, usando suas raízes principalmente para se fixar e absorver umidade e nutrientes do ar ao seu redor.<br><br>Ao cultivar orquídeas em vasos ou recipientes, é essencial fornecer um substrato adequado que reproduza as condições em que elas crescem naturalmente. O substrato ideal para orquídeas é leve, poroso e oferece excelente drenagem, permitindo que as raízes respirem e evitem o acúmulo de água. Isso é fundamental para evitar o apodrecimento das raízes e promover o crescimento saudável da planta.<br><br>Existem vários tipos de substratos comumente usados para o cultivo de orquídeas, incluindo:<br><br>Casca de árvore: A casca de árvore é um substrato popular para orquídeas. Ela é leve, porosa e retém umidade sem reter água em excesso. A casca de árvore de tamanhos médios a grandes é geralmente usada, pois oferece uma boa aeração às raízes.<br><br>Musgo sphagnum: O musgo sphagnum é outro substrato comum para orquídeas. Ele retém bem a umidade e fornece um ambiente úmido para as raízes. No entanto, é importante ter cuidado para não compactar demais o musgo sphagnum, pois isso pode restringir a circulação de ar e causar problemas de umidade excessiva.<br><br>Fibra de coco: A fibra de coco é um substrato natural e sustentável que oferece boa drenagem e retenção de umidade adequada. Ela é feita a partir da casca do coco e pode ser usada sozinha ou combinada com outros materiais.<br><br>Além desses substratos, existem misturas comerciais disponíveis especificamente formuladas para o cultivo de orquídeas, que geralmente combinam diferentes materiais para fornecer uma textura leve, porosa e drenante.<br><br>Ao escolher o substrato para suas orquídeas, é importante considerar a espécie específica, suas necessidades de umidade e as condições ambientais em que você as cultivará. Algumas orquídeas preferem substratos mais secos, enquanto outras requerem umidade constante. É recomendável pesquisar sobre a espécie de orquídea que você possui para determinar as melhores condições de cultivo.<br><br>Além disso, é essencial monitorar a umidade do substrato e regar adequadamente, evitando encharcar as raízes. A rega excessiva pode levar ao apodrecimento das raízes, enquanto a falta de umidade pode levar à desidratação da planta. Portanto, é importante encontrar um equilíbrio adequado para atender às necessidades específicas de cada orquídea.'
}
function adubagem() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'ADUBAGEM';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A poda das orquídeas é um aspecto importante do cuidado e manutenção dessas plantas. Embora nem todas as espécies de orquídeas exijam poda regular, algumas se beneficiam dessa prática para promover o crescimento saudável, estimular a floração e manter a planta em um tamanho adequado.<br><br>O objetivo da poda nas orquídeas é principalmente remover partes danificadas, secas, mortas ou doentes da planta. Isso inclui folhas murchas, amareladas ou manchadas, hastes florais murchas ou desbotadas, bem como raízes podres ou secas. A remoção dessas partes indesejadas permite que a planta concentre sua energia nos tecidos saudáveis, promovendo o crescimento e a floração.<br><br>Ao realizar a poda, é importante usar ferramentas limpas e afiadas para evitar a propagação de doenças. Recomenda-se esterilizar as ferramentas antes e depois de cada corte, utilizando álcool isopropílico ou uma chama para desinfetar as lâminas. Isso ajuda a evitar a contaminação e infecção da planta.<br><br>Em relação às hastes florais, muitas orquídeas têm um ciclo de floração específico. Após a floração, algumas hastes podem secar naturalmente e se tornar marrons ou amareladas. Nesses casos, é seguro cortar as hastes mortas rente à base da planta. No entanto, é importante observar que algumas espécies de orquídeas têm a capacidade de rebrotar em hastes antigas, então é recomendável pesquisar a espécie específica antes de realizar a poda.<br><br>Quando se trata das raízes das orquídeas, a poda pode ser necessária se houver raízes mortas, podres ou excessivamente secas. Antes de podar as raízes, é importante inspecioná-las com cuidado. Raízes saudáveis têm uma cor verde prateada e são firmes ao toque. Se você encontrar raízes mortas ou podres, é recomendável cortá-las com uma tesoura esterilizada, removendo apenas as partes afetadas e deixando as raízes saudáveis ​​intactas.<br><br>No entanto, é importante ter cautela ao podar as raízes, pois as orquídeas dependem delas para absorver água e nutrientes. Evite cortar raízes saudáveis ​​sem motivo. É comum que as raízes das orquídeas cresçam para fora do vaso ou se enrolem, e isso é parte natural do seu crescimento. Ao fazer a poda, procure remover apenas as raízes mortas ou doentes e deixe as raízes saudáveis ​​intactas.<br><br>Em resumo, a poda das orquídeas é uma prática importante para manter a saúde e a estética das plantas. Ao remover partes danificadas, secas ou doentes, é possível promover o crescimento saudável e estimular a floração. No entanto, é essencial ter cuidado ao podar, utilizando ferramentas limpas e afiadas, e evitando cortar partes saudáveis sem necessidade.';
}

function plant() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'Espada de são Jorge';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'As orquídeas são plantas fascinantes e exuberantes, conhecidas por sua beleza e diversidade. Com mais de 25.000 espécies registradas e inúmeras variedades híbridas, as orquídeas são encontradas em todos os cantos do mundo, desde florestas tropicais até regiões áridas. Sua popularidade entre os entusiastas de plantas é justificada pela sua elegância e pela complexidade de suas flores.<br><br>Uma das características mais marcantes das orquídeas são suas flores exóticas, que vêm em uma ampla gama de cores, tamanhos e formas. Algumas espécies apresentam flores pequenas e delicadas, enquanto outras produzem flores grandes e vistosas. Independentemente do tamanho, as orquídeas geralmente exibem pétalas intricadas e sépalas, muitas vezes em padrões únicos e vibrantes. Essa variedade de cores e formas torna cada orquídea única e especial.<br><br>Além de sua beleza estonteante, as orquídeas também têm uma história cultural rica. Elas têm sido valorizadas por diversas civilizações ao longo dos séculos, desde os antigos gregos até as culturas asiáticas. Nas culturas orientais, as orquídeas são frequentemente associadas à beleza, elegância, amor e fertilidade. No passado, as orquídeas eram consideradas plantas raras e exclusivas, reservadas para a realeza e a elite. Hoje em dia, as orquídeas estão disponíveis para todos, mas ainda carregam consigo uma aura de sofisticação e requinte.<br><br>No entanto, apesar de sua aparente delicadeza, as orquídeas são plantas resilientes e adaptáveis. Elas se desenvolveram para sobreviver em uma variedade de ambientes, desde as florestas úmidas até as regiões montanhosas de climas mais frios. Muitas espécies de orquídeas são epífitas, o que significa que crescem em árvores, usando-as apenas como suporte, sem parasitar ou prejudicar o hospedeiro. Outras espécies são terrestres, enraizando-se no solo. Essa versatilidade faz com que as orquídeas sejam apreciadas por jardineiros e colecionadores, que podem cultivá-las em uma variedade de condições.<br><br>Cuidar de uma orquídea pode exigir um pouco mais de atenção e conhecimento do que cuidar de outras plantas, mas os esforços são recompensados ​​com flores deslumbrantes. Essas plantas geralmente precisam de luz filtrada, temperaturas moderadas, umidade adequada e um substrato bem drenado para prosperar. Com os cuidados certos, uma orquídea pode florescer por semanas ou até meses, trazendo alegria e um toque de beleza natural para qualquer ambiente.';
}
function pragas() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'PRAGAS E DOENÇAS';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'As orquídeas, como outras plantas, estão sujeitas a pragas e doenças que podem afetar sua saúde e aparência. É importante estar atento a sinais de infestação ou problemas de saúde para poder tratá-los o mais rápido possível. Aqui estão algumas das pragas e doenças comuns que podem afetar as orquídeas:<br><br>Cochonilhas: Cochonilhas são pequenos insetos que se alimentam da seiva das plantas. Eles podem aparecer como manchas brancas, acinzentadas ou marrons nas folhas, hastes ou flores das orquídeas. Para controlar cochonilhas, pode-se utilizar uma solução de água e detergente neutro ou um inseticida específico para cochonilhas, aplicando diretamente sobre as áreas afetadas.<br><br>Ácaros: Ácaros são pragas microscópicas que se alimentam das folhas das orquídeas. Eles podem causar manchas amareladas ou prateadas e teias finas nas plantas. Para controlar ácaros, pode-se utilizar um spray de água ou um inseticida acaricida, aplicando-o diretamente sobre as folhas e hastes afetadas.<br><br>Pulgões: Pulgões são pequenos insetos que se alimentam da seiva das plantas e podem causar deformações nas folhas e brotos das orquídeas. Eles geralmente aparecem em grupos e podem ser verdes, pretos ou marrons. Para controlar pulgões, pode-se usar água e detergente neutro ou um inseticida específico para pulgões.<br><br>Podridão das raízes: A podridão das raízes é uma doença causada por fungos ou bactérias que atacam as raízes das orquídeas. Ela é geralmente causada pelo acúmulo de umidade excessiva no substrato. Os sintomas incluem raízes moles, escuras e com odor desagradável. Para prevenir a podridão das raízes, é importante manter um bom sistema de drenagem e evitar o excesso de rega. No caso de infecção, as raízes afetadas devem ser removidas e o substrato trocado.<br><br>Manchas foliares: Manchas foliares podem ser causadas por fungos ou bactérias e aparecem como manchas irregulares nas folhas das orquídeas. Essas manchas podem ser acompanhadas de descoloração, amarelecimento ou murcha das folhas. Para tratar manchas foliares, é recomendado remover as partes afetadas e aplicar um fungicida ou bactericida adequado.<br><br>É importante observar regularmente suas orquídeas em busca de sinais de infestação ou problemas de saúde. Manter um ambiente limpo, bem ventilado e evitar o estresse excessivo nas plantas pode ajudar a prevenir o aparecimento de pragas e doenças. Além disso, é importante seguir as práticas corretas de rega, evitar o acúmulo de umidade no substrato e garantir que as plantas recebam luz adequada para promover sua saúde e resistência.';
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
