import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../store/slices/auth';
import { Content, Form } from './style';
import { Container, Title } from '../../globalStyles/multiComponents.style';
import { Button } from '../../globalStyles/buttons.style';
import { InputComponent } from '../../components/Input';
import { Error } from '../../globalStyles/forms.style';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, serverError } = useSelector((state) => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      serverError: state.auth.serverError,
    };
  });

  useEffect(() => {
    if (isAuthenticated) navigate('/');
  }, [isAuthenticated]);

  const showServerError = serverError !== undefined;

  return (
    <Container>
      <Content>
        <Title>Log in</Title>
        <Form onSubmit={handleSubmit((data) => dispatch(loginUser(data)))}>
          <InputComponent
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format',
              },
            })}
            type="email"
            error={errors.email?.message}
            placeholder="Email"
          />

          <InputComponent
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },
            })}
            type="password"
            error={errors.password?.message}
            placeholder="Password"
          />
          {showServerError && <Error>{serverError}</Error>}

          <Button type="submit" disabled={!isValid}>
            Log in
          </Button>
        </Form>
      </Content>
    </Container>
  );
};
// fix patter to separate file
