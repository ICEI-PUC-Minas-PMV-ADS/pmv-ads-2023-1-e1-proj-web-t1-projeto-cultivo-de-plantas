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
    { name: 'Fernanda', comment: 'Minha iresine tem folhas de cores vibrantes e contrastantes.' },
  { name: 'Ricardo#23', comment: 'As folhas da minha iresine são um verdadeiro espetáculo.' },
  { name: 'Mariana', comment: 'A iresine é uma planta de fácil cultivo e baixa manutenção.' },
  { name: 'Pedro', comment: 'Estou pensando em propagar minha iresine para ter mais mudas.' },
  { name: 'Juliana$456', comment: 'A iresine é uma ótima escolha para adicionar cor aos meus arranjos florais.' }
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

    const plantName = 'iresine'; // Nome da planta específica
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
  const plantName = 'iresine'; // Nome da planta específica
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
    conteudo.innerHTML = 'A planta Iresine geralmente não requer poda regular, pois seu principal atrativo são suas folhas coloridas e a poda excessiva pode prejudicar a aparência da planta. No entanto, em certas situações, a poda pode ser realizada para fins estéticos ou de manejo. Aqui estão algumas informações sobre a poda da Iresine:<br><br>Remoção de folhas mortas ou danificadas: Se você notar folhas mortas, secas ou danificadas na Iresine, é aconselhável removê-las. Essas folhas não contribuem para a saúde e beleza da planta e podem ser removidas na base, usando uma tesoura de poda limpa e afiada. Isso ajuda a manter a planta limpa e evita que as folhas mortas se tornem um ponto de entrada para doenças.<br><br>Controle do tamanho e forma: Em alguns casos, a Iresine pode ficar muito grande ou desigual em sua forma. Se você deseja controlar o tamanho da planta ou moldar seu formato, é possível fazer uma poda de formação. Corte os ramos mais longos ou desordenados para obter a forma desejada. Lembre-se de que a poda excessiva pode retardar o crescimento da planta e afetar a aparência geral.<br><br>Propagação: A poda também pode ser realizada para a propagação da Iresine. Se você deseja criar novas plantas, pode cortar estacas saudáveis da planta-mãe e plantá-las em um substrato adequado. Remova as folhas inferiores da estaca e certifique-se de que haja pelo menos um nó presente. Coloque a estaca em um ambiente úmido até que as raízes se desenvolvam.<br><br>É importante lembrar que a Iresine é uma planta de crescimento rápido e se recupera rapidamente da poda. No entanto, a poda excessiva ou inadequada pode enfraquecer a planta e afetar sua aparência geral. Portanto, é recomendado ter cuidado ao realizar a poda e evitar remover muitas folhas de uma só vez.<br><br>Além disso, é sempre uma boa ideia pesquisar as necessidades específicas da espécie de Iresine que você está cultivando, pois diferentes variedades podem ter requisitos de poda ligeiramente diferentes. Observe a planta regularmente para detectar qualquer problema, como folhas amareladas, e ajuste sua poda e cuidados de acordo.<br><br>Lembre-se de utilizar ferramentas de poda limpas e afiadas para evitar danos à planta e a propagação de doenças.'
  }
  
function solo() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'SOLO';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'A Iresine é uma planta que se adapta bem a diferentes tipos de solo, desde que sejam bem drenados. Um solo adequado proporcionará um ambiente favorável ao crescimento saudável da planta. Aqui estão algumas informações sobre o solo ideal para a Iresine:<br><br>Drenagem: A Iresine não tolera solos encharcados, pois o acúmulo excessivo de umidade pode levar ao apodrecimento das raízes. Portanto, é importante que o solo tenha uma boa drenagem, permitindo que o excesso de água escoe facilmente. Se o solo da sua região for pesado ou compacto, você pode melhorar sua drenagem adicionando areia, cascalho ou matéria orgânica, como composto, para torná-lo mais solto e permeável.<br><br>Textura: O solo ideal para a Iresine deve ter uma textura leve e solta. Isso permite que as raízes se espalhem facilmente e tenham acesso ao oxigênio e aos nutrientes necessários. Uma mistura equilibrada de solo de jardim, areia e matéria orgânica, como húmus de minhoca ou composto, é uma boa opção para fornecer uma textura adequada ao solo.<br><br>pH do solo: A Iresine prefere um pH do solo ligeiramente ácido a neutro, variando entre 6,0 e 7,0. Um pH adequado ajuda na absorção dos nutrientes pelas raízes. Se o pH do seu solo for muito ácido ou alcalino, você pode ajustá-lo adicionando materiais corretivos, como enxofre para reduzir a acidez ou cal para aumentar a alcalinidade. É recomendado fazer um teste de pH do solo para determinar suas características específicas.<br><br>Fertilidade: O solo da Iresine deve ser rico em nutrientes para promover um crescimento saudável e folhagem vibrante. Antes do plantio, é recomendado incorporar matéria orgânica, como composto ou húmus de minhoca, ao solo. Isso fornecerá nutrientes essenciais e melhorará a estrutura do solo. Além disso, durante a estação de crescimento ativo, é aconselhável fertilizar a Iresine regularmente com um fertilizante balanceado e solúvel em água, seguindo as instruções do fabricante.<br><br>Retenção de umidade: Embora a Iresine não tolere solos encharcados, é importante que o solo retenha uma quantidade adequada de umidade para sustentar a planta. A adição de matéria orgânica, como composto, ao solo ajuda a melhorar sua capacidade de retenção de umidade, permitindo que as raízes tenham acesso à água necessária.<br><br>Antes de plantar a Iresine, certifique-se de preparar o solo adequadamente, considerando suas características e necessidades específicas. Uma boa preparação do solo ajudará a fornecer um ambiente propício ao crescimento e desenvolvimento saudável da planta.'
  }
