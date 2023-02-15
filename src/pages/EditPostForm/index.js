import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Back, Button } from '../../globalStyles/buttons.style';
import { Container, Title } from '../../globalStyles/multiComponents.style';
import { editOwnPost } from '../../store/slices/posts';
import { Content, Form } from './style';
import { InputComponent } from '../../components/Input';
import { TextAreaComponent } from '../../components/TextArea';

export const EditPostForm = () => {
  const { initPost } = useSelector((state) => {
    return { initPost: state.postDetails.data };
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      title: initPost.title,
      body: initPost.body,
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dataToSubmit = (editedData) => {
    editedData.updatedAt = new Date().toISOString();
    editedData.createdAt = initPost.createdAt;
    editedData.userId = initPost.userId;
    editedData.id = initPost.id;
  };

  const onSubmit = (editedData) => {
    dataToSubmit(editedData);
    dispatch(editOwnPost(editedData));
    navigate(`/posts/${initPost.id}`);
  };

  return (
    <Container>
      <Content>
        <Title>Edit post</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputComponent
            {...register('title', {
              required: 'Title is required',
              minLength: {
                value: 3,
                message: 'Title must be at least 3 characters long',
              },
            })}
            placeholder="Title"
            type="text"
            error={errors.title?.message}
          />

          <TextAreaComponent
            {...register('body', {
              required: 'Post content is required',
              minLength: {
                value: 10,
                message: 'Post content must be at least 10 characters long',
              },
            })}
            type="text"
            minRows={4}
            className="styleTextarea"
            placeholder="Post content"
            error={errors.body?.message}
          />

          <Button type="submit" disabled={!isValid}>
            Edit post
          </Button>
          <Link to={`/posts/${initPost.id}`}>
            <Back>Back to my post</Back>
          </Link>
        </Form>
      </Content>
    </Container>
  );
};
