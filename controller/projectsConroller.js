const Projects = require('../models/Projects');
const AtticProjects = require('../models/AtticProjects');
const FooterProjects = require('../models/FooterProjects');

class ProjectsController {
  async getProjects(req, res) {
    try {
      const projects = await Projects.findAll();
      const atticProjects = await AtticProjects.findAll();
      const footerProjects = await FooterProjects.findAll();
      res.status(200).json({ projects, atticProjects, footerProjects });
    } catch {
      res.status(500).send();
    }
  }
}

module.exports = new ProjectsController();
