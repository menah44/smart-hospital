// models/Patient.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const bcrypt = require('bcrypt');

const Patient = sequelize.define('Patient', {
  // المرحلة 1
  fullName: { type: DataTypes.STRING, allowNull: false },
  age: { type: DataTypes.INTEGER },
  gender: { type: DataTypes.ENUM('Male', 'Female') },
  mobileNumber: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, validate: { isEmail: true } },
  password: { type: DataTypes.STRING, allowNull: false },
  
  // المرحلة 2 (Emergency Contact)
  emergencyContactName: { type: DataTypes.STRING },
  emergencyContactRelationship: { type: DataTypes.STRING },
  emergencyContactPhone: { type: DataTypes.STRING },
  
  // المرحلة 3 (Medical History)
  medicalConditions: { type: DataTypes.TEXT }, // يمكن تخزينها كـ JSON أو نص
  additionalNotes: { type: DataTypes.TEXT },
}, {
  hooks: {
    beforeCreate: async (patient) => {
      if (patient.password) {
        const salt = await bcrypt.genSalt(10);
        patient.password = await bcrypt.hash(patient.password, salt);
      }
    },
  },
});

module.exports = Patient;