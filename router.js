let express = require('express');
let router = express.Router();
let db = [];

router.get('/', function(req, res){
   res.send('Welcome to FIT2095 Home Page');
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
    res.send("added to database")
    //res.send(generateList());

    console.log(db)
});

function generateList() {
    let st = 'Id  Name   Quantity  Price    Cost</br>';
    for (let i = 0; i < db.length; i++) {
        st += db[i].id + ' | ' + db[i].name + ' | ' + db[i].quantity + ' | '+db[i].price + ' | ' + db[i].quantity * db[i].price +'</br>';
    }
    return st;
}
router.get('/listAllItems', function(req,res){
    res.send(generateList());

});

router.get('/deleteItem/:idNum', function(req,res){
    let idNum = req.params.idNum;
    let index = -1;
    for(let i = 0; i < db.length; i++){
        if(db[i].id == idNum){
            index = i;
            break;
        }
    }
    if(index == -1){
        res.send("<h1>Not Exist")
    }else{
        db.splice(index, 1);
        res.send("Delete Item Successfully, current length of database is: " + db.length);
    }   
});


router.get('/totalValue', function(req,res){
    let sum = 0
    db.forEach((element)=>{
        sum += element.price * element.quantity
    })
    res.send("total value is " + sum)
})



//export this router 
module.exports = router;