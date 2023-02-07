import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { Button } from '../../globalStyles/buttons.style';
import { Error } from '../../globalStyles/forms.style';
import { Title } from '../../globalStyles/multiComponents.style';
import { editOwnPost } from '../../store/slices/posts';
import { Content, Form } from './style';
import '../../globalStyles/textarea.css';
import { InputComponent } from '../../components/Input';

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

  const formHandler = (editedData) => {
    editedData.updatedAt = new Date().toISOString();
    editedData.createdAt = initPost.createdAt;
    editedData.userId = initPost.userId;
    editedData.id = initPost.id;
  };
  // fix formHandler rename to correct data, prepareDataToSubmit
  const onSubmit = (editedData) => {
    formHandler(editedData);
    dispatch(editOwnPost(editedData));
    navigate(`/posts/${initPost.id}`);
  };

  return (
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

        <ReactTextareaAutosize
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
        />
        <Error>{errors.body?.message}</Error>

        <Button type="submit" disabled={!isValid}>
          Edit post
        </Button>
      </Form>
    </Content>
  );
};

// fix ReactTextareaAutosize and error in separate component
