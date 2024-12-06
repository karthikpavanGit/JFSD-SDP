const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/verify-email/:token', authController.verifyEmail);
router.get('/user/profile', auth, authController.getUserProfile);
router.get('/admin/users', auth, authController.getAllUsers);
router.delete('/admin/users/:id', auth, authController.deleteUser);

module.exports = router;