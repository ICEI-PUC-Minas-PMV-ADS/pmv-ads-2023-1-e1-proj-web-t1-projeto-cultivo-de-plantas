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
    { name: 'Daniel', comment: 'Meus tomates estão amadurecendo e em breve terei uma colheita saborosa.' },
  { name: 'Laura@789', comment: 'As plantas de tomate são tão produtivas e fornecem frutos deliciosos.' },
  { name: 'Pedro', comment: 'O tomate é um dos meus vegetais favoritos para cultivar em minha horta.' },
  { name: 'Juliana', comment: 'Estou animada para usar os tomates frescos da minha planta em minhas receitas.' },
  { name: 'Gustavo', comment: 'Os tomates são versáteis e podem ser usados em saladas, molhos e muitas outras preparações.' }
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

    const plantName = 'Tomate'; // Nome da planta específica
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
  const plantName = 'Tomate'; // Nome da planta específica
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
    conteudo.innerHTML = 'A poda do tomate é uma prática comum entre os cultivadores para melhorar o crescimento, a saúde e a produtividade das plantas. A poda adequada ajuda a controlar o tamanho da planta, promover uma melhor circulação de ar e luz, remover partes danificadas ou doentes, e direcionar a energia da planta para o desenvolvimento dos frutos.<br><br>Existem dois principais métodos de poda para os tomateiros: poda de crescimento único e poda de crescimento múltiplo.<br><br>Na poda de crescimento único, também conhecida como "poda de cordão", todas as brotações laterais são removidas à medida que aparecem, permitindo que a planta desenvolva um único caule principal. Esse método é comumente usado em estufas, onde o espaço vertical é limitado. A poda de crescimento único facilita o manejo das plantas e a colheita dos frutos, além de concentrar a energia da planta no desenvolvimento dos frutos principais.<br><br>Já na poda de crescimento múltiplo, as brotações laterais não são removidas, permitindo que a planta se ramifique. Esse método é mais comum em cultivos de campo aberto, onde as plantas têm mais espaço para se espalhar. A poda de crescimento múltiplo pode resultar em uma planta mais volumosa, com uma maior produção de frutos, mas também requer um maior manejo para garantir que as plantas não fiquem excessivamente densas.<br><br>Independente do método de poda escolhido, algumas diretrizes gerais devem ser seguidas:<br><br>Remova os brotos laterais quando eles são pequenos, para evitar danos ao caule principal. Eles podem ser beliscados ou cortados com cuidado.Remova as folhas inferiores que tocam o solo, para evitar a propagação de doenças e o apodrecimento dos frutos.<br><br>Remova as folhas danificadas, amareladas ou murchas, pois podem indicar problemas de saúde da planta.<br><br>Use tesouras de poda limpas e afiadas para evitar a propagação de doenças entre as plantas.<br><br>Monitore regularmente a planta durante o crescimento para identificar novos brotos ou ramos indesejados que precisam ser podados.<br><br>É importante ressaltar que a poda excessiva ou inadequada pode prejudicar o crescimento e a produção do tomateiro. Portanto, é recomendado adquirir conhecimento específico sobre o tipo de tomate que está sendo cultivado e seguir as práticas de poda adequadas para cada variedade.<br><br>A poda do tomate é uma técnica que pode beneficiar o desenvolvimento das plantas e a colheita dos frutos, mas requer cuidado e atenção para garantir que seja feita corretamente, levando em consideração as características da variedade e as condições de cultivo.'
  }
  
