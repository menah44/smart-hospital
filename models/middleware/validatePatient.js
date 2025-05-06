const { Patient } = require('../models');

exports.validatePatient = async (req, res, next) => {
  const { patientId } = req.body;

  if (!patientId) {
    return res.status(400).json({ error: 'Patient ID is required' });
  }

  const patient = await Patient.findByPk(patientId);
  if (!patient) {
    return res.status(404).json({ error: 'Patient not found' });
  }

  req.patient = patient; // حفظ بيانات المريض في الطلب لاستخدامها لاحقًا
  next();
};

module.exports =  validatePatient