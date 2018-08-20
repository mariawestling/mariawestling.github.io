import React, { Component } from 'react';
import data from './data.json';
import '../App.css';

import Project from './Project';

const projectList = [];

data.map(function(project) {
  projectList.push(project);
});

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeID: ""
    }

  }


  render() {

    return (
      projectList.map( project => {
        const allDetails = (project.Active === true) ? (
          <div className="project-details">
            <div className="project-discription">
              {project.About}
            </div>
            <div className="project-members">
              Team members {project.Members}
            </div>
          </div>
        ) : <div></div>

        return <Project currProject={project}/>
      }
    ))
  }
}

export default Projects
