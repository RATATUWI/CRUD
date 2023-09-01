const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "addinfo"
})
app.get('/', (req, res) =>{
    const sql = "SELECT * FROM user";
    db.query(sql, (err, data) =>{
        if(err){
            return res.json("Error");
        }else{
            return res.json(data);
        }
    })
})
app.post('/create', (req, res) =>{
    const sql = "INSERT INTO user (`name`, `email`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email
    ]
    db.query(sql, [values], (err, data) =>{
        if(err){
            return res.json("Error")
        }else{
            return res.json(data)
        }
    })
})
app.put('/update/:id', (req, res) =>{
    const sql = "update user set `name` = ?, `email` = ? where id = ?";
    const values = [
        req.body.name,
        req.body.email
    ]
    const id = req.params.id
    db.query(sql, [...values, id], (err, data) =>{
        if(err){
            return res.json("Error")
        }else{
            return res.json(data)
        }
    })
})
app.delete('/student/:id', (req, res) =>{
    const sql = "DELETE FROM user WHERE id = ?";

    const id = req.params.id
    db.query(sql, [id], (err, data) =>{
        if(err){
            return res.json("Error")
        }else{
            return res.json(data)
        }
    })
})



app.listen(8081, () =>{
    console.log("Listening")
})