const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageUrl : {
    type: Sequelize.STRING,
    defaultValue: "students/image.png"
  },

  gpa: {
    type: Sequelize.DECIMAL
  }

});

module.exports = Student;