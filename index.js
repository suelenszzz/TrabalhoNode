require("dotenv").config();

const db = require("./db");
const express = require("express")  ;
const app = express();

app.use(express.json());

app.delete("/produto/:id",(request, response)=>{
    const id = request.params.id;
    db.removeProduto(id);
    response.sendStatus(204);
});

app.patch("/produto/:id",(request, response)=>{
    const id = request.params.id;
    const dadosproduto = request.body;
    db.alteraProduto(id, dadosproduto);
    response.sendStatus(200);
});

app.post("/produto", (request, response)=>{
    const produto = request.body;
    db.insereProduto(produto);
    response.sendStatus(201);
});

app.get("/produto/:id",(request, response)=>{
    const id = request.params.id;
    response.json(db.listaProduto2(id));
});

app.get("/produto",(request, response)=>{
    response.json(db.listaProduto1());
});

 app.get("/", (request, response) => {
         response.json({
             message: "Está OK o Response!"
         })
     })


app.listen(process.env.PORT, ()=>{
    console.log("App IS RUNNING!") ;   
})