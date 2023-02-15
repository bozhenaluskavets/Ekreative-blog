import { forwardRef, useState } from 'react';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Error, Input } from '../../globalStyles/forms.style';
import { PasswordContainer, PasswordIcon, PasswordInput } from './style';

export const PasswordComponent = forwardRef(
  ({ onChange, error, onBlur, name, placeholder }, ref) => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
      setPasswordShown(!passwordShown);
    };
    return (
      <PasswordContainer>
        <PasswordInput>
          <Input
            onChange={onChange}
            ref={ref}
            onBlur={onBlur}
            name={name}
            placeholder={placeholder}
            type={passwordShown ? 'text' : 'password'}
          />
          <Error>{error}</Error>
        </PasswordInput>
        <PasswordIcon>
          {passwordShown ? (
            <VisibilityOffIcon onClick={togglePassword} fontSize="small" className="passwordIcon" />
          ) : (
            <VisibilityRoundedIcon
              onClick={togglePassword}
              fontSize="small"
              className="passwordIcon"
            />
          )}
        </PasswordIcon>
      </PasswordContainer>
    );
  },
);
