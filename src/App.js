import './App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import _ from 'lodash';
import { getClasses } from './actions/classActions';
import { ClassListComponent } from './components/class';


class App extends Component {

  componentWillMount() {//onInit, before fully mounted
    this.props.getClasses();//automatically run
  }

  render() {
    const {classes} = this.props;//defining a local alias for props
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Teacher App</h2>
        </div>
        <section className="App-intro">
          <ClassListComponent classes={classes} /> /*passing the data down*/
        </section>
      </div>
    );
  }
}

App.propTypes = {classList: PropTypes.array}

const mapStateToProps = (state, props) => {//this connects the state and the props
  const list = _.get(state, 'classes.list', [{id: null, name: 'Loading...'}]);
  return { classes: list};
}

const mapDispatchToProps = {//flags these functions as functions that throws actions
  getClasses
};


export default connect(mapStateToProps, mapDispatchToProps)(App);