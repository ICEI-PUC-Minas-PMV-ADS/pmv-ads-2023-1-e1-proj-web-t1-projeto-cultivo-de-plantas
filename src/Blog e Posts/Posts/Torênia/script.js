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
    { name: 'Lucas', comment: 'Minha torenia está florescendo com lindas cores, trazendo alegria ao meu jardim.' },
  { name: 'Carolina@123', comment: 'As flores da minha torenia são tão delicadas e encantadoras.' },
  { name: 'Mariana', comment: 'A torenia é uma planta encantadora que adiciona um toque vibrante ao meu canteiro de flores.' },
  { name: 'Rafael', comment: 'Estou cultivando torenias em vasos suspensos e criando um belo visual em meu terraço.' },
  { name: 'Isabela', comment: 'As torenias são ótimas opções para jardins de sombra, pois elas adoram ambientes mais frescos.' }
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

    const plantName = 'Torenia'; // Nome da planta específica
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
  const plantName = 'Torenia'; // Nome da planta específica
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
    conteudo.innerHTML = 'A Torênia é uma planta de crescimento compacto e ramificado, que geralmente não requer poda intensiva. No entanto, algumas medidas de poda podem ser úteis para promover um crescimento mais saudável e estimular uma floração abundante. Aqui estão algumas dicas sobre a poda da Torênia:<br><br>Remoção de flores murchas: À medida que as flores da Torênia vão murchando, é recomendado removê-las. Isso ajuda a canalizar a energia da planta para a produção de novas flores em vez de desperdiçá-la na formação de sementes. Além disso, a remoção das flores murchas melhora a aparência geral da planta.<br><br>Poda de limpeza: A poda de limpeza envolve a remoção de qualquer folhagem ou ramos mortos, danificados ou doentes. Isso ajuda a prevenir o surgimento de pragas e doenças e mantém a planta saudável. Utilize uma tesoura de poda limpa e afiada para evitar ferimentos desnecessários na planta.<br><br>Poda de rejuvenescimento: Se a Torênia começar a ficar desgastada ou com crescimento desordenado, uma poda de rejuvenescimento pode ser realizada. Isso envolve aparar a planta em até dois terços de sua altura original, o que estimulará o crescimento de novos brotos e renovará a planta. A poda de rejuvenescimento é melhor feita na primavera ou no início do verão.<br><br>Poda de contenção: Se a Torênia estiver se espalhando muito além de seu espaço designado, uma poda de contenção pode ser necessária. Nesse caso, apare os ramos mais longos ou aqueles que se estendem para áreas indesejadas. Isso ajuda a controlar o tamanho e a forma da planta.<br><br>É importante lembrar que a Torênia tende a ter uma estrutura compacta e ramificada naturalmente, portanto, evite podas excessivas que possam prejudicar o formato e a aparência natural da planta. A poda deve ser feita com moderação, visando principalmente a remoção de partes indesejadas ou danificadas.<br><br>Após a poda, é recomendado regar bem a planta para ajudar na recuperação e no estímulo do crescimento saudável. Fornecer um fertilizante balanceado após a poda também pode ser benéfico para promover a floração contínua e a saúde geral da Torênia.'
  }
  
