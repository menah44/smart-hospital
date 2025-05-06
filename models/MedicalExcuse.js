const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const MedicalExcuse = sequelize.define('MedicalExcuse', {
  patient_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  reason: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  document_path: {
    type: DataTypes.STRING, // مسار ملف PDF أو صورة
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('pending', 'accepted', 'rejected'),
    defaultValue: 'pending'
  },
  reviewed_by: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  timestamps: true
});

module.exports = MedicalExcuse;
