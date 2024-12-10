// "Banco de dados" em memória
const produto = [
    { id: 1, nome: 'Produto 1', quantidade: 10, preco: 100.00 },
    { id: 2, nome: 'Produto 2', quantidade: 5, preco: 50.00 },
];

function listaProduto1(){
    return produto;
}

function listaProduto2(id){
return produto.find(c => c.id == id);
}
function insereProduto(produto){
produto.push(produto);
}

function alteraProduto(id,dadosproduto){
const produtonovo =  produto.find(c => c.id == id);
if (produtonovo){
produtonovo.nome =  dadosproduto.nome;
produtonovo.quantidade = dadosproduto.quantidade;
produtonovo.preco = dadosproduto.preco;
} else {
    return("Deu ruim!");
}    
}

function removeProduto(id){
const indice = produto.findIndex(c => c.id == id);
produto.splice(indice,1);
}

module.exports = {
listaProduto1,
listaProduto2,
insereProduto,
alteraProduto,
removeProduto
}
