import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { InputComponent } from '../../components/Input';
import { Button } from '../../globalStyles/buttons.style';
import { Title } from '../../globalStyles/multiComponents.style';
import { editProfileInfo } from '../../store/slices/auth';
import { Content, Form } from '../EditPostForm/style';
import { Back } from './style';

export const EditProfileForm = () => {
  const { userInfo } = useSelector((state) => {
    return { userInfo: state.auth.userInfo };
  });

  const {
    register,
    handleSubmit,
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

  const formHandler = (editedData) => {
    editedData.id = userInfo.id;
  };

  const onSubmit = (editedData) => {
    formHandler(editedData);
    dispatch(editProfileInfo(editedData));
    navigate('/profile');
  };

  return (
    <Content>
      <Title>Edit profile</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputComponent
          {...register('firstname', {
            required: 'Please enter your firstname',
            minLength: {
              value: 3,
              message: 'First name must be at least 3 characters long',
            },
          })}
          type="text"
          error={errors.firstname?.message}
          label="First name"
        />

        <InputComponent
          {...register('lastname', {
            required: 'Please enter your lastName',
            minLength: {
              value: 3,
              message: 'Last name must be at least 3 characters long',
            },
          })}
          type="text"
          error={errors.lastname?.message}
          label="Last name"
        />

        <InputComponent
          {...register('email', {
            required: 'Please enter your Email',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format',
            },
          })}
          type="email"
          error={errors.email?.message}
          label="Email"
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
          label="Age"
        />

        <Button type="submit" disabled={!isValid}>
          Edit
        </Button>
        <Link to={'/profile'}>
          <Back>Back to my profile</Back>
        </Link>
      </Form>
    </Content>
  );
};
