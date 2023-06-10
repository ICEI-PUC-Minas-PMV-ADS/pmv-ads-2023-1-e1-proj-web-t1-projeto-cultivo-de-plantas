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
localStorage.setItem('meuVetor', JSON.stringify( plantas));

document.getElementById('searchInput').addEventListener('input', function() {
  var searchTerm = this.value.toLowerCase();
  var storedVetor = JSON.parse(localStorage.getItem('meuVetor'));
  var searchResults = [];

  // Percorre o vetor e verifica se o termo de pesquisa está contido em cada item
  for (var i = 0; i < storedVetor.length; i++) {
    var item = storedVetor[i].toLowerCase();
    if (item.indexOf(searchTerm) !== -1) {
      searchResults.push(storedVetor[i]);
    }
  }

  // Atualiza a lista de resultados na página
  var resultsElement = document.getElementById('searchResults');
  resultsElement.innerHTML = '';

  for (var j = 0; j < searchResults.length; j++) {
    var li = document.createElement('li');
    
    var link = document.createElement('a');
    var itemText = searchResults[j];

    if (itemURLs.hasOwnProperty(itemText)) {
      link.href = itemURLs[itemText];
    } else {
      link.href = '#'; // Defina um URL padrão para itens não mapeados
    }
    li.classList.add('searchResult');

    link.textContent = itemText;

    link.addEventListener('click', function() {
      window.location.href = this.href;
    });

    li.appendChild(link);
    resultsElement.appendChild(li);
  }
  document.addEventListener('click', function(event) {
   var searchBar = document.getElementById('searchInput');
   var searchResults = document.getElementById('searchResults');
 
   // Verifica se o clique ocorreu fora da barra de pesquisa
   if (event.target !== searchBar && !searchBar.contains(event.target)) {
     // Limpa os resultados da pesquisa
     searchResults.innerHTML='';
 }
 });

});


function poda() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'PODA';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'A bromélia não requer poda regular, pois suas folhas e flores geralmente permanecem atraentes por um longo período de tempo. No entanto, em algumas situações, a poda pode ser necessária. Aqui estão algumas informações sobre a poda da bromélia:<br><br>Remoção de folhas danificadas: Se você observar folhas danificadas, murchas, amareladas ou secas na sua bromélia, é recomendado removê-las. Isso ajuda a manter a aparência estética da planta e evita que as folhas doentes propaguem doenças para o restante da planta.<br><br>Corte de flores murchas: Após a floração, as flores da bromélia eventualmente murcham e morrem. Nesse momento, você pode cortar as flores murchas perto da base, para evitar que a planta gaste energia em flores que já estão morrendo. No entanto, algumas espécies de bromélias produzem inflorescências duradouras que permanecem atraentes por um longo período, e você pode optar por deixá-las intactas até que sequem completamente.<br><br>Remoção de "mães" após a formação de filhotes: Algumas bromélias, como as do gênero Aechmea, produzem filhotes ao redor da planta-mãe. Quando os filhotes crescem e se desenvolvem, eles podem ser separados da planta-mãe e replantados em vasos individuais. Nesse caso, você pode remover cuidadosamente a planta-mãe antiga para permitir que os filhotes tenham espaço para crescer.<br><br>É importante lembrar que a poda em excesso pode ser prejudicial à saúde da bromélia. Evite podar folhas e flores saudáveis, pois elas desempenham um papel importante na absorção de luz solar e na produção de energia através da fotossíntese. Além disso, as bromélias geralmente têm um crescimento lento, e a remoção excessiva de partes da planta pode afetar seu desenvolvimento e diminuir sua capacidade de florescer.<br><br>Ao fazer a poda, é recomendado usar uma tesoura de poda limpa e afiada para evitar ferimentos indesejados na planta. Certifique-se de desinfetar as ferramentas de corte antes de usá-las, especialmente se você estiver podando várias plantas, para evitar a propagação de doenças.<br><br>Lembre-se de que as necessidades de poda podem variar entre as diferentes espécies de bromélias. É sempre útil pesquisar sobre a espécie específica que você possui para obter orientações mais precisas sobre a poda.'
  }
  
