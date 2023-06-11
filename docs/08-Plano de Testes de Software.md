# Plano de Testes de Software

Os requisitos para realização dos testes de software são:

- Site publicado na Internet
- Navegador da Internet - Chrome, Firefox ou Edge
- Conectividade de Internet para acesso às plataformas (APISs)

Os testes funcionais a serem realizados no site são descritos a seguir.

| **Caso de Teste** 	| **CT-01 – Envio de mensagem para o suporte** 	|
|:---:	|:---:	|
| **Requisitos associados:** | RF-05:	A aplicação deve incluir uma página de suporte ao usuário. |
| **Objetivo do Teste** 	| Verificar se o sistema permite que o usuário consiga enviar uma mensagem para o suporte. 	|
| **Passos** 	| 1. Acessar o navegador; <br>2. Informar o endereço do site;<br>3. Visualizar a página Home;<br>4. Clicar em fale conosco;<br> 5. Preencher os campos necessários do formulário. 	|
| **Critérios de Êxito** 	| O usuário deve receber um aviso de "mensagem enviada com sucesso" assim que ela for enviada. |

<br>

| **Caso de Teste** 	| **CT-2: Resete de senha com sucesso** 	|
|:---:	|:---:	|
| **Tela** | Esqueci minha senha |
| **Requisitos associados:** | RF-06: A aplicação deve incluir uma página de suporte caso o usuário esqueça sua senha. |
| **Objetivo do Teste** 	| Verificar se o sistema assegura e corrobora os dados inseridos, permitindo assim que o usuário altere sua senha com sucesso. 	|
| **Passos** 	| 1. Clique em "Esqueci minha senha" na tela de login; <br>2. Preencha todos os seguintes campos de maneira correta: E-mail, Nova Senha, Validação da nova senha;<br>3. Após preencher todos os campos corretamente, clique no botão entrar. A seguinte mensagem deverá aparecer: "A senha foi alterada com sucesso! :)". Dentro de alguns segundos, o usuário será redirecionado ao blog. |
| **Critérios de Êxito** 	| O sistema fará a alteração da senha do usuário no localstorage, substituindo a senha antiga pela nova senha cadastrada e em seguida redirecionará o usuário ao blog. |

<br>

| **Caso de Teste** 	| **CT-3: O código ou senhas não conferem** 	|
|:---:	|:---:	|
| **Tela** | Esqueci minha senha |
| **Requisitos associados:** | RF-06: A aplicação deve incluir uma página de suporte caso o usuário esqueça sua senha. |
| **Objetivo do Teste** 	| Verificar se o sistema capta as informações descoincidentes nos campos e-mail, nova senha e validação de senha. Se tudo ocorrer bem, após o usuário clicar em "entrar", o sistema deve apresentar a seguinte mensagem: "O email ou as senhas não conferem :(", interrompendo a entrada e o redirecionamento do usuário. 	|
| **Passos** 	| 1. Clique em "Esqueci minha senha" na tela de login; <br>2. Preencha TODOS ou UM dos seguintes campos com informações divergentes: E-mail, Nova Senha, Validação da nova senha;<br>3. Após preencher todos os campos, clique no botão entrar. A seguinte mensagem deverá aparecer: "O e-mail ou as senhas não conferem :(". O usuário deverá preencher todos os campos novamente de maneira correta para que CT-01 ocorra. |
| **Critérios de Êxito** 	| O sistema impede que o usuário efetue a alteração de senha e apresenta a seguinte mensagem: "O e-mail ou as senhas não conferem :(". Além disso, o sistema também barrará o redirecionamento ao blog. |

<br>

