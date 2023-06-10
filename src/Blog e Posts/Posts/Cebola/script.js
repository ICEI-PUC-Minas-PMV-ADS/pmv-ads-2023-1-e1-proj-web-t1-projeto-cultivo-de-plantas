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
  conteudo.innerHTML = 'A cebola, assim como muitas outras plantas bulbosas, não requer poda regular. No entanto, há algumas práticas relacionadas ao manejo das folhas que podem ser consideradas como "poda" para promover um crescimento saudável e maximizar a produção.<br><br>Uma das técnicas comumente utilizadas é chamada de "desbaste". Consiste em remover algumas folhas externas à medida que a planta cresce, o que permite uma melhor circulação de ar e luz para as folhas internas. O desbaste também ajuda a evitar o acúmulo excessivo de umidade, o que pode favorecer o desenvolvimento de doenças.<br><br>Outra prática relacionada à poda é a remoção das chamadas "flores de cebola" ou "brotos florais". Essas estruturas podem surgir quando a planta é exposta a condições de estresse, como temperaturas frias ou dias mais longos. A remoção dessas flores, que geralmente são formadas no topo da haste central, direciona a energia da planta para o crescimento do bulbo, em vez de desperdiçá-la na produção de sementes.<br><br>É importante mencionar que, ao realizar qualquer tipo de poda ou desbaste, é fundamental usar ferramentas de jardinagem limpas e afiadas para evitar danos desnecessários à planta. Além disso, é recomendável realizar essas práticas com cuidado para não prejudicar o bulbo em crescimento.<br><br>Após a colheita, quando as folhas externas começarem a secar e murchar, é possível fazer a poda completa da parte aérea da planta. Essa poda é realizada para facilitar o processo de cura e armazenamento dos bulbos. Nesse caso, as folhas são cortadas a poucos centímetros acima do topo do bulbo, deixando uma pequena porção da haste para ajudar na identificação da variedade durante o armazenamento.<br><br>Em resumo, a poda da cebola é principalmente direcionada ao desbaste de folhas e à remoção de flores e brotos florais. Essas práticas visam promover uma melhor circulação de ar, prevenir doenças e redirecionar a energia da planta para o crescimento do bulbo. É importante realizar a poda com cuidado e utilizar ferramentas adequadas para evitar danos à planta. Após a colheita, a poda completa das folhas é feita para facilitar o processo de cura e armazenamento dos bulbos.'
}

