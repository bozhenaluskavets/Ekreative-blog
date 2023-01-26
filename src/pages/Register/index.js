import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { InputComponent } from '../../components/Input';
import { Button } from '../../globalStyles/buttons.style';
import { Container, Title } from '../../globalStyles/multiComponents.style';
import { registerUser } from '../../store/slices/auth';
import { Content, Form } from './style';

export const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
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

  const onSubmit = (data) => {
    delete data.passwordConfirm;
    dispatch(registerUser(data));
  };

  const passwordConfirm = (value) => {
    if (watch('password') !== value) {
      return 'Passwords are different';
    }
  };

  return (
    <Container>
      <Content>
        <Title>Register</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
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

          <InputComponent
            {...register('passwordConfirm', {
              required: 'Please repeat your password',
              validate: passwordConfirm(),
            })}
            type="password"
            error={errors.passwordConfirm?.message}
            placeholder="Repeat password"
          />

          <InputComponent
            {...register('firstname', {
              required: 'Please enter your firstname',
              minLength: {
                value: 3,
                message: 'Firstname must be at least 3 characters long',
              },
            })}
            type="text"
            error={errors.firstName?.message}
            placeholder="Firstname"
          />

          <InputComponent
            {...register('lastname', {
              required: 'Please enter your lastName',
              minLength: {
                value: 3,
                message: 'LastName must be at least 3 characters long',
              },
            })}
            type="text"
            error={errors.lastName?.message}
            placeholder="LastName"
          />

          <InputComponent
            {...register('age', {
              required: 'Please enter valid age',
              min: {
                value: 10,
                message: 'Please enter valid age',
              },
              max: {
                value: 99,
                message: 'Please enter valid age',
              },
            })}
            type="number"
            error={errors.age?.message}
            placeholder="Age"
          />

          <Button type="submit" disabled={!isValid}>
            Register
          </Button>
        </Form>
      </Content>
    </Container>
  );
};
