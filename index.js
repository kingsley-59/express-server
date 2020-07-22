const express = require('express');
const app = express();
app.listen(3000, ()=>{
    console.log('Listening at port 3000...')
});
app.use(express.static('static'));
app.use(express.json({limit: '1mb'}));

app.post('/api', (request, response)=>{
    console.log('I got a request');
    console.log(request.body);
    const data = request.body;
    response.json({
        status: "online",
        name: data.name,
        message: data.message
    });
});