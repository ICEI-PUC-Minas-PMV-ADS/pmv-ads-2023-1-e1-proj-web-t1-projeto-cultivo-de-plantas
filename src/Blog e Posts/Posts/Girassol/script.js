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
  conteudo.innerHTML = 'A poda do girassol não é um procedimento comum ou necessário como em outras plantas. Ao contrário de árvores frutíferas ou arbustos ornamentais, o girassol não requer podas regulares para o seu crescimento saudável. No entanto, existem algumas circunstâncias específicas em que a poda pode ser benéfica.<br><br>A principal razão para realizar a poda do girassol é quando as cabeças das flores começam a murchar e as sementes estão amadurecendo. Se você estiver interessado em colher as sementes do girassol para uso culinário ou para replantio, é aconselhável fazer a poda nesse momento.<br><br>Para podar um girassol, espere até que as pétalas da flor tenham caído e a cabeça central tenha ficado marrom e seco. Em seguida, você pode cortar a cabeça da flor com uma tesoura ou faca afiada. Certifique-se de deixar uma porção do caule anexada à cabeça da flor, pois é nessa parte que as sementes estão se formando.<br><br>Após a poda, você pode colocar as cabeças das flores em um local fresco e seco para que as sementes amadureçam completamente. Elas geralmente se soltam facilmente quando estão prontas para serem colhidas. Lembre-se de proteger as cabeças das flores de pássaros ou outros animais que possam se interessar pelas sementes.<br><br>É importante ressaltar que, se você estiver cultivando girassóis para fins ornamentais e não estiver interessado em colher as sementes, não há necessidade de fazer a poda. Você pode simplesmente permitir que as flores murchem naturalmente no final da estação e as sementes caiam no solo, contribuindo para a reprodução natural da planta.<br><br>Em resumo, a poda do girassol é geralmente realizada para colher as sementes maduras. Nesses casos, você pode cortar as cabeças das flores quando as pétalas caírem e a cabeça estiver seca e marrom. Caso não haja interesse em colher as sementes, a poda não é necessária, e você pode permitir que as flores murchem naturalmente.'
}