function solo() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'SOLO';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'A Torênia é uma planta versátil e adaptável quando se trata de solo. Ela pode crescer bem em uma variedade de tipos de solo, desde que algumas condições sejam atendidas para garantir um bom crescimento e desenvolvimento saudável. Aqui estão algumas informações sobre o solo adequado para a Torênia:<br><br>Drenagem: A Torênia prefere um solo bem drenado para evitar o acúmulo excessivo de água ao redor das raízes. O solo que retém água em excesso pode levar ao apodrecimento das raízes e causar problemas de saúde na planta. Certifique-se de que o solo tenha uma boa drenagem para permitir que o excesso de água se escoe adequadamente.<br><br>Textura: A textura do solo ideal para a Torênia é uma mistura equilibrada de partículas de areia, silte e argila. Isso proporciona uma boa aeração e drenagem, além de permitir que as raízes se espalhem facilmente pelo solo. Solos arenosos são adequados, pois permitem uma drenagem rápida, mas podem precisar de mais irrigação. Solos argilosos podem ser melhorados adicionando matéria orgânica para aumentar a drenagem.<br><br>pH do solo: O pH do solo é um fator importante para o crescimento saudável da Torênia. Ela prefere um pH levemente ácido a neutro, geralmente na faixa de 6,0 a 7,0. Faça um teste de pH no solo antes do plantio para verificar se está dentro da faixa adequada. Caso o pH esteja muito ácido, é possível elevar o pH adicionando calagem ao solo.<br><br>Fertilidade: A Torênia cresce melhor em solos férteis, ricos em matéria orgânica e nutrientes. Antes do plantio, é recomendado adicionar composto orgânico ou adubo bem decomposto ao solo para fornecer nutrientes essenciais. A matéria orgânica também ajuda a reter a umidade e melhorar a estrutura do solo.<br><br>Umidade: Embora a Torênia não tolere solos encharcados, ela precisa de um suprimento adequado de água para um bom crescimento. Mantenha o solo levemente úmido, evitando tanto a falta quanto o excesso de água. Verifique regularmente a umidade do solo e regue quando necessário.<br><br>Cobertura morta: A aplicação de cobertura morta ao redor das plantas de Torênia pode ser benéfica. A cobertura morta ajuda a conservar a umidade do solo, reduz a evaporação e inibe o crescimento de ervas daninhas, proporcionando um ambiente favorável para o crescimento saudável das plantas.<br><br>Lembre-se de que a qualidade do solo pode variar dependendo da localização geográfica e das condições climáticas. É sempre útil fazer uma análise do solo para obter informações específicas sobre as características do solo em sua região e, assim, fazer ajustes adequados.'
  }
function adubagem() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'ADUBAGEM';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'A adubação adequada é essencial para promover o crescimento saudável e a floração exuberante da Torênia. Aqui estão algumas orientações sobre a adubação dessa planta:<br><br>Fertilizante balanceado: A Torênia responde bem à aplicação de um fertilizante balanceado, com uma proporção equilibrada de nutrientes, como nitrogênio (N), fósforo (P) e potássio (K). Um fertilizante com a formulação NPK de 10-10-10 ou similar é uma opção adequada para a Torênia.<br><br>Frequência de adubação: A Torênia se beneficia de adubações regulares durante a estação de crescimento ativo. Geralmente, é recomendado adubar a planta a cada 4-6 semanas. No entanto, é importante seguir as instruções específicas do fabricante do fertilizante para determinar a frequência e a quantidade corretas de aplicação.<br><br>Aplicação do fertilizante: Antes de aplicar o fertilizante, umedeça o solo ao redor da planta para evitar o risco de queimaduras nas raízes. Espalhe o fertilizante uniformemente ao redor da base da planta, seguindo as instruções do fabricante quanto à quantidade a ser aplicada. Em seguida, regue bem para permitir que o fertilizante seja absorvido pelas raízes.<br><br>Fertilizante de liberação lenta: Se preferir uma opção de adubação mais conveniente, você pode optar por fertilizantes de liberação lenta. Esses fertilizantes liberam gradualmente os nutrientes ao longo de um período prolongado, reduzindo a necessidade de aplicações frequentes. Siga as instruções do fabricante quanto à dosagem e duração da liberação do fertilizante.<br><br>Adubação orgânica: Se preferir uma abordagem mais orgânica, você pode usar adubos compostos ou materiais orgânicos, como húmus de minhoca, esterco bem decomposto ou farinha de osso. Esses materiais fornecem nutrientes essenciais de forma lenta e gradual, enriquecendo o solo ao longo do tempo.<br><br>É importante evitar a superadubação, pois o excesso de nutrientes pode causar danos às plantas. Siga as instruções do fabricante ou as recomendações específicas para a Torênia ao aplicar fertilizantes.<br><br>Além da adubação, lembre-se de regar adequadamente a planta para ajudar a distribuir os nutrientes no solo e evitar problemas de acúmulo excessivo de fertilizantes. Monitore a resposta da planta à adubação e faça ajustes conforme necessário.';
  }
  
