const express = require('express');
const router = express.Router();

const postControllers = require('../controllers/postControllers');

router.get('/',postControllers.home);

console.log('router!!');
module.exports = router;