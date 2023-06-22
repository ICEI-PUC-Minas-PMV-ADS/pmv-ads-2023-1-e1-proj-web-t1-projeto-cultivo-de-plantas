var itemURLs = {
   Bromélia: '../Blog e Posts/Posts/Bromélia/Index.html',
   Espada_de_são_Jorge: '../Blog e Posts/Posts/Espada-de-são-jorge/index.html',
   Girassol: '../Blog e Posts/Posts/Girassol/Index.html',
   Cacto: '../Blog e Posts/Posts/Cacto/Index.html',
   Cebola: '../Blog e Posts/Posts/Cebola/Index.html',
   Hera_Inglesa: '../Blog e Posts/Posts/Hera-Inglesa/Index.html',
   Hortência: '../Blog e Posts/Posts/Hortência/Index.html',
   Iresine: '../Blog e Posts/Posts/Iresine/Index.html',
   Jasmim: '../Blog e Posts/Posts/Jasmim/Index.html',
   Lavanda: '../Blog e Posts/Posts/Lavanda/Index.html',
   Lírio: '../Blog e Posts/Posts/Lírio/Index.html',
   Neoregélia: '../Blog e Posts/Posts/Neoregélia/Index.html',
   Orquidea: '../Blog e Posts/Posts/Orquidea/Index.html',
   Palmeira_Dama: '../Blog e Posts/Posts/Palmeira-Dama/Index.html',
   Pitanga: '../Blog e Posts/Posts/Pitanga/Index.html',
   Roseira: '../Blog e Posts/Posts/Roseira/Index.html',
   Samambaia: '../Blog e Posts/Posts/Samambaia/Index.html',
   Tomate: '../Blog e Posts/Posts/Tomate/Index.html',
   Torênia: '../Blog e Posts/Posts/Torênia/Index.html',
   Trapoeraba: '../Blog e Posts/Posts/Trapoeraba/Index.html'
 };
 
 var plantas = ['Bromélia', 'Cacto', 'Girassol', 'Cebola', 'Espada-de-são-Jorge', 'Hera_Inglesa', 'Hortência', 'Iresine', 'Jasmim', 'Lavanda' , 'Lírio', 'Neoregélia', 'Orquidea','Palmeira_Dama','Pitanga' ,'Roseira' ,'Samambaia','Tomate','Torênia','Trapoeraba'];
 localStorage.setItem('meuVetor', JSON.stringify(plantas));
 
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
 
   document.addEventListener('click', function(event) {
     var searchBar = document.getElementById('searchInput');
     var searchResults = document.getElementById('searchResults');
 
     // Verifica se o clique ocorreu fora da barra de pesquisa
     if (event.target !== searchBar && !searchBar.contains(event.target)) {
       // Limpa os resultados da pesquisa
       searchResults.innerHTML = '';
     }
   });
 });
 




// VALIDAÇÕES

const form = document.getElementById('total-form')
const esquerda = document.getElementById('esquerda')
const direita = document.getElementById('direita')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const usuario = document.getElementById('usuario')
const celular = document.getElementById('celular')
const senha = document.getElementById('senha')
const confirmSenha = document.getElementById('confirmSenha')
let msgSuccess = document.getElementById('msgSuccess')

form.addEventListener('submit', (e) =>  {
   e.preventDefault()

   checkInputs()

})



function checkInputs() {
   const nomeValue = nome.value.trim()
   const emailValue = email.value.trim()
   const usuarioValue = usuario.value.trim()
   const celularValue = celular.value.trim()
   const senhaValue = senha.value.trim()
   const confirmSenhaValue = confirmSenha.value.trim()

   let validacao = true

   //NOME

   if(nomeValue === "") {
      //mostrar o erro
      //adicionar a classe erro
      errorValidation(nome, 'Preencha esse campo')

      validacao = false
   }
   else{
      //adicionar classe suce
      sucessoValidation(nome)
   }

   //EMAIL

   if(emailValue === "") {
      //mostrar o erro
      //adicionar a classe erro
      errorValidation(email, 'Preencha esse campo')
      
      validacao = false
   }

   else if (!/^[\w\.-]+@\w+\.\w+$/.test(emailValue)) {
      errorValidation(email, 'Digite um endereço de e-mail válido');
      validacao = false;
   }

   else{
      sucessoValidation(email)
   }

   //USUARIO

   if(usuarioValue === "") {
      errorValidation(usuario, 'Preencha esse campo')

      validacao = false
   }

   else if(usuarioValue.length <= 2){     
      errorValidation(usuario, 'Precisa ter no mínimo 3 caracteres')

      validacao = false
   }

   else{     
      sucessoValidation(usuario)

   }

   //CELULAR

   if(celularValue === "") {
      errorValidation(celular, 'Preencha esse campo')

      validacao = false
   }

   else if (celularValue.length < 10){
      errorValidation(celular, 'Preencha o campo com no mínimo 10 caracteres')

      validacao = false

   }

   else{
      sucessoValidation(celular)

   }

   //SENHA

   if(senhaValue === "") {
      errorValidation(senha, 'Preencha esse campo')

      validacao = false
   }
   else if(senhaValue.length < 7){
      errorValidation(senha, 'Senha deve ter no mínimo 8 caracteres')

      validacao = false
   }
   else {
      sucessoValidation(senha)
   }

   //CONFIRMAR SENHA

   if(confirmSenhaValue === "") {
      errorValidation(confirmSenha, 'Preencha esse campo')

      validacao = false
   }
   else if (senhaValue !== confirmSenhaValue) {
      errorValidation(confirmSenha, 'As senhas estão erradas')

      validacao = false
   }
   else{
      sucessoValidation(confirmSenha)
   }



   if ( validacao && nomeValue && emailValue && usuarioValue && celularValue && senhaValue){

      let ListaCad = JSON.parse(localStorage.getItem("ListaCad") || "[]")

      ListaCad.push(
         {
            nomeCad: nome.value ,
            emaiCad: email.value ,
            usuarioCad: usuario.value ,
            celularCad: celular.value ,
            senhaCad: senha.value 
         }
      )

      localStorage.setItem("ListaCad", JSON.stringify(ListaCad))
      
      msgSuccess.setAttribute('style', 'display: block');
      msgSuccess.innerHTML = '<strong> Cadastrado com sucesso!<br> Você será redirecionado para o Login automáticamente :)</strong>'   
      
     
     setTimeout(()=>{
         window.location.href = "../Login page/login-planty.html"
     }, 4000)  
     
   }

}




function errorValidation(input, message){
   const form = input.parentElement;
   form.className = 'form error'

   const esquerda = input.parentElement;
   esquerda.className = 'esquerda error'

   const direita = input.parentElement;
   direita.className = 'direita error'

   const small = form.querySelector('small')
   small.innerText = message

}

function sucessoValidation(input, message) {
   const form = input.parentElement;
   form.className = 'form sucesso'

   const esquerda = input.parentElement;
   esquerda.className = 'esquerda sucesso'

   const direita = input.parentElement;
   direita.className = 'direita sucesso'

   const small = form.querySelector('small')
   small.innerText = message
}

//Menu Hamburguer
function menuShow() {
   let menuMobile = document.querySelector('.mobile-menu');
   if (menuMobile.classList.contains('open')) {
       menuMobile.classList.remove('open')
   }else{
       menuMobile.classList.add('open')
   }
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
 
