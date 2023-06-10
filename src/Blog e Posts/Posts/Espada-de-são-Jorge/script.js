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
  conteudo.innerHTML = 'A espada-de-são-jorge é uma planta que não requer muita poda, mas pode ser benéfico realizar algumas técnicas de poda para manter a planta saudável e atraente. Aqui estão algumas informações sobre a poda da espada-de-são-jorge:<br><br>Remoção de folhas mortas: A poda de folhas mortas é uma parte importante da manutenção da espada-de-são-jorge. As folhas mortas não apenas deixam a planta com uma aparência pouco atraente, mas também podem ser um local propício para doenças e pragas. Quando você notar folhas amareladas, secas ou murchas, corte-as na base da planta com uma tesoura limpa.<br><br>Corte de folhas danificadas: Se a planta sofrer danos, como rasgos ou cortes nas folhas, corte a parte danificada da folha com uma tesoura limpa. Isso impedirá que a lesão se espalhe para outras partes da folha ou da planta.<br><br>Redução do tamanho: Se a sua espada-de-são-jorge ficar muito grande ou começar a se espalhar demais, você pode reduzir o tamanho da planta cortando as folhas na base. No entanto, tenha em mente que a espada-de-são-jorge é uma planta lenta no crescimento e não requer poda frequente.<br><br>Remoção de rebentos laterais: Às vezes, a espada-de-são-jorge pode produzir rebentos laterais ou mudas que crescem a partir da base da planta. Esses rebentos podem ser removidos com cuidado e replantados em outro local, se desejado.<br><br>Corte de flores: A espada-de-são-jorge produz flores em uma haste fina, mas essas flores não são essenciais para a saúde da planta. Se preferir, pode cortar a haste de flores com uma tesoura limpa assim que as flores murcharem.<br><br>Ao podar a espada-de-são-jorge, é importante usar tesouras limpas e afiadas para evitar danificar a planta e impedir a propagação de doenças. Lembre-se de que a poda excessiva pode prejudicar a planta e afetar seu crescimento, por isso, é melhor podar moderadamente e apenas quando necessário.'
}

function solo() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'SOLO';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A espada-de-são-jorge é uma planta que pode se adaptar a uma ampla variedade de condições de solo, mas ainda assim, o solo correto é importante para manter a saúde da planta. Aqui estão algumas informações sobre o solo da espada-de-são-jorge:<br><br>Drenagem: A espada-de-são-jorge prefere solos bem drenados, para que a água não fique empoçada nas raízes. Se o solo ficar encharcado por muito tempo, as raízes podem apodrecer e a planta pode morrer. Certifique-se de que o solo tenha boa drenagem e evite regar a planta em excesso.<br><br>pH: O pH ideal para o solo da espada-de-são-jorge é neutro ou ligeiramente ácido, entre 6,0 e 7,5. Se o pH do solo for muito alto ou muito baixo, a planta pode ter dificuldade em absorver nutrientes essenciais. Você pode testar o pH do solo com um kit de teste de solo disponível em lojas de jardinagem.<br><br>Nutrientes: A espada-de-são-jorge é uma planta que pode crescer em solos pobres em nutrientes, mas ainda assim, precisa de alguns nutrientes para se manter saudável. Certifique-se de fornecer fertilizante adequado para a planta durante o período de crescimento ativo, que geralmente é na primavera e no verão. Você pode usar um fertilizante líquido solúvel em água diluído ou um adubo orgânico para cactos e suculentas.<br><br>Substrato: A espada-de-são-jorge cresce melhor em solos porosos, que permitem a drenagem adequada e a aeração das raízes. Você pode criar um substrato adequado misturando partes iguais de terra comum de jardim, areia grossa e perlita ou vermiculita. Alguns jardineiros também adicionam um pouco de carvão ativado ao substrato para ajudar a manter o solo saudável.<br><br>Vaso: Se você estiver plantando a espada-de-são-jorge em um vaso, certifique-se de que o vaso tenha furos de drenagem para permitir a drenagem adequada da água. É recomendável usar um vaso que seja apenas um pouco maior que o tamanho atual da planta, pois a espada-de-são-jorge cresce lentamente e não precisa de muito espaço.<br><br>Ao escolher o solo para a espada-de-são-jorge, lembre-se de que a planta prefere solos leves e bem drenados. Evite solos muito pesados ou compactos, que podem dificultar o crescimento e a saúde da planta. Com o solo adequado, você pode ajudar a garantir que a espada-de-são-jorge cresça forte e saudável por muitos anos.'
}
function adubagem() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'ADUBAGEM';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A espada-de-são-jorge é uma planta resistente que pode crescer em solos pobres em nutrientes, mas para mantê-la saudável e com um bom crescimento, a adubação é importante. Aqui estão algumas informações sobre a adubagem da espada-de-são-jorge:<br><br>Frequência: A espada-de-são-jorge deve ser adubada durante o período de crescimento ativo, que geralmente é na primavera e no verão. Evite adubar a planta durante o período de dormência, que ocorre no outono e no inverno.<br><br>Tipo de adubo: Existem vários tipos de adubos que você pode usar na espada-de-são-jorge. Os fertilizantes líquidos solúveis em água são uma boa opção, pois são facilmente absorvidos pelas raízes da planta. Você também pode usar um adubo orgânico específico para cactos e suculentas, que é rico em nutrientes e ajuda a melhorar a qualidade do solo.<br><br>Quantidade: É importante não exagerar na quantidade de adubo que você aplica na espada-de-são-jorge. Uma quantidade excessiva de nutrientes pode queimar as raízes e prejudicar a saúde da planta. Siga as instruções do fabricante do adubo para a quantidade apropriada a ser usada. Em geral, uma dose de adubo a cada 4-6 semanas é suficiente para manter a espada-de-são-jorge saudável.<br><br>Forma de aplicação: Existem duas formas principais de aplicação de adubo na espada-de-são-jorge: a aplicação via solo e a aplicação foliar. Na aplicação via solo, o adubo é adicionado ao substrato ao redor das raízes da planta. Na aplicação foliar, o adubo é diluído em água e aplicado diretamente nas folhas da planta. Ambas as formas são eficazes, mas a aplicação via solo é a mais comum.<br><br>Lembre-se de que a espada-de-são-jorge é uma planta resistente e não precisa de adubação em excesso para crescer bem. Com a quantidade e frequência adequadas de adubação, você pode ajudar a manter a planta saudável e com um bom crescimento.';
}

