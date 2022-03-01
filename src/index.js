const express = require('express');
const app = express();



//middlewares
app.use(express.json());


//routes
app.use(require('./routes/index.routes'));

//server
app.listen(3000, ()=>{
    console.log("Server on port 3000")
})