import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { Container, Content, Message, Options, Option, Title, Form } from './style';
import { editOwnComment } from '../../../store/slices/postDetails';
import { TextAreaComponent } from '../../TextArea';

export const CommentModal = ({ title, onClose, action, comment }) => {
  const {
    register,
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

  const editComHandler = (editedData) => {
    editedData.updatedAt = new Date().toISOString();
    editedData.createdAt = comment.createdAt;
    editedData.userId = comment.userId;
    editedData.id = comment.id;
    editedData.postId = params.id;
  };

  const onEditSubmit = (editedData) => {
    editComHandler(editedData);
    dispatch(editOwnComment(editedData));
    onClose();
  };

  return (
    <Container>
      <Content>
        <Message>
          <Title>{title}</Title>
          <Form>
            <TextAreaComponent
              {...register('body', {
                required: 'Comment content is required',
                minLength: {
                  value: 3,
                  message: 'Comment must be at least 3 characters long',
                },
              })}
              placeholder="Comment content"
              type="text"
              minRows={2}
              error={errors.body?.message}
            />
          </Form>
          <Options>
            <Option onClick={onClose}>Close</Option>
            <Option type="submit" disabled={!isValid} onClick={handleSubmit(onEditSubmit)}>
              {action}
            </Option>
          </Options>
        </Message>
      </Content>
    </Container>
  );
};
