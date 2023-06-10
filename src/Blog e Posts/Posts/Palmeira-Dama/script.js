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
  conteudo.innerHTML = 'A poda da palmeira-dama deve ser realizada com cuidado, pois ela é uma planta sensível e a poda inadequada pode prejudicar seu crescimento e aparência. No entanto, a poda pode ser necessária para manter a planta saudável e esteticamente agradável.<br><br>A primeira coisa a considerar antes de podar uma palmeira-dama é o momento certo para fazê-lo. A melhor época para a poda é na primavera ou no verão, quando a planta está em pleno crescimento. É importante evitar a poda durante o inverno ou o outono, pois isso pode causar estresse à planta e retardar seu crescimento.<br><br>Quando se trata da poda propriamente dita, o objetivo é remover as folhas mortas ou danificadas e os galhos secos ou doentes. Isso ajudará a melhorar a aparência da palmeira-dama e manter sua saúde. Além disso, é importante remover quaisquer folhas ou galhos que estejam tocando as paredes ou telhados das construções próximas, pois isso pode danificar tanto a planta quanto as estruturas.<br><br>Ao podar a palmeira-dama, é importante usar ferramentas limpas e afiadas para evitar rasgar ou danificar os tecidos da planta. As ferramentas de poda devem ser esterilizadas com álcool ou uma solução de água sanitária antes de usar para evitar a disseminação de doenças.<br><br>Ao remover folhas ou galhos, é importante cortar o tecido morto o mais próximo possível do tronco ou do caule, sem danificar o tecido vivo. Também é importante não cortar muito da coroa das folhas, pois isso pode afetar negativamente o crescimento da palmeira.<br><br>Em resumo, a poda da palmeira-dama deve ser realizada com cuidado e de acordo com as diretrizes recomendadas. Se realizada corretamente, a poda ajudará a manter a saúde e a aparência atraente da planta, tornando-a uma bela adição ao seu jardim ou paisagem tropical..'
}

function solo() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'SOLO';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'O solo é um fator muito importante para o crescimento e desenvolvimento saudável da palmeira-dama. É importante escolher o tipo de solo correto e fornecer os nutrientes necessários para manter a planta saudável e forte.<br><br>A palmeira-dama cresce melhor em solos úmidos, bem drenados e ricos em nutrientes. É importante evitar solos que sejam excessivamente argilosos ou compactados, pois isso pode dificultar a drenagem e impedir o crescimento adequado das raízes. O solo ideal para a palmeira-dama deve ser solto e permitir a penetração de água e ar, enquanto retém nutrientes e umidade.<br><br>Antes de plantar a palmeira-dama, é importante preparar o solo adequadamente. Isso envolve escavar um buraco grande o suficiente para acomodar as raízes da planta e misturar o solo existente com composto orgânico ou fertilizante. Isso ajudará a fornecer os nutrientes necessários para o crescimento da palmeira-dama e melhorar a qualidade do solo.<br><br>Além disso, é importante regar a palmeira-dama regularmente para mantê-la saudável e bem hidratada. A palmeira-dama prefere solos úmidos, mas não encharcados, por isso é importante evitar o acúmulo de água em torno das raízes da planta. Uma boa maneira de evitar isso é regar a planta com frequência, mas em pequenas quantidades.<br><br>Também é importante monitorar o pH do solo da palmeira-dama. Ela prefere solos ligeiramente ácidos, com um pH entre 6,0 e 6,5. Se o pH do solo estiver muito alto ou muito baixo, isso pode afetar negativamente o crescimento e a saúde da planta. Se necessário, você pode ajustar o pH do solo com a adição de calcário ou enxofre.<br><br>Em resumo, o solo é um fator importante para o crescimento e desenvolvimento saudável da palmeira-dama. É importante escolher o tipo de solo correto e fornecer os nutrientes necessários para mantê-la saudável. Ao preparar o solo, regar a planta e monitorar o pH, você pode ajudar a garantir um crescimento forte e saudável da palmeira-dama.'
}
function adubagem() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'ADUBAGEM';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A adubagem é importante para fornecer à palmeira-dama os nutrientes necessários para um crescimento saudável e vigoroso. É importante escolher o tipo certo de fertilizante e aplicá-lo de acordo com as necessidades da planta.<br><br>A palmeira-dama geralmente responde bem a fertilizantes com uma alta concentração de nitrogênio (N), fósforo (P) e potássio (K), além de outros micronutrientes essenciais, como zinco, ferro e manganês. É importante escolher um fertilizante formulado especificamente para palmeiras, pois isso garantirá que a planta receba os nutrientes necessários na quantidade certa.<br><br>A adubação da palmeira-dama deve ser feita regularmente durante a estação de crescimento, geralmente na primavera e no verão. É importante seguir as instruções do fabricante ao aplicar o fertilizante, pois o excesso de fertilização pode levar ao acúmulo de sais no solo e causar danos às raízes da planta.<br><br>A forma mais comum de aplicar fertilizante é por meio de uma aplicação de cobertura. Isso envolve a dispersão do fertilizante sobre o solo em torno da base da planta e a incorporação leve do fertilizante no solo com um ancinho ou uma enxada. Alguns fertilizantes são formulados para serem aplicados diretamente na água de irrigação, o que é conveniente para quem tem um sistema de irrigação por gotejamento ou aspersão.<br><br>É importante lembrar que a palmeira-dama não precisa ser fertilizada durante o inverno ou o outono, quando a planta entra em dormência e o crescimento é reduzido. O excesso de fertilização durante este período pode levar a problemas de crescimento e saúde.<br><br>Em resumo, a adubação é uma parte importante do cuidado da palmeira-dama. É importante escolher o tipo certo de fertilizante e aplicá-lo de acordo com as necessidades da planta. Fertilize regularmente durante a estação de crescimento e lembre-se de não fertilizar durante o inverno ou o outono. Com uma adubação adequada, você pode ajudar a garantir um crescimento forte e saudável da palmeira-dama.';
}

