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

});


function poda() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'PODA';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A poda da planta lavanda é uma prática importante para mantê-la saudável, estimular o crescimento adequado e prolongar sua vida útil. A poda adequada ajuda a promover a formação de mais flores, melhora a circulação de ar e evita que a planta fique densa e desgrenhada. Aqui estão algumas informações úteis sobre a poda da lavanda:<br><br>Época da poda: A lavanda geralmente é podada no início da primavera, antes que os novos brotos comecem a se desenvolver. Evite podar no final do outono ou no inverno, pois isso pode tornar a planta mais suscetível a danos causados pelo frio.<br><br>Remoção das flores desbotadas: Ao longo do período de floração da lavanda, é recomendado remover as flores desbotadas para estimular a produção de mais flores e manter a planta com uma aparência mais arrumada. Basta cortar os caules das flores logo acima das folhas.<br><br>Corte dos brotos laterais: Para manter a lavanda compacta e evitar que ela fique muito lenhosa no centro, é importante cortar os brotos laterais. Isso é feito cortando cerca de um terço do comprimento dos brotos, tomando cuidado para não cortar muito próximo à base da planta.<br><br>Corte anual mais profundo: A cada dois ou três anos, a lavanda pode ser podada de forma mais intensa para rejuvenescer a planta. Isso envolve cortar a planta de volta para cerca de 15 centímetros acima do solo, removendo toda a vegetação antiga. Essa poda mais drástica ajuda a estimular o crescimento de novos brotos e mantém a planta vigorosa.<br><br>Formato de poda: Ao podar a lavanda, você pode optar por dar um formato arredondado ou deixá-la mais natural. O formato arredondado é mais comum em jardins formais, enquanto o estilo mais natural se adequa a jardins de estilo campestre ou selvagem.<br><br>Cuidados pós-poda: Após a poda, é importante regar bem a planta para ajudar na recuperação e promover o crescimento dos novos brotos. Certifique-se de que o solo esteja bem drenado para evitar o apodrecimento das raízes.<br><br>Lembre-se de que a lavanda é uma planta resistente e pode tolerar uma poda relativamente intensa. No entanto, é importante evitar podas excessivas, especialmente na madeira mais antiga, pois isso pode prejudicar a planta. Observe também que a poda excessiva no outono pode expor a planta a danos causados pelo frio durante o inverno.<br><br>Com cuidado e atenção adequados à poda, você pode desfrutar de uma lavanda exuberante, saudável e perfumada em seu jardim.'
}

