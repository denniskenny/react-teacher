import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';


export const ClassItem = (props) => {
    return (
        <div>
            {props.classes.map(item => (<ListGroupItem key={item.classLocalId + "1"} ><h3>{item.name}</h3></ListGroupItem>))}/* this is just an array loop */
        </div>
    )
}

ClassItem.propTypes = { item: PropTypes.object }