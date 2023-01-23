import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ReactTextareaAutosize from 'react-textarea-autosize';

import { createNewComment } from '../../store/slices/postDetails';
import { Form } from '../CreatePostForm/style';
import { Content } from './style';

import { Error } from '../../globalStyles/forms.style';
import { Button } from '../../globalStyles/buttons.style';

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

  const params = useParams();

  const reduxData = useSelector((state) => ({
    userInfo: state.auth.userInfo,
  }));

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
