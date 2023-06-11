document.addEventListener('DOMContentLoaded', function() {
  var resultsElement = document.getElementById('searchResults');
  resultsElement.style.display = 'none'; // Oculta a div de resultados inicialmente
});

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
  var resultsElement = document.getElementById('searchResults');
  resultsElement.style.display = 'none'; // Oculta a div de resultados inicialmente
});

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

  if (searchResults.length === 0) {
    resultsElement.style.display = 'none'; // Oculta a div de resultados
  } else {
    resultsElement.style.display = 'block'; // Exibe a div de resultados
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
  }
});

function poda() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'PODA';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A poda da trapoeraba roxa é uma prática importante para manter a planta saudável, estimular o crescimento adequado e controlar seu tamanho e forma. Aqui estão algumas informações úteis sobre a poda dessa planta:<br><br>Momento ideal: A poda da trapoeraba roxa pode ser realizada em qualquer época do ano, mas é geralmente recomendado fazer no início da primavera, quando a planta está começando a crescer ativamente. Evite fazer podas drásticas durante períodos de estresse, como durante a floração ou em condições climáticas adversas.<br><br>Ferramentas adequadas: Utilize tesouras de poda limpas e afiadas para evitar danos à planta. Certifique-se de desinfetar as ferramentas antes de usar, especialmente se você estiver podando várias plantas, para evitar a disseminação de doenças.<br><br>Remoção de partes danificadas: Comece a poda removendo cuidadosamente quaisquer partes danificadas, como folhas secas, murchas ou amareladas. Isso não apenas melhora a aparência da planta, mas também evita que doenças ou infestações se espalhem.<br><br>Controle do tamanho: A trapoeraba roxa pode crescer rapidamente e se espalhar descontroladamente. Se você deseja controlar o tamanho da planta, corte os caules mais longos ou rastejantes para manter um formato mais compacto. Você também pode cortar as pontas dos caules para estimular o crescimento lateral e uma aparência mais densa.<br><br>Propagação: A poda também pode ser uma oportunidade para propagar novas mudas da trapoeraba roxa. Corte um pedaço de caule saudável e plante-o em um substrato adequado. Mantenha o solo úmido até que a nova muda esteja enraizada e comece a crescer.<br><br>Adubo e rega: Após a poda, é importante fornecer à planta os cuidados adequados, como adubação regular e rega adequada. Isso ajudará na recuperação e no estímulo ao crescimento saudável.<br><br>Lembre-se de que a trapoeraba roxa é uma planta resistente e tolerante, e geralmente se recupera facilmente da poda. No entanto, evite fazer podas excessivas, pois isso pode enfraquecer a planta e afetar sua vitalidade. Observe também que a poda drástica ou frequente pode reduzir a quantidade de flores produzidas pela planta, pois as flores geralmente se formam nas extremidades dos caules.<br><br>Em suma, a poda da trapoeraba roxa é uma prática importante para manter a planta saudável e controlar seu crescimento. Realize a poda com cuidado, removendo partes danificadas e controlando o tamanho da planta conforme necessário. Com os devidos cuidados, você poderá desfrutar dessa bela planta em seu jardim ou espaço verde.'
}

