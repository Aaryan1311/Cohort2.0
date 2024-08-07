const express = require('express');
const { createTodo, updateTodo } = require('./type');
const { todo } = require('./db');
const port = 3000
const app = express();

app.use(express.json());

app.post("/todo",async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Invalid input",
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    })

    res.json({
        msg: "Todo Created"
    })

})


app.get("/todos", async function(req,res){
     const todos = await todo.find({});

     res.json({
        todos
     })
})


app.put("/completed",async function(req,res){
    const updatedPayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatedPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Invalid input",
        })
        return;
    }
    await todos.update({
        _id: req.body.id 
    },{
        completed: true
    }) 
    res.json({
        msg: "Todo is marked as done"
    })
})



app.listen(port,function(){
    console.log(`app is listening in ${port}`);
})

