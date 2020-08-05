import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`

    position: relative;
    
    textarea {
        min-height: 10px;
    }

    input[type="color"] {
        padding-left: 17px;
        width: 10%;

        @media (max-width: 800px) {
        width: 30%;
}
    }
`;

const Label = styled.label``;

    Label.Text = styled.span`
    color: var(--black);
    font-weight: bold;
    height: 57px;
    position: absolute; 
    top: 0;
    left: 16px;
    
    display: flex;
    align-items: center;
    
    transform-origin: 0% 0%;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    
    transition: .1s ease-in-out;
`;

const Input = styled.input`
@media (max-width: 800px) {
  width: 100%;
}

  background: #F2F2F2;
  color: #555759;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #555759;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--frontEnd);
  }

  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.7) translateY(-10px);
  }

  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.7) translateY(-10px);
        }
      `;
  }
  
}

`;

function FormField({
    label, type, name, value, onChange,
  }) {
    const isTypeTextArea = type === 'textarea';
    const tag = isTypeTextArea ? 'textarea' : 'input';
  
    return (
      <FormFieldWrapper>
        <Label>
          <Input
            as={tag}
            type={type}
            value={value}
            name={name}
            onChange={onChange}
          />
          <Label.Text>
            {label}
          </Label.Text>
        </Label>
      </FormFieldWrapper>
    );
  }
  
  FormField.defaultProps = {
    type: 'text',
    value: '',
  };
  
  FormField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };
  
  export default FormField;