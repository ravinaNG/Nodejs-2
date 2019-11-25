const express = require('express');
const fs = require('fs');
const demo = require('./demo.json');
const bodyPaeser = require('body-parser');

const app = express();
app.use(bodyPaeser.json())

app.get('/firstPath', (req, res) => {
    res.json(demo);
});

app.post('/post', (req, res) => {
    var index = {
        name: req.body.name,
        id: req.body.id
    }

    var data = fs.readlinkSync('demo.json')
    // data = data.toString();

    var Data = JSON.parse(data);

    for(let i=0; i<Data.length; i++){
        if(Data[i]['name'] == index['name']){
            return res.end('Name is already exist!');
        }
    }

    index.id = Data.length+1
    Data.push(index)
    fs.writeFileSync('demo.json', JSON.stringify(Data))
    return res.json(Data)
})    


app.listen(8080, function() {
    console.log('listening ...');
})
