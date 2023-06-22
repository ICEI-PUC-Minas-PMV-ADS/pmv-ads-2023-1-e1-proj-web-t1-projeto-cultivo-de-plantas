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
    { name: 'Luana', comment: 'Minha hortênsia está repleta de flores coloridas.' },
  { name: 'Felipe', comment: 'As hortênsias são perfeitas para enfeitar meu jardim.' },
  { name: 'Isabela#1', comment: 'Adoro a delicadeza das flores da hortênsia.' },
  { name: 'Carlos', comment: 'Estou cuidando bem da minha hortênsia para garantir um bom desenvolvimento.' },
  { name: 'Laura456', comment: 'As hortênsias são uma excelente opção para arranjos florais.' }
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

    const plantName = 'Hortencia'; // Nome da planta específica
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
  const plantName = 'Hortencia'; // Nome da planta específica
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
  conteudo.innerHTML = 'A poda da hortênsia é uma prática importante para manter a saúde, a forma e a vitalidade da planta. A poda adequada ajuda a promover um crescimento robusto, a controlar o tamanho da planta e a estimular a floração.<br><br>O momento ideal para realizar a poda da hortênsia varia dependendo da espécie específica e do clima da região. No entanto, em geral, é recomendado fazer a poda no final do inverno ou início da primavera, antes que os novos brotos comecem a surgir. Isso permite que a planta tenha tempo suficiente para se recuperar e florescer durante a estação de crescimento.<br><br>Existem diferentes técnicas de poda que podem ser aplicadas à hortênsia, dependendo do tipo de planta e de seus objetivos de crescimento. Aqui estão algumas diretrizes básicas:<br><br>Remova os galhos mortos ou danificados: Comece cortando cuidadosamente os galhos que estejam secos, doentes ou danificados. Isso ajuda a promover a saúde geral da planta, eliminando partes que possam estar afetadas por pragas ou doenças.<br><br>Corte os galhos antigos: Algumas espécies de hortênsia produzem flores nas extremidades dos galhos do ano anterior. Portanto, você pode cortar os galhos mais antigos, reduzindo-os pela metade ou até mesmo removendo-os completamente. Isso estimulará o crescimento de novos galhos e incentivará a floração.<br><br>Controle o tamanho da planta: Se você deseja manter a hortênsia em um tamanho específico, pode realizar uma poda de renovação mais drástica. Corte os galhos até o nível desejado, levando em consideração a forma natural da planta. No entanto, tenha em mente que essa poda mais severa pode resultar em uma floração limitada no próximo ano, pois a planta precisará se recuperar.<br><br>Remova as flores murchas: Durante a estação de crescimento, é recomendado remover as flores murchas para direcionar a energia da planta para o desenvolvimento de novos brotos e flores. Corte as flores logo abaixo da base, tomando cuidado para não danificar os brotos adjacentes.<br><br>É importante lembrar que algumas espécies de hortênsia florescem em galhos do ano anterior, enquanto outras florescem nos novos brotos que se desenvolvem na mesma estação. Portanto, é essencial conhecer o tipo específico de hortênsia que você possui para realizar a poda corretamente.<br><br>Ao realizar a poda, certifique-se de utilizar ferramentas de corte limpas e afiadas para evitar danos desnecessários à planta. Observe também que a hortênsia é uma planta resistente, mas sensível, portanto, evite podas excessivas, pois isso pode impactar negativamente sua floração.'
}

