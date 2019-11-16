import React from 'react';
import { FormContainer } from './Form.styles';
import Input from '../input/Input';
import Button from '../button/Button';

const Form = props => {
  return (
    <FormContainer>
      <Input type={'text'} placeholder={'Enter Email Address'} />
      <Button theme={'massive'}>Get Started</Button>
    </FormContainer>
  );
};

export default Form;
