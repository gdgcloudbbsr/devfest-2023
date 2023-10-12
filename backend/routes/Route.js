const {Router}= require('express');

const {saveRegistration} = require('../controllers/controllers');

const {login} = require('../controllers/authControllers');

const router = Router();

router.post('/login', login);

router.post('/save', saveRegistration);

module.exports = router;