import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { InputComponent } from '../../components/Input';
import { PasswordComponent } from '../../components/PasswordInput';
import { Back, Button } from '../../globalStyles/buttons.style';
import { Container, Title } from '../../globalStyles/multiComponents.style';
import { editProfileInfo } from '../../store/slices/auth';
import { Form } from '../Login/style';
import { Content } from './style';

export const ChangePassword = () => {
  const { userInfo } = useSelector((state) => {
    return { userInfo: state.auth.userInfo };
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      firstname: userInfo.firstname,
      lastname: userInfo.lastname,
      email: userInfo.email,
      age: userInfo.age,
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dataToSubmit = (editedData) => {
    editedData.id = userInfo.id;
  };

  const onSubmit = (editedData) => {
    dataToSubmit(editedData);
    dispatch(editProfileInfo(editedData));
    navigate('/profile');
  };

  return (
    <Container>
      <Content>
        <Title>Change password</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <PasswordComponent
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },
            })}
            error={errors.password?.message}
            placeholder="New password"
          />
          <InputComponent
            {...register('passwordConfirm', {
              required: 'Please repeat your password',
              validate: (value) => value === watch('password') || 'Passwords are different',
            })}
            type="password"
            error={errors.passwordConfirm?.message}
            placeholder="Repeat password"
          />
          <Button type="submit" disabled={!isValid}>
            Change password
          </Button>
          <Link to={'/profile'}>
            <Back>Back to my profile</Back>
          </Link>
        </Form>
      </Content>
    </Container>
  );
};
