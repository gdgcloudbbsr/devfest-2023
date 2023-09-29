const {Router}= require('express');

const {saveRegistration} = require('../controllers/controllers');

const router = Router();

router.post('/save', saveRegistration);

module.exports = router;