| **Caso de Teste** 	| **CT-4: Campo em branco e/ou não cumprimento dos requisitos de senha** 	|
|:---:	|:---:	|
| **Tela** | Esqueci minha senha |
| **Requisitos associados:** | RF-06: A aplicação deve incluir uma página de suporte caso o usuário esqueça sua senha. |
| **Objetivo do Teste** 	| Verificar se o sistema capta as informações descoincidentes nos campos e-mail, nova senha e validação de senha. Se tudo ocorrer bem, após o usuário clicar em "entrar", o sistema deve apresentar alguma das seguintes mensagens: "Aumente o texto para 8 caracteres, no momento você está usando x" E/OU "Preencha esse campo"	|
| **Passos** 	| 1. Clique em "Esqueci minha senha" na tela de login; <br>2. Neste caso, é necessário que o usuário deixe de preencher um dos campos abaixo ou não cumpra com os requisitos de senha: E-mail, Nova Senha, Validação da nova senha;<br>3. Clique no botão entrar e uma das seguintes mensagens deverá aparecer: "Aumente o texto para 8 caracteres, no momento você está usando x" ou "Preencha esse campo". O usuário deverá preencher todos os campos novamente, de maneira correta para que CT-01 ocorra. |
| **Critérios de Êxito** 	| O sistema impede que o usuário efetue a alteração de senha e apresenta alguma das seguintes mensagens: "Aumente o texto para 8 caracteres, no momento você está usando x" ou "Preencha esse campo". Além disso, o sistema também barrará o redirecionamento ao blog. |

<br>

| **Caso de teste** |  **CT-5: Login em uma conta cadastrada** |
|:---:	|:---:	|
| **Tela** | Login |
| **Requisitos associados** | RF-03: A aplicação deverá ter uma página de login e registro de novos usuários |
| **Objetivo** | Verificar se o sistema reconhece os dados inseridos e permite que o usúario faça login |
| **Passos**   | 1. Acessar o navegador <br> 2. Informar o endereço do site <br> 3. Visualizar a página Home <br> 4. Clicar no Login/Cadastro para acessar a tela de login <br> 5. Preencher os campos "E-mail" e "Senha" <br> 6. Clicar no botão "Entrar" |
| **Critérios de Êxito** | O sistema conecta o usuário à conta cadastrada, emite uma mensagem de "Login realizado com sucesso! Você será redirecionado para o Blog :)" e direciona o usuário para a tela Blog |

<br>

| **Caso de teste** |  **CT-6: Login em uma conta não cadastrada** |
|:---:	|:---:	|
| **Tela** | Login |
| **Requisitos associados** | RF-03: A aplicação deverá ter uma página de login e registro de novos usuários |
| **Objetivo** | Verificar se o sistema bloqueia o acesso para usuários não cadastrados |
| **Pré condição** | Usuário não possuir seus dados cadastrados no sistema |
| **Passos**   | 1. Acessar o navegador <br> 2. Informar o endereço do site <br> 3. Visualizar a página Home <br> 4. Clicar no Login/Cadastro para acessar a tela de login <br> 5. Preencher os campos "E-mail" e "Senha" com dados não cadastrados <br> 6. Clicar no botão "Entrar" |
| **Critérios de Êxito** | O sistema não permite o login, emite uma mensagem de "Email ou senha inválidos" e não direciona o usuário para a tela Blog |

<br>

| **Caso de teste** |  **CT-7: Cadastro de uma nova conta de usuário** |
|:---:	|:---:	|
| **Tela** | Cadastro |
| **Requisitos associados** | RF-03: A aplicação deverá ter uma página de login e registro de novos usuários |
| **Objetivo** |  Verificar se o sistema cadastra corretamente os dados inseridos pelo usuário para a criação de uma nova conta |
| **Passos**   | 1. Acessar o navegador <br> 2. Informar o endereço do site <br> 3. Visualizar a página Home <br> 4. Clicar no Login/Cadastro para acessar a tela de login <br> 5. Clicar no botão "Cadastrar" para redirecionar para a tela de cadastro <br> 6. Preencher todos os campos com as informações necessárias <br> 7. Clicar no botão "Cadastrar" |
| **Critérios de Êxito** | O sistema cadastra os dados e emite a mensagem "Cadastrado com sucesso! Você será redirecionado para o login automaticamente" e direciona o usuário para a tela de login |

<br>

