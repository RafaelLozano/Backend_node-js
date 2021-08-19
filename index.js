const responseLike =[
    {name:'Rafa',date:new Date},
    {name:'Gus',date:new Date},
]

const http = require('http') //modulo nativo http

const app = http.createServer((request, response) => {
    response.writeHead(200,{'Content-Type':'application/json'})
    response.end(JSON.stringify(responseLike))
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)