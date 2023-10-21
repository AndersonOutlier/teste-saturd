const express = require('express');
const app = express();
app.use(express.json());

const uuid = require('uuid');

const products = [
    
]

app.get('/products',function(request,response){
    return response.send(products);
})

app.post('/products',function(request,response){
    const product = request.body.product;
    const price = request.body.price;

    const newProduct = {id:uuid.v4(),product:product,price:price};

    products.push(newProduct);
    return response.status(201).send('Produto inserido com sucesso.');
})

app.put('/products/:id',function(request,response){
    const id = request.params.id;
    const product = request.body.product;
    const price = request.body.price;

    const productUpdated = {id:id,product:product,price:price};

    const indexProduct = products.findIndex(function(item){        

        return item.id === id;
    })

    if(indexProduct==-1){
        return response.status(404).send('Produto não encontrado.');
    }else{
        products[indexProduct] = productUpdated;
        return response.send('Produto atualizado com sucesso.');
    }

    
})

app.delete('/products/:id',function(request,response){
    const id = request.params.id;

    const indexToDelete = products.findIndex(function(item){
        return item.id === id;
    })

    if(indexToDelete==-1){
        return response.send('Produto não encontrado.');
    }else{
        products.splice(indexToDelete,1);
        return response.send('Produto excluído com sucesso.');
    }
})

app.listen(3000,function(){
    console.log('🚀🚀🚀🚀🚀SERVER STARTED ON PORT 3000.🚀🚀🚀🚀🚀');
})


