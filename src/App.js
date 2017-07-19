import './App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import _ from 'lodash';
import { getClasses } from './actions/classActions';
import { ClassListComponent } from './components/class';


class App extends Component {

  componentWillMount() {
    this.props.getClasses();
  }

  render() {
    const {classes} = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Teacher App</h2>
        </div>
        <section className="App-intro">
          <ClassListComponent classes={classes} />
        </section>
      </div>
    );
  }
}

App.propTypes = {classList: PropTypes.array}

const mapStateToProps = (state, props) => {
  const list = _.get(state, 'classes.list', [{id: null, name: 'Loading...'}]);
  console.log('MSTP ::: ' + JSON.stringify(state, null, 4));
  return { classes: list};
}

const mapDispatchToProps = {
  getClasses
};


export default connect(mapStateToProps, mapDispatchToProps)(App);