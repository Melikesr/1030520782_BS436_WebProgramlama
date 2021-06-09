const express = require('express');
const {getUser} = require("../db/users");

const router = express.Router();

router.get('/Game',(req,res)=>{
    if (!req.user) {
        res.status(401).send();
        return;
    }

    const payload = getUser();

    res.status(200).json(payload);
});

module.exports = router;