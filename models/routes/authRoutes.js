const express = require('express');
const router = express.Router(); // استخدم router هنا بدلاً من routes
const authController = require('../controllers/authController');
const validatePatient = require('../middlewares/authMiddleware');

// المرحلة 1: لا تحتاج middleware (إنشاء مستخدم جديد)
router.post('/register/step1', authController.registerStep1);

// المرحلة 2 و 3: تحتاج تحقق من patientId
router.post('/register/step2', validatePatient, authController.registerStep2);
router.post('/register/step3', validatePatient, authController.registerStep3);

router.get('/test', (req, res) => {
    res.send('Auth route working');
  });
module.exports = router; // تصدير router بدلاً من routes