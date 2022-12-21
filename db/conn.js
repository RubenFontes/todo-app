const { Sequelize } = require('sequelize')

const database = 'mvc'
const username = 'root'
const password = ''
const host = 'localhost'
const dialect = 'mysql'

const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: dialect
})

try {

    sequelize.authenticate()
    console.log('Conected to MySQL!')
    
} catch (error) {
    console(`Não foi possível conectar: ${error}`)
}

module.exports = sequelize