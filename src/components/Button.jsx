import React from 'react';
import propTypes from 'prop-types';



const Button = ({label, type}) => {
  return <button className={`btn btn-${type}`}>{label}</button>
}

Button.propTypes = {
    label: propTypes.string.isRequired,
    type: propTypes.oneOf(['primary', 'secondary', 'danger']).isRequired,
}

export default Button
