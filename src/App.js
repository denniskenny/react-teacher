import React, { Component } from 'react';
import './App.css';
import { ClassListComponent } from './components/class';
import { getClasses } from './lib/teacherHelper';


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

export default App;