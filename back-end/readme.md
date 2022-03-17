Como executar o back-end

$ cd .\back-end\src\
$ npm install
$ npm run dev

Dependências necessárias

$ npm install yarn 
$ yarn add express
$ yarn add sequelize
$ yarn add mysql2
$ yarn add sequelize-cli -d
$ yarn add nodemon
$ yarn add cookie-parser
$ yarn add cors

Para criar o banco de dados

$ yarn sequelize db:create

Executando migration 

$ yarn sequelize db:migrate
