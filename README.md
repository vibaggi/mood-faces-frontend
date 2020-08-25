# mood-faces

## Apresentação
Acompanhe o humor da sua equipe durante o desenvolvimento do projeto. Recebe comentários sobre o trabalho para ajudar a melhorar o ambiente de trabalho.

## Arquitetura
O projeto Mood Faces está separado em dois repositórios: o [front-end](https://github.com/vibaggi/mood-faces-frontend) está desenvolvido em [VueJS](https://vuejs.org/) usando [IBM Carbon Design System](https://www.carbondesignsystem.com/) como framework de design; e o [back-end](https://github.com/vibaggi/mood-faces-backend) desenvolvido em [NodeJS](https://nodejs.org/) com [Express](http://expressjs.com/) para desenvolvimento de REST API.

Para armazenamento de dados, usa-se o mongodb, sendo necessário um servidor (no caso [Atlas](https://www.mongodb.com/cloud/atlas)).

## Rode Local

Clone ambos repositórios. Para rodas o front-end use ```npm run serve```, para rodar o back-end use ```npm run dev```. Lembre-se de configurar o dev.env: use o arquivo dev.env.sample de exemplo e preencha as variaveis de ambiente ```NOSQL_URL``` e ```NOSQL_DATABASE```.

## Acesso Público

Ainda não disponivel um acesso por url. No futuro será hospedado em algum servidor.



