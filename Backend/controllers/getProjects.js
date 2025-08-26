const data = require('../data/projects');

async function getProjects(req, res) {
    res.status(200).json(data);
}

module.exports = getProjects;



//body me pass krunga title, tech[] and year[]