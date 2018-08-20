import React, { Component } from 'react';
import '../App.css';

let skills = [
  "Javascript",
  "HTML",
  "CSS",
  "AngularJS",
  "React",
  "D3.js",
  "Prototyping",
  "InVision",
  "Adobe CC suite",
  "Python"
]
class Skills extends Component {
  render() {
    return (
      skills.map(skill => {
        return (
          <div className="skill-item">
            {skill}
          </div>
        )
      })
    )
  }
}

export default Skills
