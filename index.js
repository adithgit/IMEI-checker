const express = require('express');
const app = express();
const isIMEI = require('./validateIMEI');

app.get('/validate/:number', (req, res)=>{
    const IMEI = req.params.number;
    if(isIMEI(IMEI)){
        res.status(200);
        res.json({validIMEI:true}).end();
    }else{
        res.status(422);
        res.json({validIMEI:false}).end();
    }
})

app.listen(8000, ()=>{
    console.log("8000");
})