function solo() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'SOLO';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A lavanda é uma planta que prefere solos bem drenados e com pH neutro a alcalino. Aqui estão algumas informações sobre o tipo de solo adequado para o cultivo da lavanda:<br><br>Drenagem: A drenagem adequada é essencial para o sucesso no cultivo da lavanda. O solo deve ser leve e solto, permitindo que a água escoe rapidamente. Evite solos pesados e argilosos, que podem reter água em excesso e levar ao apodrecimento das raízes. Se o solo da sua região for pesado, é recomendado melhorá-lo adicionando areia grossa ou perlita para aumentar a drenagem.<br><br>pH do solo: A lavanda prefere um pH do solo entre 6,5 e 8,0, com uma preferência ligeiramente alcalina. É possível testar o pH do solo utilizando um kit de teste de solo disponível em lojas de jardinagem. Se o pH do seu solo for ácido, você pode corrigi-lo adicionando calcário dolomítico para elevar o pH gradualmente.<br><br>Textura do solo: A lavanda cresce melhor em solos arenosos a franco-arenosos, que são bem drenados e têm uma boa capacidade de retenção de umidade. Esses solos permitem que as raízes respirem adequadamente e evitam o encharcamento. Adicionar matéria orgânica, como composto ou turfa, pode melhorar a textura do solo e sua capacidade de retenção de nutrientes.<br><br>Fertilidade do solo: A lavanda é relativamente resistente e não requer solos extremamente férteis. De fato, o excesso de fertilizantes pode levar ao crescimento exagerado das folhas em detrimento das flores. Antes de plantar a lavanda, é recomendado incorporar um pouco de adubo orgânico ou fertilizante granulado de liberação lenta ao solo para fornecer os nutrientes básicos necessários. No entanto, evite fertilizar em excesso após o estabelecimento da planta.<br><br>Irrigação adequada: Embora a lavanda seja uma planta tolerante à seca, ela precisa de uma quantidade adequada de água durante a fase de estabelecimento. Após o plantio, regue bem a planta e, em seguida, permita que o solo seque entre as regas. Evite regar em excesso, pois o acúmulo de umidade pode levar ao apodrecimento das raízes. Uma vez estabelecida, a lavanda é mais resistente à seca e requer menos irrigação.<br><br>Certificar-se de que o solo esteja adequado antes de plantar a lavanda é fundamental para o sucesso no cultivo. Lembre-se de que as necessidades específicas do solo podem variar ligeiramente dependendo da variedade de lavanda que você está cultivando. Sempre consulte informações específicas sobre a variedade de lavanda que você está cultivando para obter orientações mais detalhadas sobre o solo e os cuidados necessários.'
}
function adubagem() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'ADUBAGEM';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A adubação adequada é importante para fornecer os nutrientes necessários para o crescimento saudável da lavanda. Aqui estão algumas informações sobre a adubação da lavanda:<br><br>Adubação inicial: Antes de plantar a lavanda, é recomendado incorporar adubo orgânico bem decomposto ou composto ao solo para melhorar sua fertilidade. Isso ajudará a fornecer nutrientes básicos para a planta durante sua fase inicial de crescimento.<br><br>Fertilizante de liberação lenta: Após o plantio, você pode usar um fertilizante granulado de liberação lenta com formulação balanceada, adequada para plantas perenes. Esse tipo de fertilizante fornece nutrientes gradualmente ao longo do tempo, evitando excessos e picos de nutrientes que podem prejudicar a planta.<br><br>Moderação na adubação: A lavanda é uma planta que prefere solos menos férteis. Portanto, evite fertilizar em excesso, pois isso pode levar a um crescimento excessivo das folhas em detrimento das flores. Siga as instruções do fabricante em relação à quantidade e frequência de aplicação do fertilizante.<br><br>Adubação anual leve: A lavanda geralmente não requer adubação pesada. No entanto, uma adubação leve anual no início da primavera pode fornecer um estímulo adicional para um crescimento saudável e uma floração abundante. Use um fertilizante específico para plantas perenes ou um adubo orgânico balanceado, seguindo as instruções de dosagem recomendadas.<br><br>Composto orgânico: Além de fertilizantes químicos, você também pode usar composto orgânico para adubar a lavanda. O composto orgânico enriquece o solo com nutrientes essenciais e ajuda a melhorar a estrutura e a retenção de água. Aplique uma camada fina de composto ao redor da base da planta, evitando que ele entre em contato direto com as folhas.<br><br>Observação das necessidades da planta: Observe o desenvolvimento da lavanda ao longo do tempo. Se você notar folhas amareladas ou crescimento lento, isso pode indicar deficiência de nutrientes. Nesse caso, uma adubação adicional pode ser necessária, seguindo as recomendações específicas para o tipo de nutriente em falta.<br><br>Lembre-se de que a lavanda é uma planta relativamente resistente e pode tolerar condições de solo menos férteis. É melhor evitar o uso excessivo de fertilizantes, pois isso pode prejudicar a planta e resultar em um crescimento excessivo das folhas em detrimento das flores. Sempre siga as instruções de dosagem e as necessidades específicas da variedade de lavanda que você está cultivando.';
}

