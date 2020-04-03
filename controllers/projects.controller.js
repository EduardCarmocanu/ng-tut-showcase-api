const fs = require('fs');
const path = require('path')

class ProjectsController {
    get(req, res, next) {
        const publicDir = path.join(__dirname, '../public/')
        const projectsData = []

        if (fs.existsSync(publicDir)) {
            const projectFolders = fs.readdirSync(publicDir);
            projectFolders.forEach(item => {
                
                const projectConfig = require(path.join(publicDir, item, 'package.json'));
                projectsData.push({
                    name: projectConfig.name,
                    author: projectConfig.author,
                })
            });
            
            res.send(projectsData);
            return
        }

        res.send([]);
    }
}

module.exports = new ProjectsController()