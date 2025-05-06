const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const PatientProfile = sequelize.define('PatientProfile', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  gender: {
    type: DataTypes.ENUM('male', 'female'),
    allowNull: true
  },
  birth_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  blood_type: {
    type: DataTypes.STRING,
    allowNull: true
  },
  chronic_conditions: {
    type: DataTypes.TEXT, // زي "ضغط، سكر..."
    allowNull: true
  },
  allergies: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  timestamps: true
});

module.exports = PatientProfile;