function solo() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'SOLO';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'O solo desempenha um papel crucial no cultivo saudável da cebola. Um solo adequado deve fornecer os nutrientes necessários, ter uma boa estrutura e drenagem, além de possuir o pH adequado para o desenvolvimento das raízes da planta. Aqui estão algumas informações sobre o solo ideal para o cultivo de cebolas:<br><br>Textura do solo: O solo ideal para o cultivo de cebolas deve possuir uma textura franca a argilosa. Uma textura franca é uma mistura equilibrada de partículas de areia, argila e silte, que proporciona uma boa drenagem, retenção de umidade e aeração adequada para as raízes da cebola. Solos muito arenosos tendem a drenar rapidamente, enquanto solos argilosos podem reter umidade excessiva, o que pode ser prejudicial para as raízes da planta.<br><br>Estrutura do solo: A estrutura do solo refere-se à organização das partículas e agregados do solo. Um solo com uma boa estrutura permite a penetração das raízes, o fluxo adequado de água e aeração. A adição de matéria orgânica, como composto ou esterco bem decomposto, pode ajudar a melhorar a estrutura do solo, aumentando sua capacidade de retenção de água, fornecendo nutrientes e promovendo a atividade biológica benéfica.<br><br> Drenagem: A cebola não tolera solos encharcados, pois o acúmulo de água pode levar ao apodrecimento das raízes. Portanto, um solo com boa drenagem é essencial para o cultivo saudável da cebola. Caso o solo tenha problemas de drenagem, pode ser necessário implementar medidas como o cultivo em canteiros elevados, a criação de canais de drenagem ou a incorporação de materiais que melhorem a drenagem, como areia grossa.<br><br>pH do solo: O pH do solo é um fator importante para a disponibilidade de nutrientes para as plantas. O pH ideal para o cultivo de cebolas varia de 5,5 a 6,5. Solos com pH fora dessa faixa podem afetar a absorção de nutrientes pela planta. Caso o pH do solo esteja desequilibrado, pode ser necessário fazer a correção através da adição de materiais alcalinos (como calcário) para elevar o pH ou materiais ácidos (como enxofre) para diminuí-lo.<br><br>Fertilidade do solo: O solo deve ser rico em nutrientes essenciais para o crescimento das cebolas. Antes do plantio, é recomendado realizar uma análise do solo para avaliar a disponibilidade de nutrientes. Com base nos resultados da análise, é possível fazer a adubação adequada para fornecer os nutrientes necessários à planta.<br><br>É importante ressaltar que as características do solo podem variar de uma região para outra, por isso é recomendado realizar análises e consultar especialistas locais para obter informações específicas sobre o solo da região de cultivo da cebola. '
}
function adubagem() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'ADUBAGEM';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A adubagem adequada é essencial para o cultivo saudável e produtivo da cebola. A escolha dos fertilizantes e a aplicação correta dos nutrientes são fundamentais para fornecer os elementos necessários ao crescimento e desenvolvimento das plantas. Aqui estão algumas informações sobre a adubagem da cebola:<br><br>Preparação do solo: Antes do plantio, é recomendado preparar o solo adicionando matéria orgânica, como composto ou esterco bem decomposto. Isso ajudará a melhorar a estrutura do solo, a retenção de umidade e a disponibilidade de nutrientes para as raízes da cebola.<br><br>Análise do solo: Realizar uma análise do solo é uma prática importante para determinar as deficiências de nutrientes específicas da área de cultivo. Com base nos resultados da análise, é possível ajustar a adubação para atender às necessidades da planta.<br><br>Fertilização de base: Antes do plantio, pode-se aplicar um fertilizante de base rico em nutrientes essenciais, como nitrogênio (N), fósforo (P) e potássio (K). A quantidade exata dependerá das recomendações da análise do solo e das características da região. Geralmente, uma proporção equilibrada de NPK, como 10-10-10, pode ser utilizada.<br><br>Adubação durante o crescimento: Durante o crescimento da cebola, é importante fornecer nutrientes adicionais para promover um desenvolvimento saudável e um bom rendimento. Isso pode ser feito por meio da aplicação de fertilizantes nitrogenados em cobertura. A frequência e a quantidade exata dependerão das necessidades específicas da planta e das condições do solo.<br><br>Fertilizantes orgânicos: Além dos fertilizantes químicos, a adubação orgânica também pode ser benéfica para o cultivo da cebola. A incorporação de compostos orgânicos, como esterco bem decomposto ou adubo verde, pode melhorar a fertilidade do solo, fornecer nutrientes gradualmente e promover a saúde do ecossistema do solo.<br><br>Irrigação adequada: Além da adubação, é importante garantir uma irrigação adequada para que as raízes da cebola possam absorver e utilizar eficientemente os nutrientes disponíveis no solo. O fornecimento regular de água, evitando tanto o excesso quanto a escassez, é fundamental para um bom crescimento das plantas.<br><br>Lembrando sempre que as recomendações específicas de adubação podem variar de acordo com a região, o tipo de solo, a variedade de cebola e outros fatores. É sempre recomendado buscar orientação local, como a assistência de agrônomos ou profissionais da área, para obter informações mais precisas e adaptadas às condições locais de cultivo.';
}

