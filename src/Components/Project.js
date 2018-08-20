import React, { Component } from 'react';
import '../App.css';
import Popup from 'reactjs-popup';

//comment
class Project extends Component {
  render() {

    const projectAvatar = (
      <div className="project">
        <div className="project-title">
          {this.props.currProject.ProjectName}
        </div>
        <div className="project-course">
          {this.props.currProject.Course}
        </div>
        <div className="project-tools">
          {this.props.currProject.Tools}
        </div>
      </div>
    )

    return (
      <Popup
        trigger={projectAvatar}
        modal
        closeOnDocumentClick
        >

        {close => (
          <div className="detail-window">
            <div className="project-title"> {this.props.currProject.ProjectName} </div>
            <div className="project-details">
              <div className="project-info">
                <h4>Course</h4>
                <div className="textfield">
                  {this.props.currProject.Course}
                </div>
              </div>
              <div className="project-info">
                <h4>Tools</h4>
                <div className="textfield">
                  {this.props.currProject.Tools}
                </div>
              </div>
              <div className="project-info">
                <h4>Members</h4>
                <div className="textfield">
                  {this.props.currProject.Members}
                </div>
              </div>
              <div className="about">
                {this.props.currProject.About}
              </div>
            </div>
            <div className="button"
              onClick={() => {
                close()
              }}>
              <div className="fa fa-times-circle" ></div>
          </div>
          </div>
        )}
      </Popup>
    )

  }
}

export default Project
