import { forwardRef } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { Error } from '../../globalStyles/forms.style';
import './style.css';

export const TextAreaComponent = forwardRef(
  ({ onChange, error, onBlur, type, name, placeholder, minRows }, ref) => {
    return (
      <>
        <ReactTextareaAutosize
          onChange={onChange}
          ref={ref}
          onBlur={onBlur}
          name={name}
          placeholder={placeholder}
          minRows={minRows}
          type={type}
          className="styleTextarea"
        />
        <Error>{error}</Error>
      </>
    );
  },
);
