import React from 'react';
import PropTypes from 'prop-types';
import { ClassItem } from './ClassItem';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

export const ClassListComponent = (props) => {
  return (
    <div>
      <ListGroup>
         {props.classes.map(item => (<ListGroupItem key={item.classLocalId} ><ClassItem name={item.name} /></ListGroupItem>))} 
      </ListGroup>
    </div>
  )
}

ClassListComponent.propTypes = {classes: PropTypes.array}