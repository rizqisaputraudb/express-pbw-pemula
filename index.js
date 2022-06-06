//import express
import express from "express";

//init express
const app = express();

//home route
app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});

//about route
app.get('/about', (req, res) => {
    res.send('Welcome to About Page');
});

app.get('/contact', (req, res) => {
    res.send('Welcome to Contact Page');
});

//listen on port
app.listen(3000, () => console.log('Server Running at http://localhost:3000'));