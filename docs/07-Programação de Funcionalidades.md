# 7. Funcionalidades do Sistema (Telas)
Apresentaremos a seguir as telas desenvolvidas para cada uma das funcionalidades do sistema, listadas anteriormente. O respectivo endereço (URL) e outras orientações de acesso serão disponibilizadas na sequência.

## Página Principal (RF-04)
A página principal da aplicação apresenta as categorias mais procuradas, conteúdos do blog em destaque, seção sobre a área de membro e seus benefícios, seção para usuários entrar em contato. A tela desenvolvida com HTML e CSS é apresentada na imagem abaixo.

![screencapture-icei-puc-minas-pmv-ads-github-io-pmv-ads-2023-1-e1-proj-web-t1-projeto-cultivo-de-plantas-index-html-2023-06-11-16_14_48](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t1-projeto-cultivo-de-plantas/assets/107009327/34f8d991-bc12-494e-9367-aec694440b2b)
_Tela desenvolvida por Luana Pina | Funcionalidade 1 - Página Inicial_

<ins>**Requisitos atendidos**</ins>
- RF-04

<ins>**Artefatos da funcionalidade**</ins>
- index.html
- style.css
- java.js
- account_circle.png
- Hero-Image.png
- icon-back-to-top.png
- icon-chevron.png
- icons8-girassol-16.png
- Logo-Planty.png
- plantas-grandes.png
- plantas-para-casa.png
- plantas-para-jardim.png
- plantas-pequenas.png
- search.png
- seja-um-membro.png
- tudo-sobre-cactos.png
- tudo-sobre-roseiras.png
- tudo-sobre-samambaias.png

<ins>**Estrutura de Dados**</ins>
```
  var plantas = ['Bromélia', 'Cacto', 'Girassol', 'Cebola', 'Espada_de_são_Jorge', 'Hera_Inglesa', 'Hortência', 'Iresine', 'Jasmim', 'Lavanda' , 'Lírio', 'Neoregélia', 'Orquidea','Palmeira_Dama','Pitanga' ,'Roseira' ,'Samambaia','Tomate','Torênia','Trapoeraba'];
  localStorage.setItem('meuVetor', JSON.stringify( plantas));
```

<ins>**Instruções de acesso**</ins>
- Através de um navegador da internet, acesse a seguinte URL: [CLIQUE AQUI.](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t1-projeto-cultivo-de-plantas/)

## Tela do Blog (RF-01)
A tela do blog apresenta conteúdos que possuem informações dos cuidados necessários com as plantas, como adubagem, solo, poda e doenças. A tela desenvolvida com HTML e CSS é apresentada na imagem abaixo.

![Page Blog](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t1-projeto-cultivo-de-plantas/assets/114627827/c0b548ff-d1b5-42df-9005-232839e0fd4d)
_Tela desenvolvida por Gabriel Bruno | Funcionalidade 2 - Tela do Blog_

<ins>**Requisitos atendidos**</ins>
- RF-01

<ins>**Artefatos da funcionalidade**</ins>
- Index.html
- Style.css
- script.js
- arrow_back_ios_new.png
- btn_close.png
- cactus.png
- Espada_de_são_jorge.png
- Hera_inglesa.png
- Hortência.png
- jasmin.png
- Lirio_da_paz.png
- lirio.png
- Palmeira-dama.png
- Planty-logo-1.ico
- Planty-logo-1.png
- Roseira.png
- samambaia.png

<ins>**Instruções de acesso**</ins>
- Através de um navegador da internet, acesse a seguinte URL: [CLIQUE AQUI.](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t1-projeto-cultivo-de-plantas/src/Blog%20e%20Posts/Blog/Index.html)


## Tela do Post (RF-01)
A tela do post apresenta informações aos cuidados necessários, como adubagem, solo, poda e doenças, da planta escolhida pelo usuário. A tela desenvolvida com HTML e CSS é apresentada na imagem abaixo.

![Page post](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t1-projeto-cultivo-de-plantas/assets/114627827/a1f34a75-c4f9-47c6-8b06-63662d645abe)
_Tela desenvolvida por Gabriel Bruno | Funcionalidade 3 - Tela do Post_

