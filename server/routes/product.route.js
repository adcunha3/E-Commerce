const express = require("express");
const router = express.Router();

const mongoose = require('mongoose');
const db = mongoose.connection;

router.get('/find', async(req, res) => {
    try {

        await db.collection('products').find({}).toArray(function(err, results){
            res.status(200).send(results);        
        });

    } catch(err) {
        res.json({status: 'error'});
    }
});

module.exports = router;