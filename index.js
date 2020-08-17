// Se requiere el paquete de express
var express = require('express')
var app = express()


//Variables de aplicación
app.set('appName','Centro de Capacitación Técnica')
app.set('port', process.env.PORT || 3000)
app.set('view engine','ejs')

// Configurara la carpeta de static
app.use(express.static('public'))


// Ruta principal
app.get('/', (req, res) => {
    var title = app.get('appName')
    res.render('index.ejs', {title: title} )
})

//Ruta de historia
app.get('/historia', (req, res) => {
    var title = app.get('appName')+" | historia"
    res.render('historia.ejs', {title: title} )
})


//Ruta de Academico
app.get('/academico', (req, res) => {
    var title = app.get('appName')+" | academico"
    res.render('academico.ejs', {title: title} )
})

//Ruta de institucional
app.get('/institucional', (req, res) => {
    var title = app.get('appName')+" | institucional"
    res.render('institucional.ejs', {title: title} )
})

//Ruta de calendario
app.get('/calendario', (req, res) => {
    var title = app.get('appName')+" | calendario"
    res.render('calendario.ejs', {title: title} )
})

//Ruta de docentes

app.get('/docentes', (req, res) => {
    var title = app.get('appName')+" | docentes"
    res.render('docentes.ejs', {title: title} )
})

//Ruta de Academico

app.get('/investigaciones', (req, res) => {
    var title = app.get('appName')+" | investigaciones"
    res.render('investigaciones.ejs', {title: title} )
})


// Levanta el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})
