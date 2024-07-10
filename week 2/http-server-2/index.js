const express = require('express');
const app = express();

app.use(express.json()); // Middleware for parsing JSON bodies

var user = [{
    name: 'Aaryan',
    kidney: [{
        healthy: true
    },{
        healthy: true
    }]
},{
    name: 'Baskar',
    kidney: [{
        healthy: true
    },{
        healthy: false
    }]
}];

app.get("/", function(req, res){
    let patientname = req.query.name;
    let i = 0;

    while (i < user.length && user[i].name.localeCompare(patientname) !== 0) {
        i++;
    }

    if (i < user.length) {
        let totalkidney = user[i].kidney.length;
        let healthykidney = 0;
        
        for (let j = 0; j < user[i].kidney.length; j++) {
            if (user[i].kidney[j].healthy) {
                healthykidney++;
            }
        }
        
        let unhealthykidney = totalkidney - healthykidney;
        res.json({
            totalkidney,
            healthykidney,
            unhealthykidney
        });
    } else {
        res.status(404).json({ error: "User not found" });
    }
});

app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;

    // Ensure isHealthy is provided and is a boolean
    if (typeof isHealthy === "boolean") {
        user[0].kidney.push({
            healthy: isHealthy
        });

        res.json({
            work: "done!!"
        });
    } else {
        res.status(400).json({ error: "Invalid input" });
    }
});

app.put("/",function(req,res){
    for(let i = 0;i<user[0].kidney.length;i++){
        user[0].kidney[i].healthy = false;
    }
    res.json({})
})


app.delete("/",function(ree,res){
    const newkindey = [];
    for(let i = 0;i<user[0].kidney.length;i++){
        if(user[0].kidney.healthy){
            newkindey.push({
                healthy: true
            })
        }
    }
    user[0].kidney = newkindey;
    res.json({
        msg: "work done!!"
    })
})
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