function solo() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'SOLO';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'O solo é um elemento fundamental para o crescimento saudável e o desenvolvimento das hortênsias. Essas plantas têm preferências específicas em relação ao tipo de solo, pH e drenagem adequados. Aqui estão algumas informações importantes sobre o solo ideal para as hortênsias:<br><br>Drenagem: A drenagem adequada é essencial para evitar o acúmulo excessivo de água ao redor das raízes da planta. O solo deve ser bem drenado para permitir que a água escoe facilmente, evitando o encharcamento das raízes. Hortênsias não toleram solos encharcados, pois isso pode levar ao apodrecimento das raízes e ao desenvolvimento de doenças. Certifique-se de que o solo não fique constantemente úmido após períodos de chuva ou rega.<br><br>Textura: Hortênsias preferem solos ricos em matéria orgânica, soltos e bem aerados. Uma mistura de solo leve e fértil, com boa capacidade de retenção de umidade, é ideal para o crescimento saudável das hortênsias. Solos argilosos pesados podem dificultar a drenagem, enquanto solos arenosos podem secar rapidamente. Adicionar matéria orgânica, como composto ou húmus de minhoca, ao solo antes do plantio pode ajudar a melhorar sua textura e nutrição.<br><br>pH do solo: O pH do solo desempenha um papel importante na cor das flores das hortênsias. Para obter flores azuis, o solo deve ser ácido, com um pH entre 5,0 e 5,5. Para flores rosas, o solo deve ser mais alcalino, com um pH entre 6,0 e 6,2. O pH do solo afeta a disponibilidade de alumínio, que influencia a cor das flores. É possível ajustar o pH do solo aplicando corretivos específicos, como sulfato de alumínio para torná-lo mais ácido ou calcário para torná-lo mais alcalino.<br><br>Nutrientes: As hortênsias se beneficiam de um solo rico em nutrientes. Além da matéria orgânica, é importante fornecer às plantas os nutrientes necessários para um crescimento saudável. Fertilizantes específicos para hortênsias, com uma formulação balanceada de nutrientes, podem ser aplicados regularmente durante a estação de crescimento, seguindo as instruções do fabricante. É importante evitar o excesso de fertilização, pois isso pode levar a um crescimento excessivo de folhas em detrimento da floração.<br><br>Antes de plantar hortênsias, é recomendável fazer uma análise do solo para verificar suas características e necessidades específicas. Isso pode ser feito por meio de kits de teste de solo disponíveis em centros de jardinagem ou por meio de laboratórios especializados. Com base nos resultados, ajustes podem ser feitos para garantir que o solo forneça as condições ideais para o crescimento saudável das hortênsias.'
}
function adubagem() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'ADUBAGEM';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A adubação adequada é fundamental para garantir o crescimento saudável e a floração exuberante das hortênsias. A escolha dos fertilizantes e a frequência de aplicação podem variar de acordo com as necessidades específicas da planta e as características do solo. Aqui estão algumas dicas gerais para a adubação das hortênsias:<br><br>Fertilizantes balanceados: Opte por fertilizantes de liberação lenta ou granulados, com uma formulação balanceada, como 10-10-10 ou 14-14-14. Esses fertilizantes fornecem uma quantidade equilibrada de nutrientes essenciais, como nitrogênio (N), fósforo (P) e potássio (K), que promovem o crescimento saudável e a floração das hortênsias.<br><br>Época de adubação: A adubação pode ser realizada na primavera e no início do verão, quando as hortênsias estão em pleno crescimento. Evite adubar no final do verão ou no outono, pois isso pode estimular o crescimento excessivo de brotos que podem ser danificados pelo frio do inverno.<br><br>Quantidade de fertilizante: Siga as instruções do fabricante para determinar a quantidade adequada de fertilizante a ser aplicada. Geralmente, recomenda-se aplicar cerca de 30 a 60 gramas de fertilizante por planta, espalhando-o uniformemente ao redor da área da raiz.<br><br>Aplicação correta: Ao aplicar o fertilizante, espalhe-o uniformemente ao redor da base da planta, evitando colocá-lo diretamente em contato com os caules ou folhas. Em seguida, incorpore-o levemente no solo e regue bem para permitir que os nutrientes sejam absorvidos pelas raízes.<br><br>Adubação orgânica: Além dos fertilizantes químicos, você também pode optar por adubos orgânicos, como composto orgânico ou esterco bem curtido. Esses adubos fornecem nutrientes de forma gradual e melhoram a estrutura do solo, promovendo a atividade microbiana benéfica.<br><br>Monitoramento das plantas: Observe as hortênsias regularmente para identificar sinais de deficiência de nutrientes, como folhas amareladas ou crescimento lento. Se necessário, você pode fazer adubações adicionais ao longo da estação de crescimento, seguindo as recomendações de dosagem do fertilizante escolhido.<br><br>Lembre-se de que a adubação em excesso pode ser prejudicial às hortênsias, causando queima das raízes ou crescimento excessivo de folhagem em detrimento da floração. Portanto, é importante seguir as instruções de dosagem e evitar adubar em períodos inapropriados.';
}

