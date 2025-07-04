const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model');

console.log(process.env.NODE_ENV)

if(process.env.NODE_ENV === "development"){
    router.post("/create", async(req, res) => {
        let owners = await ownerModel.find();
        if(owners.length > 0){
            return res.status(500).send("You do't have permission!");
        }
        // res.send("we can create owner");
        let {fullname, email, password} = req.body;
        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password,
        });
        res.status(201).send(createdOwner);
    })
}

router.get('/', (req, res) => {
    res.send("it' working!");
})


module.exports = router;