function solo() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'SOLO';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A trapoeraba roxa pode se adaptar a uma variedade de tipos de solo, desde que sejam bem drenados e ricos em nutrientes. Aqui estão algumas informações sobre o solo adequado para o cultivo dessa planta:<br><br>Drenagem: A trapoeraba roxa não tolera solos encharcados, pois isso pode levar ao apodrecimento das raízes. Portanto, certifique-se de que o solo tenha uma boa drenagem para evitar o acúmulo excessivo de água. Se o solo em seu jardim retiver água em excesso, você pode melhorar a drenagem adicionando matéria orgânica, como composto ou turfa.<br><br>Textura: A trapoeraba roxa cresce bem em solos de textura média a argilosa. Solos arenosos podem secar rapidamente, exigindo uma rega mais frequente, enquanto solos argilosos podem reter água por mais tempo. Portanto, um solo de textura média, que retém umidade adequada sem se tornar muito compacto, é ideal para essa planta.<br><br>pH do solo: A trapoeraba roxa se adapta a uma ampla faixa de pH do solo, mas geralmente prefere solos ligeiramente ácidos a neutros, com valores entre 5,5 e 7,0. Se você não tem certeza sobre o pH do seu solo, é recomendável fazer um teste de pH para determinar se ajustes são necessários. Adicionar materiais orgânicos, como composto ou húmus de minhoca, pode ajudar a ajustar o pH do solo.<br><br>Fertilidade: O solo para a trapoeraba roxa deve ser rico em nutrientes para promover o crescimento saudável e a folhagem exuberante. Antes do plantio, você pode adicionar adubo orgânico ou um fertilizante de liberação lenta para enriquecer o solo com nutrientes essenciais. Além disso, a adição periódica de matéria orgânica, como composto, ajudará a manter a fertilidade do solo ao longo do tempo.<br><br>Umidade: Embora a trapoeraba roxa seja resistente à seca e possa tolerar condições mais secas, ela se beneficia de um solo levemente úmido. Regue a planta regularmente, permitindo que o solo seque levemente entre as regas para evitar o encharcamento. Uma camada de cobertura morta, como palha ou casca de madeira, pode ajudar a reter a umidade do solo e controlar as ervas daninhas.<br><br>Ao cultivar a trapoeraba roxa em vasos, certifique-se de usar um substrato de qualidade para vasos que seja bem drenado e forneça os nutrientes necessários. Lembre-se de que a planta se beneficiará de fertilizações periódicas para suprir os nutrientes que podem se esgotar com o tempo.<br><br>Em resumo, a trapoeraba roxa prospera em solos bem drenados, de textura média a argilosa, com um pH ligeiramente ácido a neutro. Fornecer um solo rico em nutrientes e manter uma umidade adequada ajudará a garantir o crescimento saudável e exuberante dessa planta encantadora.'
}
function adubagem() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'ADUBAGEM';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A adubagem adequada é essencial para promover o crescimento saudável e a exuberância da trapoeraba roxa. Aqui estão algumas informações sobre a adubação dessa planta:<br><br>Adubação inicial: Antes de plantar a trapoeraba roxa, é recomendável preparar o solo adicionando adubo orgânico, como composto ou esterco bem decomposto. Isso irá enriquecer o solo com nutrientes essenciais e melhorar sua fertilidade.<br><br>Adubação regular: A trapoeraba roxa se beneficia de adubações regulares para suprir os nutrientes necessários ao longo do tempo. Você pode usar fertilizantes granulados ou líquidos de liberação lenta, seguindo as instruções de dosagem do produto escolhido. Geralmente, é recomendado adubar a planta a cada dois ou três meses durante a estação de crescimento ativo.<br><br>Fertilizante balanceado: Opte por um fertilizante equilibrado, com uma proporção de nutrientes NPK (nitrogênio, fósforo e potássio) próxima, como 10-10-10 ou 14-14-14. Esses fertilizantes fornecem uma combinação de nutrientes necessários para o crescimento geral da planta.<br><br>Aplicação correta: Siga as instruções do fabricante para a dosagem correta e a forma de aplicação do fertilizante. Geralmente, você pode espalhar o fertilizante ao redor da base da planta, evitando o contato direto com as folhas. Em seguida, regue abundantemente para permitir que o fertilizante penetre no solo.<br><br>Adubação foliar: Além da adubação no solo, você também pode aplicar adubos foliares na trapoeraba roxa. Esses adubos são pulverizados diretamente nas folhas da planta e são rapidamente absorvidos. Certifique-se de usar um adubo foliar adequado para plantas ornamentais e siga as instruções de diluição e aplicação do produto.<br><br>Matéria orgânica: Além dos fertilizantes químicos, a adição regular de matéria orgânica, como composto, húmus de minhoca ou restos vegetais decompostos, é benéfica para melhorar a estrutura do solo e fornecer nutrientes gradualmente.<br><br>É importante lembrar de não exceder a dosagem recomendada do fertilizante, pois o excesso de nutrientes pode prejudicar a planta. Sempre leia e siga as instruções do produto utilizado.<br><br>A adubação da trapoeraba roxa deve ser adaptada às condições específicas do solo e do ambiente em que a planta está cultivada. Se você tiver dúvidas sobre a adubação adequada para a sua região ou condições de cultivo, é recomendável consultar um especialista em jardinagem local para obter orientações mais precisas.';
}

