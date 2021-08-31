import React from 'react';
import PropTypes from 'prop-types';

export default class LabelInput extends React.Component {
  render() {
    const { id, text, onChange } = this.props;
    return (
      <label htmlFor={ id }>
        { text }
        <input
          type="text"
          id={ id }
          name={ id }
          onChange={ onChange }
        />
      </label>
    );
  }
}

LabelInput.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