<ins>**Requisitos atendidos**</ins>
- RF-01

<ins>**Artefatos da funcionalidade**</ins>
- index.html
- style.css
- script.js
- Roseira.png
- Roseira2.png
- Roseira3.png

<ins>**Estrutura de Dados**</ins>
```
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
```

<ins>**Instruções de acesso**</ins>
- Através de um navegador da internet, acesse a seguinte URL: [CLIQUE AQUI.](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t1-projeto-cultivo-de-plantas/src/Blog%20e%20Posts/Posts/Roseira/Index.html)


## Catálogo (RF-01)
A tela de catálogo apresenta todas as plantas cdastradas na aplicação. A tela desenvolvida com HTML e CSS é apresentada na imagem abaixo.

![Page Catálogo](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t1-projeto-cultivo-de-plantas/assets/114627827/09c885f6-14e1-4e84-ba0a-3643e608d359)
_Tela desenvolvida por Gabriel Bruno | Funcionalidade 4 - Catálogo_

<ins>**Requisitos atendidos**</ins>
- RF-01

<ins>**Artefatos da funcionalidade**</ins>
- index.html
- style.css
- script.js
- Publicação1.png
- Publicação2.png
- Publicação3.png
- Bromélia.png
- cactus.png
- Cebola.png
- Espada_de_são_jorge.png
- Girassol.png
- Hera_inglesa.png
- Hortência.png
- Iresine.png
- jasmin.png
- Lavanda.png
- Lirio_da_paz.png
- lirio.png
- Neoregélia.png
- Orquidea.png
- Palmeira-dama.png
- Pitanga.png
- Roseira.png
- samambaia.png
- Tomate.png
- Torênia.png
- Trapoeraba_roxa.png

<ins>**Estrutura de Dados**</ins>
```
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
```

<ins>**Instruções de acesso**</ins>
- Através de um navegador da internet, acesse a seguinte URL: [CLIQUE AQUI.](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t1-projeto-cultivo-de-plantas/src/Blog%20e%20Posts/Cat%C3%A1logo/Index.html)


## Tela de Login (RF-03)
A tela de login apresenta campos para usuários já cadastrados, acessarem sua conta de membro da aplicação. A tela desenvolvida com HTML e CSS é apresentada na imagem abaixo.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t1-projeto-cultivo-de-plantas/assets/127251265/5fdaf284-566e-407c-98d5-44387bf58f14)
_Tela desenvolvida por Tayane Milagres e André Guilherme | Funcionalidade 5 - Tela de Login_

<ins>**Requisitos atendidos**</ins>
- RF-03

<ins>**Artefatos da funcionalidade**</ins>
- login-planty.html
- login-planty.css
- login.js
- img-login.png


<ins>**Estrutura de Dados**</ins>
```
var listaCad = []
var userValid = {
        email: '' ,
        senha:  '',
        usuario: ''
    }
listaCad = JSON.parse(localStorage.getItem("ListaCad"))  
listaCad.forEach((item) => {
  if(emailLog.value == item.emailCad && senhaLog.value == item.senhaCad.value){
    userValid = {
      email: item.emailCad ,
      senha: item.senhaCad ,
      usuario: item.usuarioCad
    }
  }
});

```
<ins>**Instruções de acesso**</ins>
- Através de um navegador da internet, acesse a seguinte URL: [CLIQUE AQUI.](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t1-projeto-cultivo-de-plantas/src/Login%20page/login-planty.html)

## Tela de Cadastro (RF-03)
A tela de cadastro permite que novos usuários criem sua conta de membro da aplicação. A tela desenvolvida com HTML e CSS é apresentada na imagem abaixo.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t1-projeto-cultivo-de-plantas/assets/127251265/250d6a33-61d5-4c00-8cfc-ab702bdc2ff6)
_Tela desenvolvida por Tayane Milagres e André Guilherme | Funcionalidade 6 - Tela de Cadastro_

<ins>**Requisitos atendidos**</ins>
- RF-03

