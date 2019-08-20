let express = require('express');
let router = express.Router();
let db = [];

router.get('/', function(req, res){
   res.send('Welcome to FIT2095 Home Page');
});
router.get('/about', function(req, res){
   res.send('This page is about FIT2095');
});

//E.g: http://localhost:8080/newItem/Tv/20/1500
//Object {id:348, name:’TV’, quantity:20, price:1500} should be saved in the DB
router.get('/newItem/:name/:quantity/:price',function(req,res){
    let item = req.params;
    console.log(item);
    // while (true) {
    //     let idNum = Math.round(Math.random()*1000);
    //     if (db.includes(idNum)===false) {
    //         break;
    //     }
    // }
    let idNum = Math.round(Math.random()*1000);
    let newRec = {
        id : idNum,
        name: item.name,
        quantity: parseInt(item.quantity),
        price: parseInt(item.price)
    }
    db.push(newRec);
    res.send(generateList());

    console.log(db)
});

router.get('/listAllItems', function(req,res){



});


//export this router 
module.exports = router;