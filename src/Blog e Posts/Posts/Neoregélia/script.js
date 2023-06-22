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
    { name: 'Alexandre', comment: 'Minha Neoregelia está formando belas rosetas de folhas.' },
  { name: 'Sophie@98', comment: 'As cores vibrantes das folhas da minha Neoregelia são impressionantes.' },
  { name: 'BeiraLinha', comment: 'Venham conhecer meu projeto!!' },
  { name: 'Isabella#321', comment: 'A Neoregelia é uma planta de fácil cuidado e resistente.' },
  { name: 'Mateus', comment: 'As folhas da Neoregelia criam um efeito visual único no meu jardim.' }
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

    const plantName = 'neoregelia'; // Nome da planta específica
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
  const plantName = 'neoregelia'; // Nome da planta específica
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
    conteudo.innerHTML = 'A Neoregelia não requer poda regular, pois suas folhas e estrutura geralmente permanecem compactas e atraentes por longos períodos. No entanto, em certas situações, a poda pode ser necessária. Aqui estão algumas informações sobre a poda da Neoregelia:<br><br>Remoção de folhas mortas ou danificadas: Se você notar folhas mortas, secas ou danificadas na Neoregelia, é aconselhável removê-las. Essas folhas não contribuem para o crescimento saudável da planta e podem se tornar um ponto de entrada para pragas e doenças. Use uma tesoura de poda limpa e afiada para cortar cuidadosamente as folhas na base, evitando danos às folhas saudáveis próximas.<br><br>Controle do tamanho da planta: Algumas espécies de Neoregelia podem crescer bastante e se espalhar. Se a planta estiver ficando muito grande para o espaço em que está sendo cultivada, você pode considerar a poda para controlar o tamanho. Corte as folhas mais antigas e longas, mantendo as mais jovens e compactas. Lembre-se de que a poda excessiva pode afetar a capacidade da planta de realizar a fotossíntese e prejudicar seu crescimento.<br><br>Divisão de touceiras: A Neoregelia forma touceiras ao longo do tempo, com brotos laterais crescendo ao redor da planta mãe. Se a touceira estiver muito densa, você pode optar por dividir a planta em partes menores. Remova cuidadosamente os brotos laterais, certificando-se de que cada divisão tenha raízes saudáveis. Em seguida, replante as divisões em vasos individuais ou em um novo local no jardim, fornecendo-lhes solo adequado e cuidados apropriados.<br><br>Remoção de inflorescências antigas: Após a floração, as inflorescências da Neoregelia começam a secar e morrer. Você pode remover as inflorescências antigas para manter uma aparência esteticamente agradável da planta. Corte as inflorescências mortas na base, tomando cuidado para não danificar as folhas próximas.<br><br>É importante lembrar que a Neoregelia pode demorar um tempo considerável para florescer novamente após a poda. Portanto, é aconselhável evitar podas excessivas, a menos que seja necessário. Além disso, lembre-se de sempre usar ferramentas de poda limpas e afiadas para evitar a propagação de doenças.<br><br>Cada espécie de Neoregelia pode ter necessidades específicas em relação à poda. Portanto, é recomendado pesquisar as informações específicas da espécie que você está cultivando para garantir uma poda adequada.'
  }
  
function solo() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'SOLO';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'A Neoregelia é uma planta epífita ou terrestre, e seu cultivo requer um solo adequado para garantir um crescimento saudável. Aqui estão algumas informações sobre o solo ideal para a Neoregelia:<br><br>Drenagem: A Neoregelia prefere um solo bem drenado para evitar o acúmulo excessivo de água, o que pode levar ao apodrecimento das raízes. O solo deve ser poroso e permitir que a água passe rapidamente. Você pode alcançar uma boa drenagem adicionando materiais como casca de árvore, perlita ou areia grossa à mistura do solo.<br><br>Substrato: Para o cultivo da Neoregelia, um substrato específico para bromélias é recomendado. Esses substratos são projetados para fornecer um ambiente adequado para as raízes da planta e permitem uma boa circulação de ar e drenagem. Esses substratos geralmente contêm uma combinação de musgo sphagnum, casca de árvore, perlita e fibra de coco.<br><br>pH do solo: A Neoregelia geralmente prefere um pH ligeiramente ácido a neutro, na faixa de 5,5 a 6,5. Verifique o pH do solo utilizando um medidor de pH ou um kit de teste e faça os ajustes necessários adicionando substâncias alcalinas ou ácidas para atingir o intervalo desejado.<br><br>Nutrientes: Embora a Neoregelia seja uma planta epífita e obtenha nutrientes principalmente do ambiente aéreo, é importante fornecer um substrato com nutrientes adequados. Isso pode ser alcançado utilizando um substrato enriquecido com fertilizantes de liberação lenta ou adicionando adubos orgânicos, como húmus de minhoca ou farinha de osso, para fornecer nutrientes gradualmente.<br><br>Umidade: A Neoregelia se beneficia de um ambiente com umidade moderada. O substrato deve ser capaz de reter uma quantidade adequada de umidade, permitindo que as raízes absorvam água, mas sem que fiquem encharcadas. É importante regar a planta de forma regular, mantendo o substrato úmido, mas evitando o encharcamento.<br><br>Lembre-se de que a Neoregelia é uma planta adaptada a diferentes condições de crescimento, e a escolha do substrato pode variar dependendo da espécie e das condições ambientais específicas. É sempre uma boa ideia pesquisar as necessidades específicas da espécie de Neoregelia que você está cultivando e adaptar o solo de acordo.<br><br>Monitorar a umidade do solo, a drenagem adequada e a rega adequada são fundamentais para o sucesso do cultivo da Neoregelia. Mantenha a planta em um ambiente apropriado, fornecendo o substrato ideal para garantir que suas raízes recebam os nutrientes e a umidade necessários para um crescimento saudável.'
  }
