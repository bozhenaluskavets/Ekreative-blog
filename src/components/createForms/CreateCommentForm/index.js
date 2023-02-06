import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ReactTextareaAutosize from 'react-textarea-autosize';

import { createNewComment } from '../../../store/slices/postDetails';
import { Form } from '../CreatePostForm/style';
import { Content } from './style';
import { Error } from '../../../globalStyles/forms.style';
import { Button } from '../../../globalStyles/buttons.style';
import '../../../globalStyles/textarea.css';

export const CreateCommentForm = () => {
  const {
    register,
    reset,
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

  const onSubmit = (data) => {
    formHandler(data);
    dispatch(createNewComment(data));
    reset();
  };

  return (
    <Content>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
          className="styleTextarea"
        />
        <Error>{errors.body?.message}</Error>

        <Button type="submit" disabled={!isValid}>
          Add comment
        </Button>
      </Form>
    </Content>
  );
};
