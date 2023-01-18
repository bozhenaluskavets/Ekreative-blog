import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { Button, Error, Input, Title } from '../../globalStyles';
import { editOwnAnnouncement } from '../../store/slices/announcements';
import { Content, Form } from '../EditPostForm/style';

export const EditAnnouncementForm = () => {
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const reduxData = useSelector((state) => {
    return {
      initAnnoun: state.announcementDetails.list,
    };
  });

  const formHandler = (editedData) => {
    editedData.updatedAt = new Date().toISOString();
    editedData.createdAt = reduxData.initAnnoun.createdAt;
    editedData.userId = reduxData.initAnnoun.userId;
    editedData.id = reduxData.initAnnoun.id;
  };

  const [title, setTitle] = useState(`${reduxData.initAnnoun.title}`);
  const [body, setBody] = useState(`${reduxData.initAnnoun.body}`);

  return (
    <Content>
      <Title>Edit announcement</Title>
      <Form
        aria-autocomplete="off"
        onSubmit={handleSubmit((editedData) => {
          formHandler(editedData);
          resetField('title');
          resetField('body');
          dispatch(editOwnAnnouncement(editedData));
          navigate('/announcements');
        })}
      >
        <Input
          {...register('title', {
            required: 'Title is required',
            minLength: {
              value: 3,
              message: 'Title must be at least 3 characters long',
            },
          })}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
        />
        <Error>{errors.title?.message}</Error>

        <ReactTextareaAutosize
          {...register('body', {
            required: 'Post content is required',
            minLength: {
              value: 10,
              message: 'Post content must be at least 10 characters long',
            },
          })}
          value={body}
          onChange={(event) => setBody(event.target.value)}
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
          Edit announcement
        </Button>
      </Form>
    </Content>
  );
};
