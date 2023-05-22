const express = require('express');
const router = express.Router();

const v1APIRoutes = require('./v1/index.js');


router.use('/v1',v1APIRoutes);

module.exports = router;