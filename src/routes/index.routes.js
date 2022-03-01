const { Router } = require('express');
const { getAllUsers } = require('../controllers/index.controllers');
const router = Router();

router.get('/', getAllUsers)










module.exports = router;