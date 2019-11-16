import React from 'react';
import { InputBox } from './Input.styles';
const Input = ({ type, autocorrect, autocapitalize, placeholder }) => {
  return (
    <InputBox
      type={type}
      autoCorrect={autocorrect}
      autoCapitalize={autocapitalize}
      placeholder={placeholder}
    ></InputBox>
  );
};

export default Input;
