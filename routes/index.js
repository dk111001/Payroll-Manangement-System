const express = require('express');
const router = express.Router();


const homeControllers = require('../controllers/homeControllers');
const viewadminControllers = require('../controllers/viewadminControllers');

//router.post('/create-task',homeControllers.task);
    // contactList.push({
    //     name:req.body.name,
    //     phone: req.body.phone
    // })
    // return res.redirect('back');

//router.post('/delete-task',homeControllers.delete); 
router.get('/',homeControllers.home);
router.get('/login',homeControllers.login);
router.get('/register',homeControllers.register);
router.post('/admin',homeControllers.adminlog);
router.get('/admin/home',homeControllers.adminhome);
router.post('/admin/register',homeControllers.adminregister);
router.get('/admin/employees',homeControllers.employees);
router.get('/delete/',homeControllers.delete);
router.get('/admin/attendence',homeControllers.atd);
router.post('/admin/attendence',homeControllers.atdp);
router.get('/admin/transactions',homeControllers.transactions);
router.post('/admin/transactions',homeControllers.transactionsp);
router.get('/admin/history',homeControllers.history);
router.get('/admin/view',viewadminControllers.view);
router.get('/admin/view/home',viewadminControllers.home);
router.get('/admin/view/salary',viewadminControllers.salary);
router.get('/admin/view/payment',viewadminControllers.payment);
router.get('/admin/view/attendence',viewadminControllers.attendence);
// router.use('/user',require('./users'));
//router.get('/register',homeControllers.register);




console.log('router!!');
module.exports = router;