function plant() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'Trapoeraba Roxa';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A trapoeraba roxa, cientificamente conhecida como Tradescantia pallida, é uma planta exuberante e de grande beleza encontrada em várias regiões tropicais do mundo. Também chamada de lambari-roxo, ou apenas "roxa", a trapoeraba roxa conquista os corações dos amantes da flora devido à sua coloração vibrante e ao seu aspecto único.<br><br>Originária do México e da América Central, a trapoeraba roxa é uma planta perene que pertence à família Commelinaceae. Ela apresenta caules rastejantes e folhas lanceoladas, de coloração roxo-avermelhada intensa, que se destacam em meio a outros elementos do jardim. As flores são pequenas, brancas e surgem esporadicamente, mas são as folhas que atraem a atenção.<br><br>Uma das características mais interessantes da trapoeraba roxa é a sua adaptabilidade a diferentes condições de cultivo. Ela é capaz de prosperar tanto em áreas ensolaradas como em locais com sombra parcial, tornando-a uma escolha versátil para jardineiros e paisagistas. Além disso, ela pode ser cultivada em vasos, canteiros ou como forração, o que contribui para a sua popularidade em projetos paisagísticos.<br><br>Outra vantagem da trapoeraba roxa é a facilidade de propagação. Ela pode ser multiplicada por estaquia, ou seja, basta cortar um pedaço do caule e plantá-lo em um substrato adequado para que se desenvolva uma nova planta. Essa característica faz com que a trapoeraba roxa seja uma ótima opção para quem deseja expandir seu jardim sem muito esforço.<br><br>Além de seu valor estético, a trapoeraba roxa também tem sido objeto de estudos científicos devido às suas propriedades medicinais. Ela contém compostos bioativos, como flavonoides e alcaloides, que podem apresentar efeitos antioxidantes e anti-inflamatórios. Algumas pesquisas sugerem que esses compostos podem contribuir para o combate a doenças cardiovasculares e inflamações no organismo humano.<br><br>Apesar de todos esses aspectos positivos, é importante ressaltar que a trapoeraba roxa pode se tornar invasiva em determinadas regiões. Em locais onde as condições são favoráveis ao seu crescimento descontrolado, a planta pode se espalhar rapidamente, competindo com espécies nativas e causando impactos negativos no ecossistema local. Portanto, é necessário estar atento e controlar seu cultivo em áreas onde possa representar uma ameaça ambiental.';
}
function pragas() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'PRAGAS E DOENÇAS';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A trapoeraba roxa geralmente é uma planta resistente a pragas e doenças, mas como qualquer planta, está sujeita a algumas questões. Aqui estão algumas pragas e doenças comuns que podem afetar a trapoeraba roxa:<br><br>Cochonilhas: As cochonilhas são pequenos insetos que se alimentam da seiva da planta, deixando manchas pegajosas e causando um enfraquecimento geral. Elas podem ser identificadas como pequenos pontos brancos, marrons ou pretos agrupados nas folhas e caules. Para controlar as cochonilhas, você pode remover manualmente com um pano úmido ou usar um inseticida adequado.<br><br>Pulgões: Os pulgões são insetos pequenos e de corpo mole que se alimentam da seiva das plantas. Eles podem causar deformação das folhas e transmitir doenças. O uso de água com sabão ou um inseticida específico para pulgões pode ajudar a controlar a infestação.<br><br>Ácaros: Ácaros são pragas microscópicas que se alimentam das folhas, causando manchas amareladas e perda de vigor. Eles podem ser controlados com a aplicação de um óleo hortícola ou com um inseticida específico para ácaros.<br><br>Podridão das raízes: O excesso de umidade no solo pode levar ao apodrecimento das raízes da trapoeraba roxa. Isso pode ocorrer se o solo não tiver uma boa drenagem. Evite regar em excesso e certifique-se de que o solo esteja bem drenado para prevenir a podridão das raízes.<br><br>Manchas foliares: Algumas doenças fúngicas, como manchas foliares, podem afetar a trapoeraba roxa, resultando em manchas escuras ou necrosadas nas folhas. Para prevenir ou controlar doenças fúngicas, evite molhar as folhas durante a irrigação, mantenha uma boa circulação de ar e, se necessário, aplique um fungicida recomendado.<br><br>É importante estar atento a qualquer sinal de infestação ou doença nas plantas e agir rapidamente para controlar o problema. Além disso, manter a planta saudável por meio de práticas adequadas de cuidados, como rega adequada, fertilização equilibrada e boa ventilação, pode ajudar a fortalecer a resistência da trapoeraba roxa contra pragas e doenças.<br><br>Se você estiver enfrentando um problema específico com sua trapoeraba roxa, é recomendável consultar um especialista em jardinagem ou agricultura local para obter orientações mais precisas e específicas para sua região.';
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
  var loginCadHamburguer = document.getElementById('LoginCadHamb')
  var accountIconElement = document.querySelector('.account-icon');
  var nomeUsuarioLog = JSON.parse(sessionStorage.getItem('nomeUsuarioLog'));

  if (nomeUsuarioLog) {
      loginCadElement.innerHTML = nomeUsuarioLog.nomeUser; 
      loginCadElement.removeAttribute('href');
      loginCadHamburguer.innerHTML = nomeUsuarioLog.nomeUser;
      loginCadElement.removeAttribute('href')

  } else {

      loginCadElement.innerHTML = 'Login / Cadastro'; 
      accountIconElement.style.display = 'block'; 

  }
}


  