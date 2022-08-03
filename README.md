# DESAFIO FLEXPAG FRONT-END

## DESCRIÇÃO
Realizar o desenvolvimento de um front-end pra que se possa realizar a consulta do histórico de cotações da
moeda BRL para a moeda selecionada pelo usuário.

## REQUISITOS
Criar um layout de tela de acordo com o wireframe abaixo:

![Captura de Tela 2022-07-31 às 23 19 22](https://user-images.githubusercontent.com/83181304/182060644-42a9dfb1-521d-4e2c-8d66-771f35d519e9.png)

- Criar um campo data inicial, e data final para o usuário selecionar o período de data que deseja;
- Criar um botão de "Consultar dados" onde vai existir o seguinte comportamento:
- Realizar uma requisição ao end-point
https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@
moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda='EUR'&@dataInicial='07-
06-2022'&@dataFinalCotacao='07-25-
2022'&$top=1000&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao.
* Onde o end-point deverá ser preenchido dinamicamente, a data de início, data fim,e moeda de acordo com o que o
usuário selecionar.
- Capturar a response da requisição, e inserir a lista de dados em uma grid de acordo com o wireframe.
- Criar um botão "Atualizar dados" para que os dados que estiverem em Tela seja preenchido.
- Criar validações para que todos os campos estejam preenchidos corretamentes, e todos os campos deverão
ser preenchidos obrigatoriamente.
- Criar validação para que a data final não seja maior que a data inicial

## TECNOLOGIA A SER USADA:
- ANGULAR 9
- Bootstrap (para componentes e responsividade)
- moment.js (para manipulação de datas)
- HTTP ANGULAR(para request/response dos dados)

## DESEJÁVEL
- Design patterns Typescript
- Técnica de usabilidade
- Responsividade

## ENVIO DO DESAFIO
- Adicionar o código no Github
- O repositório deverá ser público

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `npm install`

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