function solo() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'SOLO';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'O solo desempenha um papel fundamental no cultivo saudável e no desenvolvimento adequado do girassol (Helianthus annuus). Essa planta é conhecida por sua resistência e capacidade de adaptação a diferentes condições de solo, mas ainda assim existem algumas considerações importantes a serem feitas para garantir um crescimento ideal.<br><br>Em geral, o girassol prefere solos bem drenados e férteis, com boa capacidade de retenção de umidade. Solos argilosos ou arenosos podem ser adequados, desde que sejam corretamente preparados e enriquecidos. Antes do plantio, é recomendado trabalhar o solo, removendo detritos, como pedras e raízes, e incorporando matéria orgânica, como composto ou esterco bem decomposto. Isso ajuda a melhorar a estrutura do solo, a retenção de água e a disponibilidade de nutrientes para as raízes do girassol.<br><br>A acidez do solo também é um fator a ser considerado. O girassol tende a prosperar em solos com pH neutro a ligeiramente alcalino, em torno de 6,0 a 7,5. Se o pH do solo estiver abaixo ou acima desse intervalo, pode ser necessário fazer ajustes com a aplicação de corretivos, como calcário para elevar o pH ou enxofre para reduzi-lo. É recomendado fazer uma análise do solo para determinar as condições específicas antes do plantio.<br><br>A escolha do local de plantio também é importante. O girassol é uma planta que requer exposição direta ao sol para um crescimento saudável. Portanto, selecione um local ensolarado, onde a planta receba pelo menos 6 horas de luz solar direta por dia.<br><br>A rega adequada é essencial durante todo o ciclo de crescimento do girassol. Durante as fases iniciais, quando as mudas estão se estabelecendo, é importante manter o solo úmido, mas não encharcado. À medida que a planta cresce, ela desenvolve um sistema radicular profundo, capaz de acessar a umidade do solo em camadas mais profundas. No entanto, em períodos de seca prolongada, a irrigação suplementar pode ser necessária para garantir um crescimento saudável e a formação de cabeças de flores.<br><br>Além disso, é importante lembrar que o girassol é uma planta relativamente resistente e capaz de lidar com condições adversas. No entanto, para obter melhores resultados, o cultivo em solo bem preparado, com boa drenagem, fertilidade adequada e pH equilibrado, proporcionará as condições ideais para o crescimento robusto e a produção de cabeças de flores bonitas e saudáveis.<br><br>Em resumo, o solo do girassol deve ser bem drenado, fértil e com boa capacidade de retenção de água. A incorporação de matéria orgânica e a correção do pH, se necessário, são medidas importantes a serem tomadas antes do plantio. Além disso, a exposição solar direta e uma irrigação adequada ao longo do ciclo de crescimento são essenciais para o sucesso do cultivo do girassol.'
}
function adubagem() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'ADUBAGEM';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A adubagem adequada é essencial para fornecer os nutrientes necessários ao girassol (Helianthus annuus) e promover um crescimento saudável e uma produção satisfatória. Antes de aplicar qualquer fertilizante, é recomendado fazer uma análise do solo para determinar as necessidades específicas da planta.O girassol é uma planta que requer um suprimento adequado de nutrientes, principalmente nitrogênio, fósforo e potássio (NPK). O nitrogênio é essencial para o crescimento vegetativo, o fósforo está relacionado ao desenvolvimento das raízes e à formação de flores e sementes, e o potássio desempenha um papel importante na resistência a doenças e estresses ambientais.<br><br>A quantidade e o tipo de fertilizante a serem aplicados podem variar dependendo das condições do solo. No entanto, como uma orientação geral, pode-se considerar a aplicação de um fertilizante balanceado com uma proporção de nutrientes de aproximadamente 10-10-10 ou 14-14-14, de acordo com as recomendações da análise do solo.<br><br>A adubação deve ser feita antes do plantio, incorporando o fertilizante ao solo. Espalhe o fertilizante uniformemente na área de plantio e, em seguida, misture-o ao solo em uma profundidade de cerca de 10-15 centímetros. Isso permitirá que as raízes do girassol tenham acesso aos nutrientes durante o crescimento.<br><br>Além do fertilizante comercial, a matéria orgânica também pode ser utilizada como uma forma eficaz de adubação. A incorporação de composto orgânico ou esterco bem decomposto antes do plantio pode enriquecer o solo e fornecer nutrientes gradualmente à planta.<br><br>Durante o crescimento do girassol, é importante monitorar o desenvolvimento da planta e a resposta às adubações realizadas. Se necessário, podem ser feitas adubações suplementares durante o ciclo de crescimento. Por exemplo, se houver sinais de deficiência de nutrientes, como amarelamento das folhas ou crescimento fraco, a aplicação de fertilizantes foliares ou granulados pode ser considerada.<br><br>No entanto, é fundamental evitar o excesso de adubação, pois isso pode levar a problemas, como o acúmulo de sais no solo. Siga sempre as recomendações de dosagem indicadas na embalagem do fertilizante e evite aplicar fertilizantes em momentos inadequados, como próximo à época de colheita.<br><br>Em resumo, a adubação do girassol é importante para fornecer os nutrientes essenciais ao seu crescimento e desenvolvimento. Uma análise do solo pode fornecer informações valiosas para determinar as necessidades específicas da planta. A aplicação de um fertilizante balanceado antes do plantio, juntamente com a incorporação de matéria orgânica, pode garantir um suprimento adequado de nutrientes. Monitorar o crescimento da planta ao longo do ciclo e realizar adubações suplementares, se necessário, é uma prática recomendada.';
}

