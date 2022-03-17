//Configuração do banco de dados

module.exports =  {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    port: '3306',
    password: 'admin',
    database: 'crudAoCubo',
    define: {
        timestamps: false,
        underscored: 0,
    }
}