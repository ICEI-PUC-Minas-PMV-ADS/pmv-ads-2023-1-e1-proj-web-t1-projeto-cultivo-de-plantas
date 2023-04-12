# 2. Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários por meio de entrevistas e estudos. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## 2.1 Personas

As personas levantadas durante o processo de entendimento do problema, se deu através da coleta de dados sendo realizada pelo Google Forms, sendo apresentados a seguir: 

## `Laura Martins`

| ![persona 1-edit](https://user-images.githubusercontent.com/127165847/231594689-924af688-6a31-445d-9172-fdf98feb7e3e.jpg)| Laura Martins, 26 anos                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| Ocupação                                                                                                                 | trabalha com desenvolvimento web em uma empresa estrangeira porém em home office.                                      |
| Aplicativos preferidos                                                                                                   | Instagram, GitHub, Pinterest e Linkedin.                                                                               |
| Motivações                                                                                                               | Sua principal motivação é o amor por tecnologia e o meio ambiente.                                                     |
| Seus Hobbies                                                                                                             | Seus hobbies são: cultivar plantas e frequentar parques ambientais.                                                    |
| Frustrações                                                                                                              | Uma de suas principais frustrações é a perda de suas plantas por não saber como cuidar corretamente.                   |

<div align="center">
<img src="https://user-images.githubusercontent.com/127165847/231594945-ad1a8240-cfb9-4fdd-8f1d-c3400ec0cf09.jpg" width="700px" />
</div>

- Gustavo Rodrigues, 37 anos, trabalha como corretor de imóveis, sendo responsável por intermediar negociações de compra, venda e aluguel de imóveis e auxiliar durante o processo. Habitualmente faz uso do Facebook, Google Maps e Whatsapp. Sua principal motivação é ver pessoas satisfeitas com os imóveis. E uma de suas frustrações é perder vendas por não saber identificar potenciais locais para o cultivo de plantas nos imóveis. Seus hobbies são: Ler e estudar sobre conhecimentos gerais.



## 2.2 Histórias de Usuários

A partir do estudo da rotina das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários:

| Eu como...[Persona] | ...quero/desejo...[O que] | ...para...[Por que] |
| :-------------------: | :-------------------------: | :-------------------: | 
| Laura Martins     | Visualizar informações sobre o horário recomendado para regar as plantas         | Criar uma rotina e regá-las no momento apropriado |
| Laura Martins    | Visualizar informações sobre o melhor tipo de adubo e momento correto de adubagem | Garantir de maneira correta uma boa fertilização das plantas |
| Laura Martins     | Obter informações específicas de plantas variadas | Identificar o tipo de planta adquirida e seus devidos cuidados |
| Gustavo Rodrigues | Informações sobre pragas e adoecimentos           | Saber como evitá-las e manter as plantas saudáveis |
| Gustavo Rodrigues | Obter informações sobre técnicas de Poda          | Efetuar a Poda corretamente e no tempo certo |
| Laura Martins     | Informações sobre tempo de exposição ao sol e troca de vaso   | Manter a planta saudável e em local adequado |
| Laura Martins     | Obter informações sobre vitaminas para as plantas             | Garantir o cultivo forte e saudável |
| Gustavo Rodrigues | Saber como e o que é necessário para cultivar plantas em casa | Adquirir e começar o cultivo de plantas para fins estéticos e alimentícios em casa |
| Laura Martins     | Cronograma de cuidados para determinado tipo de planta | Facilitar o planejamento do cuidado com cultivo de plantas   |
| Gustavo Rodrigues | Informações sobre raízes e substratos                  | Garantir um bom suporte, fixação para as plantas e nutrição correta |
| Laura Martins     | Informações sobre benefícios que o cultivo acarreta à saúde   | Garantir o bem estar e incentivar as pessoas a cultivarem plantas |
| Laura Martins     | Local para compartilhar fotos de plantas               | Criar vínculos com a comunidade |
| Gustavo Rodrigues | Compartilhar minhas dicas sobre plantas                | Acrescentar informações sobre determinadas plantas |
| Laura Martins     | Poder realizar o login em minha conta de usuário       |  Ter privacidade e notificações personalizadas |
| Gustavo Rodrigues | Chat para suporte          | Sanar dúvidas, obter ajuda e relatar os problemas técnicos da aplicação |
| Laura Martins     | Pesquisar os nomes científicos das plantas  | Aprender a identificação global das plantas e encontrar sua planta com maior facilidade |
| Gustavo Rodrigues | Mensagem de alerta sobre mudança de cuidados coma as plantas | Se manter atualizado sobre os cuidados |
| Laura Martins     | Favoritar as dicas de minha preferência               | Facilitar o acesso dessas informações no futuro |
| Gustavo Rodrigues | Um fórum                   | Compartilhar conhecimento e experiencia sobre plantas com outros usuários |


## 2.3 Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### 2.3.1 Requisitos Funcionais
 A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues. 


| ID    | Descrição dos Requisitos | Prioridade |
| :-----: | :------------------------ | :----------: | 
| RF-01 | A aplicação deverá ter um catálogo com espécies de plantas mais comumente cultivadas no Brasil, com informações aos cuidados necessários, como: rega, podas e adubagem      | ALTA |
| RF-02 | A aplicação deve incluir um recurso de pesquisa utilizando tanto o nome comum quanto o nome científico das plantas | ALTA | 
| RF-03 | A aplicação deverá ter uma página de login e registro de novos usuários | ALTA |
| RF-04 | A aplicação deve contar com um sistema de  que gera notificações relacionadas a eventos pré-determinados | ALTA | 
| RF-05 | A aplicação deve permitir que os usuários comentem e compartilhem suas dicas | BAIXA |
| RF-06 | A aplicação deve incluir uma página de suporte ao usuário | BAIXA | 
| RF-07 | A aplicação deve fornecer uma opção para os usuários marcarem suas dicas como favoritas | BAIXA | 



### 2.3.2 Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender. 


| ID      | Descrição do Requisito | Prioridade |
| :----:  | :---------------------- | :----------: |
| RNF-01 | O site deve ser responsivo permitindo a visualização em dispositivos móveis.        | ALTA |
| RNF-02 | O site deve ser publicado na plataforma GITHUB PAGES.                     | ALTA |
| RNF-03 | O projeto deve ser implementado se valendo de HTML semântico.                       | ALTA |
| RNF-04 | O site deve conter acessibilidade e SEO de no mínimo 80% pela extensão Lighthouse.  | MÉDIA |
| RNF-05 | O site deve conter um bom nível de contraste entre os elementos.                    | MÉDIA | 
| RNF-06 | O site deverá ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge). | BAIXA |

## 2.3.3 Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir. 


| ID  | Descrições da Restrições |
| :---: | :-----------------------  |
| RE-01 | O projeto deverá ser entregue até 25/06/2023. |
| RE-02 | O projeto deve se restringir as tecnologias básicas de Web Frontend. | 
| RE-03 | Proibida a terceirização de desenvolvimento do sistema em sua totalidade ou de módulos isolados. |
