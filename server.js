import express from 'express';

const app = express();


app.get('/hello', (req, res) => res.send('Hello World'));

// Zeit als isoString zurückgeben
app.get('/time', (req,res) => {
    let time = new Date()
    time= time.toISOString()
    res.send(time)
})

// Zufällige Zahl zurückgeben
app.get('/random', (req,res) => {
    let ranNum = Math.floor(Math.random() *100)
    res.send('Zufällige Zahl zwischen 0-99 --> '+ ranNum)
})

// überprüfen ob Parameter eine Zahl ist
app.get('/isNum/:num', (req,res) => {
    // Parameter auslesen
    let num = req.params.num

    // Abhängig vom Paramter String zurückgeben 
    res.send(isNaN(num) ? 'Keine Zahl' : 'Eine Zahl')
})



const server = app.listen(5000, () => {
   console.log("The server is listening... 🐒") 
});