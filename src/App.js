import React, { Component } from 'react';
import headshot from './maria1.jpg';
import './App.css';


//import components
import Projects from './Components/Projects';
import Skills from './Components/Skills';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showDetails: false
    }
    console.log(this.state.showDetails);
    this.handleShowDets = this.handleShowDets.bind(this);
  }
  handleShowDets() {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={headshot} className="App-image" alt="avatar"/>
          <h1 className="App-title">Maria Westling</h1>
        </header>
        <div className="Projects">
          <Projects showDetails={this.handleShowDets} detailStatus={this.state.showDetails}/>
        </div>
        <div className="Skillpage">
          <div className="project-title">
            Other Experience
          </div>
          <Skills />
        </div>
        <div className="App-footer">
          <a href="https://github.com/mariawestling" target="_blank" className="fab fa-github-square"></a>
          <a href="https://www.linkedin.com/in/maria-westling-097399115" target="_blank" className="fab fa-linkedin"></a>
          <a href="mailto:kemwestling@gmail.com" className="fas fa-envelope-square"></a>
        </div>
      </div>
    );
  }
}

export default App;
