const express = require('express')
const app = express()
app.use(express.json())

let users =[
    {name:'Rafa', date:new Date, email:'rafa@gmail.com'},
    {name:'Gus', date:new Date, email:'gus@gmail.com'},
]

//cuando se hace una peticion ipo get
app.get('/',(request,response)=>{
    response.send('<h1>Hello world from express</h1>')
})
app.get('/api/users',(request, response) => {
    response.json(users)
})
app.get('/api/users/:email',(request, response) => {
    const email = request.params.email;
    const user = users.find(user => user.email === email)
    if (user){
        response.json(user)
    }
    else {
        response.status(404).end()

    }
})
app.delete('/api/users/:email', (request, response) =>{
    const email = request.params.email
    users = users.filter( user => user.email !== email)
    response.status(204).end();
})
app.post('/api/users',(request,response)=>{
    const user = request.body
    console.log(user)
    if(!user || !user.name){
        return response.status(400).json({
            error:'user.name is missing'
        })
    }
    const newUser = {
        name:user.name,
        email:user.email,
        date:new Date().toISOString()
    }

    users.push(newUser)
    response.json(newUser)
})

const PORT = 3001
app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`)
})