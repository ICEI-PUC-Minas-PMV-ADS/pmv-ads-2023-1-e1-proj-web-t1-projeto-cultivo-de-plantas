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
    { name: 'Carlos', comment: 'Minha pitanga produz frutos deliciosos e suculentos.' },
  { name: 'Lívia#456', comment: 'As flores da minha pitanga são tão bonitas e atraem pássaros para o meu jardim.' },
  { name: 'Fernanda', comment: 'A pitanga é uma árvore frutífera encantadora que traz vida ao meu quintal.' },
  { name: 'Ricardo', comment: 'Estou ansioso para colher as pitangas da minha árvore e fazer sucos refrescantes.' },
  { name: 'Mariana', comment: 'As pitangas são ricas em vitamina C e adicionam um toque tropical às minhas receitas.' }
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

    const plantName = 'Pitanga'; // Nome da planta específica
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
  const plantName = 'Pitanga'; // Nome da planta específica
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
  conteudo.innerHTML = 'A pitanga, assim como outras árvores frutíferas, pode se beneficiar da poda regular para promover seu crescimento saudável, controlar o tamanho da planta, melhorar a produção de frutas e manter uma forma estética adequada. Aqui estão algumas informações sobre a poda da pitanga:<br><br>Poda de formação: A poda de formação é realizada nos primeiros anos da árvore, visando estabelecer uma estrutura adequada desde o início. Durante esse período, os ramos laterais mais baixos podem ser podados para incentivar o crescimento vertical e a formação de uma copa bem equilibrada. Remova os galhos que crescem em direção ao centro da árvore, mantendo uma estrutura aberta para facilitar a penetração de luz e a circulação de ar.<br><br>Poda de limpeza: A poda de limpeza é realizada para remover galhos mortos, doentes ou danificados. Esses galhos podem ser uma fonte de doenças e pragas, além de prejudicar a aparência geral da árvore. Ao fazer a poda de limpeza, corte os galhos rente ao tronco ou ramo principal, evitando deixar tocos ou áreas abertas que possam se tornar pontos de entrada para patógenos.<br><br>Poda de rejuvenescimento: A poda de rejuvenescimento é realizada em árvores mais antigas ou que apresentam um crescimento desordenado. Consiste em cortar cerca de um terço dos ramos mais antigos e menos produtivos, incentivando o crescimento de novos brotos vigorosos. Essa poda ajuda a revitalizar a planta, estimulando a produção de frutas e promovendo um crescimento mais saudável.<br><br>Poda de produção: A poda de produção é realizada com o objetivo de melhorar a qualidade e a quantidade de frutas. Ela envolve a remoção de ramos excessivos e mal posicionados, que podem bloquear a penetração de luz solar e limitar a formação de frutas. Ao realizar a poda de produção, dê preferência aos ramos mais fortes e saudáveis, que possuem um bom potencial de produção.<br><br>Época de poda: A pitanga pode ser podada em diferentes épocas do ano, mas é comum realizar a poda de formação e limpeza durante o período de dormência da planta, geralmente no inverno. A poda de produção e rejuvenescimento pode ser feita após a colheita das frutas, aproveitando o período de maior atividade vegetativa da planta.<br><br>Ao realizar a poda, é importante utilizar ferramentas de corte afiadas e limpas para evitar danos excessivos aos ramos. Além disso, evite a poda excessiva, pois isso pode afetar negativamente o crescimento e a produção da árvore.<br><br>Lembre-se de que cada árvore é única, e as necessidades de poda podem variar de acordo com o tamanho, a idade e o estado geral da pitanga. É recomendado buscar orientação local, como a assistência de um profissional de jardinagem ou um especialista em fruticultura, para obter instruções específicas de poda adaptadas às características da sua pitanga.'
}