function adubagem() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'ADUBAGEM';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'A adubagem adequada é essencial para o crescimento saudável e a folhagem vibrante da planta Iresine. A aplicação regular de fertilizantes fornece os nutrientes necessários para o desenvolvimento da planta. Aqui estão algumas informações sobre a adubagem da Iresine:<br><br>Fertilizante balanceado: Para a adubação da Iresine, é recomendado o uso de um fertilizante balanceado com proporções equilibradas de nutrientes, como nitrogênio (N), fósforo (P) e potássio (K). Os fertilizantes com uma fórmula NPK de 10-10-10 ou 20-20-20 são adequados para a Iresine.<br><br>Frequência de adubação: A Iresine pode ser fertilizada durante a estação de crescimento ativo, que geralmente ocorre na primavera e no verão. A frequência de adubação depende do tipo de fertilizante utilizado. Para fertilizantes de liberação lenta, siga as instruções do fabricante quanto à frequência de aplicação. Para fertilizantes líquidos solúveis em água, uma aplicação a cada duas semanas é geralmente suficiente.<br><br> Diluição adequada: Se você está utilizando fertilizantes líquidos, é importante diluí-los corretamente antes de aplicar na Iresine. Siga as instruções do fabricante para obter a proporção correta de fertilizante e água. Uma concentração excessiva de fertilizante pode levar à queima das raízes e prejudicar a planta.<br><br>Aplicação: Ao aplicar fertilizantes líquidos, regue o solo ao redor da planta com a solução diluída, evitando a aplicação direta nas folhas. Se você estiver usando fertilizantes de liberação lenta, siga as instruções do fabricante quanto à quantidade a ser aplicada e espalhe o fertilizante uniformemente no solo ao redor da planta.<br><br>Matéria orgânica: Além dos fertilizantes comerciais, a adição de matéria orgânica ao solo também é benéfica para a Iresine. Antes do plantio, incorpore composto ou húmus de minhoca ao solo para enriquecer sua fertilidade e melhorar sua capacidade de retenção de nutrientes.<br><br>Observação e ajuste: Observe a planta de perto para detectar sinais de deficiência de nutrientes, como folhas amareladas ou crescimento lento. Se necessário, faça ajustes na adubação, aumentando a frequência ou concentração do fertilizante. No entanto, evite a superadubação, pois isso pode causar danos às raízes e afetar negativamente a planta.<br><br>Lembre-se de regar bem a planta antes de aplicar qualquer fertilizante, para evitar queimaduras nas raízes. Além disso, sempre siga as instruções do fabricante ao usar fertilizantes comerciais e armazene-os adequadamente, mantendo-os fora do alcance de crianças e animais de estimação.<br><br>Com uma adubação adequada, a Iresine receberá os nutrientes necessários para seu crescimento vigoroso e folhagem exuberante, tornando-a uma planta deslumbrante em seu ambiente.';
  }
  