function plant() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'Espada de são Jorge';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'O girassol, cujo nome científico é Helianthus annuus, é uma planta incrivelmente bela e emblemática, conhecida por suas flores deslumbrantes que parecem seguir o movimento do sol ao longo do dia. Originário da América do Norte, o girassol conquistou o coração de pessoas ao redor do mundo com sua aparência vibrante e significados simbólicos.<br><br>Uma das características mais marcantes do girassol é o seu porte impressionante. Essa planta pode alcançar alturas consideráveis, podendo variar de 1 a 5 metros. Seu caule é robusto e ramificado, o que lhe confere estabilidade para sustentar o peso de suas grandes flores.<br><br>As flores do girassol são verdadeiras obras de arte da natureza. Elas são compostas por uma inflorescência central de forma circular, conhecida como cabeça, rodeada por uma coroa de pétalas amarelas brilhantes. O nome "girassol" deriva dessa característica única, pois a cabeça da flor tende a seguir o movimento do sol ao longo do dia, voltando-se para ele. Esse fenômeno é conhecido como heliotropismo.<br><br>Além de sua beleza estonteante, o girassol possui uma importância significativa na agricultura e na vida das pessoas. Suas sementes são ricas em nutrientes e são amplamente utilizadas na produção de óleo comestível. O óleo de girassol é apreciado por seu sabor neutro e sua versatilidade culinária, sendo utilizado tanto para cozinhar quanto para fins cosméticos.<br><br>Outra característica notável do girassol é sua capacidade de atrair a atenção de diversos animais, principalmente pássaros e abelhas. As flores amarelas brilhantes e a presença abundante de néctar tornam o girassol um local de interesse para a polinização. Além disso, as sementes do girassol também são uma fonte de alimento para muitos animais, como esquilos e roedores.<br><br>O girassol também tem um significado simbólico profundo. Ele é frequentemente associado à felicidade, ao otimismo e à energia positiva. Sua capacidade de seguir o sol ao longo do dia é vista como um exemplo inspirador de determinação e busca pela luz, mesmo diante das adversidades. Por isso, o girassol é muitas vezes utilizado como um símbolo de esperança e resiliência.<br><br>Em resumo, o girassol é uma planta magnífica, com suas flores impressionantes, seu porte imponente e sua capacidade de trazer alegria e otimismo. Seja na agricultura, na vida selvagem ou no mundo simbólico, o girassol continua a encantar e inspirar pessoas ao redor do mundo, tornando-se um verdadeiro ícone da natureza.';
}
function pragas() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'PRAGAS E DOENÇAS';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'As pragas e doenças são problemas comuns que podem afetar o cultivo de girassóis. Aqui estão algumas das pragas e doenças mais comuns associadas a essa planta:<br><br>Pulgões: Os pulgões são insetos pequenos e sugadores que se alimentam da seiva das plantas. Eles podem causar danos consideráveis aos girassóis, causando a deformação das folhas e transmitindo doenças.<br><br>Tripes: As tripes são pequenos insetos que se alimentam dos tecidos das folhas e flores dos girassóis. Elas podem causar danos estéticos às plantas e, em casos graves, comprometer a produção de sementes.<br><br>Besouros: Várias espécies de besouros podem ser encontradas nos girassóis, sendo o besouro-do-girassol o mais comum. As larvas desses besouros se alimentam das raízes e do caule das plantas, o que pode levar à murcha e ao declínio geral da planta.<br><br> Mofo branco: O mofo branco, causado pelo fungo Sclerotinia sclerotiorum, é uma doença fúngica comum que afeta muitas culturas, incluindo o girassol. Ele se desenvolve em condições de alta umidade e pode infectar todas as partes da planta, resultando em manchas brancas de mofo, murcha e morte.<br><br>Podridão branca: A podridão branca, causada pelo fungo Sclerotinia sclerotiorum, é outra doença fúngica que pode afetar os girassóis. Ela causa a podridão dos caules e das partes superiores das plantas, bem como o desenvolvimento de estruturas brancas semelhantes a algodão.<br><br>Míldio: O míldio, causado pelo fungo Plasmopara halstedii, é uma doença comum do girassol. Ela provoca manchas necróticas nas folhas, caules e flores, que podem se espalhar rapidamente em condições úmidas.<br><br>Vírus do mosaico: O vírus do mosaico do girassol é transmitido principalmente por pulgões e causa sintomas como mosaico nas folhas, deformação das flores e redução da produção de sementes.<br><br>Para controlar pragas e doenças no cultivo de girassóis, é importante adotar medidas preventivas, como a rotação de culturas, o uso de sementes saudáveis, a limpeza de restos de plantas e a manutenção de condições adequadas de drenagem. Além disso, dependendo da gravidade do problema, podem ser aplicados inseticidas, fungicidas ou métodos de controle biológico para reduzir o impacto dessas pragas e doenças. É sempre recomendado consultar um especialista em agricultura ou um profissional local para obter orientações específicas com base nas condições e no local de cultivo dos girassóis.';
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





  