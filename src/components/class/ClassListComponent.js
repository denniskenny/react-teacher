import React from 'react';
// import PropTypes from 'prop-types';
import { ClassItem } from './ClassItem';

export const ClassListComponent = (props) => {
  return (
    <div>
      <ul>
         {props.classes.map(item => (<li key={item.id} ><ClassItem name={item.name} /></li>))} 
      </ul>
    </div>
  )
}