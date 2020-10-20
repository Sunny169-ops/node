const express = require('express');

const app = express();

var PORT = process.env.PORT || 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

// <--------  Api ------------>

app.get('/', (req, res)=>{
 
    res.render('Home')

})

app.post('/', (req, res)=>{
    const data = new user({
        _id: new mongoose.Types.ObjectId(),
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
    })
    
    data.save().then((result)=>{
        console.warn(result)
    
    }).catch(err=>console.warn(err))
    res.send(data)

})

app.listen(PORT, ()=>{
    console.log('listening on 3000')
})