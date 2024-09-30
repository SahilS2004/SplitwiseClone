

const APP_TOKEN_SECRET = 'JS'

const dbConfig = {
    DB : 'splitwise_db',
    USER : 'root',
    PASSWORD :'sahil@1239',
    dialect: 'mysql',
    pool: {
        max : 1
    }
}

module.exports = {
    APP_TOKEN_SECRET , 
    dbConfig
}