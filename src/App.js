
import './App.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getClasses } from './lib/teacherHelper';
import { ClassListComponent } from './components/class';


class App extends Component {

  state = {
    classList: []
  }

  componentWillMount() {
    getClasses().then(classesList => this.setState({ classList: classesList }));
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React-Teacher App</h2>
        </div>
        <section className="App-intro">
          <ClassListComponent classes={this.state.classList} />
        </section>
      </div>
    );
  }
}

App.propTypes = {classList: PropTypes.array}

export default App;