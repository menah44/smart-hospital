const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const LabResult = sequelize.define('LabResult', {
  patient_id: DataTypes.INTEGER,
  test_type: DataTypes.STRING,
  file_path: DataTypes.STRING,
  uploaded_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

module.exports = LabResult;
