const express = require('express')
const { v4: uuidv4 } = require("uuid")
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors("http://localhost:5173","https://jokenpo-front-end.vercel.app/"))
const personagens = [
    {idPersonagem:uuidv4(), nome:"Goku", urlImg:"https://cdn.pixabay.com/photo/2020/09/26/07/34/goku-5603384_960_720.png"},
    {idPersonagem:uuidv4(), nome:"Vegeta", urlImg:"https://www.pngmart.com/files/2/Vegeta-PNG-Image.png"},
    {idPersonagem:uuidv4(), nome:"Superman", urlImg:"https://imagensemoldes.com.br/wp-content/uploads/2020/07/Pose-Superman-PNG-764x1024.png"},
    {idPersonagem:uuidv4(), nome:"Groot", urlImg:"https://www.imagensempng.com.br/wp-content/uploads/2021/06/01-12.png"},
    {idPersonagem:uuidv4(), nome:"Ash", urlImg:"https://i.pinimg.com/originals/8f/0c/42/8f0c42e4b5ffd76f3863950582070c1c.png"},
    {idPersonagem:uuidv4(), nome:"Kuririn", urlImg:"https://i.pinimg.com/originals/9e/9a/fb/9e9afb307b4d61a3bffd02254de3357a.png"},
    {idPersonagem:uuidv4(), nome:"Yamcha", urlImg:"https://i.pinimg.com/originals/a4/46/61/a44661334a7aa248a7949d4b59f4b762.png"},
    {idPersonagem:uuidv4(), nome:"Mario", urlImg:"https://www.imagenspng.com.br/wp-content/uploads/2015/02/super-mario-mario-12-643x1024.png"},
    {idPersonagem:uuidv4(), nome:"Hulk", urlImg:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b188c950-e801-4079-8ede-f8cdac6f5b83/d59bwtp-3aca8845-d693-4e4d-9599-e49969d34d3b.png/v1/fill/w_900,h_1267,strp/incredible_hulk__png_by_captainjackharkness_d59bwtp-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI2NyIsInBhdGgiOiJcL2ZcL2IxODhjOTUwLWU4MDEtNDA3OS04ZWRlLWY4Y2RhYzZmNWI4M1wvZDU5Ynd0cC0zYWNhODg0NS1kNjkzLTRlNGQtOTU5OS1lNDk5NjlkMzRkM2IucG5nIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ua-ApAa7L6tqyZU099Ux-ObQyuUDvraPHQqN_0B9ZTI"},
    {idPersonagem:uuidv4(), nome:"Thor", urlImg:"https://i.pinimg.com/originals/fc/31/85/fc318551acc519108d011018a0a33421.png"},
    {idPersonagem:uuidv4(), nome:"Cap. América", urlImg:"https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/capitao-america-png3.png?fit=695%2C1024&ssl=1"},
    {idPersonagem:uuidv4(), nome:"H. de Ferro", urlImg:"https://imagensemoldes.com.br/wp-content/uploads/2020/05/Foto-Marvel-Homem-de-Ferro-PNG-588x1024.png"},
    {idPersonagem:uuidv4(), nome:"Arq. Verde", urlImg:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bf8ed809-1e39-4951-b7ca-1ec9ab97c9c0/d9ojdmh-b410c90a-19b3-470e-9fd9-8745f7518e41.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JmOGVkODA5LTFlMzktNDk1MS1iN2NhLTFlYzlhYjk3YzljMFwvZDlvamRtaC1iNDEwYzkwYS0xOWIzLTQ3MGUtOWZkOS04NzQ1Zjc1MThlNDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bCIqibhdrVUt-SZUxVl9DP8l8nRUPuB0q5cvvINW00Q"},
    {idPersonagem:uuidv4(), nome:"Goran", urlImg:"https://i.pinimg.com/originals/74/03/09/740309bfd0c0505e0cb5af85b8fc2b28.png"},
    {idPersonagem:uuidv4(), nome:"Bills", urlImg:"https://i0.wp.com/cdn141.picsart.com/269013319009211.png?r240x240"}
]
const historicoJogadas =[]
app.get("/personagens",(request, response)=>{
    return response.json(personagens)
})
app.get("/personagens/:id", (request, response) => {
    const { id } = request.params;
    const personagem = personagens.find(personagem => personagem.idPersonagem == id)
    if(!personagem){
      return response.status(404).json({ error: "Repository not found" });
    }
    return response.json(personagem)
  })
  app.post("/historicoRodadas", (request, response) => {
    const {historico} = request.body
    historicoJogadas.push(historico)
    return response.status(201).send()
  })
  app.get("/historicoRodadas", (request, response) => {
   
    return response.json(historicoJogadas) 
  })
app.listen(process.env.PORT || 3000)

