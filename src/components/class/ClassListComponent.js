import React from 'react';
import PropTypes from 'prop-types';
import { ClassItem } from './ClassItem';
import { ListGroup } from 'react-bootstrap';

export const ClassListComponent = (props) => {
  return (
    <div>
      <ListGroup className="classListGroup">
        <ClassItem classes={props.classes} />
      </ListGroup>
    </div>
  )
}

ClassListComponent.propTypes = { classes: PropTypes.array }