const { DataTypes } = require('sequelize');
const db = require('../db');

const AtticProjects = db.define(
  'attic_projects',
  {
    attic_project_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
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

module.exports = AtticProjects;
