const express = require('express');
const zod = require('zod');
const app = express();
const port = 3201;

const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(5),
    kidney: zod.array(zod.number())
});


app.use(login);
app.use(express.json());

function login(req, res, next) {
    const { email, password } = req.headers;

    const emailResponse = zod.string().email().safeParse(email);
    const passwordResponse = zod.string().min(5).safeParse(password);

    if (!emailResponse.success) {
        return res.status(400).send("Invalid email");
    }
    if (!passwordResponse.success) {
        return res.status(400).json(passwordResponse.error);
    }

    next();
}

function suffmoney(req, res, next) {
    const money = Number(req.query.money);
    if (money <= 5000) {
        return res.send("Insufficient money");
    }
    console.log("Enough money");
    next();
}

function heartcheck(req, res, next) {
    const heartbeat = Number(req.query.heartbeat);
    if (heartbeat > 50 && heartbeat < 100) {
        console.log("Heart is normal");
        next();
    } else {
        res.send("Heart issue");
    }
}

function kidneycheck(req, res, next) {
    const numberofkidney = Number(req.query.kidney);
    if (numberofkidney > 0 && numberofkidney < 3) {
        console.log("Kidney is normal");
        next();
    } else {
        res.send("Kidney issue");
    }
}

app.get('/health-checkup', suffmoney, heartcheck, kidneycheck, function(req, res) {
    res.send({
        msg: "Heart and kidney are fine"
    });
});

app.post('/health-checkup', function(req, res, next) {
    const { kidney } = req.body;
    const response = schema.shape.kidney.safeParse(kidney);
    
    if (response.success) {
        const kidneyNum = kidney.length;
        res.send("You have " + kidneyNum + " kidneys inside you");
    } else {
        res.status(411).json({
            msg: "Invalid input"
        });
    }
});

// Global error handler
app.use(function(err, req, res, next) {
    console.error(err.message);
    res.status(400).json({
        msg: "Invalid yyyyy"
    });
});

app.listen(port, function() {
    console.log(`App is listening on ${port}`);
});
3