function solo() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'SOLO';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'A bromélia não requer poda regular, pois suas folhas e flores geralmente permanecem atraentes por um longo período de tempo. No entanto, em algumas situações, a poda pode ser necessária. Aqui estão algumas informações sobre a poda da bromélia:<br><br>Remoção de folhas danificadas: Se você observar folhas danificadas, murchas, amareladas ou secas na sua bromélia, é recomendado removê-las. Isso ajuda a manter a aparência estética da planta e evita que as folhas doentes propaguem doenças para o restante da planta.<br><br>Corte de flores murchas: Após a floração, as flores da bromélia eventualmente murcham e morrem. Nesse momento, você pode cortar as flores murchas perto da base, para evitar que a planta gaste energia em flores que já estão morrendo. No entanto, algumas espécies de bromélias produzem inflorescências duradouras que permanecem atraentes por um longo período, e você pode optar por deixá-las intactas até que sequem completamente.<br><br>Remoção de "mães" após a formação de filhotes: Algumas bromélias, como as do gênero Aechmea, produzem filhotes ao redor da planta-mãe. Quando os filhotes crescem e se desenvolvem, eles podem ser separados da planta-mãe e replantados em vasos individuais. Nesse caso, você pode remover cuidadosamente a planta-mãe antiga para permitir que os filhotes tenham espaço para crescer.<br><br>É importante lembrar que a poda em excesso pode ser prejudicial à saúde da bromélia. Evite podar folhas e flores saudáveis, pois elas desempenham um papel importante na absorção de luz solar e na produção de energia através da fotossíntese. Além disso, as bromélias geralmente têm um crescimento lento, e a remoção excessiva de partes da planta pode afetar seu desenvolvimento e diminuir sua capacidade de florescer.<br><br>Ao fazer a poda, é recomendado usar uma tesoura de poda limpa e afiada para evitar ferimentos indesejados na planta. Certifique-se de desinfetar as ferramentas de corte antes de usá-las, especialmente se você estiver podando várias plantas, para evitar a propagação de doenças.<br><br>Lembre-se de que as necessidades de poda podem variar entre as diferentes espécies de bromélias. É sempre útil pesquisar sobre a espécie específica que você possui para obter orientações mais precisas sobre a poda.'
  }
function adubagem() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'ADUBAGEM';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'A adubação adequada é essencial para o crescimento saudável e a floração abundante das bromélias. Aqui estão algumas informações sobre a adubação da bromélia:<br><br>Frequência: As bromélias geralmente não exigem adubação frequente. Elas são plantas adaptadas a ambientes de baixo teor nutricional e podem obter nutrientes de forma eficiente a partir do ambiente em que estão. A adubação pode ser feita uma vez a cada dois ou três meses, durante a estação de crescimento ativo.<br><br>Fertilizante: É recomendado o uso de um fertilizante balanceado, com proporções equilibradas de nutrientes como nitrogênio (N), fósforo (P) e potássio (K), além de micronutrientes. Um fertilizante líquido diluído pode ser aplicado diretamente no solo ao redor da planta, seguindo as instruções do fabricante quanto à dosagem.<br><br>Dosagem: É importante seguir as instruções de dosagem do fertilizante específico que você está usando. Evite o excesso de adubação, pois isso pode levar ao acúmulo de sais no solo e causar danos às plantas. Se você estiver usando um fertilizante líquido, dilua-o adequadamente em água antes de aplicá-lo.<br><br>Época de adubação: A adubação pode ser realizada durante a estação de crescimento ativo da planta, que geralmente ocorre na primavera e no verão. Evite adubar no outono e no inverno, quando o crescimento das bromélias é mais lento.<br><br>Adubação foliar: Além da adubação do solo, a adubação foliar também pode ser benéfica para as bromélias. Pulverizar um fertilizante líquido diluído diretamente nas folhas, seguindo as instruções do fabricante, pode fornecer nutrientes extras às plantas.<br><br>Micronutrientes: As bromélias também se beneficiam da adição de micronutrientes, como ferro, manganês e zinco, que são essenciais para a síntese de clorofila e outros processos metabólicos. Verifique se o fertilizante que você está usando contém micronutrientes ou considere a aplicação de um suplemento específico de micronutrientes, seguindo as instruções de dosagem.<br><br>Lembre-se de regar bem a planta antes da adubação e evite adubar plantas estressadas ou recém-transplantadas. Observe as reações da planta após a adubação e ajuste a frequência e a dosagem conforme necessário. Uma adubação adequada contribuirá para o crescimento vigoroso e a floração exuberante das bromélias.';
  }
  
