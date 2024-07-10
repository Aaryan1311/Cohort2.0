const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const jwtpassword = "12345";
const port = 3200;
app.use(express.json());

const all_user = [
    {
        username: "aaryan@gmail.com",
        password: "12345",
        name: "Aaryan"
    },

    {
        username: "shiksha@gmail.com",
        password: "456",
        name: "Shiksha"
    },
];

function userexist(user,password){
for(let i = 0;i<all_user.length;i++){
    if(all_user[i].username === user && all_user[i].password === password) return true;
}
return false;
}


app.post('/sign',function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(!(userexist(username,password))){
        return res.status(403).json({
            msg:"user does not exist"
        });
    }
    console.log(username);
    console.log(userexist(all_user,username));
    var token = jwt.sign({username: username},"12345");
    return res.json({
        token,
    });
});


app.get('/user',function(req,res){
    const token = req.headers.authorization;
    try{
        const decode = jwt.verify(token, jwtpassword);
        const username = decode.username;

        res.json({
            user: all_user
        })
    }
    catch(err){
        return res.status(403).json({
            msg:"Invalid token"
        });
    }
});

app.listen(port,function(){
    console.log(`app is listening in ${port}`)
})