function solo() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'SOLO';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'O solo desempenha um papel crucial no cultivo saudável da pitanga (Eugenia uniflora), influenciando diretamente o crescimento, desenvolvimento e produção da planta. Conhecer as características do solo e como prepará-lo corretamente é fundamental para garantir o sucesso no cultivo da pitanga. Aqui estão algumas informações sobre o solo ideal para essa planta:<br><br>Textura do solo: O solo adequado para a pitanga deve possuir uma textura equilibrada, ou seja, uma proporção adequada de areia, argila e matéria orgânica. Uma textura média é a mais indicada, proporcionando boa drenagem, retenção de água e aeração adequada para as raízes da pitanga.<br><br>Drenagem: A pitanga não tolera solos encharcados, portanto, é importante que o solo tenha uma boa drenagem. Solos pesados e compactados podem levar ao apodrecimento das raízes, causando problemas de saúde para a planta. Caso o solo seja pesado e mal drenado, é recomendado melhorá-lo com a adição de areia ou matéria orgânica para aumentar a capacidade de drenagem.<br><br>pH do solo: O pH do solo ideal para a pitanga varia entre 5,5 e 6,5, considerado ligeiramente ácido a neutro. É importante fazer uma análise do solo para determinar o pH e, se necessário, corrigi-lo com a adição de materiais como calcário dolomítico (para elevar o pH) ou enxofre (para reduzir o pH).<br><br>Fertilidade: A pitanga requer um solo fértil para um bom crescimento e desenvolvimento. É recomendado fazer uma análise do solo para determinar os níveis de nutrientes presentes. Caso haja deficiências, é possível corrigi-las com a adição de fertilizantes orgânicos ou químicos, conforme indicado pela análise do solo. Adicionar matéria orgânica, como compostos ou esterco bem curtido, também contribui para melhorar a fertilidade do solo a longo prazo.<br><br>Matéria orgânica: A presença de matéria orgânica é fundamental para a saúde do solo e das plantas. Ela ajuda a melhorar a estrutura do solo, promover a retenção de umidade, fornecer nutrientes e estimular a atividade microbiana benéfica. Adicionar matéria orgânica regularmente, por meio de compostagem, adubos orgânicos ou cobertura morta, é uma prática recomendada para manter a saúde do solo.<br><br>Preparo do solo: Antes do plantio da pitanga, é importante preparar o solo corretamente. Isso pode incluir a remoção de ervas daninhas, a escavação e a incorporação de matéria orgânica, além de nivelar o solo, se necessário. Essas etapas ajudam a criar um ambiente propício para o crescimento das raízes e o estabelecimento saudável da planta.'
}
function adubagem() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'ADUBAGEM';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A adubagem adequada é essencial para promover o crescimento saudável e a produção de frutas de qualidade na pitanga. A escolha dos fertilizantes e a aplicação correta dos nutrientes são fundamentais para suprir as necessidades nutricionais da planta. Aqui estão algumas informações sobre a adubagem da pitanga:<br><br>Análise do solo: Antes de realizar a adubação, é importante realizar uma análise do solo para avaliar seus nutrientes e pH. Isso permite identificar possíveis deficiências ou excessos de nutrientes, bem como ajustar o pH do solo, se necessário. Com base nos resultados da análise do solo, é possível determinar quais nutrientes devem ser adicionados e em qual quantidade.<br><br>Adubo orgânico: O uso de adubos orgânicos é altamente recomendado para a pitanga. Composto orgânico, esterco bem curtido, húmus de minhoca e restos de vegetais decompostos são opções excelentes para melhorar a estrutura do solo, fornecer nutrientes gradualmente e estimular a atividade microbiana benéfica. Esses materiais orgânicos também aumentam a capacidade de retenção de água do solo e promovem uma nutrição equilibrada.<br><br>Adubos químicos: Além dos adubos orgânicos, é possível utilizar adubos químicos para fornecer nutrientes específicos à pitanga. É recomendado utilizar fertilizantes de liberação lenta ou controlada, pois eles fornecem nutrientes gradualmente, evitando excessos e possíveis danos às raízes. Adubos com formulação balanceada, ricos em nitrogênio, fósforo e potássio, são geralmente adequados para a pitanga.<br><br>Frequência de adubação: A pitanga pode ser adubada de forma fracionada ao longo do ano, evitando-se a concentração de nutrientes em determinados períodos. Recomenda-se dividir a quantidade de adubo em três ou quatro aplicações, realizadas durante as estações de crescimento da planta. A primeira aplicação pode ser feita no início da primavera, seguida por outras no verão e no outono.<br><br>Aplicação de adubo: A aplicação do adubo deve ser feita ao redor da projeção da copa da pitanga, evitando o contato direto com o tronco. Isso permite que os nutrientes sejam absorvidos pelas raízes localizadas na área mais ativa da planta. Após a aplicação, é recomendado regar abundantemente para garantir que os nutrientes sejam incorporados ao solo.<br><br>Lembrando que a adubação da pitanga deve ser adaptada às características do solo e às necessidades específicas da planta. Recomenda-se consultar um agrônomo ou especialista em fruticultura para obter orientações mais precisas e personalizadas de adubação, levando em consideração as condições locais.';
}

