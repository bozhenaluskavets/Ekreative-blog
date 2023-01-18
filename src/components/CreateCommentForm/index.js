import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Error } from '../../globalStyles';
import { createNewComment } from '../../store/slices/comments';
import { Content, Form } from '../CreatePostForm/style';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { useParams } from 'react-router-dom';

export const CreateCommentForm = () => {
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const dispatch = useDispatch();

  let params = useParams();

  const reduxData = useSelector((state) => {
    return {
      userInfo: state.auth.userInfo,
    };
  });

  const formHandler = (data) => {
    const date = new Date().toISOString();
    const userId = reduxData.userInfo.id;
    data.createdAt = date;
    data.updatedAt = date;
    data.userId = userId;
    data.postId = params.id;
  };

  return (
    <Content>
      <Form
        aria-autocomplete="off"
        onSubmit={handleSubmit((data) => {
          formHandler(data);
          resetField('title');
          resetField('body');
          dispatch(createNewComment(data));
        })}
      >
        <ReactTextareaAutosize
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
          Add comment
        </Button>
      </Form>
    </Content>
  );
};
