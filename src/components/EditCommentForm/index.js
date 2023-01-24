import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { Button } from '../../globalStyles/buttons.style';
import { Error } from '../../globalStyles/forms.style';
import { editOwnComment } from '../../store/slices/postDetails';
import { Form, Container } from './style';

/* eslint-disable react/prop-types */

export const EditCommentForm = ({ comment }) => {
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      body: comment.body,
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const formHandler = (editedData) => {
    editedData.updatedAt = new Date().toISOString();
    editedData.createdAt = comment.createdAt;
    editedData.userId = comment.userId;
    editedData.id = comment.id;
    editedData.postId = params.id;
  };

  return (
    <Container key={comment.id}>
      <Form
        onSubmit={handleSubmit((editedData) => {
          formHandler(editedData);
          resetField('body');
          dispatch(editOwnComment(editedData));
          navigate(`/posts/${params.id}`);
        })}
      >
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
          style={{
            fontSize: '20px',
            outline: 'none',
            resize: 'none',
            borderRadius: '10% 90% 10% 90% / 90% 10% 90% 10% ',
            padding: '35px 55px',
          }}
        />
        <Error>{errors.body?.message}</Error>

        <Button type="submit" disabled={!isValid}>
          Edit comment
        </Button>
      </Form>
    </Container>
  );
};
