const {Router}= require('express');

const {saveRegistration} = require('../controler/Controllers');

const {login} = require('../controler/AuthControllers');

const {userVerification} = require('../controler/AuthMiddleware');

const {bookTicket}= require('../controler/Controllers')

const {RazorPayOrder}= require('../Payment');

const {sendEmail} = require('../controler/Controllers');

const {user_forgotPassword}= require('../controler/Controllers');

const {user_resetPassword}= require('../controler/Controllers');

const router = Router();

router.post('/login', login);

router.post('/save', saveRegistration);

router.post('/',userVerification);

router.post('/book',bookTicket);

router.post('/order',RazorPayOrder);

router.post('/sendEmail',sendEmail);

router.post('/forgotPassword',user_forgotPassword); // otp generation

router.post('/resetPassword',user_resetPassword); // password reset

module.exports = router;