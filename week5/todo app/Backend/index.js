const express = require('express');
const { createTodo, updateTodo } = require('./type');
const port = 3000
const app = express();

app.use(express.json());

app.post("/todo", function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Invalid input",
        })
        return;
    }
    else{
        
    }

})


app.get("/todos", function(req,res){
    
})


app.put("/completed", function(req,res){
    const updatedPayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatedPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Invalid input",
        })
        return;
    }
    else{

    }
    
})



app.listen(port,function(){
    console.log(`app is listening in ${port}`);
})

