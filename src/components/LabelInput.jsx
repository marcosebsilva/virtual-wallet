import React from 'react';
import PropTypes from 'prop-types';

export default class LabelInput extends React.Component {
  render() {
    const { id, text } = this.props;
    return (
      <label htmlFor={ id }>
        { text }
        <input type="text" id={ id } name={ id } />
      </label>
    );
  }
}

LabelInput.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