function adubagem() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'ADUBAGEM';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'A adubagem adequada é essencial para garantir o crescimento saudável e a exibição vibrante de cores da Neoregelia. Aqui estão algumas orientações sobre a adubação dessa planta:<br><br>Fertilizante balanceado: A Neoregelia responde bem à adubação com um fertilizante balanceado, com proporção equilibrada de nutrientes, como nitrogênio (N), fósforo (P) e potássio (K). Um fertilizante com a formulação NPK de 10-10-10 ou similar é uma opção adequada para a Neoregelia.<br><br>Frequência de adubação: É recomendado adubar a Neoregelia regularmente durante a estação de crescimento ativo. Uma frequência comum é a cada dois meses, durante a primavera e o verão. No entanto, é importante seguir as instruções específicas do fabricante do fertilizante, pois as doses e a frequência podem variar.<br><br>Aplicação do fertilizante: Antes de aplicar o fertilizante, certifique-se de que o substrato esteja úmido. Aplique o fertilizante de forma uniforme sobre o substrato, evitando que o produto entre diretamente no tanque central da planta. Em seguida, regue bem para ajudar a dissolver e distribuir os nutrientes no solo.<br><br>Adubos de liberação lenta: Outra opção é utilizar adubos de liberação lenta, que liberam os nutrientes gradualmente ao longo do tempo. Esses adubos são convenientes, pois fornecem uma nutrição constante à planta. Siga as instruções do fabricante em relação à dosagem e à duração da liberação do fertilizante.<br><br>Adubação foliar: Além da adubação do substrato, você pode complementar a nutrição da Neoregelia com adubação foliar. Dilua um fertilizante líquido em água, seguindo as instruções do fabricante, e pulverize levemente a solução nas folhas da planta. Isso fornece nutrientes diretamente às folhas, permitindo uma absorção mais rápida.<br><br>Cuidado com a superadubação: Evite a superadubação, pois isso pode causar danos às raízes da Neoregelia. Siga as instruções do fabricante ou as recomendações específicas para a planta em relação à dosagem e à frequência de adubação.<br><br>Adubos orgânicos: Se preferir uma abordagem mais orgânica, você pode usar adubos orgânicos, como húmus de minhoca, farinha de osso ou esterco bem decomposto. Esses materiais fornecem nutrientes de forma lenta e gradual, enriquecendo o substrato e promovendo um crescimento saudável da planta.<br><br>É importante observar a resposta da Neoregelia à adubação e ajustar as doses e a frequência conforme necessário. Monitore a saúde geral da planta e observe se há sinais de excesso ou deficiência de nutrientes. Mantenha um equilíbrio adequado de adubação e outros cuidados essenciais, como a rega adequada, para promover um crescimento vigoroso e uma exibição espetacular de cores na Neoregelia.';
  }
  
