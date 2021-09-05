import React from 'react';
import PropTypes from 'prop-types';

export default class LabelInput extends React.Component {
  render() {
    const { id, text, onChange, type = 'text', className = '' } = this.props;
    return (
      <label htmlFor={ id }>
        { text }
        <input
          className={ className }
          data-testid={ `${id}-input` }
          type={ type }
          id={ id }
          name={ id }
          onChange={ onChange }
        />
      </label>
    );
  }
}

LabelInput.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
}.isRequired;
