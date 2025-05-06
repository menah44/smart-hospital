const { Patient } = require('./models');
const bcrypt = require('bcrypt');

// المرحلة 1: التسجيل الأساسي
const registerStep1 = async (req, res) => {
  try {
    const { fullName, email, password, mobileNumber, age, gender } = req.body;

    // تحقق إذا كان الإيميل مستخدمًا مسبقًا
    const existingPatient = await Patient.findOne({ where: { email } });
    if (existingPatient) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // إنشاء المريض مع تشفير الباسورد
    const hashedPassword = await hash(password, 10);
    const patient = await Patient.create({
      fullName,
      email,
      password: hashedPassword,
      mobileNumber,
      age,
      gender,
    });

    res.status(201).json({
      success: true,
      patientId: patient.id,
      nextStep: 'step2', // توجيه المستخدم للمرحلة التالية
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// المرحلة 2: إضافة بيانات الطوارئ
const registerStep2 = async (req, res) => {
  try {
    const { patientId, emergencyContactName, emergencyContactRelationship, emergencyContactPhone } = req.body;

    await Patient.update(
      {
        emergencyContactName,
        emergencyContactRelationship,
        emergencyContactPhone,
      },
      { where: { id: patientId } }
    );

    res.json({ 
      success: true,
      nextStep: 'step3' 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// المرحلة 3: التاريخ الطبي
const registerStep3 = async (req, res) => {
  try {
    const { patientId, medicalConditions, additionalNotes } = req.body;

    await Patient.update(
      {
        medicalConditions: JSON.stringify(medicalConditions),
        additionalNotes,
      },
      { where: { id: patientId } }
    );

    res.json({ 
      success: true,
      message: 'Registration completed successfully!' 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
module.exports = {
  registerStep1,
  registerStep2,
  registerStep3
};