<ins>**Artefatos da funcionalidade**</ins>
- cadastro-page.html
- cadastro-page.css
- cadastro.js

<ins>**Estrutura de Dados**</ins>
```
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
      }

```
<ins>**Instruções de acesso**</ins>
- Através de um navegador da internet, acesse a seguinte URL: [CLIQUE AQUI.](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t1-projeto-cultivo-de-plantas/src/Cadastro%20page/cadastro-page.html)

## Tela de Esqueci minha Senha (RF-06)
A tela de esqueci minha senha apresenta campos para usuários já cadastrados, mas que não conseguem acessar sua conta de membro, possam solicitar uma nova senha. A tela desenvolvida com HTML e CSS é apresentada na imagem abaixo.

![Esqueci-minha-senha](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t1-projeto-cultivo-de-plantas/assets/127165847/1a8aac1c-1dac-4701-92df-6cc7550ca408)
_Tela desenvolvida por João Vitor | Funcionalidade 7 - Tela de Esqueci minha Senha_

<ins>**Requisitos atendidos**</ins>
- RF-06 

<ins>**Artefatos da funcionalidade**</ins>
- index.html
- style.css
- media.query.css
- main.js
- cravo.jpg
<ins>**Estrutura de Dados**</ins>
```
function alterarSenha() {
  var usuarioLog = document.getElementById('iusuario').value;
  var novaSenha = document.getElementById('isenha');
  
  var ListaCad = [];
  
  ListaCad = JSON.parse(localStorage.getItem("ListaCad"));
  
  ListaCad.forEach(item => {
    if (usuarioLog == item.usuarioCad) {
      item.senhaCad = novaSenha.value;
      localStorage.setItem("ListaCad", JSON.stringify(ListaCad));
    }
  });
}
```
<ins>**Instruções de acesso**</ins>
- Através de um navegador da internet, acesse a seguinte URL: [CLIQUE AQUI.](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t1-projeto-cultivo-de-plantas/src/Esqueci-minha-senha/index.html)

## Tela de Contato (RF-05)
A tela de contato apresenta campos para usuários entrarem em contato com os desenvolvedores da aplicação, a fim de tirarem dúvidas. Além disso, também é disponibilizado o acesso ao nosso canal no Telegram. A tela desenvolvida com HTML e CSS é apresentada na imagem abaixo.

![Contato-page](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t1-projeto-cultivo-de-plantas/assets/107646150/8375adc0-451b-4782-87d7-847bc55b7dbd)
_Tela desenvolvida por Bruna Santos | Funcionalidade 8 - Tela de Contato_

<ins>**Requisitos atendidos**</ins>
- RF-05

<ins>**Artefatos da funcionalidade**</ins>
- contato-page.html
- contato-style.css
- reset.css
- script.js
- closeup-plantas.jpg

<ins>**Estrutura de Dados**</ins>
```
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
```
<ins>**Instruções de acesso**</ins>
- Através de um navegador da internet, acesse a seguinte URL: [CLIQUE AQUI.](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t1-projeto-cultivo-de-plantas/src/Contato/contato-page.html)

## Tela do Quem somos (RF-02)
A página de quem somos apresenta um breve texto de apresentação do projeto. A tela desenvolvida com HTML e CSS é apresentada na imagem abaixo.

![Quem somos](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t1-projeto-cultivo-de-plantas/assets/107646150/6e40b130-6e8e-4a38-9e96-220843725cfb)
_Tela desenvolvida por Bruna Santos | Funcionalidade 9 - Quem somos_


<ins>**Requisitos atendidos**</ins>
- RF-02

<ins>**Artefatos da funcionalidade**</ins>
- about-us.html
- about-us-style.css
- reset.css
- script.js
- planty-content.jpg

<ins>**Estrutura de Dados**</ins>
```
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
```
<ins>**Instruções de acesso**</ins>
- Através de um navegador da internet, acesse a seguinte URL: [CLIQUE AQUI.](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t1-projeto-cultivo-de-plantas/src/Quem-somos/about-us.html)