function plant() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'Cebola';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A cebola (Allium cepa) é um vegetal de sabor marcante e presença indispensável na culinária de diversas culturas ao redor do mundo. Originária da Ásia Central, a cebola é cultivada há milhares de anos e é apreciada tanto pelo seu sabor característico quanto pelos seus benefícios à saúde.<br><br>A cebola pertence à família das Liliáceas e é cultivada em uma ampla variedade de climas e regiões. Ela possui um bulbo composto por camadas sobrepostas, que armazena nutrientes e dá forma à planta. Dependendo da variedade, a cebola pode ter diferentes tamanhos, cores e níveis de intensidade de sabor. As variedades mais comuns incluem a cebola branca, amarela e roxa.<br><br>Cultivar cebolas requer cuidados específicos. A planta é geralmente cultivada a partir de sementes ou bulbos. O cultivo a partir de sementes requer o plantio das sementes em um substrato adequado e o transplante das mudas para o local definitivo após o desenvolvimento. Já o cultivo a partir de bulbos envolve o plantio direto dessas estruturas no solo, com a parte superior para fora.<br><br>A cebola prospera em solos bem drenados e ricos em matéria orgânica. Ela requer exposição solar direta por várias horas diárias para um crescimento saudável. Além disso, é importante fornecer água regularmente, especialmente durante os períodos de crescimento ativo. No entanto, é fundamental evitar o encharcamento do solo, pois o excesso de umidade pode levar ao apodrecimento das raízes.<br><br>Além do seu sabor característico, a cebola é valorizada por seus benefícios à saúde. Ela é rica em nutrientes essenciais, como vitaminas C e B6, folato, potássio e antioxidantes. Esses compostos ajudam a fortalecer o sistema imunológico, promover a saúde cardiovascular, regular a pressão arterial e combater os danos causados pelos radicais livres no organismo.<br><br>Na culinária, a cebola desempenha um papel fundamental como tempero e ingrediente base em uma variedade de pratos. Ela pode ser consumida crua em saladas, adicionada a sopas, ensopados, refogados e molhos, e também pode ser caramelizada para realçar seu sabor adocicado. A cebola confere profundidade e complexidade aos pratos, além de ser um componente essencial em muitas receitas tradicionais ao redor do mundo.<br><br>Embora a cebola seja geralmente uma planta resistente, ela pode ser suscetível a algumas pragas e doenças, como a mosca-da-cebola e fungos que causam podridão dos bulbos. Para prevenir e controlar esses problemas, é importante adotar medidas adequadas de manejo integrado de pragas e doenças, como rotação de culturas, monitoramento regular das plantas e aplicação de medidas preventivas, como pulverização de fungicidas quando necessário.';
}
function pragas() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'PRAGAS E DOENÇAS';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A cebola está sujeita a várias pragas e doenças que podem afetar seu crescimento e produtividade. É importante estar atento a esses problemas e adotar medidas preventivas e de controle adequadas. Aqui estão algumas das pragas e doenças comuns que afetam a cebola:<br><br>Mosca-da-cebola (Delia antiqua): A mosca-da-cebola é uma das pragas mais prejudiciais para a cultura da cebola. Suas larvas se alimentam das raízes e bulbos da planta, causando danos significativos. Para controlar essa praga, podem ser utilizadas armadilhas, rotação de culturas, cobertura do solo com mulching e aplicação de inseticidas específicos.<br><br>Tripes (Thrips tabaci): Os tripes são pequenos insetos que se alimentam das folhas da cebola, causando danos às plantas jovens. Eles também podem transmitir vírus que afetam a cultura. O controle pode ser feito por meio da aplicação de inseticidas específicos e práticas culturais como o manejo de plantas daninhas e a remoção de plantas infestadas.<br><br>Ferrugem da cebola (Puccinia allii): A ferrugem da cebola é uma doença fúngica que causa manchas amarelas ou alaranjadas nas folhas da planta. Ela pode se espalhar rapidamente em condições de alta umidade. Para o controle, é recomendado o uso de variedades resistentes, rotação de culturas, manejo adequado da irrigação e, se necessário, aplicação de fungicidas.<br><br>Míldio (Peronospora destructor): O míldio é outra doença fúngica comum que afeta a cebola. Ela causa manchas esbranquiçadas nas folhas e pode se espalhar para os bulbos, resultando em podridão. Para o controle do míldio, é importante realizar uma boa rotação de culturas, evitar o excesso de umidade nas folhas e utilizar fungicidas quando necessário.<br><br>Podridão do pescoço (Botrytis allii): A podridão do pescoço é uma doença que afeta principalmente as camadas externas do bulbo da cebola. Ela é causada por fungos que podem se proliferar em condições de alta umidade. Para prevenir a podridão do pescoço, é importante evitar o excesso de umidade no solo, realizar uma boa rotação de culturas e remover bulbos infectados.<br><br>Além dessas pragas e doenças, a cebola também pode ser suscetível a nematoides, fungos causadores de podridão dos bulbos, entre outros problemas. É essencial adotar práticas de manejo integrado de pragas e doenças, como monitoramento regular das plantas, rotação de culturas, boa drenagem do solo, eliminação de plantas infectadas e, se necessário, uso de produtos químicos adequados e seguros sob orientação de especialistas.';
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



//Função nome
function funcaoNome() {
  var loginCadElement = document.getElementById('loginCad');
  var accountIconElement = document.querySelector('.account-icon');
  var nomeUsuarioLog = JSON.parse(sessionStorage.getItem('nomeUsuarioLog'));

  if (nomeUsuarioLog) {
      loginCadElement.innerHTML = nomeUsuarioLog.nomeUser; 
      loginCadElement.removeAttribute('href');

  } else {
      
      loginCadElement.innerHTML = 'Login / Cadastro'; 
      accountIconElement.style.display = 'block'; 
  }
}


  