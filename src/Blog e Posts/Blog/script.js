
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

 


var carousel = document.getElementById('carousel_first')
var carousel_dois = document.getElementById('carousel_second')
var btn_right = document.getElementById('rigth_btn')
var btn_left = document.getElementById('left_btn')


btn_right.addEventListener('click', clicar)

function clicar(){
   carousel.style.display = 'none'
   carousel_dois.style.display = 'flex'

}
btn_left.addEventListener('click', voltar)

function voltar(){
   carousel.style.display = 'flex'
   carousel_dois.style.display = 'none'

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










