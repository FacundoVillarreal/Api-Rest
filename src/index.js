import app from './app'

async function main () {

    await app.listen(3000);
    console.log("Server on port 3000");

}
main();

// const app = require('./app');


//routes

//server
// app.listen(3000, ()=>{
//     console.log("Server on port 3000")
// })