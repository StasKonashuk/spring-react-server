const { DataTypes } = require('sequelize');
const db = require('../db');

const Projects = db.define(
  'projects',
  {
    project_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    project_info: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Projects;
