const express = require('express');

const app = express();

var bodyParser = require('body-parser');
var encoder = bodyParser.urlencoded();

const user = require('./models/users');

const mongoose = require('mongoose')
 mongoose.connect('mongodb+srv://xV2WP7CT4sPTwyjQ:xV2WP7CT4sPTwyjQ@cluster0.hc2t9.mongodb.net/project1?retryWrites=true&w=majority',
 {
     useNewUrlParser:true,
     useUnifiedTopology:true
 }
 ).then(()=>{
     console.warn("db connected");
 })

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
 
    res.render('Home')

})

app.post('/', encoder, (req, res)=>{
    const data = new user({
        _id: new mongoose.Types.ObjectId(),
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
    })
    
    data.save().then((result)=>{
        console.warn(result)
    
    }).catch(err=>console.warn(err))
    res.render('Home',)

})

app.listen(3000, ()=>{
    console.log('listening on 3000');
})