| **Caso de teste** |  **CT-8: Cadastrar uma conta sem preencher nenhum campo do formulário** |
|:---:	|:---:	|
| **Tela** | Cadastro |
| **Requisitos associados** | RF-03: A aplicação deverá ter uma página de login e registro de novos usuários |
| **Objetivo** | Verificar se o sistema não cadastra o usuário e emite uma mensagem avisando que é necessario preencher os campos |
| **Passos**   | 1. Acessar o navegador <br> 2. Informar o endereço do site <br> 3. Visualizar a página Home <br> 4. Clicar no Login/Cadastro para acessar a tela de login <br> 5. Clicar no botão "Cadastrar" para redirecionar para a tela de cadastro <br> 6. Não preencher os campos <br> 7.  Clicar no botão "Cadastrar" |
| **Critérios de Êxito** | O sistema não cadastra o usuário e emite uma mensagem de "Preencha esse campo" em todos os campos do formulário  |

<br>

| **Caso de teste** |  **CT-9: Navegação Blog** |
|:---:	|:---:	|
| **Tela** | BLOG |
| **Requisitos associados** | RF-01: A aplicação deverá ter um catálogo com espécies de plantas mais comumente cultivadas no Brasil, com informações aos cuidados necessários, como: rega, podas e adubagem. |
| **Objetivo** | Verificar se os posts estão sendo apresentadas corretamente na página. |
| **Passos**   | 1. Acessar o navegador. <br> 2. Informar o endereço do site. <br> 3. Acessar página Blog. <br> 4. Rolar tela para baixo. |
| **Critérios de Êxito** | Quando o usuário rolar a página para baixo, ele deverá ter acesso a 3 posts sobre plantas. |

<br>

| **Caso de teste** |  **CT-10: Navegação Catálogo** |
|:---:	|:---:	|
| **Tela** | Catálogo |
| **Requisitos associados** | RF-01: A aplicação deverá ter um catálogo com espécies de plantas mais comumente cultivadas no Brasil, com informações aos cuidados necessários, como: rega, podas e adubagem. |
| **Objetivo** | Verificar se as 20 plantas estão sendo mostradas corretamente na página. |
| **Passos**   | 1. Acessar o navegador. <br> 2. Informar o endereço do site. <br> 3. Acessar página Blog. <br> 4. Acessar o segundo post sobre o catálogo. |
| **Critérios de Êxito** | Quando o usuário rolar a página para baixo, ele deverá ter acesso a 20 posts sobre plantas. |

<br>

| **Caso de teste** |  **CT-11: Navegação Post** |
|:---:	|:---:	|
| **Tela** | POST |
| **Requisitos associados** | RF-01: A aplicação deverá ter um catálogo com espécies de plantas mais comumente cultivadas no Brasil, com informações aos cuidados necessários, como: rega, podas e adubagem. |
| **Objetivo** | O usuário deverá conseguir acessar sobre a poda, adubagem, solo e outras caracteristicas de variados tipos de plantas. |
| **Passos**   | 1. Acessar o navegador. <br> 2. Informar o endereço do site. <br> 3. Clicar em qualquer post sobre plantas. <br> 4. Acessar poda, solo, adubagem ou pragas e doenças para saber mais sobre a planta escolhida. |
| **Critérios de Êxito** | Quando o usuário clicar em poda, solo, adubagem ou pragas e doenças deverá conseguir ler sobre essas informações. |

<br>

| **Caso de teste** |  **CT-12: Página Inicial** |
|:---:	|:---:	|
| **Tela** | Página Inicial |
| **Requisitos associados** | RF-04: A aplicação deverá apresentar uma página inicial (home) que inclua seções de contato, blog, posts sobre plantas e suporte. |
| **Objetivo** | O usuário deverá conseguir acessar a página inicial e, ao clicar nos links, ser redirecionado para onde deseja. |
| **Passos**   | 1. Acessar o navegador. <br> 2. Informar o endereço do site. <br> 3. Clicar em qualquer botão da página. <br> 4. Ser redirecionado para a página escolhida. |
| **Critérios de Êxito** | Quando o usuário clicar em qualquer botão ou link na página inicial, ele deverá ser redirecionado para a página desejada. |
