import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Button } from '../../globalStyles/buttons.style';
import { Error, Input } from '../../globalStyles/forms.style';
import { Title } from '../../globalStyles/multiComponents.style';
import { editProfileInfo } from '../../store/slices/auth';
import { Content, Form } from '../EditPostForm/style';
import { Label } from './style';

export const EditProfileForm = () => {
  const { userInfo } = useSelector((state) => {
    return { userInfo: state.auth.userInfo };
  });

  const {
    register,
    resetField,
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

  const formHandler = (editedData) => {
    editedData.id = userInfo.id;
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Content>
      <Title>Edit profile</Title>
      <Form
        onSubmit={handleSubmit((editedData) => {
          formHandler(editedData);
          resetField('firstname');
          resetField('lastname');
          resetField('email');
          resetField('age');
          dispatch(editProfileInfo(editedData));
          navigate('/profile');
          window.location.reload();
        })}
      >
        <Label>First name</Label>
        <Input
          {...register('firstname', {
            required: 'Please enter your firstname',
            minLength: {
              value: 3,
              message: 'Firstname must be at least 3 characters long',
            },
          })}
          type="text"
        />
        <Error>{errors.firstname?.message}</Error>

        <Label>Last name</Label>
        <Input
          {...register('lastname', {
            required: 'Please enter your lastName',
            minLength: {
              value: 3,
              message: 'LastName must be at least 3 characters long',
            },
          })}
          type="text"
        />
        <Error>{errors.lastname?.message}</Error>

        <Label>Email</Label>
        <Input
          {...register('email', {
            required: 'Please enter your Email',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format',
            },
          })}
          type="email"
        />
        <Error>{errors.email?.message}</Error>

        <Label>Age</Label>
        <Input
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
        />
        <Error>{errors.age?.message}</Error>

        <Button type="submit" disabled={!isValid}>
          Edit
        </Button>
      </Form>
    </Content>
  );
};
