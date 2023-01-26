import { forwardRef } from 'react';
import { Error, Input } from '../../globalStyles/forms.style';
import { Label } from './style';

/* eslint react/prop-types: 0 */
/* eslint react/display-name: 0 */

export const InputComponent = forwardRef(
  ({ onChange, error, type, onBlur, name, label, placeholder }, ref) => {
    return (
      <>
        <Label>{label}</Label>
        <Input
          onChange={onChange}
          ref={ref}
          onBlur={onBlur}
          name={name}
          type={type}
          placeholder={placeholder}
        />
        <Error>{error}</Error>
      </>
    );
  },
);
