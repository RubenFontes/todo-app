const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('mvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {

    sequelize.authenticate()
    console.log('Conected to MySQL!')
    
} catch (error) {
    console(`Não foi possível conectar: ${error}`)
}

module.exports = sequelize