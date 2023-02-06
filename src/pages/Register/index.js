import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AvatarComponent } from '../../components/Avatar';
import { InputComponent } from '../../components/Input';
import { Button } from '../../globalStyles/buttons.style';
import { Error } from '../../globalStyles/forms.style';
import { Container, Title } from '../../globalStyles/multiComponents.style';
import { registerUser } from '../../store/slices/auth';
import { Content, Form, Centering } from './style';

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

  const { isAuthenticated, serverError } = useSelector((state) => {
    return { isAuthenticated: state.auth.isAuthenticated, serverError: state.auth.serverError };
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

  const showServerError = serverError !== undefined;

  return (
    <Container>
      <Content>
        <Title>Register</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Centering>
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
                maxLength: {
                  value: 12,
                  message: 'Firstname must be at most 12 characters long',
                },
              })}
              type="text"
              error={errors.firstname?.message}
              placeholder="Firstname"
            />

            <InputComponent
              {...register('lastname', {
                required: 'Please enter your lastname',
                minLength: {
                  value: 3,
                  message: 'Lastname must be at least 3 characters long',
                },
                maxLength: {
                  value: 12,
                  message: 'Lastname must be at most 12 characters long',
                },
              })}
              type="text"
              error={errors.lastname?.message}
              placeholder="Lastname"
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

            {showServerError && <Error>{serverError}</Error>}
          </Centering>
          <AvatarComponent register={register} />
          <Centering>
            <Button type="submit" disabled={!isValid}>
              Register
            </Button>
          </Centering>
        </Form>
      </Content>
    </Container>
  );
};
