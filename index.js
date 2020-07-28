console.log("Yayyyy!! Node Works");

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", (req, res) => {
    switch (req.params.animal) {
        case 'pig':
            res.send("The pig says 'Oink!'");
            break;
        case 'cow':
            res.send("The cow says 'Moo'");
            break;
        case 'dog':
            res.send("The dog says 'Woof Woof!'");
            break;
        default:
            res.send("Animal does not exist");
    }

});


app.get("/greet/:msg/:num", (req, res) => {
    const {
        msg,
        num
    } = req.params
    if (msg == 'hello') {
        let str = ''
        for (let i = 0; i < num; i++) {
            str += 'hello '
        }
        res.send(str);
    }
});

app.get("*", (req, res) => {
    res.status(404).send("Sorry, page not found...Blame our developer");
});


app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);