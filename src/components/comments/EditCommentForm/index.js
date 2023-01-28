import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { Button } from '../../../globalStyles/buttons.style';
import { Error } from '../../../globalStyles/forms.style';
import { editOwnComment } from '../../../store/slices/postDetails';
import { Form, Container } from './style';
import '../../../globalStyles/textarea.css';

/* eslint-disable react/prop-types */

export const EditCommentForm = ({ comment, onClose }) => {
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
  const params = useParams();

  const formHandler = (editedData) => {
    editedData.updatedAt = new Date().toISOString();
    editedData.createdAt = comment.createdAt;
    editedData.userId = comment.userId;
    editedData.id = comment.id;
    editedData.postId = params.id;
  };

  const onSubmit = (editedData) => {
    formHandler(editedData);
    resetField('body');
    dispatch(editOwnComment(editedData));
    onClose();
  };

  return (
    <Container key={comment.id}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ReactTextareaAutosize
          {...register('body', {
            required: 'Comment content is required',
            minLength: {
              value: 3,
              message: 'Comment content must be at least 10 characters long',
            },
          })}
          type="text"
          minRows={4}
          className="styleTextarea"
        />
        <Error>{errors.body?.message}</Error>

        <Button type="submit" disabled={!isValid}>
          Edit comment
        </Button>
      </Form>
    </Container>
  );
};
