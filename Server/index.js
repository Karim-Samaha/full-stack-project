
const express = require('express'); //Line 1
const mongoose = require('mongoose');
const app = express(); //Line 2
const bodyParser = require('body-parser')
const Product = require("./Schema/productModle");
const cors = require('cors');
require('dotenv/config');
app.use(cors())
app.use(bodyParser.json())



// get all
app.get('/api', async (req, res, next) => { //Line 9
    try {
        const Posts = await Product.find();
        res.json(Posts)
    } catch (err) {
        res.json({ mssg: err })
    }
});
// get specific post
app.get('/api/:id', async (req, res, next) => { //Line 9
    try {
        const Posts = await Product.find();
        const specificPost = Posts.filter((post) => post.id == req.params.id)
        res.json(specificPost)
    } catch (err) {
        res.json({ mssg: err })
    }
});
// For Posting 
app.post('/api', (req, res, next) => {
    const Posts = new Product({
        name: req.body.name,
        info: req.body.info,
        id: req.body.id,
        img: req.body.img,
        price: req.body.price
    });
    Posts.save()
        .then(data => {
            res.json(data)
        }).catch(err => {
            res.json({ msggg: `failddd + ${err}` })
        })
})

//connect to db
mongoose.connect(
    `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-shard-00-00.tuoj3.mongodb.net:27017,cluster0-shard-00-01.tuoj3.mongodb.net:27017,cluster0-shard-00-02.tuoj3.mongodb.net:27017/?ssl=true&replicaSet=atlas-xjyles-shard-0&authSource=admin&retryWrites=true&w=majority`,
    (err) => {
        if (err) console.log(err)
        else console.log("mongdb is connected");
    }
);

// For cors error
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*'); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.listen(process.env.PORT || 5000)












