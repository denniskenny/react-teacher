import React from 'react';
import PropTypes from 'prop-types';

// Create a class component
export default class ClassListComponent extends React.Component {
    render(){
        return (
            <ul>
                {this.props.list.map((item, index) => {
                    return <li key={index}>{item.name}</li>;
                })}
            </ul>
        );
    }

    propTypes = {list : PropTypes.array};
}
