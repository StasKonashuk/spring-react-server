const db = require('../db');

class ProjectsController {
  async getProjects(req, res) {
    try {
      const projectsInfo = {};
      const projects = await db.query('SELECT * FROM projects');
      const atticProjects = await db.query('SELECT * FROM attic_projects');
      const footerProjects = await db.query('SELECT * FROM footer_projects');
      projectsInfo.projects = projects.rows;
      projectsInfo.atticProjects = atticProjects.rows;
      projectsInfo.footerProjects = footerProjects.rows;
      res.json(projectsInfo);
    } catch {
      res.status(500).send();
    }
  }
}

module.exports = new ProjectsController();
