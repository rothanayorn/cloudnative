//import server
const el = require('express');

//Create object of that server
const app = el();
//API
app.get('/view', (req,res) =>{
    res.send('Inside view API')
})

// Post API
app.post('/create', (req, res) =>{
    const data = req.body;
    console.log('Received:', data);

    res.send({
        message: 'Data received successfully',
        yourData:data
    });
});

//Start the express
app.listen(5000, ()=>
    console.log("Express Server Started at Port No: 5000"));