function plant() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'Espada de são Jorge';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A espada-de-são-jorge, cujo nome científico é Sansevieria trifasciata, é uma planta perene que pertence à família Asparagaceae. É originária da África tropical, mas atualmente é cultivada em muitas partes do mundo como uma planta ornamental popular devido à sua aparência atraente e facilidade de cultivo.<br><br>A espada-de-são-jorge possui folhas rígidas e afiladas, que crescem verticalmente em rosetas densas e arqueadas. As folhas são verde-escuras com listras verticais amarelas, prateadas ou brancas, e podem crescer até cerca de 1 metro de altura. A planta produz flores pequenas e perfumadas em uma haste fina e ereta, mas geralmente só floresce em condições ideais.<br><br>Uma das principais características da espada-de-são-jorge é sua resistência. É uma planta muito tolerante à seca e pode sobreviver em ambientes com pouca luz, tornando-a ideal para espaços internos com pouca iluminação natural. Além disso, é resistente a pragas e doenças e não requer muita manutenção. Essas características fazem dela uma escolha popular para pessoas que procuram uma planta fácil de cuidar.<br><br>Além de suas características práticas, a espada-de-são-jorge também é considerada uma planta de purificação do ar, pois ajuda a remover toxinas e poluentes do ar. Ela pode absorver substâncias nocivas, como formaldeído, benzeno e tricloroetileno, que são comumente encontrados em muitos produtos domésticos e materiais de construção.<br><br>Na cultura popular, a espada-de-são-jorge é associada a crenças de proteção e boa sorte. É comum encontrá-la em casas, escritórios e outros espaços, onde é acreditado que ela traz sorte, prosperidade e proteção contra energias negativas.<br><br>Em resumo, a espada-de-são-jorge é uma planta resistente e fácil de cuidar, que oferece benefícios tanto estéticos quanto práticos. É uma escolha popular para quem deseja adicionar um toque de verde em ambientes internos, enquanto também desfruta de suas qualidades purificadoras do ar e de suas associações positivas na cultura popular.';
}
function pragas() {
  var titulo = document.querySelector('.tituloTextPost h1');
  titulo.textContent = 'PRAGAS E DOENÇAS';
  
  var conteudo = document.querySelector('.contentTextPost h4');
  conteudo.innerHTML = 'A espada-de-são-jorge é uma planta resistente e geralmente não é afetada por muitas pragas e doenças, mas ainda assim, é importante ficar atento a alguns problemas que podem afetá-la. Aqui estão algumas das pragas e doenças mais comuns que afetam a espada-de-são-jorge e como preveni-las:<br><br>Cochonilha: A cochonilha é um inseto sugador que se alimenta da seiva das plantas. Ela pode ser identificada por pequenas manchas brancas ou marrons nas folhas da planta. Para prevenir a infestação de cochonilhas, verifique regularmente a espada-de-são-jorge em busca de sinais de infestação e remova manualmente os insetos, se necessário. Você também pode usar um inseticida específico para cochonilhas.<br><br>Ácaros: Os ácaros são pequenos aracnídeos que se alimentam das folhas das plantas. Eles podem ser identificados por manchas amareladas nas folhas da espada-de-são-jorge. Para prevenir a infestação de ácaros, mantenha a planta úmida e borrife água nas folhas regularmente. Se necessário, use um acaricida específico para eliminá-los.<br><br>Podridão das raízes: A podridão das raízes é causada por um fungo que se desenvolve em solos úmidos e mal drenados. Ela pode ser identificada por raízes escuras e podres, bem como folhas amareladas e murchas. Para prevenir a podridão das raízes, certifique-se de que o solo esteja bem drenado e evite regar em excesso a espada-de-são-jorge.<br><br>Manchas foliares: As manchas foliares são causadas por fungos que se desenvolvem em condições de umidade elevada. Elas podem ser identificadas por manchas marrons nas folhas da planta. Para prevenir as manchas foliares, mantenha a espada-de-são-jorge em uma área bem ventilada e evite regar as folhas da planta.<br><br>Lembre-se de que a prevenção é a melhor maneira de evitar problemas com pragas e doenças na espada-de-são-jorge. Mantenha a planta saudável e bem cuidada, e verifique-a regularmente para detectar sinais de problemas. Se necessário, trate a planta com os métodos de controle apropriados.';
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




  