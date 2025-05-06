const User = require('./user');
const Appointment = require('./appointment');
const LabResult = require('./LabResult');
const Feedback = require('./feedback');
const MedicalExcuse = require('./MedicalExcuse');
const Notification = require('./Notification');
const PatientProfile = require('./PatientProfile');
const Patient = require('./Patient');
const sequelize = require('../config/db');


// تعريف العلاقات بين النماذج هنا إذا كنت تستخدم Sequelize
// مثال:
// Patient.hasMany(Appointment);
// Appointment.belongsTo(Patient);

module.exports = {
  User,
  Appointment,
  LabResult,
  Feedback,
  MedicalExcuse,
  Notification,
  PatientProfile,
  Patient,
  sequelize,

};