function plant() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'Palmeira-Dama';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A palmeira-dama é uma planta exótica e elegante que é popular em paisagismo devido à sua aparência imponente e tropical. Esta planta também é conhecida como palmeira-leque-chinês, palmeira-de-seda ou palmeira-de-taiwan. Seu nome científico é Livistona chinensis e ela é nativa da China e do Japão.A palmeira-dama é uma árvore de crescimento lento que pode atingir uma altura de até 15 metros, mas geralmente cresce até cerca de 6 metros em cultivo. Ela tem um tronco único e esbelto que pode ser de cor cinza ou marrom, com um diâmetro de cerca de 30 a 45 centímetros. As folhas da palmeira-dama são grandes e em forma de leque, com até 1,5 metro de diâmetro. Elas são verde-escuras na parte superior e mais claras na parte inferior, com um pecíolo longo e espinhoso.<br><br>A palmeira-dama é uma planta resistente e fácil de cuidar, o que a torna popular em jardins e espaços públicos. Ela pode ser cultivada em sol pleno ou sombra parcial e prefere solo úmido, bem drenado e rico em nutrientes. Ela é capaz de tolerar condições de seca moderada, mas é importante regá-la regularmente para evitar que as folhas fiquem amareladas ou murchas. A palmeira-dama também é resistente a doenças e pragas, o que a torna uma escolha popular para jardineiros iniciantes.<br><br>Além de seu valor ornamental, a palmeira-dama tem outras utilidades. Suas folhas são frequentemente utilizadas para a fabricação de cestos, esteiras e outros itens artesanais. A madeira da palmeira-dama é utilizada na construção de móveis, enquanto o óleo extraído de suas sementes é utilizado na produção de cosméticos e produtos de cuidados pessoais.<br><br>No entanto, é importante notar que a palmeira-dama pode se tornar invasiva em algumas áreas, especialmente em climas mais quentes e úmidos. Se você estiver considerando o cultivo desta planta, certifique-se de verificar se ela é adequada para a sua área e siga as diretrizes de cultivo recomendadas para evitar sua propagação descontrolada.<br><br>Em resumo, a palmeira-dama é uma planta atraente e de baixa manutenção que pode ser uma excelente adição a qualquer jardim ou paisagem tropical. Com seus grandes leques de folhas verdes e tronco esbelto, ela é certamente uma planta que chama a atenção e acrescenta um toque de exotismo a qualquer ambiente.';
}
function pragas() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'PRAGAS E DOENÇAS';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'Assim como todas as plantas, a palmeira-dama pode ser suscetível a pragas e doenças. É importante monitorar a planta regularmente e tomar medidas preventivas para evitar a infestação ou o desenvolvimento de doenças. Aqui estão algumas das pragas e doenças comuns que podem afetar a palmeira-dama:<br><br>Cochonilha: Estes insetos aparecem como manchas brancas e cerosas nas folhas e tronco da palmeira-dama. Eles sugam a seiva da planta, o que pode levar a danos e morte. A cochonilha pode ser controlada com a aplicação de óleo mineral ou com o uso de um inseticida apropriado.<br><br>Broca: A broca é uma larva que perfura o tronco da palmeira-dama e se alimenta do tecido interno da planta. Isso pode levar a danos significativos e até mesmo a morte. A broca pode ser controlada com a aplicação de inseticidas ou com a remoção manual da larva.<br><br>Fusariose: Esta é uma doença fúngica que pode afetar a palmeira-dama. Os sintomas incluem folhas amareladas, murchas ou mortas e um anel escuro no tronco da planta. A fusariose pode ser controlada com a poda e remoção de tecido infectado e a aplicação de fungicidas apropriados.<br><br>Cochonilha algodonosa: Esta é outra espécie de cochonilha que pode afetar a palmeira-dama. Eles aparecem como manchas brancas e felpudas nas folhas e tronco da planta e sugam a seiva da palmeira-dama. A cochonilha algodonosa pode ser controlada com a aplicação de óleo mineral ou com o uso de um inseticida apropriado.<br><br>Anel vermelho: Esta é uma doença que afeta as palmeiras e é causada por um vírus. Os sintomas incluem amarelecimento das folhas e queda da coroa da planta. O anel vermelho é incurável e pode ser prevenido com a limpeza adequada das ferramentas de jardinagem e a eliminação de palmeiras infectadas.<br><br>É importante lembrar que a prevenção é a melhor maneira de evitar problemas de pragas e doenças na palmeira-dama. Isso inclui manter a planta saudável com a poda regular e a adubação adequada, bem como monitorar regularmente a planta para detectar sinais de infestação ou doença. Se necessário, consulte um profissional de jardinagem ou um especialista em palmeiras para ajudá-lo a identificar e tratar qualquer problema que possa surgir.';
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





  