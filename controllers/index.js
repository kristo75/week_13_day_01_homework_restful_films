const express = require('express');
const router = new express.Router();

router.use('/films', require('./films'));


module.exports = router;
