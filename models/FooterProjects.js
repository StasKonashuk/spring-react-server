const { DataTypes } = require('sequelize');
const db = require('../db');

const FooterProjects = db.define(
  'footer_projects',
  {
    footer_project_id: {
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
    project_link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = FooterProjects;
