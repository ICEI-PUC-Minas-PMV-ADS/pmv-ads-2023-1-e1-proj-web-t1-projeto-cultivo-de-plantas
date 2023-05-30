const form = document.getElementById('total-form')
const esquerda = document.getElementById('esquerda')
const direita = document.getElementById('direita')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const usuario = document.getElementById('usuario')
const celular = document.getElementById('celular')
const senha = document.getElementById('senha')
const confirmSenha = document.getElementById('confirmSenha')


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



   //NOME

   if(nomeValue === "") {
      //mostrar o erro
      //adicionar a classe erro
      errorValidation(nome, 'Preencha esse campo')
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
   }
   else{
      sucessoValidation(email)
   }

   //USUARIO

   if(usuarioValue === "") {
      errorValidation(usuario, 'Preencha esse campo')
   }

   else if(usuarioValue.length <= 2){     
      errorValidation(usuario, 'Precisa ter no mínimo 3 caracteres')
   }

   else{     
      sucessoValidation(usuario)

   }

   //CELULAR

   if(celularValue === "") {
      errorValidation(celular, 'Preencha esse campo')
   }
   else{
      sucessoValidation(celular)

   }

   //SENHA

   if(senhaValue === "") {
      errorValidation(senha, 'Preencha esse campo')
   }
   else if(senhaValue.length < 7){
      errorValidation(senha, 'Senha deve ter no mínimo 8 caracteres')
   }
   else {
      sucessoValidation(senha)
   }

   //CONFIRMAR SENHA

   if(confirmSenhaValue === "") {
      errorValidation(confirmSenha, 'Preencha esse campo')
   }
   else if (senhaValue !== confirmSenhaValue) {
      errorValidation(confirmSenha, 'As senhas estão erradas')
   }
   else{
      sucessoValidation(confirmSenha)
   }



   if (nomeValue && emailValue && usuarioValue && celularValue && senhaValue){

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




