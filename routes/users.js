const express = require('express');
const router = express.Router();

const usersControllers = require('../controllers/usersControllers');

router.get('/home',usersControllers.home);
router.get('/',usersControllers.user);
router.post('/',usersControllers.userlog);

router.get('/salary',usersControllers.salary);
router.get('/payment',usersControllers.payment);
router.get('/attendence',usersControllers.attendence);
router.get('/pay_slip',usersControllers.pay_slip);
console.log('router!!');
module.exports = router;