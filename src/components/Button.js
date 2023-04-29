
import React from 'react';
import './Button.css';


const STYLES = ['btn--primarys', 'btn--outlines', 'btn--tests'];

const SIZES = ['btn--mediums', 'btn--larges'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <p className='btn-mobiles'>
      <button
        className={`btns ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </p>
  );
};