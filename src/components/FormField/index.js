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
        width: 5%;
    }
`;

const Label = styled.label``;

    Label.Text = styled.span`
    color: #555759;
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
  background: #BDC2C7;
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
    transform: scale(.6) translateY(-10px);
  }

  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
  }
}
`;

function FormField({
    label, type, name, value, onChange, as
}) {
    const fieldId = `id_${name}`;
    const isTextArea = type === 'textarea'
    const tag = isTextArea ? 'textarea' : 'input';

    return (
        <FormFieldWrapper>

            <Label
                htmlFor={fieldId}
            >
                <Label.Text>
                {label}
                </Label.Text>
        
                <Input
                    as={tag}
                    id={fieldId}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </Label>
        </FormFieldWrapper>

    )
}

FormField.defaultProps = {
    type: 'text',
    value: '',
    onChange: () => {
    }
};

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default FormField; 