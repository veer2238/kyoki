const express = require('express')
const app = express()

const sendMail = require("./views/controllers/sendMail")




const middleware = (req,res,next) =>{
    console.log('hellow middleware');
    next();
}
// Set Templating Enginge
app.set('view engine', 'ejs')

app.get('/', (req, res)=> {
    res.render('index')
   
})

app.get('/sendemail',sendMail)



app.get('/home', (req, res)=> {
    res.render('home')
   
})

app.get('/about',middleware, (req, res)=> { 
    res.render('about')
   
})

app.get('/contact', (req, res)=> {
    res.render('contact')
   
})

app.get('/register', (req, res)=> {
    res.render('signup')
   
})

app.get('/login', (req, res)=> {
    res.render('signin')
   
})





app.listen(3000)