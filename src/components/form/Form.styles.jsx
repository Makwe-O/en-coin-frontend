import styled from 'styled-components';

export const FormContainer = styled.form`
  margin-top: 8px;
  width: 455px;
  display: flex;
  border-radius: 8px;
  margin: 0 auto;
  @media screen and (max-width: 550px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const FormInput = styled.input``;