function solo() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'SOLO';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'O solo é um componente fundamental para o cultivo saudável do tomate. Ele fornece suporte físico para as raízes, bem como nutrientes e água essenciais para o crescimento das plantas. Aqui estão algumas informações sobre o solo adequado para o cultivo do tomate:<br><br>Textura do solo: O solo ideal para o tomate deve ter uma textura média, ou seja, uma mistura equilibrada de partículas de areia, silte e argila. Isso permite uma boa drenagem, mas também retém a quantidade adequada de umidade e nutrientes. Solos arenosos tendem a drenar rapidamente, enquanto solos argilosos podem ficar encharcados.<br><br>pH do solo: O pH do solo afeta a disponibilidade de nutrientes para as plantas. O tomate geralmente prefere solos levemente ácidos, com um pH entre 6 e 6,8. É importante fazer testes regulares do pH do solo e, se necessário, realizar a calagem para ajustar o pH. A calagem é a aplicação de calcário para elevar o pH do solo ácido.<br><br>Drenagem: O tomate não tolera solos encharcados, pois isso pode levar ao apodrecimento das raízes. Portanto, certifique-se de que o solo tenha uma boa drenagem para evitar o acúmulo excessivo de água. Se o solo for muito argiloso e retentivo, pode ser necessário melhorar a drenagem adicionando matéria orgânica, como composto ou turfa.<br><br>Fertilidade: O solo para o tomate deve ser rico em nutrientes para sustentar o crescimento saudável das plantas. Além de adubar o solo antes do plantio, é recomendado realizar adubações de cobertura ao longo do ciclo de crescimento das plantas. O uso de fertilizantes orgânicos, como esterco bem decomposto ou compostos, é uma opção sustentável para melhorar a fertilidade do solo.<br><br>Matéria orgânica: A adição de matéria orgânica, como composto, esterco ou restos de plantas decompostas, é altamente benéfica para melhorar a estrutura e a fertilidade do solo. A matéria orgânica aumenta a capacidade de retenção de água, melhora a aeração e fornece nutrientes gradualmente às plantas.<br><br>Rotação de culturas: A prática de rotação de culturas é recomendada para o cultivo do tomate. Evite plantar tomates repetidamente no mesmo local a cada ano, pois isso pode esgotar os nutrientes específicos exigidos pelas plantas. A rotação de culturas ajuda a controlar doenças e pragas e melhora a saúde geral do solo.<br><br>É importante fazer análises regulares do solo para avaliar sua fertilidade, pH e conteúdo de nutrientes. Essas análises podem ajudar a determinar as necessidades específicas do solo e auxiliar na escolha dos adubos e corretivos adequados.'
  }
function adubagem() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'ADUBAGEM';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'A adubação adequada é essencial para o crescimento saudável e a produção abundante de tomates. Os nutrientes fornecidos pelo adubo ajudam a suprir as necessidades da planta, promovendo o desenvolvimento de raízes fortes, folhagem exuberante e frutos de qualidade. Aqui estão algumas informações sobre a adubação do tomate:<br><br>Preparação do solo: Antes do plantio, é recomendado preparar o solo adicionando matéria orgânica, como composto ou esterco bem decomposto. Isso ajudará a melhorar a estrutura do solo, a retenção de água e a disponibilidade de nutrientes.<br><br>Macronutrientes essenciais: Os principais macronutrientes necessários para o crescimento do tomate são o nitrogênio (N), o fósforo (P) e o potássio (K). O nitrogênio promove o crescimento vegetativo, o fósforo estimula o enraizamento e o desenvolvimento dos frutos, e o potássio fortalece a resistência da planta a doenças e estresses. A proporção ideal de NPK para o tomate geralmente é de cerca de 5-10-10 ou 10-10-10.<br><br>Fertilizantes de liberação lenta: Utilizar fertilizantes de liberação lenta pode ser uma opção eficiente para fornecer nutrientes gradualmente ao longo do tempo. Isso reduz a necessidade de adubações frequentes e minimiza o risco de superadubação. Siga as instruções do fabricante para a aplicação correta.<br><br>Adubação foliar: Além da adubação do solo, a adubação foliar pode ser utilizada como complemento para fornecer nutrientes adicionais diretamente às folhas. Isso pode ser feito com a pulverização de fertilizantes foliares específicos, seguindo as instruções de diluição recomendadas.<br><br>Calagem: Antes do plantio, é importante verificar o pH do solo. O tomate geralmente cresce melhor em solos ligeiramente ácidos, com um pH entre 6 e 6,8. Se o pH estiver abaixo desse intervalo, a calagem pode ser realizada para elevar o pH do solo.<br><br>Adubação de cobertura: Durante o crescimento do tomateiro, é benéfico fazer adubações de cobertura ao longo do tempo para fornecer nutrientes adicionais à planta. Isso pode ser feito usando fertilizantes granulados ou orgânicos, seguindo as instruções de dosagem recomendadas.<br><br>É importante observar que a adubação do tomate deve ser feita com moderação, evitando o excesso de nutrientes, o que pode causar problemas de crescimento e até mesmo a queima das raízes. Siga as instruções do fabricante ou consulte um especialista em jardinagem ou agronomia para determinar a quantidade adequada de adubo a ser aplicada, levando em consideração as características do solo e a variedade de tomate que está sendo cultivada.';
  }
  