function plant() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'Torênia';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'A Torênia, também conhecida como "Flor da Sorte" ou "Clown Flower", é uma planta encantadora e popular entre os jardineiros devido à sua beleza e facilidade de cultivo. Originária das regiões tropicais da Ásia e da África, a Torênia pertence à família Linderniaceae.<br><br>Essa planta anual ou perene apresenta folhagem densa e flores vibrantes que atraem a atenção devido às suas cores vibrantes e delicadas. As flores da Torênia podem ser encontradas em uma ampla gama de tons, incluindo azul, roxo, rosa, amarelo e branco. Muitas vezes, as pétalas possuem uma marcação mais escura no centro, conferindo um charme adicional à planta.<br><br>A Torênia é uma excelente escolha para jardins e vasos, pois suas flores em forma de trombeta proporcionam um belo destaque. Além disso, ela tem um hábito de crescimento compacto e ramificado, o que a torna adequada para fronteiras, bordas e canteiros.<br><br>A planta tolera uma variedade de condições de crescimento, preferindo locais com sombra parcial ou luz filtrada. Em climas mais quentes, é importante protegê-la do sol direto durante as horas mais quentes do dia. Quanto ao solo, a Torênia se adapta a diferentes tipos, mas prefere um solo úmido, rico em matéria orgânica e bem drenado.<br><br>A rega adequada é fundamental para o sucesso no cultivo da Torênia. Mantenha o solo úmido, mas evite o encharcamento, pois o excesso de umidade pode levar ao apodrecimento das raízes. A aplicação de cobertura morta ao redor das plantas ajuda a reter a umidade e a manter as raízes frescas.<br><br>Em termos de propagação, a Torênia pode ser cultivada a partir de sementes ou mudas. A semeadura direta ou o transplante de mudas podem ser realizados na primavera ou no início do verão, dependendo do clima e das condições locais.<br><br>Uma característica interessante da Torênia é sua capacidade de atrair polinizadores, como abelhas e borboletas, que contribuem para a polinização e o equilíbrio ecológico do jardim.<br><br>Em relação aos cuidados gerais, a Torênia responde bem à adubação regular com fertilizante balanceado, aplicado de acordo com as instruções do fabricante. Remova as flores murchas para incentivar uma floração contínua e remova quaisquer folhas ou ramos danificados para manter a planta saudável.<br><br>Em resumo, a Torênia é uma planta encantadora, com flores vibrantes e atraentes. Sua adaptabilidade, facilidade de cultivo e capacidade de atrair polinizadores a tornam uma adição valiosa a qualquer jardim ou vaso. Desfrute da beleza e do encanto dessa planta encantadora, que certamente trará um toque especial ao seu espaço verde.';
  }
function pragas() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'PRAGAS E DOENÇAS';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'A Torênia é geralmente uma planta resistente a pragas e doenças, mas ocasionalmente pode enfrentar alguns problemas. Aqui estão algumas pragas e doenças comuns que podem afetar a Torênia e algumas medidas de controle que você pode tomar:<br><br>Pulgões: Pulgões são pequenos insetos que se alimentam da seiva das plantas. Eles podem causar o amarelecimento e murcha das folhas da Torênia. Use água com sabão ou um inseticida específico para pulgões para controlar a infestação.<br><br>Tripes: Tripes são insetos minúsculos que podem causar descoloração das folhas e deformação das flores da Torênia. Use um inseticida específico para tripes e certifique-se de remover e descartar quaisquer plantas infestadas.<br><br>Lesmas e caracóis: Essas criaturas podem se alimentar das folhas e flores da Torênia, deixando rastros de muco e causando danos estéticos. Controle essas pragas manualmente ou use iscas de lesmas para reduzir sua população.<br><br>Manchas foliares: Algumas doenças fúngicas, como mancha de Alternaria, podem causar manchas escuras ou necrose nas folhas da Torênia. Remova as folhas afetadas e aplique um fungicida adequado para controle.<br><br>Míldio: O míldio pode afetar a Torênia, causando manchas amareladas nas folhas, caules e flores. Mantenha a planta bem ventilada e evite regar por cima da folhagem para reduzir a umidade e prevenir a infecção por míldio. Se necessário, utilize um fungicida específico.<br><br>Vírus: Alguns vírus, como o vírus do mosaico, podem afetar a Torênia, causando deformação das folhas e diminuição da floração. Infelizmente, não há cura para os vírus. Se você notar plantas afetadas, remova-as imediatamente para evitar a propagação para outras plantas.<br><br>Além das medidas de controle mencionadas acima, é importante manter a Torênia saudável por meio de boas práticas culturais. Isso inclui evitar o estresse hídrico excessivo ou insuficiente, fornecer uma boa circulação de ar, evitar o superlotamento de plantas e garantir uma adubação adequada para promover um crescimento vigoroso.<br><br>Fique atento a qualquer sinal de infestação ou doença e tome medidas de controle assim que identificar o problema. Uma inspeção regular e cuidados adequados ajudarão a manter suas plantas de Torênia bonitas e saudáveis, proporcionando um belo display de flores durante a estação de crescimento.';
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

  