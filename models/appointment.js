const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Appointment = sequelize.define('Appointment', {
  patient_id: DataTypes.INTEGER,
  doctor_id: DataTypes.INTEGER,
  appointment_date: DataTypes.DATE,
  status: {
    type: DataTypes.ENUM('pending', 'confirmed', 'cancelled'),
    defaultValue: 'pending'
  }
});

module.exports = Appointment;