function plant() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'Bromélia';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'A planta bromélia é uma família de plantas tropicais conhecidas por sua aparência exótica e belas folhas e flores. Elas pertencem à família Bromeliaceae, que inclui várias espécies diferentes. Aqui estão algumas informações sobre as bromélias:<br><br>Características: As bromélias apresentam uma variedade de formas, tamanhos e cores. Elas podem ser terrestres, epífitas (crescem em árvores sem parasitá-las) ou saxícolas (crescem em rochas). Suas folhas são frequentemente espessas, coriáceas e dispostas em rosetas ou em forma de tanque, que retêm água e nutrientes. As flores das bromélias são geralmente vistosas e podem variar em cores, incluindo tons de vermelho, rosa, amarelo, laranja e roxo.<br><br>Cultivo: As bromélias são amplamente cultivadas como plantas ornamentais em muitas regiões tropicais e subtropicais do mundo. Elas são valorizadas por sua aparência exótica e sua capacidade de adicionar cor e textura a jardins, vasos e arranjos florais. Elas são relativamente fáceis de cultivar, pois são plantas adaptáveis e resistentes.<br><br>Luz e temperatura: A maioria das bromélias prefere luz indireta brilhante a parcial, pois a exposição direta ao sol intenso pode queimar suas folhas. Elas também são sensíveis ao frio e não toleram temperaturas abaixo de 10°C por longos períodos. Em climas mais frios, elas podem ser cultivadas em ambientes internos ou em estufas.<br><br>Solo e drenagem: As bromélias geralmente preferem um solo bem drenado e aerado. Uma mistura de substrato de qualidade, como turfa, casca de pinus e perlita, proporciona uma boa drenagem e um ambiente propício para as raízes das bromélias se estabelecerem.<br><br>Rega: A rega das bromélias deve ser feita com cuidado, evitando que a água fique estagnada nas rosetas das folhas. O acúmulo de água pode levar ao apodrecimento da planta. É recomendado regar diretamente o solo e permitir que ele seque levemente entre as regas. No entanto, algumas bromélias terrestres ou epífitas podem se beneficiar de um pouco de água nas rosetas das folhas.<br><br>Fertilização: As bromélias não requerem muita fertilização. Um fertilizante líquido solúvel em água, diluído pela metade, pode ser aplicado mensalmente durante a estação de crescimento ativo. Evite o uso de fertilizantes ricos em nitrogênio, pois isso pode resultar em crescimento excessivo das folhas em detrimento das flores.';
  }
function pragas() {
    var titulo = document.querySelector('.tituloTextPost h1');
    titulo.textContent = 'PRAGAS E DOENÇAS';
    
    var conteudo = document.querySelector('.contentTextPost h4');
    conteudo.innerHTML = 'As bromélias são geralmente resistentes a pragas e doenças, mas ocasionalmente podem ser afetadas por alguns problemas. Aqui estão algumas pragas e doenças comuns que podem afetar as bromélias:<br><br>Cochonilhas: As cochonilhas são pequenos insetos que se alimentam da seiva das plantas. Elas podem aparecer como manchas brancas, amareladas ou marrons nas folhas e nos caules das bromélias. O controle pode ser feito removendo as cochonilhas manualmente com um pano embebido em água e sabão, ou usando um inseticida adequado.<br><br>Ácaros: Os ácaros são pragas microscópicas que se alimentam das células das folhas das bromélias, causando manchas amareladas e enrolamento das folhas. Eles podem ser controlados com o uso de um acaricida apropriado, mas também é importante melhorar a umidade do ambiente, pois ácaros preferem condições secas.<br><br>Pulgões: Os pulgões são pequenos insetos sugadores que podem se reunir nas pontas dos brotos e nas partes jovens das folhas. Eles se reproduzem rapidamente e podem causar danos significativos às bromélias. O controle pode ser feito com a aplicação de inseticidas específicos para pulgões ou através do uso de predadores naturais, como joaninhas.<br><br>Podridão das raízes: O excesso de umidade no solo pode levar ao apodrecimento das raízes das bromélias. Isso pode ser evitado garantindo-se uma boa drenagem do solo e evitando regar em excesso. Se a podridão das raízes já estiver presente, é importante remover as partes afetadas e replantar a bromélia em um solo bem drenado.<br><br>Manchas foliares: Algumas doenças fúngicas podem causar manchas foliares nas bromélias. Essas manchas podem ser de cor marrom, preta ou amarela e podem afetar a aparência da planta. O controle pode ser feito removendo-se as folhas afetadas e aplicando-se fungicidas apropriados para prevenir a propagação da doença.<br><br>É importante observar regularmente suas bromélias em busca de sinais de pragas ou doenças e agir rapidamente se algum problema for detectado. Além disso, é recomendado manter um ambiente saudável para as plantas, com boa circulação de ar, evitando o acúmulo de umidade nas folhas e proporcionando condições de crescimento adequadas.<br><br>Caso você tenha dúvidas específicas sobre algum problema em suas bromélias, consulte um profissional de jardinagem ou um especialista em plantas para obter orientações personalizadas e adequadas ao seu caso.';
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




  