function plant() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'Hortência';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A hortênsia, cientificamente conhecida como Hydrangea, é uma planta encantadora que atrai a atenção com suas flores deslumbrantes e cores vibrantes. Originária principalmente da Ásia e das Américas, a hortênsia é amplamente cultivada em jardins e é uma favorita entre os entusiastas da jardinagem devido à sua beleza e versatilidade.<br><br>Uma das características mais distintas da hortênsia são suas flores volumosas, que se agrupam em inflorescências globulares ou em forma de cone. Essas flores podem apresentar uma variedade de cores, incluindo tons de rosa, azul, branco, roxo e até mesmo verde. A coloração das flores muitas vezes depende da acidez do solo em que a planta é cultivada. Solos ácidos tendem a produzir flores azuis, enquanto solos alcalinos resultam em flores rosa. Essa peculiaridade fascinante permite que os jardineiros brinquem com a tonalidade das flores, alterando o pH do solo.<br><br>Além de sua aparência encantadora, a hortênsia também possui um aroma suave e agradável, que contribui para a atmosfera relaxante e convidativa dos jardins. Ela floresce durante a primavera e o verão, proporcionando um espetáculo de cores e perfumes que encanta a todos que a contemplam.<br><br>A hortênsia é uma planta de crescimento relativamente fácil e pode se adaptar a diferentes condições climáticas e tipos de solo. Ela geralmente prefere áreas de sombra parcial ou sol suave, evitando a exposição direta ao sol intenso. Além disso, o solo deve ser bem drenado e rico em matéria orgânica para garantir o crescimento saudável da planta. Regar regularmente, sem encharcar o solo, também é importante para manter a hortênsia hidratada.';
}
function pragas() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'PRAGAS E DOENÇAS';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'As hortênsias são geralmente plantas resistentes, mas como qualquer outra planta, elas estão sujeitas a pragas e doenças. Aqui estão algumas das pragas e doenças mais comuns que podem afetar as hortênsias:<br><br>Pulgões: Os pulgões são pequenos insetos que se alimentam da seiva das plantas. Eles podem causar danos às hortênsias, causando o enrolamento e amarelecimento das folhas, além de transmitirem doenças virais. O controle de pulgões pode ser realizado através da pulverização de inseticidas específicos ou por meio de medidas naturais, como a aplicação de água com sabão ou a introdução de predadores naturais, como joaninhas.<br><br>Cochonilhas: As cochonilhas são insetos pequenos e com aparência de escamas que se fixam nos caules e folhas das plantas. Elas se alimentam da seiva da planta e podem causar danos significativos. O controle de cochonilhas pode ser feito com a remoção manual dos insetos, utilizando uma escova ou jato de água. Além disso, é possível utilizar óleos hortícolas ou inseticidas específicos para controlar a infestação.<br><br>Ácaros: Os ácaros são pragas microscópicas que se alimentam das células das folhas, deixando-as com um aspecto manchado ou prateado. Eles também podem causar a formação de teias finas nas folhas e ramos. O controle de ácaros pode ser feito através da aplicação de óleos hortícolas ou inseticidas acaricidas específicos.<br><br>Oídio: O oídio é uma doença fúngica comum em hortênsias, caracterizada pelo aparecimento de uma camada de pó branco nas folhas, caules e flores. O clima úmido e a falta de ventilação favorecem o desenvolvimento do oídio. O controle do oídio pode ser realizado através da aplicação de fungicidas específicos, bem como da remoção e destruição das partes afetadas da planta.<br><br>Podridão das raízes: A podridão das raízes é uma doença causada por fungos que atacam o sistema radicular da planta, resultando em amarelecimento das folhas, murcha e morte da planta. Essa doença está frequentemente relacionada a solos mal drenados e excesso de umidade. Para prevenir a podridão das raízes, é importante garantir uma boa drenagem do solo e evitar o encharcamento.';
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
