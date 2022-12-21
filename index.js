const express = require('express')
const exphbs = require('express-handlebars')

const port = 3000
const app = express()

const conn = require('./db/conn')
const Task = require('./models/Task')

const tasksRoutes = require('./routes/tasksRoutes')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())
app.use(express.static('public'))
app.use('/tasks', tasksRoutes)

conn
    .sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running on port: ${port}`)
        })
    })
    .catch((error) => console.log(error))