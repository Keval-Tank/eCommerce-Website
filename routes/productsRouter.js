const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("it' working!");
})

module.exports = router;