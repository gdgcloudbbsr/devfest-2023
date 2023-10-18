const {Router}= require('express');

const {saveRegistration} = require('../controler/Controllers');

const {login} = require('../controler/AuthControllers');

const {userVerification} = require('../controler/AuthMiddleware');

const {bookTicket}= require('../controler/Controllers')

const router = Router();

router.post('/login', login);

router.post('/save', saveRegistration);

router.post('/',userVerification);

router.post('/book',bookTicket);

module.exports = router;