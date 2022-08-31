import fs from "fs";
import path from "path";
import express from "express";


const app = express();
let DB = []
let filePath = path.resolve();
filePath = path.join(filePath, 'data/Data.txt')

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return console.log(err);
    DB = JSON.parse(data)
    console.log(DB)
});

app.use(express.json());



app.get('/user/:id', (req, res) => {
    let findForGet = DB.find((item) => item.id == req.params.id)
    if (!findForGet) {
        res.status(404).end("Error Put")
        return
    }
    res.send(findForGet)
});

app.put('/user/:id', (req, res) => {
    let findForPut = DB.find((item) => item.id == req.params.id)
    if (!findForPut) {
        res.status(404).end("Error Put")
        return
    }
    findForPut = {
        ...findForPut,
        ...req.body,
    }
    DB[findForPut.id] = findForPut
    fs.writeFile(filePath, JSON.stringify(DB), (err) => {
        if (err) return console.log(err);
    });
    res.status(200).end("poxvav brat")
});

app.post("/user", (req, res) => {
    const user = {...req.body, id: DB.length };
    DB.push(user)
    fs.writeFile(filePath, JSON.stringify(DB), (err) => {
        if (err) return console.log(err);
    });
    res.status(200).json("Toshnia");
    console.log();
});
app.delete('/user/:id', (req, res) => {
    const findForDel = DB.find((item) => item.id == req.params.id)
    if (!findForDel) {
        res.status(404).end("Error")
        return
    }
    DB.splice(findForDel.id, 1)
    DB.forEach((item, index) => item.id = index)
    fs.writeFile(filePath, JSON.stringify(DB), (err) => {
        if (err) return console.log(err);
    });


    res.status(201).end("good")
})

app.listen(9003);