function plant() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'Espada de são Jorge';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A lavanda, conhecida cientificamente como Lavandula, é uma planta herbácea aromática nativa da região do Mediterrâneo. Ela é amplamente cultivada e apreciada por suas flores roxas vibrantes e pelo aroma relaxante e reconfortante que exalam.<br><br>A lavanda é uma planta perene que cresce em arbustos compactos, atingindo uma altura média de cerca de 60 centímetros. Suas folhas são longas e estreitas, de cor verde-acinzentada, e suas flores crescem em espigas verticais, formando cachos perfumados. Existem várias espécies e variedades de lavanda, cada uma com características ligeiramente diferentes, mas todas compartilham o mesmo perfume característico.<br><br>Uma das principais características da lavanda é seu aroma distintivo e relaxante. Seus óleos essenciais têm propriedades calmantes e são frequentemente utilizados em aromaterapia para aliviar o estresse, a ansiedade e a insônia. O cheiro suave e floral da lavanda também é usado em produtos de cuidados pessoais, como sabonetes, loções e óleos de massagem.<br><br>Além do seu apelo olfativo, a lavanda também é apreciada por sua beleza visual e valor ornamental. Suas flores roxas atraem abelhas, borboletas e outros polinizadores, tornando-a uma excelente escolha para jardins e áreas naturais. A planta também é resistente e de fácil cultivo, adaptando-se a diferentes tipos de solo e climas moderados.<br><br>A lavanda tem sido usada há séculos devido às suas propriedades medicinais e terapêuticas. Seus óleos essenciais são conhecidos por terem efeitos antissépticos, anti-inflamatórios e cicatrizantes, sendo utilizados para tratar queimaduras leves, picadas de insetos e irritações da pele. Além disso, a lavanda é utilizada na produção de perfumes, produtos de limpeza e até mesmo na culinária, dando um toque especial a sobremesas e infusões.<br><br>Para cultivar lavanda, é recomendado plantá-la em locais ensolarados e com solo bem drenado. Ela é resistente à seca e não requer muita água, o que a torna uma escolha popular para jardins de baixa manutenção. A lavanda pode ser propagada por meio de sementes, estacas ou divisão de plantas mais maduras.';
}
function pragas() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'PRAGAS E DOENÇAS';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'Embora a lavanda seja conhecida por sua resistência a pragas e doenças, ainda existem algumas questões que podem afetar a planta. Aqui estão algumas pragas e doenças comuns que podem afetar a lavanda e algumas medidas para prevenção e controle:<br><br>Pulgões: Pulgões são pequenos insetos sugadores de seiva que podem causar danos às folhas e brotos da lavanda. Eles podem ser controlados com o uso de sabão inseticida ou óleo de neem. Além disso, atrair insetos benéficos, como joaninhas e crisopídeos, pode ajudar a controlar as populações de pulgões.<br><br>Cochonilhas: Cochonilhas são insetos que se fixam nas folhas e caules da lavanda, sugando a seiva da planta. Elas podem ser controladas manualmente com uma solução de água e sabão ou com a aplicação de óleo de neem.<br><br>Lagartas: Algumas espécies de lagartas podem se alimentar das folhas da lavanda. Para controlá-las, você pode removê-las manualmente ou usar um inseticida adequado, seguindo as instruções do fabricante.<br><br>Mofo cinzento: O mofo cinzento é uma doença fúngica que pode afetar a lavanda, especialmente em condições de alta umidade. Ele causa manchas marrons nas folhas e pode levar ao apodrecimento dos brotos. Para prevenir o mofo cinzento, é importante manter a lavanda bem espaçada para permitir a circulação de ar adequada. Evite regar em excesso e aplique um fungicida adequado se necessário.<br><br>Podridão radicular: A lavanda é suscetível à podridão radicular quando o solo fica excessivamente úmido, o que pode levar ao apodrecimento das raízes. Certifique-se de que o solo tenha uma boa drenagem para evitar o acúmulo de umidade. Se a podridão radicular ocorrer, pode ser necessário transplantar a planta para um solo bem drenado e saudável.<br><br>Míldio: O míldio é uma doença fúngica que pode afetar a lavanda, causando manchas amarelas nas folhas e um revestimento branco ou cinza nas superfícies inferiores. Para prevenir o míldio, evite o excesso de umidade nas folhas e forneça um bom espaçamento entre as plantas para permitir a ventilação adequada. Fungicidas apropriados também podem ser usados em casos de infecção severa.<br><br>É importante observar a lavanda regularmente para detectar qualquer sinal de infestação ou doença. Ao identificar problemas precocemente, você pode agir rapidamente para controlar a situação e minimizar os danos. Mantenha um bom manejo cultural, como rega adequada, espaçamento adequado das plantas e limpeza regular de folhas e detritos, para manter a lavanda saudável e resistente a pragas e doenças.';
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





  