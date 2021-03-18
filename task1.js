const express = require('express');

const PORT = 8080;
const HOST = '127.0.0.1';

const app = express();
app.get('/', (req, res) => {
    res.send("Hello from Docker")
});


function sequence(n, end){
    setTimeout(() =>{
        if (Array.length <= 0){
            console.log("Number not identified")
        } else {
            console.log(result)
        }
    },2000);
    return Array(end - n + 1).fill().map((_, idx) => n + idx)
 };
 const result = sequence(1, 15);

 app.listen(PORT, HOST);
 console.log(`Running on http://${HOST}:${PORT}`);