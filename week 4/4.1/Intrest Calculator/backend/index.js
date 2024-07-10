const express = require('express');
const app = express();
const port = 3210;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});


app.get('/intrest',function(req,res){
    const principal = parseInt(req.query.principal);
    const time = parseInt(req.query.time);
    const rate = parseInt(req.query.rate);

    const intrest = (principal*rate*time)/100;
    const total = principal + intrest;

    res.send({
        total: total,
        intrest: intrest,
    })

})

app.listen(port,function(){
    console.log(`app is listing in ${port}`);
})