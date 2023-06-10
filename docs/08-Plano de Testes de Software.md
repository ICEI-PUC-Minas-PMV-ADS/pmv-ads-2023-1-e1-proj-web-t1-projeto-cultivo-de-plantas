# Plano de Testes de Software

Os requisitos para realização dos testes de software são:

- Site publicado na Internet
- Navegador da Internet - Chrome, Firefox ou Edge
- Conectividade de Internet para acesso às plataformas (APISs)

Os testes funcionais a serem realizados no site são descritos a seguir.

| **Caso de Teste** 	| **CT-01 – Envio de mensagem para o suporte** 	|
|:---:	|:---:	|
| **Objetivo do Teste** 	| Verificar se o sistema permite que o usuário consiga enviar uma mensagem para o suporte. 	|
| **Passos** 	| 1. Acessar o navegador; <br>2. Informar o endereço do site;<br>3. Visualizar a página Home;<br>4. Clicar em fale conosco;<br> 5. Preencher os campos necessários do formulário. 	|
| **Critérios de Êxito** 	| O usuário deve receber um aviso de "mensagem enviada com sucesso" assim que ela for enviada. |

| **Caso de Teste** 	| **CT-02 – Barra de pesquisa**	|
|:---:	|:---:	|
| **Objetivo do Teste** 	| Verificar se o sistema permite que o usuário faça buscas das postagens do site na barra de pesquisa. 	|
| **Passos** 	| 1. Acessar o navegador; <br>2. Informar o endereço do site;<br>3. Visualizar a página Home;<br>4. Clicar na barra de pesquisa;<br> 5. Preencher o nome da planta desejada. 	|
| **Critérios de Êxito** 	| O usuário deve visualizar o nome da planta pesquisada e visualizar sua postagem ao clicar nela. |


_Tela esqueci minha senha_

| **CT-1: Resete de senha com sucesso** |
| :--- |
| **Requisitos associados:** RF-06: A aplicação deve incluir uma página de suporte caso o usuário esqueça sua senha. |
| **Objetivo:** Verificar se o sistema assegura e corrobora os dados inseridos, permitindo assim que o usuário altere sua senha com sucesso. |
| **Passo 1:** Clique em "Esqueci minha senha" na tela de login; |
| **Passo 2:** Preencha todos os seguintes campos de maneira correta:
|  - E-mail;
|  - Nova senha;
| - Validação da nova senha. |
| **Passo 3:** Após preencher todos os campos corretamente, clique no botão entrar. A seguinte mensagem deverá aparecer: "A senha foi alterada com sucesso! :)". Dentro de alguns segundos, o usuário será redirecionado ao blog. |
| **Critério de êxito:** O sistema fará a alteração da senha do usuário no localstorage, substituindo a senha antiga pela nova senha cadastrada e em seguida redirecionará o usuário ao blog. |


| **CT-2: O código ou senhas não conferem** |
| :--- |
| **Requisitos associados:** RF-06: A aplicação deve incluir uma página de suporte caso o usuário esqueça sua senha. |
| **Objetivo:** Verificar se o sistema capta as informações descoincidentes nos campos e-mail, nova senha e validação de senha. Se tudo ocorrer bem, após o usuário clicar em
"entrar" o sistema deve apresentar a seguinte mensagem: "O email ou as senhas não conferem :(" interdizendo a entrada e o redirecionamento do usuário. |
| **Passo 1:** Clique em "Esqueci minha senha" na tela de login; |
| **Passo 2:** Preencha TODOS ou UM dos seguintes campos com informações divergentes: |
|  - E-mail;                                                                          |
|  - Nova senha;                                                                      |
|  - Validação da nova senha.                                                         |
| **Passo 3:** Após preencher todos os campos, clique no botão entrar. A seguinte mensagem deverá aparecer: "O e-mail ou as senhas não conferem :(". O usuário deverá preencher todos os campos novamente, de maneira correta para que o CT-01 ocorra. |
| **Critérios de êxito:** O sistema impede que o usuário efetue a alteração de senha e apresenta a seguinte mensagem: "O e-mail ou as senhas não conferem :(". Além disso, o sistema também barrará o redirecionamento ao blog. |


| **CT-3: Campo em branco e/ou não cumprimento dos requisitos de senha** |
| :--- |
| **Requisitos associados**  RF-06: A aplicação deve incluir uma página de suporte caso o usuário esqueça sua senha. |
| **Objetivo:**  Verificar se o sistema capta as informações descoincidentes nos campos e-mail, nova senha e validação de senha. Se tudo ocorrer bem, após o user clicar em "entrar" o sistema deve apresentar alguma das seguintes mensagens:|
<br>
"Aumente o texto para 8 caracteres, no momento você está usando x"
<br>
"Preencha esse campo"
<br>
| interdizendo a entrada e o redirecionamento do user. |

| **Passo 1:**  Clique em "Esqueci minha senha" na tela de login; |
| **Passo 2:**  Neste caso é necessário que o usuário deixe de preencher um dos campos abaixo, ou então não cumpra com os requisitos de senha. |

|e-mail;
|Nova senha;
|Validação da nova senha. |

| **Passo 3:** | Clique em no botão entrar e uma das seguintes mensagens deverá aparecer: "Aumente o texto para 8 caracteres, no momento você está usando x" ou "Preencha esse campo". O user deverá preencher todos os campos novamente, de maneira correta para que CT-01 ocorra. |
| **Critérios de êxito:** | O sistema impede que o user efetue a alteração de senha e apresenta alguma das seguintes mensagens: "Aumente o texto para 8 caracteres, no momento você está usando x" ou "Preencha esse campo". Ademais o sistema também barrará o redirecionamento ao blog. |


