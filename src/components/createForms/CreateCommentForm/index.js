import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { createNewComment } from '../../../store/slices/postDetails';
import { Form } from '../CreatePostForm/style';
import { Content } from './style';
import { Button } from '../../../globalStyles/buttons.style';
import { TextAreaComponent } from '../../TextArea';

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

  const dataToSubmit = (data) => {
    const date = new Date().toISOString();
    const userId = reduxData.userInfo.id;
    data.createdAt = date;
    data.updatedAt = date;
    data.userId = userId;
    data.postId = params.id;
  };

  const onSubmit = (data) => {
    dataToSubmit(data);
    dispatch(createNewComment(data));
    reset();
  };

  return (
    <Content>
      <Form onSubmit={handleSubmit(onSubmit)}>
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

        <Button type="submit" disabled={!isValid}>
          Add comment
        </Button>
      </Form>
    </Content>
  );
};