function plant() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'Iresine';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'A Iresine, também conhecida como Herança-do-monte ou Alegria-de-viver, é uma planta ornamental de folhagem colorida que pertence à família Amaranthaceae. É nativa das regiões tropicais da América Central e do Sul, e é apreciada por suas folhas vibrantes e variadas.<br><br>A planta Iresine possui folhas brilhantes e textura suave, com uma ampla gama de cores e padrões. As folhas podem ser vermelhas, rosas, roxas, verdes ou variegadas, apresentando combinações únicas de tons. Algumas variedades têm folhas lisas, enquanto outras possuem bordas serrilhadas ou recortadas, adicionando um elemento extra de interesse visual.<br><br>A Iresine é uma planta de porte médio, que geralmente atinge cerca de 30 a 60 centímetros de altura. Ela cresce de forma compacta e ramificada, formando uma planta densa e cheia quando cultivada adequadamente. Além de sua beleza ornamental, a Iresine é uma planta de fácil cultivo, sendo uma ótima opção para jardineiros iniciantes.<br><br>Aqui estão algumas características e cuidados gerais para o cultivo da planta Iresine:<br><br>Luz: A Iresine se desenvolve melhor em locais com boa luminosidade, mas evite exposição direta ao sol intenso, principalmente nas horas mais quentes do dia. Ela pode tolerar alguma sombra parcial, mas as cores das folhas podem ser menos intensas nesse ambiente.<br><br>Temperatura: A Iresine prefere climas quentes e úmidos, com temperaturas médias entre 18°C e 25°C. Ela não é tolerante a geadas e frio intenso, sendo recomendado protegê-la em períodos de frio extremo.<br><br>Rega: A rega deve ser moderada, permitindo que o substrato seque ligeiramente entre as irrigações. Evite encharcar o solo, pois o excesso de umidade pode levar ao apodrecimento das raízes. No entanto, também é importante não deixar a planta secar completamente, pois isso pode causar estresse e prejudicar seu desenvolvimento.<br><br>Solo: A Iresine se adapta bem a diferentes tipos de solo, desde que sejam bem drenados. Uma mistura de substrato leve e rico em matéria orgânica é ideal para o cultivo. Certifique-se de que o solo tenha uma boa capacidade de retenção de umidade, mas também permita a drenagem adequada.<br><br>Adubação: A Iresine se beneficia de adubações regulares durante a estação de crescimento ativo. Utilize um fertilizante balanceado de liberação lenta ou um fertilizante líquido diluído, seguindo as instruções do fabricante. Evite excesso de adubação, pois isso pode resultar em folhas com cores menos intensas.<br><br>Propagação: A Iresine pode ser propagada por meio de estacas. Corte um pedaço saudável do caule, removendo as folhas inferiores, e plante-o em um substrato úmido. Mantenha-o em um local quente e com boa umidade até que as raízes se desenvolvam.';
  }
function pragas() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'PRAGAS E DOENÇAS';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'A Iresine é geralmente uma planta resistente a pragas e doenças, mas em algumas situações pode ser afetada por problemas comuns. Aqui estão algumas pragas e doenças que podem ocorrer na Iresine:<br><br>Cochonilhas: Cochonilhas são pequenos insetos que se alimentam da seiva das plantas. Eles aparecem como manchas brancas ou acolchoadas nos caules e nas folhas. Para controlar as cochonilhas, você pode remover manualmente as infestações menores com um pano embebido em água e sabão. Para infestações mais graves, inseticidas específicos para cochonilhas podem ser utilizados.<br><br>Pulgões: Os pulgões são pequenos insetos que se alimentam da seiva das plantas e podem se acumular nas folhas da Iresine. Eles são geralmente verdes ou pretos e podem causar enrugamento das folhas e retardar o crescimento da planta. O controle de pulgões pode ser realizado com a remoção manual, usando um jato de água para lavar as folhas, ou com a aplicação de inseticidas adequados.<br><br>Ácaros: Os ácaros são pequenos aracnídeos que podem causar manchas amareladas nas folhas da Iresine. Eles se alimentam do tecido vegetal e deixam um aspecto descolorido nas folhas afetadas. Para controlar os ácaros, é recomendado a utilização de produtos acaricidas específicos ou a lavagem das folhas com água para remover os ácaros.<br><br>Oídio: O oídio é um fungo que forma uma camada branca ou cinza nas folhas da Iresine. Ele pode ser favorecido por ambientes úmidos e falta de circulação de ar. Para prevenir o oídio, é importante fornecer boa ventilação e evitar molhar as folhas durante a rega. Se necessário, fungicidas específicos podem ser utilizados para controlar o problema.<br><br>Podridão das raízes: O excesso de umidade ou a falta de drenagem adequada podem levar ao apodrecimento das raízes da Iresine. Isso pode ser causado por rega excessiva ou solo mal drenado. Para evitar a podridão das raízes, é importante permitir que o solo seque entre as regas e fornecer uma boa drenagem no vaso ou canteiro de plantio.<br><br>É importante monitorar regularmente sua Iresine em busca de sinais de pragas e doenças. Ao detectar algum problema, tome medidas imediatas para controlá-los. Além disso, certifique-se de fornecer um ambiente adequado de crescimento, como boa ventilação, rega equilibrada, solo bem drenado e nutrição adequada. Essas práticas ajudam a fortalecer a planta e torná-la mais resistente a pragas e doenças.';
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