function plant() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'Pitanga';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A pitanga, cientificamente conhecida como Eugenia uniflora, é uma árvore frutífera originária da América do Sul. Pertencente à família das Myrtaceae, essa planta é apreciada tanto pelo seu valor ornamental quanto pelas suas deliciosas frutas vermelhas brilhantes, que possuem um sabor único e refrescante.<br><br>A pitanga é uma árvore de porte médio, que pode atingir até 8 metros de altura. Suas folhas são perenes, de cor verde brilhante, e possuem uma característica peculiar: quando amassadas ou esfregadas, liberam um aroma adocicado e agradável. Suas flores são pequenas, brancas e perfumadas, reunidas em inflorescências que se formam nas axilas das folhas.<br><br>No entanto, o grande destaque da pitanga são suas frutas. Elas são pequenas, redondas ou ovaladas, com uma polpa carnosa e suculenta. Sua coloração varia do verde ao vermelho intenso, indicando o estágio de maturação. As pitangas possuem um sabor agridoce, levemente ácido e refrescante, lembrando uma mistura de morango, cereja e maracujá. São consumidas in natura, utilizadas na preparação de sucos, geleias, sorvetes, licores e diversos outros produtos.<br><br>Além de seu valor gastronômico, a pitanga também apresenta benefícios para a saúde. Ela é rica em vitamina C, fibras, antioxidantes e compostos bioativos, que contribuem para fortalecer o sistema imunológico, proteger contra doenças cardiovasculares e auxiliar na digestão.<br><br>A pitanga é uma planta de fácil cultivo, adaptando-se bem a diferentes condições climáticas. Ela prefere climas tropicais e subtropicais, mas pode ser cultivada em regiões mais frias, desde que protegida de geadas. O solo ideal para o cultivo da pitanga é leve, fértil e bem drenado.<br><br>A propagação da pitanga pode ser feita por meio de sementes ou estaquia de ramos. A árvore geralmente começa a produzir frutas a partir do terceiro ou quarto ano de cultivo. É importante realizar podas regulares para manter a planta com uma estrutura adequada, além de remover galhos secos e doentes.<br><br>No paisagismo, a pitanga é frequentemente utilizada como árvore ornamental, devido à sua folhagem exuberante e à beleza de suas flores e frutas. Além disso, atrai aves e outros polinizadores, tornando-se um elemento importante para a biodiversidade local.<br><br>Em resumo, a pitanga é uma planta encantadora, que une beleza, sabor e benefícios à saúde. Seu cultivo pode trazer alegria e prazer tanto no aspecto visual do jardim quanto na degustação de suas deliciosas frutas. Com os cuidados adequados, essa árvore frutífera pode ser uma ótima opção para quem deseja desfrutar de uma planta multifacetada e cheia de encanto.';
}
function pragas() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'PRAGAS E DOENÇAS';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A pitanga, assim como outras plantas frutíferas, está sujeita a diversas pragas e doenças que podem afetar seu crescimento, produção e saúde geral. É importante conhecer essas ameaças e adotar medidas de manejo adequadas para prevenir e controlar os problemas. Aqui estão algumas pragas e doenças comuns da pitanga:<br><br>Mosca-das-frutas (Anastrepha spp.): A mosca-das-frutas é uma das principais pragas que afeta a pitanga. As fêmeas depositam seus ovos nas frutas maduras, e as larvas se desenvolvem no interior, causando apodrecimento e queda precoce dos frutos. Para controlar essa praga, podem ser adotadas medidas como a instalação de armadilhas, a poda de galhos infestados e o uso de produtos específicos para o controle de moscas-das-frutas.<br><br>Pulgões (Aphididae): Os pulgões são pequenos insetos que se alimentam da seiva das plantas, causando danos ao enfraquecer o crescimento e transmitir doenças. Eles são comuns em brotos e folhas jovens. O controle pode ser feito através da aplicação de inseticidas naturais, como extrato de nim, ou por meio do uso de predadores naturais, como joaninhas.<br><br>Ácaros (Tetranychidae): Os ácaros são pragas microscópicas que se alimentam da seiva das folhas, causando manchas amareladas e redução do crescimento da planta. Em infestações severas, as folhas podem enrolar e cair prematuramente. O controle de ácaros pode ser realizado com a aplicação de óleos vegetais ou acaricidas específicos.<br><br>Doenças fúngicas: A pitanga pode ser afetada por diversas doenças fúngicas, como a antracnose (Colletotrichum spp.), oídio (Oidium spp.), podridão de frutos (Phytophthora spp.) e manchas foliares (Cercospora spp.). Essas doenças podem causar manchas nas folhas, queda de frutas, apodrecimento e comprometimento geral da saúde da planta. O controle de doenças fúngicas pode ser realizado por meio da poda de galhos afetados, da aplicação de fungicidas e da adoção de medidas de manejo cultural, como evitar o excesso de umidade nas folhas.<br><br>Nematoides: Os nematoides são vermes microscópicos que atacam as raízes da pitanga, causando danos severos e comprometendo o desenvolvimento da planta. Sintomas como murcha, amarelecimento e redução no crescimento são comuns. O controle de nematoides pode ser desafiador, mas medidas como a rotação de culturas, o uso de mudas certificadas e o manejo adequado do solo podem ajudar a minimizar o problema.<br><br>É importante adotar práticas de manejo integrado de pragas e doenças, que envolvem medidas preventivas, como a seleção de mudas saudáveis, a manutenção da saúde geral da planta, a rotação de culturas e a higiene no pomar.';
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

  