// this all starting code is express code
const express = require('express'); 
require("../src/db/connection");
const router = require("./routers/men");

const app = express();
const port = process.env.PORT || 3000; 

// application localhost per run k dekhne k liye
/*app.get('/', async (req, res ) =>{
    res.send('Hello from the Rahul');
})*/

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`connaction is live at port no. ${port}`);
})