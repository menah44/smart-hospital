const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Feedback = sequelize.define('feedback', {
  patient_id: DataTypes.INTEGER,
  doctor_id: DataTypes.INTEGER,
  comment: DataTypes.TEXT,
  rating: DataTypes.INTEGER
});

module.exports = Feedback;