function plant() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'Tomate';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'O tomate, cientificamente conhecido como Solanum lycopersicum, é uma planta da família Solanaceae e é amplamente cultivado em todo o mundo por seus frutos suculentos e saborosos. Originário da América do Sul, o tomate é um dos alimentos mais populares e versáteis na culinária global.<br><br>A planta do tomate é uma erva perene de crescimento anual. Ela possui um caule ramificado e ereto, que pode crescer até 1,5 metros de altura. Suas folhas são verdes, ligeiramente peludas e possuem bordas serrilhadas. As flores do tomate são pequenas, amarelas e surgem em cachos.<br><br>Os frutos do tomate são bagas comestíveis e variam em tamanho, forma e cor, dependendo da variedade cultivada. Existem tomates redondos, alongados, em forma de pêra e até mesmo os chamados tomates cereja, que são menores e de formato oval. Quanto à cor, encontramos tomates vermelhos, amarelos, alaranjados, verdes e até mesmo roxos. Cada variedade tem características de sabor e textura únicas.<br><br>O cultivo do tomate pode ser realizado tanto em campos abertos como em estufas. Ele requer uma boa quantidade de luz solar, temperaturas quentes e um solo bem drenado e fértil. As plantas de tomate também precisam de uma quantidade adequada de água para um crescimento saudável.<br><br>Uma das particularidades do tomate é que ele é autopolinizador, o que significa que as flores podem se fertilizar por conta própria, sem a necessidade de polinizadores externos. Isso facilita o seu cultivo, mas também requer que haja espaço suficiente entre as plantas para evitar a competição por recursos.<br><br>O tomate é uma fonte rica de nutrientes essenciais para a saúde humana. É uma excelente fonte de vitamina C, vitamina A, vitamina K, potássio e licopeno, um antioxidante que tem sido associado a benefícios para a saúde cardiovascular. Além disso, o tomate é baixo em calorias e possui propriedades hidratantes.<br><br>Na culinária, o tomate é utilizado de diversas maneiras. Pode ser consumido cru em saladas, sanduíches e como ingrediente principal em molhos e sucos. Também é usado para fazer ketchup, purês, sopas, molhos para massas e uma variedade de pratos em diferentes cozinhas ao redor do mundo.<br><br>Em resumo, o tomate é uma planta versátil e nutritiva que desfruta de grande popularidade em todo o mundo. Seu cultivo é relativamente fácil e seus frutos são uma adição saborosa e saudável para uma variedade de pratos. Seja na culinária, na agricultura ou na nutrição, o tomate ocupa um lugar de destaque.';
  }
function pragas() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'PRAGAS E DOENÇAS';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'O tomate está suscetível a diversas pragas e doenças que podem afetar seu crescimento e produção. É importante estar atento a esses problemas e tomar medidas preventivas e de controle adequadas. Aqui estão algumas das pragas e doenças mais comuns do tomate:<br><br>Pragas:<br><br>Pulgões: Pequenos insetos que se alimentam da seiva das plantas, causando deformação das folhas, crescimento retardado e disseminação de doenças virais.<br><br>Lagartas: Incluindo a lagarta-do-cartucho e a lagarta-militar, podem causar danos nas folhas e nos frutos, além de perfurar caules.<br><br>Trips: Insetos minúsculos que se alimentam das folhas e flores, causando prateamento e deformação das folhas.<br><br>Ácaros: Como os ácaros rajados e os ácaros brancos, podem causar descoloração das folhas e formação de teias finas nas plantas.<br><br>Lesmas e caracóis: Podem danificar as folhas e frutos, deixando rastros de muco e causando danos estéticos.<br><br>Doenças:<br><br>Míldio: Causado pelo fungo Phytophthora infestans, provoca manchas irregulares nas folhas, lesões nos frutos e pode levar ao apodrecimento.<br><br>Fusariose: Causada pelos fungos do gênero Fusarium, provoca murcha, amarelecimento das folhas e apodrecimento das raízes.<br><br>Murcha bacteriana: Causada pela bactéria Ralstonia solanacearum, provoca murcha rápida, amarelecimento das folhas e morte da planta.<br><br>Pinta-preta: Causada pelo fungo Alternaria solani, provoca manchas necróticas nas folhas, caules e frutos.<br><br>Vírus do mosaico: Vírus transmitidos por pulgões ou contato direto, causam deformação das folhas, mosaico e diminuição da produção.<br><br>Medidas de controle e prevenção:<br><br>Rotação de culturas: Evite plantar tomates consecutivamente no mesmo local para reduzir o acúmulo de pragas e doenças no solo.<br><br>Higiene: Mantenha o jardim limpo, removendo restos de plantas e ervas daninhas, que podem servir de abrigo para pragas e doenças.<br><br>Plantio de variedades resistentes: Opte por variedades de tomate que sejam mais resistentes a doenças específicas, quando disponíveis.<br><br>Controle biológico: Utilize predadores naturais, como joaninhas e crisopídeos, para controlar pragas como pulgões.<br><br>Uso de barreiras físicas: Utilize tela ou cobertura flutuante para impedir o acesso de pragas como trips e moscas-brancas.<br><br>Tratamentos químicos: Em casos de infestações graves, podem ser necessários tratamentos com inseticidas ou fungicidas. Certifique-se de seguir as instruções de dosagem e segurança.';
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



  