const Projects = require('../models/Projects');
const AtticProjects = require('../models/AtticProjects');
const FooterProjects = require('../models/FooterProjects');

class ProjectsController {
  async getProjects(req, res) {
    try {
      const projectsInfo = {};
      const projects = await Projects.findAll();
      const atticProjects = await AtticProjects.findAll();
      const footerProjects = await FooterProjects.findAll();
      projectsInfo.projects = projects;
      projectsInfo.atticProjects = atticProjects;
      projectsInfo.footerProjects = footerProjects;
      res.json(projectsInfo);
    } catch {
      res.status(500).send();
    }
  }
}

module.exports = new ProjectsController();
