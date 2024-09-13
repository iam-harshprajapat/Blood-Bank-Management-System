const express = require('express');
const { registerController, loginController, currentUserController } = require('../controllers/authController');
const authMiddileware = require('../middlewares/authMiddelware');

const router = express.Router()
//Register
router.post('/register', registerController);

//Login
router.post('/login', loginController)

//get current user
router.get('/current-user', authMiddileware, currentUserController);
module.exports = router;