function plant() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'Neoregélia';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'A Neoregelia é um gênero de plantas pertencente à família das bromélias, nativas principalmente das regiões tropicais da América do Sul. Essas plantas são apreciadas por sua beleza exótica, com folhagem colorida e estruturas distintas. Aqui estão algumas informações sobre a planta Neoregelia:<br><br>Características da planta: A Neoregelia é uma planta perene, epífita ou terrestre, que cresce em uma roseta basal. Ela possui folhas rígidas, lanceoladas ou acuminadas, dispostas em uma formação de tanque central onde a água da chuva e nutrientes são coletados. A planta pode variar em tamanho, desde pequenas espécies que cabem na palma da mão até espécies maiores que podem atingir até 90 centímetros de largura.<br><br>Variedade de cores: Uma das características marcantes da Neoregelia é a diversidade de cores e padrões em suas folhas. As folhas podem ser verdes, vermelhas, laranjas, amarelas ou roxas, com marcas e listras em diferentes tonalidades. Essas cores brilhantes e vibrantes muitas vezes se desenvolvem em resposta à exposição à luz intensa.<br><br>Flores: A Neoregelia produz flores pouco vistosas em comparação com suas folhas. As flores surgem de uma inflorescência no centro da roseta e são geralmente pequenas e tubulares, em tons de branco, rosa ou violeta. Depois de florescer, a planta pode levar vários anos para produzir novas flores, mas suas folhas coloridas são a principal atração ornamental.<br><br>Requisitos de luz: A Neoregelia geralmente prefere luz brilhante, mas não tolera luz solar direta intensa, que pode queimar suas folhas. É recomendado fornecer luz filtrada ou sombra parcial para garantir um crescimento saudável e a preservação das cores vivas das folhas. Em ambientes internos, a planta pode se adaptar a uma iluminação indireta brilhante.<br><br>Solo e umidade: Como muitas bromélias, a Neoregelia é epífita na natureza, crescendo em árvores ou rochas. Portanto, ela prefere um substrato bem drenado que retenha um pouco de umidade. Um substrato adequado para a Neoregelia pode consistir em uma mistura de musgo sphagnum, casca de árvore, perlita e areia. É importante manter o tanque central da planta preenchido com água para fornecer a umidade necessária.<br><br>Propagação: A Neoregelia pode ser propagada por meio de mudas laterais, também conhecidas como "filhotes" ou "bromélias bebê", que surgem ao redor da planta mãe. Esses filhotes podem ser separados com cuidado e plantados individualmente para iniciar novas plantas.';
  }
function pragas() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'PRAGAS E DOENÇAS';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'A Neoregelia é uma planta resistente e geralmente não é suscetível a muitas pragas e doenças. No entanto, algumas condições podem favorecer o aparecimento de problemas. Aqui estão algumas pragas e doenças comuns que podem afetar a Neoregelia:<br><br>Cochonilhas: As cochonilhas são insetos que se fixam nas folhas e caules, sugando a seiva da planta. Elas aparecem como pequenas protuberâncias brancas, marrons ou pretas. Se detectar cochonilhas, você pode removê-las manualmente ou utilizar um algodão embebido em álcool para limpá-las. Em casos mais graves, produtos inseticidas específicos para cochonilhas podem ser necessários.<br><br>Ácaros: Os ácaros são pequenos aracnídeos que podem causar manchas prateadas ou amareladas nas folhas da Neoregelia. Eles se alimentam do tecido das plantas, deixando-as com uma aparência descolorida e danificada. O controle de ácaros pode ser realizado com a aplicação de acaricidas específicos ou a lavagem das folhas com água para remover os ácaros.<br><br>Lesmas e caracóis: Essas pragas podem se alimentar das folhas e deixar rastros de muco. Para controlá-las, você pode utilizar métodos como armadilhas de cerveja ou produtos específicos para o controle de lesmas e caracóis.<br><br>Podridão das raízes: O excesso de umidade no substrato pode levar ao apodrecimento das raízes da Neoregelia. Isso pode ocorrer quando o solo não tem uma boa drenagem ou quando a rega é excessiva. Para evitar a podridão das raízes, certifique-se de que o substrato esteja bem drenado e evite encharcar a planta com regas excessivas.<br><br>Fungos e doenças relacionadas: A umidade excessiva e a falta de circulação de ar podem favorecer o desenvolvimento de fungos, como oídio e podridão cinzenta. É importante fornecer boa ventilação e evitar que as folhas fiquem úmidas por longos períodos. Se necessário, produtos fungicidas específicos podem ser aplicados para controlar essas doenças.<br><br>Erros de cultivo: Além das pragas e doenças, erros de cultivo, como falta de luz adequada, rega inadequada ou falta de nutrientes, podem enfraquecer a Neoregelia e torná-la mais suscetível a problemas. Certifique-se de fornecer as condições ideais de cultivo, incluindo luz adequada, rega equilibrada e nutrição adequada, para manter a planta saudável e resistente.<br><br>Ao cuidar da Neoregelia, monitore regularmente a planta em busca de sinais de pragas ou doenças e tome medidas imediatas caso ocorram problemas. A prevenção é sempre o melhor caminho, portanto, certifique-se de fornecer as condições ideais para o crescimento saudável da planta e realizar cuidados adequados para minimizar o risco de infestações e doenças.';
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

