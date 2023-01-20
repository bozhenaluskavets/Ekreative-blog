import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../store/slices/auth';
import { Content, Form } from './style';
import { Container, Title } from '../../globalStyles/multiComponents.style';
import { Error, Input } from '../../globalStyles/forms.style';
import { Button } from '../../globalStyles/buttons.style';

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

  const { isAuthenticated } = useSelector((state) => {
    return { isAuthenticated: state.auth.isAuthenticated };
  });

  useEffect(() => {
    if (isAuthenticated) navigate('/');
  }, [isAuthenticated]);

  return (
    <Container>
      <Content>
        <Title>Log in</Title>
        <Form onSubmit={handleSubmit((data) => dispatch(loginUser(data)))}>
          <Input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format',
              },
            })}
            placeholder="Email"
            type="email"
          />
          <Error>{errors.email?.message}</Error>

          <Input
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },
            })}
            placeholder="Password"
            type="password"
          />
          <Error>{errors.password?.message}</Error>

          <Button type="submit" disabled={!isValid}>
            Log in
          </Button>
        </Form>
      </Content>
    </Container>
  );
};
