import React from 'react';
import PropTypes from 'prop-types';


export const ClassItem = (props) => {
    return (
        <h3>{props.name}</h3>
    )
}

ClassItem.propTypes = {item: PropTypes.object}